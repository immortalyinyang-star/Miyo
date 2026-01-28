# 📚 Miyo Documentation Index

Complete documentation and guides for the Miyo EPUB Reader project.

## 🚀 Quick Start

**New to Miyo?** Start here:

1. **[README.md](./README.md)** - Overview and quick start guide
2. **[SETUP.md](./SETUP.md)** - Installation and environment setup
3. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Common tasks and code snippets

---

## 📖 Full Documentation

### Architecture & Design
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture overview
  - Project structure
  - Component organization
  - Data flow patterns
  - Integration points
  - Development workflow

### Integration Guide
- **[INTEGRATION.md](./INTEGRATION.md)** - Complete integration guide
  - What's been implemented
  - How to use each system
  - Feature checklist
  - Next steps

### Requirements & Dependencies
- **[REQUIREMENTS.md](./REQUIREMENTS.md)** - All dependencies and system requirements
  - System requirements
  - NPM packages (core & dev)
  - Feature-specific requirements
  - Permissions
  - Performance standards

### Development Roadmap
- **[TODO.md](./TODO.md)** - Development tasks and phases
  - Phase 1: Core Setup (In Progress)
  - Phase 2: UI/UX & Themes
  - Phase 3: EPUB Reading System
  - Phase 4: Library Management
  - Phase 5: Advanced Features
  - Phase 6: Testing & QA
  - Phase 7: Deployment & Release

### Quick Reference
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Code snippets and patterns
  - Using themes
  - Using storage
  - Error handling
  - Building components
  - Best practices

---

## 🎯 Feature Documentation

### Theme System (12+ Themes)
See: [ARCHITECTURE.md - Theme System](./ARCHITECTURE.md#theme-system-integration) & [QUICK_REFERENCE.md - Using Themes](./QUICK_REFERENCE.md#-using-themes)

**Available Themes:**
1. Light - Clean white
2. Dark - Dark gray
3. Dark Blue - Blue-tinted dark
4. Sepia - Paper-like
5. High Contrast Light
6. High Contrast Dark
7. Midnight - Deep black
8. Forest Green
9. Purple Dream
10. Coffee Brown
11. Ocean Blue
12. Sunset Orange

### Storage System
See: [ARCHITECTURE.md - Storage System Integration](./ARCHITECTURE.md#storage-system-integration) & [QUICK_REFERENCE.md - Using Storage](./QUICK_REFERENCE.md#-using-storage)

**Features:**
- App-specific root directory
- Book storage with metadata
- Database directory for SQLite
- Preference persistence
- Cache management
- Backup & cleanup

### Error Handling
See: [ARCHITECTURE.md - Error Handling System](./ARCHITECTURE.md#error-handling-system) & [QUICK_REFERENCE.md - Error Handling](./QUICK_REFERENCE.md#-error-handling)

**Components:**
- Custom error types
- Error logger
- Error boundary
- User-friendly messages
- Safe async wrapper

### Safe Area Handling
See: [ARCHITECTURE.md - Safe Area & Notch Handling](./ARCHITECTURE.md#safe-area--notch-handling)

**Support:**
- Notches & dynamic island
- System bars
- Landscape mode
- Tablet layouts

---

## 🛠️ Development Guides

### Getting Started
1. Run `npm install`
2. Configure Android SDK
3. Run `npm run android`
4. See [SETUP.md](./SETUP.md) for detailed steps

### Adding New Features
See [ARCHITECTURE.md - Adding New Features](./ARCHITECTURE.md#adding-new-features)

**Checklist:**
- Create service if needed
- Create context if global state
- Create components
- Create screen
- Update App.jsx
- Handle errors
- Test thoroughly

### Code Patterns
See [QUICK_REFERENCE.md - Common Patterns](./QUICK_REFERENCE.md#-common-patterns)

### Best Practices
See [QUICK_REFERENCE.md - Best Practices](./QUICK_REFERENCE.md#-best-practices)

---

## 📂 File Reference

### Configuration
- `package.json` - Project dependencies
- `app.json` - React Native config
- `babel.config.js` - JS transpilation
- `metro.config.js` - Bundler config
- `tsconfig.json` - TypeScript config
- `.eslintrc.json` - Linting rules

### Source Code
```
src/
├── index.js                  # Root with providers
├── App.jsx                   # Main app navigation
├── config/
│   └── appConfig.js         # Configuration
├── context/
│   └── ThemeContext.js      # Theme provider
├── services/
│   ├── StorageManager.js    # File operations
│   ├── ErrorHandler.js      # Error management
│   └── index.js
├── components/
│   ├── Button.jsx
│   ├── ThemeSelectionModal.jsx
│   └── ...
├── screens/
│   ├── HomeScreen.jsx
│   └── ...
└── styles/
    ├── theme.js
    └── themes.js
```

---

## 🚀 Available Commands

```bash
# Development
npm start              # Start Metro bundler
npm run android        # Run on Android device
npm run ios           # Run on iOS device
npm run web           # Run web version

# Building
npm run android:build  # Build Android APK
npm run build:web     # Build web app

# Quality
npm test              # Run tests
npm run lint          # Check code style
npm run lint:fix      # Auto-fix code style
npm run format        # Format code
npm run type-check    # Check TypeScript

# Utilities
npm run clean         # Clean node_modules
npm run clean:android # Clean Android build
npm run cache:clear   # Clear Metro cache
```

---

## 📋 Checklist for Common Tasks

### Setting Up Development
- [ ] Install Node.js v16+
- [ ] Install Android SDK
- [ ] Install Java JDK 11
- [ ] Run `npm install`
- [ ] Configure ANDROID_SDK_ROOT
- [ ] Run `npm run android`

### Before Committing
- [ ] Run `npm run lint:fix`
- [ ] Run `npm test`
- [ ] Test on device
- [ ] Check for console errors
- [ ] Update documentation

### Before Release
- [ ] All tests pass
- [ ] No lint warnings
- [ ] No console errors
- [ ] Works on multiple devices
- [ ] Build passes: `npm run android:build`
- [ ] Version bumped
- [ ] Release notes prepared

---

## 🆘 Troubleshooting

### Issues?
1. Check [SETUP.md - Troubleshooting](./SETUP.md#troubleshooting)
2. Check [REQUIREMENTS.md - Dependency Troubleshooting](./REQUIREMENTS.md#dependency-troubleshooting)
3. Check error logs: `import { errorLogger } from './services/ErrorHandler'`
4. Run cache clear: `npm run cache:clear`
5. Clean and reinstall: `npm run clean`

---

## 📚 External Resources

### React Native
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [Metro Bundler Docs](https://metrobundler.dev/)

### Android Development
- [Android Developer Guide](https://developer.android.com/)
- [Android Studio Documentation](https://developer.android.com/studio)

### EPUB
- [EPUB Specification](https://www.w3.org/publishing/epub/)
- [epubjs Documentation](https://github.com/futurepress/epub.js)

### State Management (Future)
- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

---

## 🎓 Learning Path

**Beginner:**
1. Read [README.md](./README.md)
2. Follow [SETUP.md](./SETUP.md)
3. Explore [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

**Intermediate:**
1. Study [ARCHITECTURE.md](./ARCHITECTURE.md)
2. Review [INTEGRATION.md](./INTEGRATION.md)
3. Examine source code examples

**Advanced:**
1. Review [REQUIREMENTS.md](./REQUIREMENTS.md)
2. Study [TODO.md](./TODO.md) for roadmap
3. Implement new features

---

## 📊 Project Status

| Component | Status | Docs |
|-----------|--------|------|
| Theme System | ✅ Complete | [ARCHITECTURE.md](./ARCHITECTURE.md#theme-system) |
| Storage System | ✅ Complete | [ARCHITECTURE.md](./ARCHITECTURE.md#storage-system) |
| Error Handling | ✅ Complete | [ARCHITECTURE.md](./ARCHITECTURE.md#error-handling) |
| Safe Area Handling | ✅ Complete | [ARCHITECTURE.md](./ARCHITECTURE.md#safe-area) |
| Configuration | ✅ Complete | [ARCHITECTURE.md](./ARCHITECTURE.md#configuration-system) |
| Navigation | ✅ Complete | [ARCHITECTURE.md](./ARCHITECTURE.md#navigation-structure) |
| EPUB Reading | 🔄 In Progress | [TODO.md](./TODO.md#phase-3) |
| Library Management | ⏳ Pending | [TODO.md](./TODO.md#phase-4) |
| Advanced Features | ⏳ Pending | [TODO.md](./TODO.md#phase-5) |

---

## 🤝 Contributing

When contributing:
1. Follow code style: `npm run lint:fix`
2. Write tests: `npm test`
3. Update documentation
4. Test on device
5. Create feature branch
6. Make pull request

See [ARCHITECTURE.md - Contribution Guidelines](./ARCHITECTURE.md#contribution-guidelines)

---

## 📞 Support

- **Quick Help:** See [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- **Setup Issues:** See [SETUP.md - Troubleshooting](./SETUP.md#troubleshooting)
- **Architecture Questions:** See [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Code Examples:** See [INTEGRATION.md](./INTEGRATION.md)

---

## 📝 Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Jan 28, 2026 | Initial project setup with all documentation |

---

## 📌 Important Links

- **GitHub Repository:** [Add your repo URL]
- **Issue Tracker:** [Add issue tracker URL]
- **Discussions:** [Add discussion forum URL]
- **CI/CD Pipeline:** [Add pipeline URL]

---

## ✅ Verification Checklist

Before using this project:
- [ ] All dependencies installed: `npm install`
- [ ] Android SDK configured
- [ ] Java JDK 11+ installed
- [ ] First launch shows theme selector
- [ ] Storage system initializes
- [ ] Error boundary wraps app
- [ ] App runs on device

---

**Welcome to Miyo! Happy coding! 🚀**

*Last Updated: January 28, 2026*
*Current Version: 1.0.0*
*Status: Ready for Development ✅*
