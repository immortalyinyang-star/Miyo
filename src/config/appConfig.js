/**
 * App Configuration and Constants
 */

export const APP_CONFIG = {
  // App Info
  name: 'Miyo',
  version: '1.0.0',
  description: 'EPUB Reader for Novels and Books',
  author: 'Miyo Development Team',

  // Features
  features: {
    themeSelection: true,
    offlineReading: true,
    readingProgress: true,
    bookmarks: false, // Future
    annotations: false, // Future
    cloudSync: false, // Future
  },

  // Storage
  storage: {
    maxCacheSizeMB: 500,
    cacheCleanupIntervalDays: 7,
    maxLogFiles: 10,
  },

  // Reading
  reading: {
    defaultFontSize: 16,
    minFontSize: 12,
    maxFontSize: 32,
    defaultLineHeight: 1.5,
    minLineHeight: 1.2,
    maxLineHeight: 2.0,
  },

  // UI
  ui: {
    animationDuration: 300,
    tabBarHeight: 60,
    headerHeight: 56,
  },

  // Error Handling
  errors: {
    enableSentry: false, // Set to true for production crash reporting
    enableDetailedLogs: __DEV__,
    logLevel: __DEV__ ? 'debug' : 'info',
  },

  // API & Network (for future features)
  network: {
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000,
  },

  // Permissions
  permissions: {
    required: [
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WRITE_EXTERNAL_STORAGE',
    ],
    optional: [
      'android.permission.INTERNET',
    ],
  },
};

/**
 * Feature Flags for gradual rollout
 */
export const FEATURE_FLAGS = {
  enableThemeSelection: true,
  enableBookImport: true,
  enableReadingProgress: true,
  enableLibrary: true,
  enableBookmarks: false,
  enableSearch: false,
  enableSync: false,
};

/**
 * Environment-specific configuration
 */
export const ENV_CONFIG = {
  isDevelopment: __DEV__,
  isProduction: !__DEV__,
  isDebug: __DEV__,
};

/**
 * File type validations
 */
export const SUPPORTED_FILES = {
  EPUB: {
    extension: '.epub',
    mimeType: 'application/epub+zip',
  },
  // Future support
  PDF: {
    extension: '.pdf',
    mimeType: 'application/pdf',
  },
};

/**
 * Default user preferences
 */
export const DEFAULT_PREFERENCES = {
  themeId: 'light',
  fontSize: APP_CONFIG.reading.defaultFontSize,
  lineHeight: APP_CONFIG.reading.defaultLineHeight,
  fontFamily: 'System',
  useSystemTheme: false,
  autoBackup: true,
  keepScreenOn: false,
  language: 'en',
};

/**
 * API endpoints (for future use)
 */
export const API_ENDPOINTS = {
  // Add your API endpoints here when implementing backend features
};

/**
 * Timeout durations
 */
export const TIMEOUTS = {
  EPUB_LOAD: 30000, // 30 seconds
  METADATA_FETCH: 10000, // 10 seconds
  IMAGE_LOAD: 15000, // 15 seconds
  DATABASE_QUERY: 5000, // 5 seconds
};

/**
 * Cache keys
 */
export const CACHE_KEYS = {
  BOOK_CONTENT: 'book_content_',
  BOOK_METADATA: 'book_metadata_',
  BOOK_IMAGE: 'book_image_',
  USER_PREFERENCES: 'user_preferences',
};

/**
 * Event names for analytics
 */
export const EVENTS = {
  APP_START: 'app_start',
  THEME_CHANGE: 'theme_change',
  BOOK_OPENED: 'book_opened',
  BOOK_IMPORTED: 'book_imported',
  BOOK_DELETED: 'book_deleted',
  READING_RESUMED: 'reading_resumed',
  READING_PAUSED: 'reading_paused',
  SETTINGS_CHANGED: 'settings_changed',
};

export default APP_CONFIG;
