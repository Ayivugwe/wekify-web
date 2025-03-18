"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      children,
      variant = "default",
      size = "md",
      dot,
      ...props
    },
    ref
  ) => {
    // Base badge styles
    const baseStyles = "inline-flex items-center font-medium rounded-full";

    // Variant styles
    const variantStyles = {
      default: "bg-neutral-100 text-neutral-800",
      primary: "bg-primary-100 text-primary-800",
      secondary: "bg-secondary-100 text-secondary-800",
      success: "bg-success-100 text-success-800",
      warning: "bg-warning-100 text-warning-800",
      error: "bg-error-100 text-error-800",
    };

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-1",
      lg: "text-base px-3 py-1.5",
    };

    // Dot styles
    const dotStyles = dot
      ? "pl-1.5"
      : "";

    return (
      <span
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          dotStyles,
          className
        )}
        ref={ref}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "mr-1.5 h-1.5 w-1.5 rounded-full",
              variantStyles[variant].split(" ")[0]
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge"; 