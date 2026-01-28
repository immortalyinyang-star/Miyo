# Miyo - Native Android App

A native Android application built with React Native using JavaScript, HTML-like styling, and CSS patterns.

## 📱 Technology Stack

- **React Native** - Cross-platform mobile development
- **JavaScript/JSX** - App logic and components
- **CSS-like styling** - StyleSheet API for responsive design
- **React Navigation** - Bottom tab navigation
- **TypeScript** - Optional type safety (configured)

## 📂 Project Structure

```
src/
├── App.jsx              # Main app component with navigation
├── index.js            # Entry point
├── components/         # Reusable UI components
│   └── Button.jsx
├── screens/            # Screen components
│   └── HomeScreen.jsx
└── styles/             # Theme and global styles
    └── theme.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14+)
- **Android SDK** (API level 24+)
- **Java Development Kit (JDK)** (v11+)
- **Android Studio** (recommended)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Android SDK (if not already configured):
   - Set `ANDROID_SDK_ROOT` environment variable
   - Or use Android Studio to configure automatically

### Running the App

**Development mode:**
```bash
npm start
```

**Run on Android:**
```bash
npm run android
```

**iOS (if needed):**
```bash
npm run ios
```

**Web preview:**
```bash
npm run web
```

## 📚 Project Components

### Screens
- **Home** - Main landing screen with introduction
- **Screens** - Navigation example screen
- **Settings** - Settings configuration screen

### Styling

The app uses React Native's `StyleSheet` API with CSS-like properties:
- Flexbox layout system
- Color palette defined in `theme.js`
- Consistent spacing and typography
- Responsive design patterns

### Navigation

Bottom tab navigation with three main sections using React Navigation library.

## 🔧 Development

### Code Structure
- Components are organized by feature
- Reusable styles in `styles/theme.js`
- Each screen is a separate component in `screens/`
- Shared UI components in `components/`

### Styling Guide

Colors and spacing are centralized in `src/styles/theme.js`:
```javascript
import { colors, spacing, typography } from './styles/theme';
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Metro bundler (dev server) |
| `npm run android` | Build and run app on Android device/emulator |
| `npm run ios` | Build and run app on iOS device/simulator |
| `npm run web` | Run web preview (requires react-scripts) |
| `npm test` | Run Jest tests |
| `npm run lint` | Check code with ESLint |

## 📦 Dependencies

### Core
- `react` - UI library
- `react-native` - Native platform bindings
- `@react-navigation/native` - Navigation library

### Development
- `@babel/core` - JavaScript transpiler
- `typescript` - Type support (optional)
- `eslint` - Code linting
- `jest` - Testing framework

## 🔐 Configuration Files

- **package.json** - Project metadata and dependencies
- **app.json** - React Native app configuration
- **babel.config.js** - JavaScript transpilation settings
- **metro.config.js** - React Native bundler config
- **.eslintrc.json** - Code style rules
- **tsconfig.json** - TypeScript configuration (optional)

## 📝 Next Steps

1. **Build your first screen** - Create a new component in `src/screens/`
2. **Add navigation** - Connect screens in `App.jsx`
3. **Customize styling** - Update theme colors in `src/styles/theme.js`
4. **Add features** - Create reusable components in `src/components/`

## 🤝 Contributing

Create feature branches and follow the existing code structure.

## 📄 License

MIT

---

**Happy coding!** 🎉 Start building amazing Android apps with JavaScript!
