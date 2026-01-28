# GitHub Actions Build Setup - Mobile Guide

## 🎯 What This Does

Every time you push code to GitHub, GitHub Actions automatically:
1. ✅ Downloads your code
2. ✅ Installs all dependencies
3. ✅ Builds Debug APK
4. ✅ Builds Release APK
5. ✅ Builds App Bundle (AAB) for Play Store
6. ✅ Uploads to GitHub as artifacts (downloadable)

## 📱 Using on Mobile (Simple Steps)

### 1. Push Your Code to GitHub

From **Termux on your phone:**

```bash
# Navigate to project
cd ~/projects/Miyo

# Check what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Added EPUB parser integration"

# Push to GitHub
git push origin main
```

### 2. Watch the Build Process

Go to: **https://github.com/immortalyinyang-star/Miyo/actions**

You'll see:
- 🟡 Yellow = Building (in progress)
- 🟢 Green = Build successful ✅
- 🔴 Red = Build failed (check logs)

### 3. Download Your APK

When build is **GREEN** (✅ Success):

1. Click the workflow run
2. Scroll down to "Artifacts"
3. Click `release-apk` or `debug-apk` to download
4. APK is saved to your phone's Downloads

### 4. Install the APK

From **Termux:**
```bash
# Find the APK
ls ~/storage/downloads/*.apk

# Install it
pm install ~/storage/downloads/app-release-unsigned.apk
```

Or use **File Manager:**
- Find the APK in Downloads
- Tap it to install

## 🔄 Full Workflow (From Mobile)

```bash
# 1. Edit code in your editor
nano src/screens/ReadingScreen.jsx

# 2. Test locally (optional)
npm start

# 3. Commit changes
git add .
git commit -m "Update reading screen"

# 4. Push to GitHub
git push origin main

# 5. Check GitHub Actions
# Go to: https://github.com/immortalyinyang-star/Miyo/actions

# 6. Wait for build (2-5 minutes usually)

# 7. Download APK from artifacts

# 8. Install on your phone
pm install app-release-unsigned.apk
```

## 📊 What Gets Built

| Type | Purpose | Download Name |
|------|---------|---------------|
| **Debug APK** | For development/testing | `debug-apk` |
| **Release APK** | For distribution | `release-apk` |
| **App Bundle (AAB)** | For Google Play Store | `app-bundle` |

## 🔑 Environment Variables

The workflow is **public** - no secrets needed yet.

**When you're ready for Play Store** (later), you'll need to add:
- Signing keystore
- Store password
- Key alias & password

For now, unsigned APKs work fine for testing.

## 📋 Termux Commands Cheat Sheet

```bash
# Clone repo (first time only)
git clone https://github.com/immortalyinyang-star/Miyo.git

# Navigate to project
cd ~/projects/Miyo

# Check git status
git status

# View recent commits
git log --oneline -5

# Stage all files
git add .

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/my-feature

# Switch branches
git checkout main

# Delete branch
git branch -d feature/my-feature
```

## 🐛 Troubleshooting

### Build Failed (Red ❌)

1. Click the failed workflow
2. Expand the step that failed
3. Read the error message
4. Fix the code locally
5. Push again

**Common issues:**
- Syntax errors in JavaScript
- Missing dependencies
- Invalid Android configuration

### APK Not Downloading

1. Make sure build is **GREEN** ✅
2. Scroll down past the job summary
3. Look for "Artifacts" section
4. Click download icon

### Build Takes Too Long

- First build: 5-10 minutes (SDK download)
- Subsequent builds: 2-5 minutes (cached)
- Check Actions tab to see progress

## 🚀 Next Steps

### After Your First Build

1. **Download the APK** ✅
2. **Install on phone** ✅
3. **Test the app** ✅
4. **Make changes** ✅
5. **Push again** ✅
6. **Repeat** ✅

### Development Cycle

```
Edit Code → Push → Wait for Build → Download → Test → Repeat
```

## 📱 Mobile Development Workflow

### Recommended Setup:

**Terminal 1 - Code Editing:**
```bash
# Use your favorite editor
nano src/App.jsx
nano src/screens/ReadingScreen.jsx
```

**Terminal 2 - Git Operations:**
```bash
git status
git add .
git commit -m "message"
git push origin main
```

**Phone Browser:**
- Open: https://github.com/immortalyinyang-star/Miyo/actions
- Watch builds complete
- Download APKs when ready

### Multiple Editors:

**Option 1: Nano (lightweight)**
```bash
nano src/App.jsx
# Ctrl+X to save and exit
```

**Option 2: Acode (mobile IDE)**
- Download from Play Store
- Open project in Acode
- Edit files with syntax highlighting
- Save, then `git push` in Termux

**Option 3: DroidEdit**
- Another lightweight option
- Good for quick edits

## 🎯 What You Get

After pushing your code:

1. **Debug APK** - Test version with logging
2. **Release APK** - Production version (unsigned)
3. **AAB Bundle** - For Google Play Store submission

All available for 30 days, then automatically deleted.

## 📈 Build Status

Current status: **Ready** ✅

Your workflow file is set up and will:
- Trigger automatically on every push to `main`
- Build Debug APK ✅
- Build Release APK ✅
- Build AAB for Play Store ✅
- Keep artifacts for 30 days ✅

## 🎓 Learning Path

1. **Phase 1: Setup (Done!)** ✅
   - GitHub Actions configured
   - Ready to build

2. **Phase 2: Development**
   - Edit code on mobile
   - Push to GitHub
   - Build automatically

3. **Phase 3: Testing**
   - Download APKs
   - Install and test
   - Report bugs/issues

4. **Phase 4: Feature Implementation**
   - Add EPUB parser
   - Build library screen
   - Implement reading experience

5. **Phase 5: Play Store Release**
   - Set up signing keys
   - Create signed APK
   - Submit to Play Store

## 🔗 Useful Links

- **GitHub Actions**: https://github.com/immortalyinyang-star/Miyo/actions
- **Project Releases**: https://github.com/immortalyinyang-star/Miyo/releases
- **Workflow File**: https://github.com/immortalyinyang-star/Miyo/blob/main/.github/workflows/android-build.yml

## ✨ Summary

✅ Workflow configured  
✅ Ready to build  
✅ Automatic on every push  
✅ Downloads available for 30 days  

**Next:** Push your code and watch it build!

---

**Last Updated**: January 28, 2026  
**Workflow Status**: Active ✅  
**Build Trigger**: Push to main branch
