import { VariantProps, cva } from "class-variance-authority";
import { cn } from "core/utils/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "px-4 py-2 border rounded font-medium inline-flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        primary: "bg-white hover:bg-stone-100 border-stone-200 hover:border-stone-300",
      },
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-base",
      },
      defaultVariants: {
        variant: "primary",
        size: "medium",
      },
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
