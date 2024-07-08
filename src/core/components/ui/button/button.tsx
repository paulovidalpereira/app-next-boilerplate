import { forwardRef, type ButtonHTMLAttributes } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'core/utils/cn';

const buttonVariants = cva(
    'px-4 py-1.5 border rounded font-medium inline-flex items-center justify-center gap-2 overflow-hidden transition-all',
    {
        variants: {
            variant: {
                primary:
                    'bg-white hover:bg-stone-100 border-stone-200 hover:border-stone-300',
            },
            size: {
                small: 'text-xs',
                medium: 'text-sm',
                large: 'text-base',
            },
            defaultVariants: {
                variant: 'primary',
                size: 'medium',
            },
        },
    },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        icon?: React.ReactNode;
        loading?: boolean;
    };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, icon, loading, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                className={cn(buttonVariants({ variant, size, className }))}
                disabled={loading}
                {...props}
            >
                {icon}
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
