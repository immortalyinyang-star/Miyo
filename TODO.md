# Miyo - EPUB Reader App Development Roadmap

## 📋 Project Overview
Miyo is a native Android EPUB reader application inspired by popular manga/book readers like Kotatsu, Mihon, and Tachiyomi. It enables users to read novels and EPUB books with a rich, customizable reading experience.

---

## 🎯 Phase 1: Core Setup & Infrastructure

### Foundation
- [ ] Set up React Native development environment
- [ ] Configure Android SDK and build tools
- [ ] Initialize Git workflow and branching strategy
- [ ] Set up proper error handling system
- [ ] Implement logging infrastructure

### File System & Storage
- [ ] Create app-specific root directory for data storage
- [ ] Implement file system abstraction layer
- [ ] Set up SQLite database for metadata
- [ ] Create migration system for database
- [ ] Implement data backup/restore functionality

### Dependencies
- [ ] Install and configure EPUB parsing library
- [ ] Set up Android safe area handlers
- [ ] Implement permission management system
- [ ] Configure error boundary components
- [ ] Set up device storage access permissions

---

## 🎨 Phase 2: UI/UX Framework & Theme System

### Theme System
- [ ] Design 12+ theme variations (Light, Dark, Sepia, Auto, etc.)
- [ ] Create color palette system for all themes
- [ ] Implement theme selection modal at app startup
- [ ] Add theme persistence to local storage
- [ ] Create theme provider context
- [ ] Implement dynamic theme switching

### Themes to Implement
- [ ] Light Theme (default)
- [ ] Dark Theme
- [ ] Dark Blue Theme
- [ ] Sepia Theme
- [ ] High Contrast (Light)
- [ ] High Contrast (Dark)
- [ ] Midnight Theme
- [ ] Forest Green Theme
- [ ] Purple Dream Theme
- [ ] Coffee Brown Theme
- [ ] Ocean Blue Theme
- [ ] Sunset Orange Theme
- [ ] Custom Theme Editor (future)

### Core UI Components
- [ ] Create reusable Modal component
- [ ] Build custom Button variants
- [ ] Implement CustomDrawer for navigation
- [ ] Create ProgressBar component
- [ ] Build Toast/Snackbar notification system
- [ ] Implement Loading spinners
- [ ] Create bottom sheet component
- [ ] Build dialog component system

### Navigation Structure
- [ ] Set up main navigation container
- [ ] Create navigation stack structure
- [ ] Implement bottom tab navigation
- [ ] Add drawer navigation for menu
- [ ] Create screen transition animations

---

## 📖 Phase 3: EPUB Reading System

### EPUB Parser & Handler
- [ ] Implement EPUB file reading
- [ ] Create EPUB parser using epubjs or similar library
- [ ] Build chapter/section navigation
- [ ] Implement text rendering engine
- [ ] Add image rendering support
- [ ] Handle EPUB metadata extraction

### Reading Features
- [ ] Implement page turning (swipe/buttons)
- [ ] Add chapter list and quick navigation
- [ ] Create bookmarks functionality
- [ ] Implement reading progress tracking
- [ ] Add reading time estimation
- [ ] Create highlight/annotation system
- [ ] Add note-taking feature
- [ ] Implement search within book

### Typography & Customization
- [ ] Create font selection system
- [ ] Implement font size adjustment
- [ ] Add line spacing customization
- [ ] Implement text alignment options
- [ ] Add letter spacing controls
- [ ] Create reading mode options

---

## 📚 Phase 4: Library Management

### Library Screen
- [ ] Create library grid/list view
- [ ] Implement book cover display
- [ ] Add book metadata display
- [ ] Create sorting options (title, author, date added, progress)
- [ ] Add filtering system (by author, genre, status)
- [ ] Implement search functionality
- [ ] Create categories/collections system

### File Import
- [ ] Implement file picker for EPUB files
- [ ] Create bulk import functionality
- [ ] Add drag-and-drop support
- [ ] Implement import progress tracking
- [ ] Create duplicate detection
- [ ] Add import validation

### Book Management
- [ ] Create edit book metadata screen
- [ ] Implement book deletion with confirmation
- [ ] Add book grouping/collection system
- [ ] Create reading status tracking (reading, completed, dropped, planned)
- [ ] Implement series recognition and grouping

---

## ⚙️ Phase 5: Advanced Features

### Reading History & Progress
- [ ] Create reading history screen
- [ ] Implement resume reading functionality
- [ ] Add reading statistics (books read, total time, avg. per day)
- [ ] Create reading goals/challenges
- [ ] Implement continue reading shortcuts

### Customization
- [ ] Add user preferences panel
- [ ] Create reading settings (margins, padding, etc.)
- [ ] Implement gesture customization
- [ ] Add keyboard shortcuts (if applicable)
- [ ] Create profile/account system (optional)

### Cloud Features (Future)
- [ ] Implement cloud sync for progress
- [ ] Add multi-device synchronization
- [ ] Create backup/restore from cloud
- [ ] Add community features (optional)

---

## 🔧 Phase 6: Testing & Quality Assurance

### Testing
- [ ] Write unit tests for utilities
- [ ] Create integration tests for screens
- [ ] Implement component tests
- [ ] Add E2E testing
- [ ] Create test data and fixtures

### Performance
- [ ] Optimize EPUB rendering
- [ ] Implement lazy loading for images
- [ ] Add memory management
- [ ] Optimize database queries
- [ ] Profile app performance

### Bug Fixing & Polish
- [ ] Address reported bugs
- [ ] Optimize UI animations
- [ ] Improve error messages
- [ ] Add missing translations
- [ ] Polish user experience

---

## 📦 Phase 7: Deployment & Release

### Build & Release
- [ ] Set up release build configuration
- [ ] Create signed APK/AAB
- [ ] Test on multiple Android versions
- [ ] Test on different screen sizes
- [ ] Create release notes

### Google Play Store
- [ ] Create app listing
- [ ] Add screenshots and descriptions
- [ ] Configure app store metadata
- [ ] Set up app signing
- [ ] Submit for review

### Post-Launch
- [ ] Monitor crash reports
- [ ] Gather user feedback
- [ ] Plan updates and improvements
- [ ] Implement analytics (if desired)

---

## 🐛 Known Issues & Future Improvements

### Performance
- [ ] Optimize large EPUB files
- [ ] Reduce initial load time
- [ ] Improve smooth scrolling

### Features
- [ ] Support for PDF files
- [ ] Online library integration
- [ ] Social features (sharing, reviews)
- [ ] Auto-update from folder
- [ ] Dictionary integration

### UI/UX
- [ ] Add more theme customization
- [ ] Implement gesture controls
- [ ] Add voice reading (TTS)
- [ ] Create dark mode detection

---

## 📊 Progress Summary

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1: Core Setup | In Progress | 20% |
| Phase 2: UI/UX & Themes | Not Started | 0% |
| Phase 3: EPUB System | Not Started | 0% |
| Phase 4: Library | Not Started | 0% |
| Phase 5: Advanced Features | Not Started | 0% |
| Phase 6: Testing | Not Started | 0% |
| Phase 7: Deployment | Not Started | 0% |

**Overall Progress: 2.9%**

---

## 🎓 Learning Resources

- [EPUB Specification](https://www.w3.org/publishing/epub/)
- [React Native Docs](https://reactnative.dev/)
- [SQLite in React Native](https://github.com/WiseLibs/better-sqlite3)
- [Redux for State Management](https://redux.js.org/)
- [React Navigation](https://reactnavigation.org/)

---

## 🤝 Contribution Guidelines

- Follow existing code structure
- Write tests for new features
- Update documentation
- Follow naming conventions
- Create feature branches

---

Last Updated: January 28, 2026
