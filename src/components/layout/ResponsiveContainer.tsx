import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function ResponsiveContainer({
  children,
  className,
  size = 'lg',
  padding = 'lg',
}: ResponsiveContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-6 sm:px-6 lg:px-8',
    md: 'px-6 py-8 sm:px-8 lg:px-12',
    lg: 'px-6 py-12 sm:px-8 lg:px-12 xl:px-16',
  };

  return (
    <div className={cn('w-full mx-auto', sizeClasses[size], paddingClasses[padding], className)}>
      {children}
    </div>
  );
}
