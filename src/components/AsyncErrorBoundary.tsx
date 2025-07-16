import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onAsyncError?: (error: Error) => void;
  retryFn?: () => Promise<void>;
  checkConnection?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  isRetrying: boolean;
  isOnline: boolean;
}

// Error boundary specifically for async operations and network issues
export default class AsyncErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  public state: State = {
    hasError: false,
    isRetrying: false,
    isOnline: navigator.onLine,
  };

  public componentDidMount() {
    // Listen for unhandled promise rejections
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
    
    // Listen for online/offline events if connection checking is enabled
    if (this.props.checkConnection) {
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
    }
  }

  public componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
    
    if (this.props.checkConnection) {
      window.removeEventListener('online', this.handleOnline);
      window.removeEventListener('offline', this.handleOffline);
    }
  }

  private handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    console.error('Unhandled promise rejection:', event.reason);
    
         // Check if this is a network error
     this.isNetworkError(event.reason);
    
    this.setState({
      hasError: true,
      error: new Error(event.reason?.message || 'Async operation failed'),
    });

    this.props.onAsyncError?.(event.reason);
  };

  private handleOnline = () => {
    this.setState({ isOnline: true });
  };

  private handleOffline = () => {
    this.setState({ isOnline: false });
  };

  private isNetworkError = (error: any): boolean => {
    if (!error) return false;
    
    const networkErrorMessages = [
      'network error',
      'fetch failed',
      'failed to fetch',
      'no internet connection',
      'timeout',
      'connection refused',
    ];

    const errorMessage = error.message?.toLowerCase() || '';
    return networkErrorMessages.some(msg => errorMessage.includes(msg));
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true,
      error,
    };
  }

     public componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    console.error('AsyncErrorBoundary caught an error:', error);
    this.props.onAsyncError?.(error);
  }

  private handleRetry = async () => {
    if (this.retryCount >= this.maxRetries) {
      return;
    }

    this.setState({ isRetrying: true });
    this.retryCount++;

    try {
      if (this.props.retryFn) {
        await this.props.retryFn();
      }
      
      // Reset error state if retry succeeds
      this.setState({
        hasError: false,
        error: undefined,
        isRetrying: false,
      });
    } catch (error) {
      console.error('Retry failed:', error);
      this.setState({
        isRetrying: false,
        error: error instanceof Error ? error : new Error('Retry failed'),
      });
    }
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      isRetrying: false,
    });
    this.retryCount = 0;
  };

  private renderErrorFallback() {
    const { error, isRetrying, isOnline } = this.state;
    const canRetry = this.retryCount < this.maxRetries && this.props.retryFn;
    const isNetworkError = error && this.isNetworkError(error);

    if (this.props.fallback) {
      return this.props.fallback;
    }

    return (
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3 mt-1">
            {isNetworkError ? (
              isOnline ? (
                <Wifi className="w-6 h-6 text-orange-600" />
              ) : (
                <WifiOff className="w-6 h-6 text-orange-600" />
              )
            ) : (
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-orange-800 mb-2">
              {isNetworkError ? 'Connection Issue' : 'Loading Error'}
            </h3>
            
            <p className="text-orange-700 mb-4">
              {isNetworkError 
                ? isOnline 
                  ? 'Unable to connect to the server. Please check your connection and try again.'
                  : 'You appear to be offline. Please check your internet connection.'
                : 'There was an issue loading this content. Please try again.'
              }
            </p>

            {!isOnline && (
              <div className="bg-orange-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-orange-800 flex items-center">
                  <WifiOff className="w-4 h-4 mr-2" />
                  Currently offline. The page will automatically retry when connection is restored.
                </p>
              </div>
            )}

            <div className="flex gap-2">
              {canRetry && (
                <Button 
                  onClick={this.handleRetry}
                  disabled={isRetrying || !isOnline}
                  className="bg-orange-600 hover:bg-orange-700 disabled:opacity-50"
                >
                  {isRetrying ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Retrying...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Retry ({this.maxRetries - this.retryCount} left)
                    </>
                  )}
                </Button>
              )}
              
              <Button 
                variant="outline" 
                onClick={this.handleReset}
                className="text-orange-700 border-orange-300 hover:bg-orange-50"
              >
                Reset
              </Button>
            </div>

                         {import.meta.env.MODE === 'development' && error && (
              <details className="mt-4">
                <summary className="text-sm text-orange-600 cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-3 bg-orange-100 rounded text-xs text-orange-800 overflow-auto">
                  {error.message}
                  {error.stack && '\n\n' + error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    );
  }

  public render() {
    if (this.state.hasError) {
      return this.renderErrorFallback();
    }

    return this.props.children;
  }
} 