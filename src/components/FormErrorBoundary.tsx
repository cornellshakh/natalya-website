import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Save } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  onFormError?: (error: Error, formData?: any) => void;
  preserveFormData?: boolean;
  formName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  preservedData?: any;
}

// Specialized error boundary for forms with data preservation
export default class FormErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true,
      error,
    };
  }

     public componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    console.error('FormErrorBoundary caught an error:', error);
    
    // Try to preserve form data if enabled
    if (this.props.preserveFormData) {
      this.preserveFormData();
    }

    // Call custom form error handler
    this.props.onFormError?.(error, this.state.preservedData);
  }

  private preserveFormData = () => {
    try {
      // Get all form inputs from the DOM
      const forms = document.querySelectorAll('form');
      const formData: Record<string, any> = {};

      forms.forEach((form, index) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        const formKey = this.props.formName || `form-${index}`;
        formData[formKey] = {};

        inputs.forEach((input: any) => {
          if (input.name || input.id) {
            const key = input.name || input.id;
            
            if (input.type === 'checkbox' || input.type === 'radio') {
              formData[formKey][key] = input.checked;
            } else {
              formData[formKey][key] = input.value;
            }
          }
        });
      });

      this.setState({ preservedData: formData });
      
      // Store in localStorage as backup
      localStorage.setItem('form-recovery-data', JSON.stringify(formData));
    } catch (error) {
      console.error('Failed to preserve form data:', error);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
    });
  };

  private handleRestore = () => {
    try {
      const savedData = localStorage.getItem('form-recovery-data');
      if (savedData) {
        const formData = JSON.parse(savedData);
        
                 // Restore form data
         Object.entries(formData).forEach(([_formKey, data]: [string, any]) => {
          Object.entries(data).forEach(([fieldName, value]: [string, any]) => {
            const input = document.querySelector(`[name="${fieldName}"], #${fieldName}`) as HTMLInputElement;
            if (input) {
              if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = value;
              } else {
                input.value = value;
              }
              
              // Trigger change event for React
              const event = new Event('input', { bubbles: true });
              input.dispatchEvent(event);
            }
          });
        });
        
        // Clear stored data after restoration
        localStorage.removeItem('form-recovery-data');
      }
    } catch (error) {
      console.error('Failed to restore form data:', error);
    }
    
    this.handleRetry();
  };

  public render() {
    if (this.state.hasError) {
      const hasPreservedData = this.state.preservedData || localStorage.getItem('form-recovery-data');

      return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Form Error Detected
              </h3>
              <p className="text-yellow-700 mb-4">
                There was an issue with the form submission. 
                {hasPreservedData ? ' Your data has been preserved and can be restored.' : ' Please try again.'}
              </p>
              
              <div className="flex gap-2">
                {hasPreservedData ? (
                  <Button 
                    onClick={this.handleRestore}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Restore Form Data
                  </Button>
                ) : (
                  <Button 
                    onClick={this.handleRetry}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                )}
              </div>

                             {import.meta.env.MODE === 'development' && this.state.error && (
                <details className="mt-4">
                  <summary className="text-sm text-yellow-600 cursor-pointer">
                    Error Details (Development)
                  </summary>
                  <pre className="mt-2 p-3 bg-yellow-100 rounded text-xs text-yellow-800 overflow-auto">
                    {this.state.error.message}
                    {this.state.error.stack && '\n\n' + this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 