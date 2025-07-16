
import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animate?: boolean;
}

function Skeleton({
  className,
  variant = 'default',
  width,
  height,
  animate = true,
  style,
  ...props
}: SkeletonProps) {
  const baseStyles = 'bg-neutral-200 rounded-md';
  
  const variantStyles = {
    default: 'h-4',
    text: 'h-4 w-full',
    circular: 'rounded-full',
    rectangular: 'rounded-md',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        // Use GPU-accelerated shimmer animation
        animate && 'loading-shimmer transform-gpu',
        className
      )}
      style={{
        width,
        height,
        // GPU optimization
        willChange: animate ? 'transform' : 'auto',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        ...style,
      }}
      role="progressbar"
      aria-label="Loading content"
      aria-busy="true"
      {...props}
    />
  );
}

export { Skeleton }; 