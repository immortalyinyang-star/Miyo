import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

/**
 * Custom Error Types for Miyo
 */
export class MiyoError extends Error {
  constructor(message, code = 'UNKNOWN_ERROR', context = {}) {
    super(message);
    this.name = 'MiyoError';
    this.code = code;
    this.context = context;
    this.timestamp = new Date();
  }
}

export class EPUBParseError extends MiyoError {
  constructor(message, context = {}) {
    super(message, 'EPUB_PARSE_ERROR', context);
    this.name = 'EPUBParseError';
  }
}

export class StorageError extends MiyoError {
  constructor(message, context = {}) {
    super(message, 'STORAGE_ERROR', context);
    this.name = 'StorageError';
  }
}

export class PermissionError extends MiyoError {
  constructor(message, context = {}) {
    super(message, 'PERMISSION_ERROR', context);
    this.name = 'PermissionError';
  }
}

export class ValidationError extends MiyoError {
  constructor(message, context = {}) {
    super(message, 'VALIDATION_ERROR', context);
    this.name = 'ValidationError';
  }
}

/**
 * Error Logger - Logs errors to console and file
 */
class ErrorLogger {
  constructor() {
    this.logs = [];
    this.maxLogs = 1000;
  }

  log(error, context = {}) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      name: error.name || 'Error',
      message: error.message,
      code: error.code || 'UNKNOWN',
      stack: error.stack,
      context: { ...error.context, ...context },
    };

    this.logs.push(errorLog);

    // Keep only recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Log to console
    console.error(`[${errorLog.name}] ${errorLog.message}`, {
      code: errorLog.code,
      context: errorLog.context,
    });

    return errorLog;
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
  }

  exportLogs() {
    return JSON.stringify(this.logs, null, 2);
  }
}

export const errorLogger = new ErrorLogger();

/**
 * Error Handler - Handles different error types
 */
export class ErrorHandler {
  static handle(error, context = {}) {
    // Log the error
    const loggedError = errorLogger.log(error, context);

    // Determine error type and user message
    let userMessage = 'An unexpected error occurred';
    let shouldShow = true;

    if (error instanceof EPUBParseError) {
      userMessage = 'Failed to read EPUB file. The file may be corrupted or unsupported.';
    } else if (error instanceof StorageError) {
      userMessage = 'Failed to access storage. Please check permissions and available space.';
    } else if (error instanceof PermissionError) {
      userMessage = 'Permission denied. Please grant the required permissions in app settings.';
    } else if (error instanceof ValidationError) {
      userMessage = error.message;
    } else if (error.code === 'ENOENT') {
      userMessage = 'File not found.';
    } else if (error.code === 'EACCES') {
      userMessage = 'Permission denied.';
    }

    return {
      ...loggedError,
      userMessage,
      shouldShow,
    };
  }

  static showAlert(error, onRetry = null) {
    const handled = this.handle(error);
    
    const buttons = [{ text: 'OK', onPress: () => {} }];
    if (onRetry) {
      buttons.unshift({ text: 'Retry', onPress: onRetry });
    }

    Alert.alert('Error', handled.userMessage, buttons);
  }
}

/**
 * Error Boundary Component
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error
    errorLogger.log(error, {
      componentStack: errorInfo.componentStack,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ScrollView style={styles.container}>
          <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Something Went Wrong</Text>
            <Text style={styles.errorMessage}>
              An unexpected error occurred. Please try again or contact support if the problem persists.
            </Text>

            {__DEV__ && this.state.error && (
              <>
                <Text style={styles.debugTitle}>Debug Information:</Text>
                <Text style={styles.errorStack}>
                  {this.state.error.toString()}
                </Text>
                {this.state.errorInfo && (
                  <Text style={styles.errorStack}>
                    {this.state.errorInfo.componentStack}
                  </Text>
                )}
              </>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={this.handleReset}
            >
              <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    return this.props.children;
  }
}

/**
 * Safe Async Function Wrapper
 */
export const safeAsync = async (asyncFn, context = {}) => {
  try {
    return await asyncFn();
  } catch (error) {
    const handled = ErrorHandler.handle(error, context);
    throw error;
  }
};

/**
 * Safe Render Helper
 */
export const safeRender = (renderFn, fallback = null) => {
  try {
    return renderFn();
  } catch (error) {
    errorLogger.log(error, { location: 'safeRender' });
    return fallback || <Text>Failed to render</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  errorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 12,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
    marginTop: 20,
    marginBottom: 8,
  },
  errorStack: {
    fontSize: 12,
    color: '#999999',
    fontFamily: 'monospace',
    backgroundColor: '#EFEFEF',
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ErrorHandler;
