import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-brand-emerald text-white hover:bg-brand-emerald/90',
        secondary: 'border-transparent bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
        outline: 'text-brand-emerald border-brand-emerald',
        success: 'border-transparent bg-success text-white hover:bg-success/90',
        warning: 'border-transparent bg-warning text-white hover:bg-warning/90',
        error: 'border-transparent bg-error text-white hover:bg-error/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
