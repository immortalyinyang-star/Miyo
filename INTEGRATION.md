# Miyo - Complete Integration Guide

## 🎉 Project Setup Complete!

All systems have been successfully integrated into the Miyo EPUB Reader application. This guide covers what's been implemented and how everything works together.

---

## ✅ What's Been Implemented

### 1. **Theme System (12+ Themes)**
- ✅ Light, Dark, Dark Blue, Sepia themes
- ✅ High Contrast Light & Dark variants
- ✅ Midnight, Forest Green, Purple Dream themes
- ✅ Coffee Brown, Ocean Blue, Sunset Orange themes
- ✅ Theme Selection Modal on first launch
- ✅ Theme persistence via StorageManager
- ✅ Real-time theme switching

**Files:**
- `src/styles/themes.js` - Theme definitions
- `src/context/ThemeContext.js` - Theme context provider
- `src/components/ThemeSelectionModal.jsx` - Theme selector UI

### 2. **Storage System**
- ✅ App-specific directory structure at `/data/data/com.miyo.reader/`
- ✅ Book storage with metadata
- ✅ Database directory for future SQLite integration
- ✅ Preference persistence system
- ✅ Cache management
- ✅ Backup and cleanup utilities

**File:** `src/services/StorageManager.js`

**Storage Structure:**
```
MiyoReader/
├── books/          - EPUB files and book metadata
├── database/       - SQLite databases (future)
├── preferences/    - User settings (JSON)
├── cache/          - Images, thumbnails
├── logs/           - Error logs
└── backups/        - Database backups
```

### 3. **Error Handling System**
- ✅ Custom error types (EPUBParseError, StorageError, etc.)
- ✅ Error boundary component for crash handling
- ✅ Comprehensive error logging
- ✅ User-friendly error messages
- ✅ Safe async wrapper for operations
- ✅ Error recovery patterns

**File:** `src/services/ErrorHandler.js`

**Error Types:**
- `MiyoError` - Base error class
- `EPUBParseError` - EPUB file parsing issues
- `StorageError` - File system operations
- `PermissionError` - Permission-related issues
- `ValidationError` - Data validation failures

### 4. **Safe Area Handling**
- ✅ Automatic notch/dynamic island support
- ✅ Status bar and navigation bar awareness
- ✅ Landscape orientation support
- ✅ Tablet layout optimization

**Library:** `react-native-safe-area-context`

### 5. **Configuration System**
- ✅ Centralized app configuration
- ✅ Feature flags for gradual rollout
- ✅ Environment-specific settings
- ✅ Default user preferences
- ✅ Supported file types
- ✅ API endpoints structure (ready for backend)

**File:** `src/config/appConfig.js`

### 6. **Navigation Structure**
- ✅ Bottom tab navigation
- ✅ Three main screens: Home, Library, Settings
- ✅ Theme-aware navigation bar
- ✅ Smooth screen transitions

### 7. **Component Library**
- ✅ Reusable Button component
- ✅ Theme Selection Modal
- ✅ Error Boundary component
- ✅ Theme-aware styling patterns

---

## 🚀 Getting Started

### Installation

```bash
# Install all dependencies
npm install

# Install native dependencies (might be needed)
npx react-native link

# Initialize storage (runs automatically on app launch)
# Already configured in App.jsx
```

### Running the App

```bash
# Start development server
npm start

# Run on Android device/emulator
npm run android

# Run on iOS (macOS only)
npm run ios
```

### First Launch Experience

1. App initializes ThemeProvider
2. StorageManager sets up directory structure
3. Theme Selection Modal appears
4. User selects one of 12+ themes
5. App saves preference and launches

---

## 📁 Project Structure

```
Miyo/
├── src/
│   ├── index.js                    # Root with providers
│   ├── App.jsx                     # Main app with navigation
│   ├── config/
│   │   └── appConfig.js           # Configuration & constants
│   ├── context/
│   │   └── ThemeContext.js        # Theme provider
│   ├── services/
│   │   ├── StorageManager.js      # File system operations
│   │   ├── ErrorHandler.js        # Error management
│   │   └── index.js               # Service exports
│   ├── components/
│   │   ├── Button.jsx             # Custom button
│   │   ├── ThemeSelectionModal.jsx # Theme selector
│   │   └── ...
│   ├── screens/
│   │   ├── HomeScreen.jsx         # Home screen
│   │   └── ...
│   └── styles/
│       ├── theme.js               # Global styles
│       └── themes.js              # Theme definitions
├── android/                         # Android native code
├── package.json                    # Dependencies
├── app.json                        # React Native config
├── babel.config.js                 # Babel configuration
├── metro.config.js                 # Metro bundler config
├── tsconfig.json                   # TypeScript config (optional)
├── .eslintrc.json                 # ESLint rules
├── .gitignore                      # Git ignore rules
│
├── README.md                       # Main documentation
├── SETUP.md                        # Installation guide
├── REQUIREMENTS.md                 # Dependencies & requirements
├── ARCHITECTURE.md                 # Architecture overview
└── TODO.md                         # Development roadmap
```

---

## 🔌 Integration Points

### 1. Theme Integration

Use theme in any component:

```javascript
import { useTheme } from './context/ThemeContext';

function MyComponent() {
  const { colors, isDark, changeTheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>Themed content</Text>
    </View>
  );
}
```

### 2. Storage Integration

Perform file operations:

```javascript
import storageManager from './services/StorageManager';

// Save book
await storageManager.saveBook(bookId, epubData);

// Save metadata
await storageManager.saveBookMetadata(bookId, metadata);

// Read preferences
const prefs = await storageManager.readPreferences();

// List all books
const books = await storageManager.listBooks();
```

### 3. Error Handling Integration

Wrap operations with error handling:

```javascript
import { ErrorHandler, EPUBParseError } from './services/ErrorHandler';

try {
  const epub = await parseEPUB(file);
} catch (error) {
  const handled = ErrorHandler.handle(error, { file: file.name });
  ErrorHandler.showAlert(error, onRetry);
}
```

### 4. Configuration Integration

Access app configuration:

```javascript
import { APP_CONFIG, FEATURE_FLAGS } from './config/appConfig';

if (FEATURE_FLAGS.enableBookmarks) {
  // Show bookmark feature
}

const timeout = TIMEOUTS.EPUB_LOAD; // 30000ms
```

---

## 📦 Key Dependencies

### Core Libraries
- **react-native** (0.72.0) - Mobile framework
- **react** (18.2.0) - UI library
- **@react-navigation** - Navigation system

### EPUB & File Handling
- **epubjs** - EPUB file parsing
- **jszip** - ZIP file extraction
- **react-native-fs** - File system access

### Storage & Database
- **react-native-sqlite-storage** - SQLite support
- **realm** - Object database (alternative to SQLite)

### Error & Logging
- **react-native-error-boundary** - Error boundary component
- **sentry-react-native** - Crash reporting (optional)

### UI & Styling
- **react-native-svg** - SVG support
- **native-base** - UI components
- **react-native-linear-gradient** - Gradient backgrounds
- **react-native-reanimated** - Animations

### State Management (Ready)
- **redux** - State management
- **react-redux** - Redux bindings
- **@reduxjs/toolkit** - Redux utilities

---

## 🎯 Feature Checklist

### Phase 1: Core (Completed ✅)
- ✅ Theme system with 12+ themes
- ✅ Storage management
- ✅ Error handling
- ✅ Safe area support
- ✅ Configuration system
- ✅ Navigation structure

### Phase 2: EPUB Reading (In Progress 🔄)
- ⏳ EPUB file parsing
- ⏳ Text rendering
- ⏳ Chapter navigation
- ⏳ Reading progress tracking

### Phase 3: Library Management (Pending ⏰)
- ⏳ Book grid view
- ⏳ Book import
- ⏳ Search functionality
- ⏳ Sorting & filtering

### Phase 4: Advanced Features (Pending ⏰)
- ⏳ Bookmarks & highlights
- ⏳ Reading statistics
- ⏳ Cloud sync (optional)
- ⏳ Community features (optional)

---

## 🔄 Development Workflow

### Adding a New Screen

```javascript
// 1. Create in src/screens/
// src/screens/NewScreen.jsx
import { useTheme } from '../context/ThemeContext';

export const NewScreen = () => {
  const { colors } = useTheme();
  
  return (
    <SafeAreaView style={{ backgroundColor: colors.background }}>
      {/* Your content */}
    </SafeAreaView>
  );
};

// 2. Add to App.jsx navigation
<Tab.Screen name="New" component={NewScreen} />
```

### Adding a New Component

```javascript
// src/components/MyComponent.jsx
import { useTheme } from '../context/ThemeContext';

export const MyComponent = () => {
  const { colors } = useTheme();
  
  return (
    <View style={{ backgroundColor: colors.surface }}>
      {/* Themed component */}
    </View>
  );
};
```

### Error Handling Pattern

```javascript
try {
  await riskyOperation();
} catch (error) {
  ErrorHandler.handle(error, { context: 'operation' });
  ErrorHandler.showAlert(error);
}
```

---

## 🧪 Testing

Run tests:

```bash
# Run all tests
npm test

# Run with coverage
npm test:coverage

# Run specific test file
npm test -- StorageManager.test.js
```

---

## 🚀 Build & Release

### Debug Build

```bash
# Development build
npm run android
```

### Release Build

```bash
# Build APK
npm run android:build

# Or use Gradle directly
cd android && ./gradlew assembleRelease

# Build AAB for Play Store
cd android && ./gradlew bundleRelease
```

### Pre-Release Checklist

- [ ] All tests pass
- [ ] No console errors
- [ ] Lint passes: `npm run lint`
- [ ] Works on multiple devices
- [ ] Theme system functional
- [ ] Storage operations work
- [ ] Error handling works
- [ ] No memory leaks

---

## 📊 Performance Tips

1. **Image Optimization**
   - Cache images from EPUBs
   - Use appropriate sizes
   - Lazy load images

2. **Database Queries**
   - Index frequently searched fields
   - Limit query results
   - Use pagination

3. **Component Rendering**
   - Use React.memo for expensive components
   - Optimize re-renders with useMemo
   - Use FlatList for large lists

4. **Storage**
   - Clean up old cache regularly
   - Compress large files
   - Use backup mechanism

---

## 🐛 Troubleshooting

### Theme Not Changing
```javascript
// Make sure using useTheme hook
const { changeTheme } = useTheme();
await changeTheme('dark');
```

### Storage Permission Denied
```javascript
// Check AndroidManifest.xml permissions
// Request runtime permissions if API 30+
```

### EPUB Parse Error
```javascript
// Use try-catch with EPUBParseError
try {
  await parseEPUB(file);
} catch (e) {
  if (e instanceof EPUBParseError) {
    // Handle EPUB-specific error
  }
}
```

---

## 📚 Documentation Files

- **README.md** - Overview and quick start
- **SETUP.md** - Detailed installation guide
- **REQUIREMENTS.md** - Dependencies and requirements
- **ARCHITECTURE.md** - System architecture
- **TODO.md** - Development roadmap (this file)
- **INTEGRATION.md** - Integration guide (this file)

---

## 🎓 Next Steps

### For Development

1. **Implement EPUB Parser**
   - Use epubjs library
   - Parse metadata
   - Extract content

2. **Build Library Screen**
   - Display books
   - Import functionality
   - Search & filter

3. **Implement Reading UI**
   - Text rendering
   - Page navigation
   - Progress tracking

4. **Add Database Layer**
   - SQLite setup
   - Book metadata storage
   - Reading progress

### For Production

1. **Security**
   - Encrypt sensitive data
   - Validate file inputs
   - Handle permissions

2. **Performance**
   - Profile memory usage
   - Optimize rendering
   - Cache efficiently

3. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

4. **Deployment**
   - Generate signed APK
   - Submit to Play Store
   - Monitor crashes

---

## 📞 Support

For issues, errors, or questions:

1. Check ERROR_HANDLING.md
2. Review relevant documentation
3. Check source code comments
4. Review error logs
5. Check GitHub issues

---

## 📋 Package.json Scripts

```bash
npm start              # Start Metro bundler
npm run android        # Run on Android
npm run android:build  # Build Android APK
npm run ios           # Run on iOS
npm run web           # Run web version
npm test              # Run tests
npm run lint          # Check code style
npm run lint:fix      # Fix code style
npm run format        # Format code
npm run type-check    # Check TypeScript
npm run clean         # Clean install
npm run clean:android # Clean Android build
npm run cache:clear   # Clear Metro cache
```

---

## 🎉 Congratulations!

Your Miyo EPUB Reader project is now fully set up with:

✅ **12+ Theme System** - Beautiful, customizable themes
✅ **Robust Storage** - Efficient file management
✅ **Error Handling** - Comprehensive error management
✅ **Safe Area Support** - Notch/dynamic island support
✅ **Modern Architecture** - Clean, scalable code structure
✅ **Configuration System** - Flexible app configuration
✅ **Development Ready** - All tools configured

**Ready to build amazing features!** 🚀

---

**Last Updated:** January 28, 2026
**Version:** 1.0.0
**Status:** ✅ Ready for Development
