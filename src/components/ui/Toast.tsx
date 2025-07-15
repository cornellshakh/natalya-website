import { createContext, useContext, ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { useMotionPreference, announceToScreenReader } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
}

interface ToastContextType {
  toasts: Toast[];
  showToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  maxToasts?: number;
}

export function ToastProvider({ 
  children, 
  position = 'top-right',
  maxToasts = 5 
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeoutRefs = useRef<Map<string, number>>(new Map());

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
    
    // Clear timeout if exists
    const timeout = timeoutRefs.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(id);
    }
  }, []);

  const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = {
      id,
      dismissible: true,
      duration: 5000,
      ...toast,
    };

    setToasts(prev => {
      const updated = [...prev, newToast];
      // Limit number of toasts
      if (updated.length > maxToasts) {
        const removed = updated.splice(0, updated.length - maxToasts);
        removed.forEach(removedToast => {
          const timeout = timeoutRefs.current.get(removedToast.id);
          if (timeout) {
            clearTimeout(timeout);
            timeoutRefs.current.delete(removedToast.id);
          }
        });
      }
      return updated;
    });

    // Auto-dismiss after duration
    if (newToast.duration && newToast.duration > 0) {
      const timeout = setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
      
      timeoutRefs.current.set(id, timeout);
    }

    // Announce to screen readers
    const message = toast.description 
      ? `${toast.title}. ${toast.description}` 
      : toast.title;
    announceToScreenReader(message);
  }, [removeToast, maxToasts]);

  const clearAll = useCallback(() => {
    // Clear all timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    timeoutRefs.current.clear();
    setToasts([]);
  }, []);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'top-4 right-4';
    }
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast, clearAll }}>
      {children}
      <ToastContainer 
        toasts={toasts} 
        onRemove={removeToast} 
        position={position}
        className={getPositionClasses()}
      />
    </ToastContext.Provider>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
  position: string;
  className: string;
}

function ToastContainer({ toasts, onRemove, className }: ToastContainerProps) {
  const prefersReducedMotion = useMotionPreference();

  return (
    <div 
      className={`fixed z-50 space-y-2 max-w-sm w-full ${className}`}
      aria-live="polite"
      aria-label="Notifications"
      role="region"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map(toast => (
          <ToastItem 
            key={toast.id} 
            toast={toast} 
            onRemove={onRemove}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
  prefersReducedMotion: boolean;
}

function ToastItem({ toast, onRemove, prefersReducedMotion }: ToastItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info,
  };

  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200 ring-green-600/20',
    error: 'bg-red-50 text-red-800 border-red-200 ring-red-600/20',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 ring-yellow-600/20',
    info: 'bg-blue-50 text-blue-800 border-blue-200 ring-blue-600/20',
  };

  const iconStyles = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400',
  };

  const Icon = icons[toast.type];

  // Enhanced keyboard handling
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && toast.dismissible) {
      onRemove(toast.id);
    }
  };

  // Auto-focus for important alerts
  useEffect(() => {
    if (toast.type === 'error' && toastRef.current) {
      toastRef.current.focus();
    }
  }, [toast.type]);

  const animationVariants = prefersReducedMotion 
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, x: 100, scale: 0.3 },
        animate: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 0, x: 100, scale: 0.5 },
      };

  const animationTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 300, damping: 30 };

  return (
    <motion.div
      ref={toastRef}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={animationTransition}
      layout={!prefersReducedMotion}
      className={`
        max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto 
        ring-1 ring-black ring-opacity-5 overflow-hidden border
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${styles[toast.type]}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={toast.type === 'error' ? 0 : -1}
      role="alert"
      aria-live={toast.type === 'error' ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon className={`h-6 w-6 ${iconStyles[toast.type]}`} aria-hidden="true" />
          </div>
          
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium">{toast.title}</p>
            {toast.description && (
              <p className="mt-1 text-sm opacity-90">{toast.description}</p>
            )}
            
            {toast.action && (
              <div className="mt-3">
                <button
                  onClick={toast.action.onClick}
                  className="text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded"
                >
                  {toast.action.label}
                </button>
              </div>
            )}
          </div>
          
          {toast.dismissible && (
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className="inline-flex rounded-md p-1.5 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current transition-colors"
                onClick={() => onRemove(toast.id)}
                aria-label="Dismiss notification"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
        
        {/* Progress bar for timed toasts */}
        {toast.duration && toast.duration > 0 && !isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-current opacity-30"
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : toast.duration / 1000,
              ease: 'linear'
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

// Convenience functions for common toast types
export const toast = {
  success: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    context.showToast({ type: 'success', title, description, ...options });
  },
  
  error: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    context.showToast({ type: 'error', title, description, duration: 0, ...options }); // Don't auto-dismiss errors
  },
  
  warning: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    context.showToast({ type: 'warning', title, description, ...options });
  },
  
  info: (title: string, description?: string, options?: Partial<Toast>) => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    context.showToast({ type: 'info', title, description, ...options });
  },
};
