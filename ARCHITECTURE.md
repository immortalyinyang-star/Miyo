# Miyo Architecture & Integration Guide

## 📐 Project Architecture Overview

Miyo is built with a modular, scalable architecture designed for clean code, maintainability, and extensibility.

```
src/
├── index.js                  # Root entry point with providers
├── App.jsx                   # Main app component with navigation
├── config/                   # Configuration and constants
│   └── appConfig.js         # App-wide configuration
├── context/                  # React Context providers
│   └── ThemeContext.js      # Theme management context
├── services/                 # Business logic and utilities
│   ├── StorageManager.js    # File system and storage operations
│   ├── ErrorHandler.js      # Error handling and logging
│   └── index.js            # Services export barrel
├── components/               # Reusable UI components
│   ├── Button.jsx           # Custom button component
│   ├── ThemeSelectionModal.jsx  # Theme selection UI
│   └── ... (other components)
├── screens/                  # Screen/page components
│   ├── HomeScreen.jsx
│   ├── LibraryScreen.jsx
│   └── ... (other screens)
└── styles/                   # Styling utilities
    ├── theme.js            # Global theme styles
    └── themes.js           # Theme definitions (12+)
```

## 🎨 Theme System Integration

### Theme Architecture

The theme system uses React Context to manage 12+ customizable themes:

```javascript
// Access theme in any component
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { colors, isDark, changeTheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Themed text</Text>
    </View>
  );
}
```

### Available Themes

1. **Light** - Clean white theme
2. **Dark** - Dark gray theme
3. **Dark Blue** - Blue-tinted dark
4. **Sepia** - Paper-like warm tones
5. **High Contrast Light** - Enhanced contrast for accessibility
6. **High Contrast Dark** - Dark with high contrast
7. **Midnight** - Deep black with cool accents
8. **Forest Green** - Green-tinted relaxing theme
9. **Purple Dream** - Purple aesthetic theme
10. **Coffee Brown** - Warm coffee shop vibes
11. **Ocean Blue** - Cool blue ocean theme
12. **Sunset Orange** - Warm orange/pink tones

### Theme Selection on First Launch

```javascript
// Automatically shown on first app launch
<ThemeSelectionModal
  visible={showThemeModal}
  onThemeSelected={handleThemeSelected}
  onSkip={handleSkipTheme}
/>
```

Themes persist via StorageManager and can be changed anytime in Settings.

## 💾 Storage System Integration

### File Structure

App uses app-specific directory structure:

```
/data/data/com.miyo.reader/
├── books/              # EPUB files and metadata
│   ├── book-id-1/
│   │   ├── content.epub
│   │   └── metadata.json
│   └── book-id-2/
├── database/          # SQLite databases
├── preferences/       # User settings
├── cache/            # Images, thumbnails
└── logs/             # Error logs
```

### Storage Operations

```javascript
import storageManager from './services/StorageManager';

// Initialize on app start
await storageManager.initialize();

// Save book
await storageManager.saveBook(bookId, epubData);

// Read preferences
const prefs = await storageManager.readPreferences();

// Clear cache
await storageManager.clearCache();
```

## ⚠️ Error Handling System

### Error Types

```javascript
import {
  MiyoError,
  EPUBParseError,
  StorageError,
  PermissionError,
  ValidationError,
} from './services/ErrorHandler';

// Throw specific errors
throw new EPUBParseError('Failed to parse EPUB');
```

### Error Boundary

Wraps entire app to catch and handle component errors:

```javascript
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### Error Handling Pattern

```javascript
import { ErrorHandler } from './services/ErrorHandler';

try {
  await riskyOperation();
} catch (error) {
  const handled = ErrorHandler.handle(error, { context: 'operation' });
  ErrorHandler.showAlert(error, onRetry);
}
```

## 🔧 Configuration System

### App Configuration

Central configuration in `src/config/appConfig.js`:

```javascript
import { APP_CONFIG, FEATURE_FLAGS } from './config/appConfig';

// Access config
APP_CONFIG.features.themeSelection
FEATURE_FLAGS.enableBookImport
```

### Feature Flags

Enable/disable features without code changes:

```javascript
if (FEATURE_FLAGS.enableBookmarks) {
  // Show bookmarks feature
}
```

## 🎯 Component Structure

### Theme-Aware Components

All components support theming:

```javascript
function MyComponent() {
  const { colors } = useTheme();
  
  return (
    <View style={{ backgroundColor: colors.surface }}>
      <Text style={{ color: colors.text }}>Content</Text>
    </View>
  );
}
```

### Error-Safe Components

Wrap components with error boundaries:

```javascript
<ErrorBoundary>
  <ComplexComponent />
</ErrorBoundary>
```

## 📱 Safe Area & Notch Handling

React Native Safe Area Context automatically handles:

- Notches and dynamic island
- System bars
- Landscape orientation
- Tablet layouts

```javascript
<SafeAreaView style={styles.container}>
  {/* Content automatically positioned away from notch */}
</SafeAreaView>
```

## 🚀 Initialization Flow

```
1. App Launch
   ↓
2. ThemeProvider wraps App
   ├─ Load saved theme preference
   ├─ Or use system theme (dark/light)
   └─ Show theme selector on first launch
   ↓
3. Storage Manager initializes
   ├─ Create directory structure
   ├─ Check permissions
   └─ Verify database
   ↓
4. Navigation Stack mounts
   ├─ Initialize Firebase/services
   └─ Load user data
   ↓
5. App Ready
```

## 📊 State Management (Future)

When implementing Redux:

```
src/
├── store/
│   ├── store.js           # Redux store configuration
│   ├── slices/
│   │   ├── themeSlice.js
│   │   ├── booksSlice.js
│   │   └── preferencesSlice.js
│   └── hooks/
│       └── useAppSelector.js
└── ...
```

## 🔄 Data Flow

```
User Action
    ↓
Component Handler
    ↓
Service Layer (StorageManager, etc.)
    ↓
File System / Database
    ↓
Response
    ↓
Update Context/State
    ↓
Re-render Component
```

## 🧪 Testing Structure (Future)

```
__tests__/
├── services/
│   ├── StorageManager.test.js
│   └── ErrorHandler.test.js
├── components/
│   └── ThemeSelectionModal.test.js
└── context/
    └── ThemeContext.test.js
```

## 🔐 Security Considerations

1. **Storage Encryption** - Consider encrypting sensitive data
2. **Permission Management** - Always request needed permissions
3. **Error Handling** - Don't expose sensitive info in errors
4. **Logging** - Be careful with console logs in production

## 📈 Performance Optimization

1. **Lazy Loading** - Load screens on demand
2. **Memoization** - Use React.memo for expensive components
3. **Virtual Lists** - Use FlatList for large datasets
4. **Code Splitting** - Separate feature code
5. **Image Optimization** - Cache and resize appropriately

## 🎓 Adding New Features

### Feature Checklist

```
1. ✅ Create service in services/
2. ✅ Create context if global state needed
3. ✅ Create components in components/
4. ✅ Create screen in screens/
5. ✅ Update App.jsx navigation
6. ✅ Add theme colors if needed
7. ✅ Add error handling
8. ✅ Test thoroughly
9. ✅ Update documentation
```

### Example: Adding Book Import

```
1. Create ImportService in services/
2. Add file picker in component
3. Handle errors with EPUBParseError
4. Store with StorageManager
5. Update Library screen
6. Test on device
```

## 🐛 Debugging

### Enable Debug Mode

```javascript
// In AppConfig
errors: {
  enableDetailedLogs: true,
  logLevel: 'debug',
}
```

### View Logs

```javascript
import { errorLogger } from './services/ErrorHandler';

// Get all logs
const logs = errorLogger.getLogs();

// Export for analysis
const exported = errorLogger.exportLogs();
```

## 📚 Development Workflow

1. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Implement with theme support**
   ```javascript
   const { colors } = useTheme();
   ```

3. **Add error handling**
   ```javascript
   try { /* operation */ } catch (e) { ErrorHandler.handle(e); }
   ```

4. **Test thoroughly**
   ```bash
   npm test
   ```

5. **Run on device**
   ```bash
   npm run android
   ```

6. **Create pull request**

## 🚀 Deployment Checklist

- [ ] All features tested on multiple devices
- [ ] Error logs are comprehensive
- [ ] No console.logs in production
- [ ] Theme system works on all devices
- [ ] Storage permissions handled
- [ ] Build passes without warnings
- [ ] APK/AAB generated and signed
- [ ] Release notes prepared

---

For questions or clarifications, refer to specific documentation files or source code comments.

**Last Updated:** January 28, 2026
