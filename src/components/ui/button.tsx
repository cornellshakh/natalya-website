import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn, useMotionPreference, announceToScreenReader } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        default:
          'bg-brand-emerald text-white shadow-md hover:bg-brand-emerald/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
        destructive:
          'bg-red-500 text-white shadow-md hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
        outline:
          'border border-neutral-300 bg-white text-neutral-900 shadow-sm hover:bg-neutral-50 hover:border-brand-emerald hover:text-brand-emerald hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
        secondary:
          'bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95',
        ghost:
          'text-neutral-900 hover:bg-neutral-100 hover:text-brand-emerald hover:scale-105 active:scale-95',
        link: 'text-brand-emerald underline-offset-4 hover:underline hover:text-brand-emerald/80',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8 text-base',
        xl: 'h-14 rounded-lg px-10 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  ripple?: boolean;
  success?: boolean;
  error?: boolean;
  'aria-describedby'?: string;
  'aria-expanded'?: boolean;
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild: _asChild = false, 
    loading, 
    ripple = true, 
    success,
    error,
    children, 
    disabled, 
    onClick,
    'aria-describedby': ariaDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-haspopup': ariaHasPopup,
    ...props 
  }, ref) => {
    const [isClicked, setIsClicked] = React.useState(false);
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
    const prefersReducedMotion = useMotionPreference();
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    // Merge refs
    React.useImperativeHandle(ref, () => buttonRef.current!);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;

      // Ripple effect (only if motion is allowed)
      if (ripple && variant !== 'link' && variant !== 'ghost' && !prefersReducedMotion) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const size = Math.max(rect.width, rect.height);

        const newRipple = {
          id: Date.now(),
          x: x - size / 2,
          y: y - size / 2,
          size,
        };

        setRipples(prev => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 600);
      }

      // Click animation (respect motion preferences)
      if (!prefersReducedMotion) {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150);
      }

      // Call original onClick
      onClick?.(e);

      // Announce success/error states to screen readers
      if (success) {
        announceToScreenReader('Action completed successfully');
      } else if (error) {
        announceToScreenReader('An error occurred');
      }
    };

    // Enhanced keyboard handling
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      // Enhanced keyboard interaction
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        buttonRef.current?.click();
      }
      props.onKeyDown?.(e);
    };

    // Generate accessible classes based on motion preferences
    const getAccessibleClasses = () => {
      const baseClasses = buttonVariants({ variant, size, className });
      
      if (prefersReducedMotion) {
        // Remove transform animations for reduced motion
        return baseClasses.replace(/hover:-translate-y-0\.5/g, '')
          .replace(/active:translate-y-0/g, '')
          .replace(/active:scale-95/g, '')
          .replace(/hover:scale-105/g, '');
      }
      
      return baseClasses;
    };

    return (
      <button
        ref={buttonRef}
        className={cn(
          getAccessibleClasses(),
          loading && 'cursor-wait',
          success && 'bg-green-500 hover:bg-green-600',
          error && 'bg-red-500 hover:bg-red-600',
          !prefersReducedMotion && isClicked && variant !== 'link' && 'scale-95',
          // Enhanced GPU acceleration
          'transform-gpu button-gpu force-gpu-layer'
        )}
        disabled={disabled || loading}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-describedby={ariaDescribedBy}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHasPopup}
        aria-busy={loading}
        aria-live={success || error ? 'polite' : undefined}
        {...props}
      >
        {/* Ripple effect container */}
        {ripple && variant !== 'link' && variant !== 'ghost' && !prefersReducedMotion && (
          <span className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute bg-white/30 rounded-full animate-ping"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size,
                  animationDuration: '600ms',
                  animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            ))}
          </span>
        )}

        {/* Loading spinner */}
        {loading && (
          <div 
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        )}

        {/* Success indicator */}
        {success && !loading && (
          <svg 
            className="mr-2 h-4 w-4"
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}

        {/* Error indicator */}
        {error && !loading && (
          <svg 
            className="mr-2 h-4 w-4"
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}

        {/* Shine effect on hover (only if motion allowed) */}
        {variant === 'default' && !prefersReducedMotion && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        )}

        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
