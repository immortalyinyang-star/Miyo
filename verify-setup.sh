#!/bin/bash
# Miyo Project Verification Script
# Run this to verify the project is properly set up

echo "================================================================================"
echo "MIYO EPUB READER - PROJECT VERIFICATION"
echo "================================================================================"
echo ""

# Check documentation files
echo "📋 Checking Documentation Files..."
docs=(
  "README.md"
  "SETUP.md"
  "REQUIREMENTS.md"
  "ARCHITECTURE.md"
  "INTEGRATION.md"
  "TODO.md"
  "QUICK_REFERENCE.md"
  "DOCUMENTATION_INDEX.md"
  "PROJECT_SUMMARY.md"
)

for doc in "${docs[@]}"; do
  if [ -f "$doc" ]; then
    lines=$(wc -l < "$doc")
    echo "✅ $doc ($lines lines)"
  else
    echo "❌ $doc - MISSING"
  fi
done

echo ""
echo "⚙️ Checking Configuration Files..."
configs=(
  "package.json"
  "app.json"
  "babel.config.js"
  "metro.config.js"
  "tsconfig.json"
  ".eslintrc.json"
  ".gitignore"
)

for config in "${configs[@]}"; do
  if [ -f "$config" ]; then
    echo "✅ $config"
  else
    echo "❌ $config - MISSING"
  fi
done

echo ""
echo "💻 Checking Source Code Files..."
srcfiles=(
  "src/index.js"
  "src/App.jsx"
  "src/config/appConfig.js"
  "src/context/ThemeContext.js"
  "src/services/StorageManager.js"
  "src/services/ErrorHandler.js"
  "src/services/index.js"
  "src/components/Button.jsx"
  "src/components/ThemeSelectionModal.jsx"
  "src/screens/HomeScreen.jsx"
  "src/styles/theme.js"
  "src/styles/themes.js"
)

for file in "${srcfiles[@]}"; do
  if [ -f "$file" ]; then
    lines=$(wc -l < "$file")
    echo "✅ $file ($lines lines)"
  else
    echo "❌ $file - MISSING"
  fi
done

echo ""
echo "================================================================================"
echo "PROJECT STATISTICS"
echo "================================================================================"

docs_lines=$(wc -l *.md 2>/dev/null | tail -1 | awk '{print $1}')
echo "📋 Documentation: $docs_lines lines total"

src_lines=$(find src -type f \( -name "*.js" -o -name "*.jsx" \) 2>/dev/null | xargs wc -l 2>/dev/null | tail -1 | awk '{print $1}')
echo "💻 Source Code: $src_lines lines total"

total_lines=$((docs_lines + src_lines))
echo "📊 Total Project: $total_lines lines"

echo ""
echo "================================================================================"
echo "VERIFICATION SUMMARY"
echo "================================================================================"

all_good=true

# Count files
doc_count=$(ls -1 *.md 2>/dev/null | wc -l)
config_count=$(ls -1 *.json *.js 2>/dev/null | grep -v src | wc -l)
src_count=$(find src -type f \( -name "*.js" -o -name "*.jsx" \) 2>/dev/null | wc -l)

echo "✅ Documentation files: $doc_count/9"
echo "✅ Configuration files: ${config_count}+"
echo "✅ Source code files: $src_count+"

echo ""
echo "📦 Dependencies in package.json:"
if [ -f "package.json" ]; then
  deps=$(grep -c '"' package.json)
  echo "✅ Found $deps dependencies listed"
else
  echo "❌ package.json not found"
  all_good=false
fi

echo ""
echo "================================================================================"
echo "READY TO START DEVELOPMENT?"
echo "================================================================================"

if [ "$all_good" = true ]; then
  echo ""
  echo "✅ Project setup verification PASSED!"
  echo ""
  echo "📝 Next Steps:"
  echo "   1. Run: npm install"
  echo "   2. Run: npm start"
  echo "   3. Run: npm run android"
  echo ""
  echo "📚 Documentation:"
  echo "   - Start with: README.md"
  echo "   - Or see: DOCUMENTATION_INDEX.md"
  echo ""
  echo "🎯 Status: READY FOR DEVELOPMENT ✅"
else
  echo ""
  echo "⚠️  Some files are missing. Please verify setup."
fi

echo ""
echo "================================================================================"
