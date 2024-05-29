import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "utils/cn";

const buttonVariants = cva(
  "bg-white px-4 py-2 border border-stone-200 rounded font-medium hover:bg-stone-100",
  {
    variants: {
      variant: {
        primary: "inline-flex items-center justify-center",
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
  VariantProps<typeof buttonVariants> & {};

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
