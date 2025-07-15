
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'default' | 'card' | 'text' | 'avatar' | 'button';
  lines?: number;
  width?: string;
  height?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  animate?: boolean;
}

const Skeleton = ({
  className,
  variant = 'default',
  lines = 1,
  width,
  height,
  rounded = 'md',
  animate = true,
  ...props
}: SkeletonProps) => {
  const baseClasses = cn(
    'bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200',
    'bg-[length:200%_100%]',
    animate && 'animate-[shimmer_2s_ease-in-out_infinite]',
    {
      'rounded-none': rounded === 'none',
      'rounded-sm': rounded === 'sm',
      'rounded-md': rounded === 'md',
      'rounded-lg': rounded === 'lg',
      'rounded-full': rounded === 'full',
    }
  );

  const variants = {
    default: 'h-4 w-full',
    card: 'h-48 w-full rounded-lg',
    text: 'h-4 w-full',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24 rounded-md',
  };

  const style = {
    width: width || undefined,
    height: height || undefined,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              variants[variant],
              i === lines - 1 && 'w-3/4' // Last line is shorter for realism
            )}
            style={style}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(baseClasses, variants[variant], className)}
      style={style}
      {...props}
    />
  );
};

// Compound components for common patterns
const SkeletonCard = ({ className, ...props }: Omit<SkeletonProps, 'variant'>) => (
  <div className={cn('p-6 border rounded-lg space-y-4 bg-white', className)} {...props}>
    <Skeleton variant="text" lines={1} height="6" />
    <Skeleton variant="text" lines={3} />
    <div className="flex justify-between items-center">
      <Skeleton variant="button" />
      <Skeleton variant="avatar" width="32" height="32" />
    </div>
  </div>
);

const SkeletonBlogPost = ({ className, ...props }: Omit<SkeletonProps, 'variant'>) => (
  <div className={cn('p-6 border rounded-lg space-y-4 bg-white', className)} {...props}>
    <div className="flex items-center space-x-3">
      <Skeleton variant="avatar" width="40" height="40" />
      <div className="space-y-2">
        <Skeleton variant="text" width="120" height="4" />
        <Skeleton variant="text" width="80" height="3" />
      </div>
    </div>
    <Skeleton variant="text" lines={1} height="6" />
    <Skeleton variant="text" lines={4} />
    <div className="flex space-x-2">
      <Skeleton variant="button" width="60" height="24" rounded="full" />
      <Skeleton variant="button" width="80" height="24" rounded="full" />
    </div>
  </div>
);

const SkeletonTestimonial = ({ className, ...props }: Omit<SkeletonProps, 'variant'>) => (
  <div className={cn('p-6 border rounded-lg space-y-4 bg-white text-center', className)} {...props}>
    <Skeleton variant="avatar" width="64" height="64" className="mx-auto" />
    <Skeleton variant="text" lines={3} />
    <div className="space-y-2">
      <Skeleton variant="text" width="120" height="5" className="mx-auto" />
      <Skeleton variant="text" width="80" height="4" className="mx-auto" />
    </div>
  </div>
);

const SkeletonService = ({ className, ...props }: Omit<SkeletonProps, 'variant'>) => (
  <div className={cn('p-6 border rounded-lg space-y-4 bg-white text-center', className)} {...props}>
    <Skeleton variant="avatar" width="48" height="48" className="mx-auto" />
    <Skeleton variant="text" width="160" height="6" className="mx-auto" />
    <Skeleton variant="text" width="80" height="8" className="mx-auto" />
    <Skeleton variant="text" lines={3} />
    <Skeleton variant="button" width="120" className="mx-auto" />
  </div>
);



// Export all components
export { 
  Skeleton, 
  SkeletonCard, 
  SkeletonBlogPost, 
  SkeletonTestimonial, 
  SkeletonService 
};

export default Skeleton; 