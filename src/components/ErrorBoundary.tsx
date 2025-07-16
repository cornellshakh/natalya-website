import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: 'full-page' | 'component' | 'minimal';
  showReload?: boolean;
  showHome?: boolean;
  showRetry?: boolean;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  context?: string; // For error reporting context
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
}

// Enhanced error boundary with retry mechanism and configurable fallbacks
export default class ErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  public state: State = {
    hasError: false,
    retryCount: 0,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true,
      error,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error);
    console.error('Error info:', errorInfo);
    
    // Update state with error details
    this.setState({ errorInfo });

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Report to error monitoring service (if available)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real app, send to error monitoring service like Sentry
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      context: this.props.context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // For now, just log it - in production, send to monitoring service
    console.error('Error Report:', errorReport);
    
    // Store in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('app-errors') || '[]');
      existingErrors.push(errorReport);
      localStorage.setItem('app-errors', JSON.stringify(existingErrors.slice(-10))); // Keep last 10
    } catch (e) {
      console.error('Failed to store error in localStorage:', e);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: this.state.retryCount + 1,
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private renderFallback() {
    const { 
      fallback = 'full-page', 
      showReload = true, 
      showHome = true, 
      showRetry = true 
    } = this.props;
    const { error, retryCount } = this.state;
    const canRetry = showRetry && retryCount < this.maxRetries;

    const errorMessage = error?.message || 'An unexpected error occurred';
         const isDevelopment = import.meta.env.MODE === 'development';

    // Minimal fallback for small components
    if (fallback === 'minimal') {
      return (
        <div className="flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-center">
            <AlertTriangle className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-red-700 mb-2">Something went wrong</p>
            {canRetry && (
              <Button 
                size="sm" 
                variant="outline" 
                onClick={this.handleRetry}
                className="text-red-700 border-red-300 hover:bg-red-50"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Retry
              </Button>
            )}
          </div>
        </div>
      );
    }

    // Component-level fallback
    if (fallback === 'component') {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Component Error
              </h3>
              <p className="text-red-700 mb-4">
                This section is temporarily unavailable. {canRetry ? 'Please try again.' : 'Please refresh the page.'}
              </p>
              
              {isDevelopment && (
                <details className="mb-4">
                  <summary className="text-sm text-red-600 cursor-pointer hover:text-red-800">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 p-3 bg-red-100 rounded text-xs text-red-800 overflow-auto">
                    {errorMessage}
                    {error?.stack && '\n\nStack trace:\n' + error.stack}
                  </pre>
                </details>
              )}

              <div className="flex gap-2">
                {canRetry && (
                  <Button 
                    size="sm" 
                    onClick={this.handleRetry}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retry ({this.maxRetries - retryCount} attempts left)
                  </Button>
                )}
                {showReload && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={this.handleReload}
                    className="text-red-700 border-red-300 hover:bg-red-50"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reload Page
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Full-page fallback (default)
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-gray-600 mb-6">
            We encountered an unexpected error. This has been reported to our team.
          </p>

          {isDevelopment && (
            <details className="mb-6 text-left">
              <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700 mb-2">
                <Bug className="w-4 h-4 inline mr-1" />
                Error Details (Development)
              </summary>
              <div className="p-4 bg-gray-100 rounded-lg text-xs text-gray-800 overflow-auto max-h-40">
                <div className="font-semibold mb-2">Error: {errorMessage}</div>
                {error?.stack && (
                  <pre className="whitespace-pre-wrap">{error.stack}</pre>
                )}
              </div>
            </details>
          )}

          <div className="space-y-3">
            {canRetry && (
              <Button 
                onClick={this.handleRetry}
                className="w-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again ({this.maxRetries - retryCount} attempts left)
              </Button>
            )}
            
            {showReload && (
              <Button 
                variant="outline" 
                onClick={this.handleReload}
                className="w-full"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
              </Button>
            )}
            
            {showHome && (
              <Button 
                variant="outline" 
                onClick={this.handleGoHome}
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Error ID: {Date.now().toString(36)}
          </p>
        </div>
      </div>
    );
  }

  public render() {
    if (this.state.hasError) {
      return this.renderFallback();
    }

    return this.props.children;
  }
}
