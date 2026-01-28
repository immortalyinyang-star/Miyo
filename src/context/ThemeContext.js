import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import THEMES, { THEME_VARIANTS, getTheme } from '../styles/themes';
import storageManager from './StorageManager';

/**
 * Theme Context for managing app-wide theming
 */
const ThemeContext = createContext(null);

/**
 * Theme Provider Component
 */
export const ThemeProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState(THEMES.light);
  const [themeId, setThemeId] = useState(THEME_VARIANTS.LIGHT);
  const [isLoading, setIsLoading] = useState(true);
  const [themeSelected, setThemeSelected] = useState(false);

  // Initialize theme on app start
  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const preferences = await storageManager.readPreferences();
      
      if (preferences && preferences.themeId) {
        // Use saved theme
        const savedTheme = getTheme(preferences.themeId);
        setCurrentTheme(savedTheme);
        setThemeId(preferences.themeId);
        setThemeSelected(true);
      } else {
        // First time - use system preference or default
        const autoTheme = systemColorScheme === 'dark' 
          ? THEMES[THEME_VARIANTS.DARK]
          : THEMES[THEME_VARIANTS.LIGHT];
        setCurrentTheme(autoTheme);
        setThemeId(autoTheme.id);
        setThemeSelected(false); // Show theme selection on first launch
      }
    } catch (error) {
      console.warn('Error loading theme preferences:', error);
      setCurrentTheme(THEMES.light);
      setThemeId(THEME_VARIANTS.LIGHT);
      setThemeSelected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const changeTheme = async (newThemeId) => {
    try {
      const theme = getTheme(newThemeId);
      setCurrentTheme(theme);
      setThemeId(newThemeId);
      setThemeSelected(true);

      // Save preference
      const preferences = await storageManager.readPreferences() || {};
      preferences.themeId = newThemeId;
      await storageManager.savePreferences(preferences);
    } catch (error) {
      console.error('Error changing theme:', error);
    }
  };

  const resetToSystemTheme = async () => {
    try {
      const autoTheme = systemColorScheme === 'dark'
        ? THEMES[THEME_VARIANTS.DARK]
        : THEMES[THEME_VARIANTS.LIGHT];
      
      setCurrentTheme(autoTheme);
      setThemeId(autoTheme.id);

      // Save preference
      const preferences = await storageManager.readPreferences() || {};
      preferences.themeId = autoTheme.id;
      preferences.useSystemTheme = true;
      await storageManager.savePreferences(preferences);
    } catch (error) {
      console.error('Error resetting to system theme:', error);
    }
  };

  const value = {
    currentTheme,
    themeId,
    isLoading,
    themeSelected,
    changeTheme,
    resetToSystemTheme,
    colors: currentTheme.colors,
    isDark: currentTheme.isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to use theme context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

/**
 * Hook to get themed styles dynamically
 */
export const useThemedStyles = (stylesFn) => {
  const theme = useTheme();
  return stylesFn(theme.colors);
};

export default ThemeContext;
