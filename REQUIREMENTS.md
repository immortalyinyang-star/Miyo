# Miyo - Requirements & Dependencies

## 🔧 System Requirements

### Development Environment
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **Android SDK**: API Level 24 (Android 7.0) or higher
- **Java Development Kit**: OpenJDK 11 or higher
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: Minimum 5GB for Android SDK

### Target Platform
- **Target Android Version**: Android 12+ (API Level 31+)
- **Minimum Android Version**: Android 7.0 (API Level 24)
- **Target Devices**: Phones and tablets (5" - 7"+ screens)

---

## 📦 Core Dependencies

### React Native & Core
```json
{
  "react": "^18.2.0",
  "react-native": "^0.72.0",
  "react-native-web": "^0.18.0"
}
```
**Purpose**: Core UI framework and cross-platform rendering

### Navigation
```json
{
  "@react-navigation/native": "^6.1.0",
  "@react-navigation/bottom-tabs": "^6.5.0",
  "@react-navigation/drawer": "^6.6.0",
  "@react-navigation/stack": "^6.3.0",
  "react-native-screens": "^3.20.0",
  "react-native-safe-area-context": "^4.5.0"
}
```
**Purpose**: Screen navigation, tab management, safe area handling for notches

### EPUB & File Reading
```json
{
  "epubjs": "^0.3.88",
  "jszip": "^3.10.1",
  "xml2js": "^0.6.2"
}
```
**Purpose**: EPUB file parsing, ZIP extraction, XML processing for EPUB metadata

### State Management
```json
{
  "redux": "^4.2.1",
  "react-redux": "^8.1.1",
  "redux-thunk": "^2.4.2",
  "@reduxjs/toolkit": "^1.9.5"
}
```
**Purpose**: Global state management for app settings, reading progress, library data

### File System & Storage
```json
{
  "react-native-fs": "^2.20.0",
  "react-native-sqlite-storage": "^6.0.0",
  "realm": "^12.0.0"
}
```
**Purpose**: 
- File system access for reading EPUB files
- SQLite for storing book metadata and reading progress
- Realm for efficient local database operations

### Error Handling & Logging
```json
{
  "react-native-error-boundary": "^1.2.5",
  "react-native-device-log": "^1.2.0",
  "sentry-react-native": "^5.10.0"
}
```
**Purpose**: Error boundaries, crash reporting, debugging information

### UI Components & Styling
```json
{
  "react-native-svg": "^13.14.0",
  "react-native-svg-web": "^1.0.9",
  "native-base": "^3.4.28",
  "react-native-linear-gradient": "^2.8.1",
  "react-native-gesture-handler": "^2.13.0",
  "react-native-reanimated": "^3.3.0"
}
```
**Purpose**: 
- SVG support for icons and graphics
- UI component library
- Gradient backgrounds
- Smooth animations and gestures

### Text Rendering & Typography
```json
{
  "react-native-unicode-toolbox": "^1.0.0",
  "text-encoding": "^0.7.0"
}
```
**Purpose**: Proper text rendering and Unicode support for international books

### Permissions & Platform Features
```json
{
  "react-native-permissions": "^3.8.0",
  "react-native-document-picker": "^9.0.0",
  "react-native-share": "^8.1.0",
  "react-native-keep-awake": "^5.1.0"
}
```
**Purpose**: 
- File system permissions
- Document/file picking
- Share functionality
- Keep screen awake during reading

### Utilities
```json
{
  "lodash": "^4.17.21",
  "date-fns": "^2.30.0",
  "uuid": "^9.0.0",
  "axios": "^1.4.0"
}
```
**Purpose**: Utility functions, date handling, unique IDs, HTTP requests

---

## 🧪 Development Dependencies

### Build & Transpilation
```json
{
  "@babel/core": "^7.21.0",
  "@babel/preset-react": "^7.18.0",
  "@babel/preset-typescript": "^7.18.0",
  "babel-jest": "^29.5.0",
  "metro-react-native-babel-preset": "^0.73.0"
}
```

### Linting & Code Quality
```json
{
  "eslint": "^8.36.0",
  "@react-native-community/eslint-config": "^3.2.0",
  "prettier": "^2.8.7",
  "husky": "^8.0.0",
  "lint-staged": "^13.2.2"
}
```

### Testing
```json
{
  "jest": "^29.5.0",
  "jest-environment-node": "^29.5.0",
  "@testing-library/react-native": "^11.5.0",
  "@testing-library/jest-native": "^5.4.3"
}
```

### Type Checking (Optional)
```json
{
  "typescript": "^5.0.0",
  "@types/react": "^18.0.0",
  "@types/react-native": "^0.72.0"
}
```

---

## 📋 Feature-Specific Requirements

### EPUB Reading Engine
- **EPUB Parsing**: epubjs handles .epub file parsing
- **Text Rendering**: React Native native text components + custom text layout
- **Image Handling**: React Native Image component with caching
- **Font Support**: System fonts + custom font loading via React Native
- **Scrolling Performance**: Optimized FlatList and VirtualizedList

### Theme System (12+ Themes)
- **Light**: Clean white backgrounds with dark text
- **Dark**: Dark backgrounds with light text
- **Dark Blue**: Blue-tinted dark theme
- **Sepia**: Paper-like warm brown tones
- **High Contrast Light**: Enhanced contrast for accessibility
- **High Contrast Dark**: Dark with enhanced contrast
- **Midnight**: Deep black with cool accents
- **Forest Green**: Green-tinted relaxing theme
- **Purple Dream**: Purple-tinted aesthetic theme
- **Coffee Brown**: Warm brown coffee shop vibes
- **Ocean Blue**: Cool blue ocean-inspired theme
- **Sunset Orange**: Warm orange/pink tones
- **Custom** (Future): User-created themes

### Safe Area Handling
- **Notch Support**: React Native Safe Area Context handles all notch types
- **System Bars**: Proper status bar and navigation bar handling
- **Landscape Support**: Safe area adjusts for landscape mode
- **Tablet Support**: Proper margins for large screens

### Error Handling Strategy
- **Error Boundaries**: React error boundaries for component errors
- **Try-Catch Blocks**: For async operations and file reads
- **User Feedback**: Toast notifications for errors
- **Logging**: Comprehensive error logging
- **Recovery**: Graceful degradation and recovery options

### Data Storage Architecture
```
/data/data/com.miyo.reader/
├── books/
│   ├── book-uuid-1/
│   │   ├── content.epub
│   │   ├── metadata.json
│   │   └── cache/
│   └── book-uuid-2/
├── database/
│   ├── miyo.db (SQLite)
│   └── backups/
├── preferences/
│   └── user-settings.json
├── cache/
│   ├── images/
│   └── thumbnails/
└── logs/
```

---

## 🔐 Permissions Required

### Android Manifest Permissions
```xml
<!-- File Access -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />

<!-- Display -->
<uses-permission android:name="android.permission.WAKE_LOCK" />

<!-- Network (for future features) -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 🎯 Performance Requirements

### Minimum Performance Standards
- **App Launch Time**: < 2 seconds
- **EPUB Loading**: < 1 second for typical 500KB file
- **Page Rendering**: 60 FPS smooth scrolling
- **Memory Usage**: < 150MB for normal operation
- **Battery Drain**: Minimal background impact

### Optimization Strategies
- Lazy load images in EPUB
- Virtual scrolling for large books
- Image caching and resizing
- Database indexing for quick searches
- Memory cleanup on app pause

---

## 🌐 API & Network (Future)

### Optional Cloud Features
```json
{
  "firebase": "^9.0.0",
  "cloud-firestore": "^4.0.0"
}
```
**Purpose**: Optional cloud sync, backup, and multi-device reading progress

---

## 📱 Device Compatibility

### Tested Devices
- Android 7.0 - 14.0
- Screen sizes: 5.0" to 6.7" (phones), 7"+ (tablets)
- RAM: 2GB minimum (recommended 4GB+)
- Storage: 100MB free space minimum

### Hardware Features Required
- Touchscreen
- Sufficient RAM for EPUB rendering
- External storage or app-specific directory access

---

## 🔄 Build & Deployment Requirements

### APK/AAB Generation
- Android Gradle Plugin: 8.0+
- Gradle: 8.0+
- Build tools: 33.0.0+

### Code Signing
- Keystore file for signing releases
- Key alias and passwords secured
- Certificate validity > 25 years (standard)

### Testing Requirements
Before Release:
- [ ] Unit test coverage > 80%
- [ ] Integration tests for critical paths
- [ ] Manual testing on 3+ device models
- [ ] EPUB compatibility testing with various formats
- [ ] Performance profiling on low-end devices

---

## 📚 Installation Instructions

### Quick Start
```bash
# 1. Clone repository
git clone <repo-url>
cd Miyo

# 2. Install dependencies
npm install

# 3. Install native dependencies
npx react-native link

# 4. Build and run
npm run android
```

### Detailed Setup
See [SETUP.md](./SETUP.md) for comprehensive installation guide

---

## 🆘 Dependency Troubleshooting

### Common Issues
1. **EPUB Library Conflicts**: Use specific versions as listed
2. **Android SDK**: Ensure API 31+ is installed
3. **Gradle Issues**: Clear cache: `rm -rf node_modules/.gradle`
4. **Permission Errors**: Run with proper Android permissions
5. **Memory Issues**: Increase available heap size in gradle.properties

---

## 📈 Future Dependencies (Roadmap)

- **PDF Support**: pdf-lib (for future PDF reading)
- **Cloud Sync**: Firebase or custom backend
- **TTS (Text-to-Speech)**: react-native-tts
- **Offline Maps**: If adding location features
- **Analytics**: Firebase Analytics (optional)

---

## ✅ Dependency Maintenance

- Review security updates monthly
- Update major versions cautiously
- Test extensively after updates
- Maintain compatibility matrix

---

Last Updated: January 28, 2026
Version: 1.0.0
