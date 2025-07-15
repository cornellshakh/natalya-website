import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Motion preferences hook for accessibility
export function useMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

// Enhanced animation variants that respect motion preferences
export function createAccessibleVariants(
  normalVariants: any,
  reducedVariants?: any
) {
  return (prefersReducedMotion: boolean) => {
    if (prefersReducedMotion && reducedVariants) {
      return reducedVariants;
    }
    if (prefersReducedMotion) {
      // Remove animations while preserving layout changes
      return Object.keys(normalVariants).reduce((acc, key) => {
        acc[key] = {
          ...normalVariants[key],
          transition: { duration: 0 },
        };
        return acc;
      }, {} as any);
    }
    return normalVariants;
  };
}

// ARIA announcement utility for screen readers
export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.setAttribute('class', 'sr-only');
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Clean up after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Focus management utilities
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    }
  };

  element.addEventListener('keydown', handleKeyDown);
  firstElement?.focus();

  return () => {
    element.removeEventListener('keydown', handleKeyDown);
  };
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Memory-safe event listener hook
export function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: HTMLElement | Window = window
) {
  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    element.addEventListener(eventName, handler, { passive: true });

    return () => {
      element.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, element]);
}

// Professional loading states manager
export function createLoadingState<T>(
  asyncFn: () => Promise<T>
): [() => void, boolean, Error | null, T | null] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await asyncFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  return [execute, isLoading, error, data];
}

export function formatCurrency(amount: number, currency: string = 'CZK'): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+420)?\s?[1-9]\d{2}\s?\d{3}\s?\d{3}$/;
  return phoneRegex.test(phone);
}
