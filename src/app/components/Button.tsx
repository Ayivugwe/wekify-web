"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "primary" | "link" | "danger" | "success";
  size?: "default" | "sm" | "lg" | "md" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "default", isLoading = false, leftIcon, rightIcon, fullWidth = false, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    // Base button styles
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    // Variant styles
    const variantStyles = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
      secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500",
      outline: "bg-transparent border border-neutral-300 hover:bg-neutral-50 focus:ring-primary-500 text-neutral-800",
      ghost: "bg-transparent hover:bg-neutral-100 focus:ring-primary-500 text-neutral-800",
      link: "bg-transparent text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline focus:ring-primary-500",
      danger: "bg-error text-white hover:bg-error/90 focus:ring-error",
      success: "bg-success text-white hover:bg-success/90 focus:ring-success",
    };

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-md",
      md: "text-sm px-4 py-2 rounded-lg",
      lg: "text-base px-5 py-2.5 rounded-lg",
      xl: "text-lg px-6 py-3 rounded-xl",
    };

    // Loading and disabled styles
    const statusStyles = 
      (isLoading || disabled) ? "opacity-70 cursor-not-allowed" : "transform hover:-translate-y-0.5 active:translate-y-0";

    // Width styles
    const widthStyles = fullWidth ? "w-full" : "";
    
    return (
      <Comp
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          statusStyles,
          widthStyles,
          className
        )}
        disabled={isLoading || disabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!isLoading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
