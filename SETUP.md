# Installation and Setup Guide

## Android Development Environment Setup

### 1. Install Java Development Kit (JDK)

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install openjdk-11-jdk openjdk-11-jre

# Verify installation
java -version
javac -version
```

### 2. Install Android SDK

#### Using Android Studio (Recommended)
- Download Android Studio from https://developer.android.com/studio
- Install Android SDK during setup
- Install API level 24+ through SDK Manager

#### Using Command Line
```bash
# Set up Android SDK root
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$PATH
export PATH=$ANDROID_SDK_ROOT/platform-tools:$PATH

# Add to ~/.bashrc or ~/.zshrc for persistence
echo 'export ANDROID_SDK_ROOT=$HOME/Android/Sdk' >> ~/.bashrc
```

### 3. Install Node.js and npm

```bash
# Using Node Version Manager (nvm) - Recommended
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Or using apt
sudo apt install nodejs npm
```

### 4. Project Dependencies Setup

```bash
# Navigate to project directory
cd /workspaces/Miyo

# Install Node dependencies
npm install

# For React Native, you may need to install additional global packages
npm install -g react-native-cli
```

## Running the Application

### For Android Development

```bash
# Start Metro bundler (must be running in separate terminal)
npm start

# In another terminal, run on Android device/emulator
npm run android
```

### For Web Development

```bash
npm run web
```

### For iOS (macOS only)

```bash
npm run ios
```

## Development Tips

### Using Android Emulator
1. Open Android Studio
2. Go to Device Manager
3. Create or select an Android Virtual Device (AVD)
4. Start the emulator
5. Run `npm run android`

### Using Real Android Device
1. Enable USB Debugging in phone settings
2. Connect via USB
3. Verify connection: `adb devices`
4. Run `npm run android`

### Hot Module Reloading
- Changes to JavaScript files will automatically reload
- Fast development iteration with Metro bundler
- Press `r` in terminal to manually reload

### Debugging
- Use React Native Debugger: https://github.com/jhen0409/react-native-debugger
- Chrome DevTools via `chrome://inspect`
- Android Logcat: `adb logcat`

## Troubleshooting

### Port Already in Use
```bash
# Metro bundler uses port 8081
lsof -i :8081
kill -9 <PID>
```

### Android SDK Path Issues
```bash
# Set Android SDK root explicitly
export ANDROID_SDK_ROOT=$HOME/Android/Sdk

# Or add to ~/.gradle/gradle.properties
sdk.dir=$HOME/Android/Sdk
```

### Cache Issues
```bash
# Clear Metro cache
npm start -- --reset-cache

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Additional Resources

- [React Native Documentation](https://reactnative.dev/)
- [Android Developer Guide](https://developer.android.com/)
- [React Navigation Docs](https://reactnavigation.org/)
- [Metro Bundler Docs](https://metrobundler.dev/)

---

For questions or issues, refer to the main README.md file.
