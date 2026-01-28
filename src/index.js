import React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import { name as appName } from '../app.json';

/**
 * Root component that provides theme context to the entire app
 */
const RootComponent = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

AppRegistry.registerComponent(appName, () => RootComponent);
