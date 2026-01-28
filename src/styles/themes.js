// Theme definitions for Miyo Reader
// 12+ theme variations for optimal reading experience

export const THEME_VARIANTS = {
  LIGHT: 'light',
  DARK: 'dark',
  DARK_BLUE: 'darkBlue',
  SEPIA: 'sepia',
  HIGH_CONTRAST_LIGHT: 'highContrastLight',
  HIGH_CONTRAST_DARK: 'highContrastDark',
  MIDNIGHT: 'midnight',
  FOREST_GREEN: 'forestGreen',
  PURPLE_DREAM: 'purpleDream',
  COFFEE_BROWN: 'coffeeBrown',
  OCEAN_BLUE: 'oceanBlue',
  SUNSET_ORANGE: 'sunsetOrange',
};

export const THEMES = {
  light: {
    id: 'light',
    name: 'Light',
    displayName: 'Light Theme',
    isDark: false,
    colors: {
      primary: '#007AFF',
      secondary: '#5AC8FA',
      background: '#FFFFFF',
      surface: '#F5F5F5',
      surfaceVariant: '#EFEFEF',
      text: '#000000',
      textSecondary: '#666666',
      textTertiary: '#999999',
      border: '#E5E5EA',
      error: '#FF3B30',
      success: '#4CD964',
      warning: '#FF9500',
      divider: '#E0E0E0',
    },
    readingBackground: '#FFFFFF',
    readingText: '#000000',
    statusBar: 'dark-content',
  },
  dark: {
    id: 'dark',
    name: 'Dark',
    displayName: 'Dark Theme',
    isDark: true,
    colors: {
      primary: '#0A84FF',
      secondary: '#54B8FF',
      background: '#1C1C1E',
      surface: '#2C2C2E',
      surfaceVariant: '#3A3A3C',
      text: '#FFFFFF',
      textSecondary: '#8E8E93',
      textTertiary: '#6A6A6F',
      border: '#3A3A3C',
      error: '#FF453A',
      success: '#30B0C0',
      warning: '#FF9500',
      divider: '#424245',
    },
    readingBackground: '#1C1C1E',
    readingText: '#FFFFFF',
    statusBar: 'light-content',
  },
  darkBlue: {
    id: 'darkBlue',
    name: 'Dark Blue',
    displayName: 'Dark Blue Theme',
    isDark: true,
    colors: {
      primary: '#0A9FFF',
      secondary: '#4DBDFF',
      background: '#0F1419',
      surface: '#1A232E',
      surfaceVariant: '#253449',
      text: '#E8EEFF',
      textSecondary: '#9CA3AF',
      textTertiary: '#6B7280',
      border: '#2B3E54',
      error: '#FF6B6B',
      success: '#51CF66',
      warning: '#FFD93D',
      divider: '#374A61',
    },
    readingBackground: '#0F1419',
    readingText: '#E8EEFF',
    statusBar: 'light-content',
  },
  sepia: {
    id: 'sepia',
    name: 'Sepia',
    displayName: 'Sepia Theme (Paper-like)',
    isDark: false,
    colors: {
      primary: '#8B6F47',
      secondary: '#A0826D',
      background: '#F4EFE4',
      surface: '#EAE4D6',
      surfaceVariant: '#E0D9CB',
      text: '#3E3B36',
      textSecondary: '#6B6660',
      textTertiary: '#8B8680',
      border: '#D4CCC0',
      error: '#C85A54',
      success: '#6B9F60',
      warning: '#C89338',
      divider: '#D9D0C4',
    },
    readingBackground: '#F4EFE4',
    readingText: '#3E3B36',
    statusBar: 'dark-content',
  },
  highContrastLight: {
    id: 'highContrastLight',
    name: 'High Contrast Light',
    displayName: 'High Contrast (Light)',
    isDark: false,
    colors: {
      primary: '#0000EE',
      secondary: '#0000BB',
      background: '#FFFFFF',
      surface: '#F0F0F0',
      surfaceVariant: '#E0E0E0',
      text: '#000000',
      textSecondary: '#333333',
      textTertiary: '#666666',
      border: '#000000',
      error: '#CC0000',
      success: '#008000',
      warning: '#FF6600',
      divider: '#000000',
    },
    readingBackground: '#FFFFFF',
    readingText: '#000000',
    statusBar: 'dark-content',
  },
  highContrastDark: {
    id: 'highContrastDark',
    name: 'High Contrast Dark',
    displayName: 'High Contrast (Dark)',
    isDark: true,
    colors: {
      primary: '#FFFF00',
      secondary: '#CCFF00',
      background: '#000000',
      surface: '#1A1A1A',
      surfaceVariant: '#333333',
      text: '#FFFFFF',
      textSecondary: '#CCCCCC',
      textTertiary: '#999999',
      border: '#FFFFFF',
      error: '#FF6666',
      success: '#66FF66',
      warning: '#FFFF00',
      divider: '#FFFFFF',
    },
    readingBackground: '#000000',
    readingText: '#FFFFFF',
    statusBar: 'light-content',
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight',
    displayName: 'Midnight Theme',
    isDark: true,
    colors: {
      primary: '#00D9FF',
      secondary: '#00B3CC',
      background: '#0A0E27',
      surface: '#141A3D',
      surfaceVariant: '#1F2654',
      text: '#E5E7EB',
      textSecondary: '#9CA3AF',
      textTertiary: '#6B7280',
      border: '#2B3E54',
      error: '#FF6B9D',
      success: '#6BCB77',
      warning: '#FFD93D',
      divider: '#2B3E54',
    },
    readingBackground: '#0A0E27',
    readingText: '#E5E7EB',
    statusBar: 'light-content',
  },
  forestGreen: {
    id: 'forestGreen',
    name: 'Forest Green',
    displayName: 'Forest Green Theme',
    isDark: true,
    colors: {
      primary: '#6EE7B7',
      secondary: '#5DDBAC',
      background: '#0F2818',
      surface: '#1A3D2F',
      surfaceVariant: '#265242',
      text: '#E0F2E9',
      textSecondary: '#A8D5BA',
      textTertiary: '#7AAF95',
      border: '#2D5D4A',
      error: '#F87171',
      success: '#34D399',
      warning: '#FBBF24',
      divider: '#3A6B5D',
    },
    readingBackground: '#0F2818',
    readingText: '#E0F2E9',
    statusBar: 'light-content',
  },
  purpleDream: {
    id: 'purpleDream',
    name: 'Purple Dream',
    displayName: 'Purple Dream Theme',
    isDark: true,
    colors: {
      primary: '#D8B4FE',
      secondary: '#C084FC',
      background: '#2D1B4E',
      surface: '#3D2665',
      surfaceVariant: '#4D3080',
      text: '#F3E8FF',
      textSecondary: '#D8B4FE',
      textTertiary: '#C084FC',
      border: '#6366F1',
      error: '#F87171',
      success: '#86EFAC',
      warning: '#FBBF24',
      divider: '#6366F1',
    },
    readingBackground: '#2D1B4E',
    readingText: '#F3E8FF',
    statusBar: 'light-content',
  },
  coffeeBrown: {
    id: 'coffeeBrown',
    name: 'Coffee Brown',
    displayName: 'Coffee Brown Theme',
    isDark: true,
    colors: {
      primary: '#D4AF9B',
      secondary: '#BFA184',
      background: '#2C2416',
      surface: '#3D3229',
      surfaceVariant: '#4D4133',
      text: '#F5EAE0',
      textSecondary: '#D4A574',
      textTertiary: '#A8826B',
      border: '#5A4A3F',
      error: '#FF6B6B',
      success: '#90EE90',
      warning: '#FFD700',
      divider: '#6B5A4F',
    },
    readingBackground: '#2C2416',
    readingText: '#F5EAE0',
    statusBar: 'light-content',
  },
  oceanBlue: {
    id: 'oceanBlue',
    name: 'Ocean Blue',
    displayName: 'Ocean Blue Theme',
    isDark: true,
    colors: {
      primary: '#38BDF8',
      secondary: '#0EA5E9',
      background: '#082F49',
      surface: '#164E63',
      surfaceVariant: '#1E5A7A',
      text: '#CFFAFE',
      textSecondary: '#7DD3FC',
      textTertiary: '#4CBFE2',
      border: '#0E7490',
      error: '#FF6B6B',
      success: '#56D364',
      warning: '#FFD700',
      divider: '#155E75',
    },
    readingBackground: '#082F49',
    readingText: '#CFFAFE',
    statusBar: 'light-content',
  },
  sunsetOrange: {
    id: 'sunsetOrange',
    name: 'Sunset Orange',
    displayName: 'Sunset Orange Theme',
    isDark: true,
    colors: {
      primary: '#FDBA74',
      secondary: '#FB923C',
      background: '#3F2305',
      surface: '#5A3A1A',
      surfaceVariant: '#7C4A2F',
      text: '#FEF3C7',
      textSecondary: '#FED7AA',
      textTertiary: '#FDBA74',
      border: '#B45309',
      error: '#FF6B6B',
      success: '#6EE7B7',
      warning: '#FBBF24',
      divider: '#D97706',
    },
    readingBackground: '#3F2305',
    readingText: '#FEF3C7',
    statusBar: 'light-content',
  },
};

// Helper function to get theme by ID
export const getTheme = (themeId) => {
  return THEMES[themeId] || THEMES.light;
};

// Get all available themes
export const getAllThemes = () => {
  return Object.values(THEMES);
};

// Get theme names for selection UI
export const getThemeNames = () => {
  return Object.values(THEMES).map((theme) => ({
    id: theme.id,
    name: theme.name,
    displayName: theme.displayName,
  }));
};

// Theme utilities
export const themeUtils = {
  isDarkTheme: (themeId) => {
    const theme = THEMES[themeId];
    return theme ? theme.isDark : false;
  },

  getReadingThemeColors: (themeId) => {
    const theme = THEMES[themeId];
    if (!theme) return THEMES.light;
    return {
      background: theme.readingBackground,
      text: theme.readingText,
      ...theme.colors,
    };
  },

  getContrastColor: (backgroundColor) => {
    // Simple luminance calculation
    const rgb = parseInt(backgroundColor.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  },
};

export default THEMES;
