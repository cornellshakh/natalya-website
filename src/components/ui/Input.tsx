import React, { useState, forwardRef, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, useMotionPreference, announceToScreenReader } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'floating' | 'minimal';
  loading?: boolean;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type,
    label,
    error,
    success,
    hint,
    leftIcon,
    rightIcon,
    variant = 'default',
    loading,
    showPasswordToggle,
    disabled,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    ...props
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const prefersReducedMotion = useMotionPreference();
    
    // Generate unique IDs for accessibility
    const inputId = useId();
    const hintId = useId();
    const errorId = useId();
    const successId = useId();

    const actualType = showPasswordToggle && type === 'password' 
      ? (showPassword ? 'text' : 'password') 
      : type;

    useEffect(() => {
      setHasValue(Boolean(value));
    }, [value]);

    // Announce validation state changes to screen readers
    useEffect(() => {
      if (error) {
        announceToScreenReader(`Validation error: ${error}`);
      } else if (success) {
        announceToScreenReader(`Validation success: ${success}`);
      }
    }, [error, success]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(Boolean(e.target.value));
      onChange?.(e);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      announceToScreenReader(showPassword ? 'Password hidden' : 'Password visible');
    };

    // Enhanced keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow Escape to clear focus for better keyboard navigation
      if (e.key === 'Escape') {
        e.currentTarget.blur();
      }
      props.onKeyDown?.(e);
    };

    const inputClasses = cn(
      'flex h-12 w-full rounded-lg border px-4 py-3 text-sm transition-all duration-200',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-neutral-400',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'autofill:bg-white autofill:text-fill-color-inherit',
      // Enhanced focus states
      isFocused && 'ring-2 ring-brand-emerald ring-offset-2',
      // Status-based styling
      error 
        ? 'border-red-300 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500' 
        : success 
        ? 'border-green-300 bg-green-50 text-green-900 focus:border-green-500 focus:ring-green-500'
        : 'border-neutral-200 bg-white focus:border-brand-emerald',
      // Spacing adjustments
      leftIcon && 'pl-10',
      (rightIcon || showPasswordToggle || loading || error || success) && 'pr-12',
      variant === 'floating' && 'pt-6 pb-2',
      variant === 'minimal' && 'border-0 border-b border-neutral-200 rounded-none px-0 focus:border-brand-emerald focus:ring-0',
      className
    );

    const renderPasswordToggle = () => {
      if (!showPasswordToggle || type !== 'password') return null;

      return (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:ring-offset-2 rounded p-1"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={0}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      );
    };

    const renderStatusIcon = () => {
      if (loading) {
        return (
          <div 
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-emerald border-t-transparent" />
          </div>
        );
      }

      if (error) {
        return (
          <AlertCircle 
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-500" 
            aria-hidden="true"
          />
        );
      }

      if (success) {
        return (
          <CheckCircle2 
            className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" 
            aria-hidden="true"
          />
        );
      }

      if (rightIcon) {
        return (
          <div 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
            aria-hidden="true"
          >
            {rightIcon}
          </div>
        );
      }

      return null;
    };

    // Floating label variant
    if (variant === 'floating') {
      return (
        <div className="relative">
          <div className="relative">
            {leftIcon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 z-10">
                {leftIcon}
              </div>
            )}
            
            <input
              type={actualType}
              ref={ref}
              id={inputId}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              className={inputClasses}
              placeholder=" " // Required for floating label
              aria-describedby={cn(
                hint && hintId,
                error && errorId,
                success && successId
              )}
              aria-invalid={error ? 'true' : 'false'}
              aria-required={props.required}
              {...props}
            />
            
            {/* Floating Label */}
            {label && (
              <motion.label
                htmlFor={inputId}
                animate={prefersReducedMotion ? {} : {
                  top: isFocused || hasValue ? '8px' : '50%',
                  fontSize: isFocused || hasValue ? '12px' : '16px',
                  transform: isFocused || hasValue 
                    ? 'translateY(0)' 
                    : 'translateY(-50%)',
                  color: error 
                    ? '#ef4444' 
                    : isFocused 
                      ? '#059669' 
                      : '#6b7280'
                }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' }}
                className={cn(
                  'absolute left-4 pointer-events-none font-medium',
                  leftIcon && 'left-10'
                )}
              >
                {label}
              </motion.label>
            )}
            
            {renderPasswordToggle()}
            {renderStatusIcon()}
          </div>
          
          {/* Messages */}
          <AnimatePresence>
            {(error || success || hint) && (
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: -5 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? {} : { opacity: 0, y: -5 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
                className="mt-2 space-y-1"
              >
                {error && (
                  <p 
                    id={errorId}
                    className="text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                    aria-live="polite"
                  >
                    <AlertCircle className="w-3 h-3" />
                    {error}
                  </p>
                )}
                {success && !error && (
                  <p 
                    id={successId}
                    className="text-sm text-green-600 flex items-center gap-1"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {success}
                  </p>
                )}
                {hint && !error && !success && (
                  <p 
                    id={hintId}
                    className="text-sm text-neutral-500"
                    aria-live="polite"
                  >
                    {hint}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    // Default and minimal variants
    return (
      <div className="space-y-2">
        {label && (variant === 'default' || variant === 'minimal') && (
          <motion.label
            htmlFor={inputId}
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            className={cn(
              'block text-sm font-medium transition-colors',
              error ? 'text-red-700' : 'text-neutral-700'
            )}
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1" aria-label="required">*</span>
            )}
          </motion.label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={actualType}
            ref={ref}
            id={inputId}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            className={inputClasses}
            aria-describedby={cn(
              hint && hintId,
              error && errorId,
              success && successId
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-required={props.required}
            {...props}
          />
          
          {renderPasswordToggle()}
          {renderStatusIcon()}
        </div>
        
        {/* Messages */}
        <AnimatePresence>
          {(error || success || hint) && (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: -5 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? {} : { opacity: 0, y: -5 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
              className="space-y-1"
            >
              {error && (
                <p 
                  id={errorId}
                  className="text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="w-3 h-3" />
                  {error}
                </p>
              )}
              {success && !error && (
                <p 
                  id={successId}
                  className="text-sm text-green-600 flex items-center gap-1"
                  aria-live="polite"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  {success}
                </p>
              )}
              {hint && !error && !success && (
                <p 
                  id={hintId}
                  className="text-sm text-neutral-500"
                >
                  {hint}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
