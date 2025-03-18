"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      leftIcon,
      rightIcon,
      disabled,
      options,
      ...props
    },
    ref
  ) => {
    // Base select styles
    const baseStyles = "w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 appearance-none";

    // State styles
    const stateStyles = error
      ? "border-error focus:ring-error/50"
      : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500/50";

    // Disabled styles
    const disabledStyles = disabled
      ? "bg-neutral-100 cursor-not-allowed"
      : "bg-white hover:border-primary-500";

    // Icon styles
    const iconStyles = {
      left: leftIcon ? "pl-10" : "",
      right: rightIcon ? "pr-10" : "",
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}
          <select
            className={cn(
              baseStyles,
              stateStyles,
              disabledStyles,
              iconStyles.left,
              iconStyles.right,
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-neutral-400" />
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select"; 