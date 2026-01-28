# Miyo - Quick Reference Guide

A quick lookup guide for common tasks and patterns in the Miyo EPUB Reader.

## 🎨 Using Themes

### Get Current Theme
```javascript
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { colors, isDark, themeId } = useTheme();
  
  return <View style={{ backgroundColor: colors.background }} />;
}
```

### Change Theme
```javascript
const { changeTheme } = useTheme();

await changeTheme('dark');  // Change to dark theme
await changeTheme('sepia'); // Change to sepia theme
```

### Available Theme IDs
```
'light'              - Light theme
'dark'               - Dark theme
'darkBlue'           - Dark blue theme
'sepia'              - Sepia/paper-like theme
'highContrastLight'  - High contrast light
'highContrastDark'   - High contrast dark
'midnight'           - Midnight theme
'forestGreen'        - Forest green theme
'purpleDream'        - Purple dream theme
'coffeeBrown'        - Coffee brown theme
'oceanBlue'          - Ocean blue theme
'sunsetOrange'       - Sunset orange theme
```

## 💾 Using Storage

### Save a Book
```javascript
import storageManager from './services/StorageManager';

const epubData = await readFile(epubPath);
await storageManager.saveBook(bookId, epubData);
```

### Save Book Metadata
```javascript
const metadata = {
  title: 'Book Title',
  author: 'Author Name',
  dateAdded: new Date(),
  progress: 0,
};
await storageManager.saveBookMetadata(bookId, metadata);
```

### Read Book Metadata
```javascript
const metadata = await storageManager.readBookMetadata(bookId);
if (metadata) {
  console.log(metadata.title);
}
```

### Save User Preferences
```javascript
const prefs = {
  themeId: 'dark',
  fontSize: 18,
  lineHeight: 1.6,
};
await storageManager.savePreferences(prefs);
```

### List All Books
```javascript
const books = await storageManager.listBooks();
books.forEach(book => console.log(book.id));
```

### Delete a Book
```javascript
await storageManager.deleteBook(bookId);
```

### Clear Cache
```javascript
await storageManager.clearCache();
```

## ⚠️ Error Handling

### Try-Catch with Error Handler
```javascript
import { ErrorHandler, EPUBParseError } from './services/ErrorHandler';

try {
  const epub = await parseEPUB(file);
} catch (error) {
  const handled = ErrorHandler.handle(error, { file: file.name });
  ErrorHandler.showAlert(error, () => retry());
}
```

### Throw Custom Errors
```javascript
import { EPUBParseError, StorageError } from './services/ErrorHandler';

// Throw EPUB error
throw new EPUBParseError('Invalid EPUB format', { file: 'book.epub' });

// Throw storage error
throw new StorageError('Failed to write file', { path: '/path/to/file' });
```

### Safe Async Operations
```javascript
import { safeAsync } from './services/ErrorHandler';

const result = await safeAsync(
  async () => await riskyOperation(),
  { context: 'operation' }
);
```

### Get Error Logs
```javascript
import { errorLogger } from './services/ErrorHandler';

const logs = errorLogger.getLogs();
const exported = errorLogger.exportLogs();
```

## 🎯 Configuration

### Access App Config
```javascript
import { APP_CONFIG, FEATURE_FLAGS } from './config/appConfig';

// Check if feature is enabled
if (FEATURE_FLAGS.enableBookmarks) {
  // Show bookmark feature
}

// Get reading settings
const fontSize = APP_CONFIG.reading.defaultFontSize;
```

### Check Environment
```javascript
import { ENV_CONFIG } from './config/appConfig';

if (ENV_CONFIG.isDevelopment) {
  console.log('In development mode');
}
```

## 🧩 Building Components

### Theme-Aware Component Template
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './context/ThemeContext';

export const MyComponent = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>
        My Themed Component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
```

### Screen Template with Theme & Error Handling
```javascript
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useTheme } from './context/ThemeContext';
import { ErrorHandler } from './services/ErrorHandler';

export const MyScreen = () => {
  const { colors } = useTheme();

  const handleAction = async () => {
    try {
      // Do something
    } catch (error) {
      ErrorHandler.handle(error, { screen: 'MyScreen' });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <View style={{ backgroundColor: colors.surface }}>
        <Text style={{ color: colors.text }}>My Screen</Text>
      </View>
    </SafeAreaView>
  );
};
```

## 📱 Safe Area

### Use SafeAreaView
```javascript
import { SafeAreaView } from 'react-native';

<SafeAreaView style={{ flex: 1 }}>
  {/* Content automatically positioned away from notch */}
</SafeAreaView>
```

### Get Safe Area Insets
```javascript
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const insets = useSafeAreaInsets();
const paddingBottom = insets.bottom;
```

## 🚀 Navigation

### Add New Screen to Tabs
```javascript
// In App.jsx
<Tab.Screen
  name="MyScreen"
  component={MyScreen}
  options={{ title: 'My Screen' }}
/>
```

### Navigate Between Screens
```javascript
import { useNavigation } from '@react-navigation/native';

const { navigate } = useNavigation();

navigate('Library');
```

## 🔄 State & Context

### Create Custom Context
```javascript
import React, { createContext, useContext } from 'react';

const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const value = { /* your values */ };
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
};
```

## 🎨 Styling Tips

### Use Color Palette
```javascript
const { colors } = useTheme();

// Background colors
backgroundColor: colors.background      // App background
backgroundColor: colors.surface         // Card/panel background
backgroundColor: colors.surfaceVariant  // Slightly different surface

// Text colors
color: colors.text                      // Primary text
color: colors.textSecondary             // Secondary text
color: colors.textTertiary              // Tertiary text

// Status colors
color: colors.error                     // Error states
color: colors.success                   // Success states
color: colors.warning                   // Warning states
```

### Use Spacing
```javascript
import { spacing } from './styles/theme';

paddingHorizontal: spacing.md    // 16px
marginVertical: spacing.lg       // 24px
borderRadius: spacing.sm         // 8px
```

## 📊 Common Patterns

### Async Operation with Loading
```javascript
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const performAction = async () => {
  try {
    setLoading(true);
    setError(null);
    await asyncOperation();
  } catch (error) {
    setError(error);
    ErrorHandler.handle(error);
  } finally {
    setLoading(false);
  }
};
```

### List with Error Boundary
```javascript
<ErrorBoundary>
  <FlatList
    data={items}
    renderItem={({ item }) => <ItemComponent item={item} />}
    keyExtractor={(item) => item.id}
  />
</ErrorBoundary>
```

### Modal with Theme
```javascript
const { colors } = useTheme();

<Modal visible={visible} transparent>
  <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}>
    <View style={{ backgroundColor: colors.background }}>
      {/* Modal content */}
    </View>
  </View>
</Modal>
```

## 🔍 Debugging

### Log Theme Information
```javascript
const { currentTheme, colors, isDark } = useTheme();
console.log('Current theme:', currentTheme);
console.log('Colors:', colors);
console.log('Is dark:', isDark);
```

### Log Storage Paths
```javascript
import storageManager from './services/StorageManager';

console.log('Storage paths:', storageManager.paths);
const info = await storageManager.getStorageInfo();
console.log('Storage info:', info);
```

### View Error Logs
```javascript
import { errorLogger } from './services/ErrorHandler';

const logs = errorLogger.getLogs();
console.log('Error logs:', logs);
```

## 🎯 Best Practices

1. **Always wrap theme-aware values with useTheme()**
   ```javascript
   const { colors } = useTheme();
   ```

2. **Handle errors with try-catch**
   ```javascript
   try { /* operation */ } catch (e) { ErrorHandler.handle(e); }
   ```

3. **Initialize storage before use**
   ```javascript
   await storageManager.initialize();
   ```

4. **Use SafeAreaView for all screens**
   ```javascript
   <SafeAreaView style={{ flex: 1 }}>
   ```

5. **Check FEATURE_FLAGS before showing features**
   ```javascript
   if (FEATURE_FLAGS.enableFeature) { /* show */ }
   ```

6. **Wrap screens with ErrorBoundary**
   ```javascript
   <ErrorBoundary><MyScreen /></ErrorBoundary>
   ```

## 📚 File Locations

```
Theme system      → src/context/ThemeContext.js
Theme definitions → src/styles/themes.js
Storage manager   → src/services/StorageManager.js
Error handler     → src/services/ErrorHandler.js
App config        → src/config/appConfig.js
Main app          → src/App.jsx
Navigation        → src/App.jsx
```

## ⏱️ Common Timeouts

```javascript
TIMEOUTS.EPUB_LOAD      = 30000  // 30 seconds
TIMEOUTS.METADATA_FETCH = 10000  // 10 seconds
TIMEOUTS.IMAGE_LOAD     = 15000  // 15 seconds
TIMEOUTS.DATABASE_QUERY = 5000   // 5 seconds
```

---

**Remember:** This is a quick reference. For detailed information, refer to the full documentation files (README.md, ARCHITECTURE.md, INTEGRATION.md, REQUIREMENTS.md).

**Last Updated:** January 28, 2026
