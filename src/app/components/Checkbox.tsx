"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      error,
      disabled,
      checked,
      onChange,
      ...props
    },
    ref
  ) => {
    // Base checkbox styles
    const baseStyles = "h-4 w-4 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    // State styles
    const stateStyles = error
      ? "border-error focus:ring-error/50"
      : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500/50";

    // Checked styles
    const checkedStyles = checked
      ? "bg-primary-500 border-primary-500"
      : "bg-white hover:border-primary-500";

    // Disabled styles
    const disabledStyles = disabled
      ? "bg-neutral-100 cursor-not-allowed"
      : "";

    return (
      <div className="flex items-start">
        <div className="relative">
          <input
            type="checkbox"
            className={cn(
              baseStyles,
              stateStyles,
              checkedStyles,
              disabledStyles,
              "sr-only",
              className
            )}
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            ref={ref}
            {...props}
          />
          <div
            className={cn(
              "h-4 w-4 rounded border flex items-center justify-center transition-colors",
              stateStyles,
              checkedStyles,
              disabledStyles
            )}
          >
            {checked && (
              <Check className="h-3 w-3 text-white" />
            )}
          </div>
        </div>
        {label && (
          <label className="ml-2 text-sm text-neutral-700">
            {label}
          </label>
        )}
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox"; 