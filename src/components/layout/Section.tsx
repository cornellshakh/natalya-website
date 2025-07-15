import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'narrow' | 'content' | 'default' | 'wide' | 'full';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'navy' | 'emerald' | 'gradient';
  as?: 'section' | 'div' | 'main' | 'article' | 'header' | 'footer';
  fullWidth?: boolean; // Option to skip container wrapper
}

/**
 * Unified Section Component
 * Replaces all inconsistent py-8, py-12, py-16, py-20, py-24 patterns
 *
 * Spacing:
 * - xs: 2-3rem - Tight sections, small components
 * - sm: 3-4rem - Compact sections
 * - md: 4-6rem - Standard sections (default)
 * - lg: 5-8rem - Generous sections
 * - xl: 6-10rem - Hero sections, major breaks
 */
export default function Section({
  children,
  className,
  containerSize = 'default',
  spacing = 'md',
  background = 'white',
  as: Component = 'section',
  fullWidth = false,
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    navy: 'bg-brand-navy text-white',
    emerald: 'bg-brand-emerald text-white',
    gradient: 'bg-gradient-to-br from-neutral-50 to-white',
  };

  const content = fullWidth ? children : <Container size={containerSize}>{children}</Container>;

  return (
    <Component className={cn('section-unified', spacing, backgroundClasses[background], className)}>
      {content}
    </Component>
  );
}
