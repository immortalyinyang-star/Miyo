import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from './context/ThemeContext';
import { ThemeSelectionModal } from './components/ThemeSelectionModal';
import { ErrorBoundary } from './services/ErrorHandler';
import storageManager from './services/StorageManager';

const Tab = createBottomTabNavigator();

/**
 * Home Screen - Main entry point with app information
 */
const HomeScreen = () => {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>
            Welcome to Miyo
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            EPUB Reader for Novels & Books
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderLeftColor: colors.primary,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Getting Started
          </Text>
          <Text style={[styles.cardText, { color: colors.textSecondary }]}>
            Miyo is a modern EPUB reader designed for comfortable reading of novels and books, inspired by popular apps like Kotatsu and Tachiyomi.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderLeftColor: colors.success,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            ✨ Features
          </Text>
          <Text style={[styles.cardText, { color: colors.textSecondary }]}>
            📚 Read EPUB files{'\n'}🎨 12+ theme options{'\n'}📖 Reading progress tracking{'\n'}⚙️ Customizable typography{'\n'}🚀 Fast and responsive{'\n'}💾 Local storage management
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderLeftColor: colors.warning,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            📝 Next Steps
          </Text>
          <Text style={[styles.cardText, { color: colors.textSecondary }]}>
            1. Check Settings to customize your theme{'\n'}2. Import EPUB books{'\n'}3. Start reading and enjoy!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Library Screen - Browse and manage books
 */
const LibraryScreen = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          📚 Library
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Your EPUB Books
        </Text>
      </View>
      <View
        style={[
          styles.card,
          {
            backgroundColor: colors.surface,
            marginHorizontal: 16,
          },
        ]}
      >
        <Text style={[styles.cardText, { color: colors.textSecondary }]}>
          Start by importing EPUB files from your device. Your library will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

/**
 * Settings Screen - App configuration
 */
const SettingsScreen = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          ⚙️ Settings
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              marginHorizontal: 16,
              marginVertical: 12,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Appearance
          </Text>
          <Text style={[styles.cardText, { color: colors.textSecondary }]}>
            Customize your reading experience with themes, fonts, and display settings.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              marginHorizontal: 16,
              marginVertical: 12,
            },
          ]}
        >
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Storage
          </Text>
          <Text style={[styles.cardText, { color: colors.textSecondary }]}>
            Manage your library, backups, and app data storage.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Main App Navigation
 */
const AppNavigator = ({ onThemeSelect }) => {
  const { colors, isDark } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textTertiary,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            borderTopWidth: 1,
          },
          headerShown: false,
          lazy: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{
            title: 'Library',
            tabBarLabel: 'Library',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

/**
 * Root App Component with Theme and Storage Initialization
 */
function App() {
  const { isLoading, themeSelected } = useTheme();
  const [storageInitialized, setStorageInitialized] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize storage
        await storageManager.initialize();
        setStorageInitialized(true);

        // Show theme selection on first launch
        if (!themeSelected) {
          setShowThemeModal(true);
        }
      } catch (error) {
        console.error('App initialization error:', error);
      }
    };

    initializeApp();
  }, []);

  const handleThemeSelected = () => {
    setShowThemeModal(false);
  };

  const handleSkipTheme = () => {
    setShowThemeModal(false);
  };

  // Show loading screen while initializing
  if (isLoading || !storageInitialized) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Initializing Miyo...</Text>
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <>
        <AppNavigator onThemeSelect={handleThemeSelected} />
        <ThemeSelectionModal
          visible={showThemeModal}
          onThemeSelected={handleThemeSelected}
          onSkip={handleSkipTheme}
        />
      </>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
  },
});

export default App;
