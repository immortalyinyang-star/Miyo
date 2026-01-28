import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';
import { getAllThemes } from '../styles/themes';
import { useTheme } from '../context/ThemeContext';

const { width, height } = Dimensions.get('window');

/**
 * Theme Selection Modal Component
 * Displayed on first app launch to let user select theme
 */
export const ThemeSelectionModal = ({ visible, onThemeSelected, onSkip }) => {
  const { changeTheme } = useTheme();
  const themes = getAllThemes();
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeSelect = async (themeId) => {
    setSelectedTheme(themeId);
    await changeTheme(themeId);
    onThemeSelected(themeId);
  };

  const renderThemeOption = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.themeOption,
        {
          backgroundColor: item.colors.background,
          borderColor: item.colors.border,
        },
        selectedTheme === item.id && styles.themeOptionSelected,
      ]}
      onPress={() => handleThemeSelect(item.id)}
      activeOpacity={0.7}
    >
      {/* Theme Preview */}
      <View
        style={[
          styles.themePreview,
          {
            backgroundColor: item.colors.surface,
            borderTopColor: item.colors.primary,
          },
        ]}
      >
        <Text
          style={[
            styles.themePreviewText,
            { color: item.colors.text },
          ]}
        >
          Preview
        </Text>
      </View>

      {/* Theme Info */}
      <View style={styles.themeInfo}>
        <Text
          style={[
            styles.themeName,
            { color: item.colors.text },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.themeDesc,
            { color: item.colors.textSecondary },
          ]}
        >
          {item.isDark ? '🌙 Dark' : '☀️ Light'}
        </Text>
      </View>

      {/* Selection Indicator */}
      {selectedTheme === item.id && (
        <View
          style={[
            styles.selectionBadge,
            { backgroundColor: item.colors.primary },
          ]}
        >
          <Text style={styles.selectionBadgeText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Choose Your Theme</Text>
          <Text style={styles.subtitle}>
            Select a theme that's comfortable for reading
          </Text>
        </View>

        {/* Theme Grid */}
        <FlatList
          data={themes}
          renderItem={renderThemeOption}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.themesGrid}
          scrollEnabled={true}
        />

        {/* Action Buttons */}
        <View style={styles.bottomActions}>
          <TouchableOpacity
            style={[styles.button, styles.skipButton]}
            onPress={onSkip}
          >
            <Text style={styles.skipButtonText}>Skip for Now</Text>
          </TouchableOpacity>

          {selectedTheme && (
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={() => onThemeSelected(selectedTheme)}
            >
              <Text style={styles.confirmButtonText}>Continue</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

/**
 * Theme Switcher Settings Component
 * Used in settings screen to change theme
 */
export const ThemeSwitcher = () => {
  const { themeId, changeTheme } = useTheme();
  const themes = getAllThemes();

  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsTitle}>Appearance Theme</Text>
      <View style={styles.settingsGrid}>
        {themes.map((theme) => (
          <TouchableOpacity
            key={theme.id}
            style={[
              styles.settingsThemeOption,
              {
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.primary,
              },
              themeId === theme.id && styles.settingsThemeOptionActive,
            ]}
            onPress={() => changeTheme(theme.id)}
          >
            <View
              style={[
                styles.colorSwatch,
                { backgroundColor: theme.colors.primary },
              ]}
            />
            <Text
              style={[
                styles.settingsThemeName,
                { color: theme.colors.text },
              ]}
            >
              {theme.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },
  themesGrid: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  themeOption: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    overflow: 'hidden',
    aspectRatio: 1,
    justifyContent: 'space-between',
  },
  themeOptionSelected: {
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  themePreview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
  },
  themePreviewText: {
    fontSize: 18,
    fontWeight: '600',
  },
  themeInfo: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  themeName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  themeDesc: {
    fontSize: 12,
  },
  selectionBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionBadgeText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomActions: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  // Settings component styles
  settingsContainer: {
    paddingVertical: 16,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  settingsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  settingsThemeOption: {
    width: '50%',
    aspectRatio: 1,
    padding: 12,
    margin: 6,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsThemeOptionActive: {
    borderWidth: 3,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 8,
  },
  settingsThemeName: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default ThemeSelectionModal;
