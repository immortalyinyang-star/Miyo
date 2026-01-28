# Miyo Android Build Guide

## Overview

This guide provides complete instructions for building Miyo as an Android APK/AAB for distribution on Google Play Store or direct distribution.

## Prerequisites

### System Requirements
- **OS**: macOS, Linux, or Windows (WSL2)
- **Node.js**: v16.0.0 or higher
- **npm**: v7.0.0 or higher
- **Java Development Kit**: OpenJDK 11 or higher
- **Android SDK**: API Level 31 (Android 12) or higher
- **Gradle**: 8.0+ (usually bundled with Android Studio)
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: 10GB+ for SDK and build artifacts

### Android SDK Components
```bash
# Required API Level
Android 12 (API 31) - Minimum build target
Android 14 (API 34) - Current recommended

# Required Build Tools
build-tools;33.0.0 or higher

# Emulator (optional, for testing)
Android Emulator or physical device
```

## Setup Instructions

### 1. Install Java Development Kit

**macOS:**
```bash
brew install openjdk@11
export JAVA_HOME=$(/usr/libexec/java_home -v 11)
```

**Ubuntu/Debian:**
```bash
sudo apt-get install openjdk-11-jdk
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
```

**Windows (WSL2):**
```bash
sudo apt-get install openjdk-11-jdk
```

### 2. Install Android SDK

**Option A: Android Studio (Recommended)**
1. Download from [developer.android.com](https://developer.android.com)
2. Install Android Studio
3. Open SDK Manager (Tools → SDK Manager)
4. Install:
   - SDK Platforms: Android 12, 13, 14
   - SDK Tools: Build-Tools 33.0.0+, Android Emulator, Android SDK Platform-Tools

**Option B: Command Line**
```bash
# Download SDK Command-line Tools
mkdir -p ~/Android/sdk
cd ~/Android/sdk
# Download from https://developer.android.com/studio/command-line/sdkmanager

# Install components
./cmdline-tools/latest/bin/sdkmanager "platforms;android-34" "build-tools;33.0.0"
```

### 3. Set Environment Variables

Add to your shell profile (`~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
# OR
export ANDROID_HOME=$HOME/Android/sdk         # Linux

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

export JAVA_HOME=$(/usr/libexec/java_home -v 11)  # macOS
# OR
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64  # Linux
```

### 4. Verify Setup

```bash
java -version          # Should show JDK 11+
gradle --version       # Should show Gradle 8.0+
adb --version         # Should show ADB version
```

## Build Process

### Step 1: Prepare Project

```bash
cd /path/to/Miyo
npm install
```

### Step 2: Create Release Keystore (One-time)

Generate a signing key for Play Store releases:

```bash
keytool -genkey -v -keystore ~/miyo-release.keystore \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias miyo-release \
  -storepass YOUR_STORE_PASSWORD \
  -keypass YOUR_KEY_PASSWORD
```

**Important**: Save these passwords securely. You'll need them for future updates.

### Step 3: Build Debug APK (Testing)

```bash
npm run android:build:debug
# or
cd android && ./gradlew assembleDebug
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Step 4: Build Release APK

Create `android/local.properties`:
```properties
sdk.dir=/path/to/Android/sdk
org.gradle.jvmargs=-Xmx4096m
```

Create `android/app/keystore.properties`:
```properties
storeFile=/home/username/miyo-release.keystore
storePassword=YOUR_STORE_PASSWORD
keyAlias=miyo-release
keyPassword=YOUR_KEY_PASSWORD
```

Update `android/app/build.gradle` to use keystore:

```gradle
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword project.property('MYAPP_RELEASE_STORE_PASSWORD')
            keyAlias project.property('MYAPP_RELEASE_KEY_ALIAS')
            keyPassword project.property('MYAPP_RELEASE_KEY_PASSWORD')
        }
    }
}
```

Build release APK:
```bash
cd android
./gradlew assembleRelease \
  -PMYAPP_RELEASE_STORE_FILE=~/miyo-release.keystore \
  -PMYAPP_RELEASE_STORE_PASSWORD=YOUR_STORE_PASSWORD \
  -PMYAPP_RELEASE_KEY_ALIAS=miyo-release \
  -PMYAPP_RELEASE_KEY_PASSWORD=YOUR_KEY_PASSWORD
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

### Step 5: Build Android App Bundle (AAB) for Play Store

```bash
cd android
./gradlew bundleRelease \
  -PMYAPP_RELEASE_STORE_FILE=~/miyo-release.keystore \
  -PMYAPP_RELEASE_STORE_PASSWORD=YOUR_STORE_PASSWORD \
  -PMYAPP_RELEASE_KEY_ALIAS=miyo-release \
  -PMYAPP_RELEASE_KEY_PASSWORD=YOUR_KEY_PASSWORD
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

## Testing Build

### Option 1: Physical Device

```bash
# Enable USB Debugging on device
# Settings → Developer Options → USB Debugging

# Connect device
adb devices

# Install APK
adb install -r android/app/build/outputs/apk/debug/app-debug.apk

# Or use React Native CLI
npm run android
```

### Option 2: Android Emulator

```bash
# List available emulators
emulator -list-avds

# Start emulator
emulator -avd Pixel_4_API_34

# Wait for boot, then run:
npm run android
```

## Play Store Distribution

### Prerequisites for Play Store
1. **Google Play Account** - $25 one-time fee
2. **App Signing Certificate** - Generated above
3. **Google Play Console** - https://play.google.com/console

### Submission Steps

1. **Create App Listing**
   - Go to Google Play Console
   - Create new app
   - Fill in app name, language, category, content rating

2. **Add App Icon & Screenshots**
   - 512x512 PNG icon
   - 2-8 screenshots per device size
   - Feature graphic (1024x500)

3. **Write Description & Release Notes**
   - App description (max 4000 chars)
   - Short description (max 80 chars)
   - What's new (release notes)

4. **Set Pricing & Distribution**
   - Free or paid
   - Countries to distribute in
   - Target audience

5. **Upload AAB**
   - Go to Release → Production
   - Upload `app-release.aab`
   - Review pricing and distribution
   - Submit for review (24-72 hours typical)

## Troubleshooting

### Build Fails: `ANDROID_HOME not set`
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
# Add to ~/.bashrc or ~/.zshrc
```

### Build Fails: `Could not find gradle`
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

### APK Too Large
```gradle
// In android/app/build.gradle
splits {
    abi {
        enable true
        universalApk true
    }
}
```

### Build Timeout
```bash
# Increase memory
export _JAVA_OPTIONS="-Xmx4g"
```

### Certificate Issues
```bash
# Verify keystore
keytool -list -v -keystore ~/miyo-release.keystore
```

## Version Management

Update version in:
1. `package.json` - `version`
2. `app.json` - `version`
3. `android/app/build.gradle` - `versionCode` and `versionName`

**Important**: Increment `versionCode` for each release

```gradle
defaultConfig {
    versionCode 2          // Increment each release
    versionName "1.0.1"    // Semantic versioning
}
```

## Security Best Practices

1. **Keystore Security**
   - Store keystore in secure location
   - Never commit to version control
   - Add to `.gitignore`

2. **Password Management**
   - Use strong passwords
   - Store in password manager
   - Don't share with team members

3. **Code Signing**
   - Sign all releases with same key
   - Backup keystore file
   - Document key details securely

4. **Dependency Security**
   - Run `npm audit` regularly
   - Update packages timely
   - Review security advisories

## Monitoring & Analytics

After publishing, monitor in Google Play Console:
- Install numbers
- Ratings and reviews
- Crash reports
- ANR (Application Not Responding) rates
- User acquisition channels

## Next Steps

After release:
1. Monitor user feedback
2. Fix bugs reported
3. Implement analytics
4. Plan feature updates
5. Maintain documentation

## Support Resources

- [React Native Android Docs](https://reactnative.dev/docs/signed-apk-android)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer/)
- [Android Developer Guide](https://developer.android.com/guide)
- [Gradle Documentation](https://gradle.org/docs/)

---

**Last Updated**: January 28, 2026
**Version**: 1.0.0
**Author**: Miyo Development Team
