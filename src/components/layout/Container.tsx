import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'content' | 'default' | 'wide' | 'full';
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer';
}

/**
 * Unified Container Component
 * Replaces all inconsistent padding patterns with responsive design tokens
 * 
 * Sizes:
 * - narrow: 42rem max - Forms, single column content  
 * - content: 48rem max - Articles, blog posts
 * - default: 64rem max - Standard sections (most common)
 * - wide: 80rem max - Wide layouts, grids
 * - full: 90rem max - Full-width layouts
 */
export default function Container({ 
  children, 
  className, 
  size = 'default',
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component className={cn(
      'container-unified',
      size,
      className
    )}>
      {children}
    </Component>
  );
}
