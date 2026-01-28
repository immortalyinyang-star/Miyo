import RNFS from 'react-native-fs';
import { Platform } from 'react-native';

/**
 * Miyo App Storage Manager
 * Handles all file system operations and app data storage
 */

class StorageManager {
  constructor() {
    this.appRoot = Platform.OS === 'android' 
      ? `${RNFS.DocumentDirectoryPath}/MiyoReader`
      : `${RNFS.DocumentDirectoryPath}/MiyoReader`;
    
    this.paths = {
      root: this.appRoot,
      books: `${this.appRoot}/books`,
      database: `${this.appRoot}/database`,
      preferences: `${this.appRoot}/preferences`,
      cache: `${this.appRoot}/cache`,
      images: `${this.appRoot}/cache/images`,
      thumbnails: `${this.appRoot}/cache/thumbnails`,
      logs: `${this.appRoot}/logs`,
      backups: `${this.appRoot}/database/backups`,
      temp: `${RNFS.TemporaryDirectoryPath}/Miyo`,
    };

    this.isInitialized = false;
  }

  /**
   * Initialize storage directory structure
   */
  async initialize() {
    try {
      // Create all required directories
      const directories = Object.values(this.paths);
      for (const dir of directories) {
        await this.createDirectoryIfNotExists(dir);
      }
      this.isInitialized = true;
      console.log('Storage initialized successfully at:', this.appRoot);
      return true;
    } catch (error) {
      console.error('Failed to initialize storage:', error);
      throw error;
    }
  }

  /**
   * Create directory if it doesn't exist
   */
  async createDirectoryIfNotExists(path) {
    try {
      const exists = await RNFS.exists(path);
      if (!exists) {
        await RNFS.mkdir(path);
        console.log('Created directory:', path);
      }
    } catch (error) {
      console.error(`Error creating directory ${path}:`, error);
      throw error;
    }
  }

  /**
   * Save book file to storage
   */
  async saveBook(bookId, bookData, fileName = 'content.epub') {
    try {
      const bookPath = `${this.paths.books}/${bookId}`;
      await this.createDirectoryIfNotExists(bookPath);
      
      const filePath = `${bookPath}/${fileName}`;
      await RNFS.writeFile(filePath, bookData, 'base64');
      
      return filePath;
    } catch (error) {
      console.error(`Error saving book ${bookId}:`, error);
      throw error;
    }
  }

  /**
   * Read book file from storage
   */
  async readBook(bookId, fileName = 'content.epub') {
    try {
      const filePath = `${this.paths.books}/${bookId}/${fileName}`;
      const exists = await RNFS.exists(filePath);
      
      if (!exists) {
        throw new Error(`Book file not found: ${filePath}`);
      }

      const data = await RNFS.readFile(filePath, 'base64');
      return data;
    } catch (error) {
      console.error(`Error reading book ${bookId}:`, error);
      throw error;
    }
  }

  /**
   * Save book metadata
   */
  async saveBookMetadata(bookId, metadata) {
    try {
      const bookPath = `${this.paths.books}/${bookId}`;
      await this.createDirectoryIfNotExists(bookPath);
      
      const metadataPath = `${bookPath}/metadata.json`;
      await RNFS.writeFile(metadataPath, JSON.stringify(metadata, null, 2));
      
      return metadataPath;
    } catch (error) {
      console.error(`Error saving metadata for book ${bookId}:`, error);
      throw error;
    }
  }

  /**
   * Read book metadata
   */
  async readBookMetadata(bookId) {
    try {
      const metadataPath = `${this.paths.books}/${bookId}/metadata.json`;
      const exists = await RNFS.exists(metadataPath);
      
      if (!exists) {
        return null;
      }

      const data = await RNFS.readFile(metadataPath);
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading metadata for book ${bookId}:`, error);
      throw error;
    }
  }

  /**
   * Save user preferences
   */
  async savePreferences(preferences) {
    try {
      const preferencesPath = `${this.paths.preferences}/user-settings.json`;
      await RNFS.writeFile(preferencesPath, JSON.stringify(preferences, null, 2));
      return preferencesPath;
    } catch (error) {
      console.error('Error saving preferences:', error);
      throw error;
    }
  }

  /**
   * Read user preferences
   */
  async readPreferences() {
    try {
      const preferencesPath = `${this.paths.preferences}/user-settings.json`;
      const exists = await RNFS.exists(preferencesPath);
      
      if (!exists) {
        return null;
      }

      const data = await RNFS.readFile(preferencesPath);
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading preferences:', error);
      throw error;
    }
  }

  /**
   * Save cache file (images, etc.)
   */
  async saveCacheFile(fileName, data, subdir = '') {
    try {
      const cachePath = subdir ? `${this.paths.cache}/${subdir}` : this.paths.cache;
      await this.createDirectoryIfNotExists(cachePath);
      
      const filePath = `${cachePath}/${fileName}`;
      await RNFS.writeFile(filePath, data, 'base64');
      
      return filePath;
    } catch (error) {
      console.error(`Error saving cache file ${fileName}:`, error);
      throw error;
    }
  }

  /**
   * Read cache file
   */
  async readCacheFile(fileName, subdir = '') {
    try {
      const cachePath = subdir ? `${this.paths.cache}/${subdir}` : this.paths.cache;
      const filePath = `${cachePath}/${fileName}`;
      const exists = await RNFS.exists(filePath);
      
      if (!exists) {
        return null;
      }

      return await RNFS.readFile(filePath, 'base64');
    } catch (error) {
      console.error(`Error reading cache file ${fileName}:`, error);
      throw error;
    }
  }

  /**
   * Delete book and all associated files
   */
  async deleteBook(bookId) {
    try {
      const bookPath = `${this.paths.books}/${bookId}`;
      const exists = await RNFS.exists(bookPath);
      
      if (exists) {
        await RNFS.unlink(bookPath);
        console.log(`Deleted book: ${bookId}`);
      }
    } catch (error) {
      console.error(`Error deleting book ${bookId}:`, error);
      throw error;
    }
  }

  /**
   * Clear cache directory
   */
  async clearCache() {
    try {
      const files = await RNFS.readDir(this.paths.cache);
      for (const file of files) {
        await RNFS.unlink(file.path);
      }
      console.log('Cache cleared');
    } catch (error) {
      console.error('Error clearing cache:', error);
      throw error;
    }
  }

  /**
   * Get list of all books
   */
  async listBooks() {
    try {
      const books = await RNFS.readDir(this.paths.books);
      return books.map(book => ({
        id: book.name,
        path: book.path,
      }));
    } catch (error) {
      console.error('Error listing books:', error);
      return [];
    }
  }

  /**
   * Get storage information
   */
  async getStorageInfo() {
    try {
      const rootInfo = await RNFS.readDir(this.paths.root);
      const booksInfo = await RNFS.readDir(this.paths.books);
      
      return {
        appRoot: this.appRoot,
        totalItems: rootInfo.length,
        totalBooks: booksInfo.length,
        paths: this.paths,
      };
    } catch (error) {
      console.error('Error getting storage info:', error);
      throw error;
    }
  }

  /**
   * Backup database
   */
  async backupDatabase(databaseFileName = 'miyo.db') {
    try {
      const sourceFile = `${this.paths.database}/${databaseFileName}`;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupFile = `${this.paths.backups}/${databaseFileName}.backup.${timestamp}`;
      
      const exists = await RNFS.exists(sourceFile);
      if (exists) {
        await RNFS.copyFile(sourceFile, backupFile);
        console.log(`Database backed up to: ${backupFile}`);
        return backupFile;
      }
    } catch (error) {
      console.error('Error backing up database:', error);
      throw error;
    }
  }

  /**
   * Clean up old cache files
   */
  async cleanupOldCache(maxAgeDays = 30) {
    try {
      const now = Date.now();
      const maxAgeMs = maxAgeDays * 24 * 60 * 60 * 1000;
      const cacheFiles = await RNFS.readDir(this.paths.cache);
      
      let deletedCount = 0;
      for (const file of cacheFiles) {
        const fileAge = now - file.mtime;
        if (fileAge > maxAgeMs) {
          await RNFS.unlink(file.path);
          deletedCount++;
        }
      }
      
      console.log(`Cleanup: Deleted ${deletedCount} old cache files`);
      return deletedCount;
    } catch (error) {
      console.error('Error cleaning up cache:', error);
      throw error;
    }
  }

  /**
   * Export all app data (for backup)
   */
  async exportAppData(exportPath) {
    try {
      // This would copy entire app directory to export location
      // Implementation depends on specific requirements
      console.log('Export initiated to:', exportPath);
    } catch (error) {
      console.error('Error exporting app data:', error);
      throw error;
    }
  }

  /**
   * Import app data from backup
   */
  async importAppData(importPath) {
    try {
      // This would restore app data from backup location
      // Implementation depends on specific requirements
      console.log('Import initiated from:', importPath);
    } catch (error) {
      console.error('Error importing app data:', error);
      throw error;
    }
  }
}

// Create singleton instance
const storageManager = new StorageManager();

export default storageManager;
