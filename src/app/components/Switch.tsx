"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
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
    // Base switch styles
    const baseStyles = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    // State styles
    const stateStyles = error
      ? "bg-error focus:ring-error/50"
      : checked
      ? "bg-primary-500 focus:ring-primary-500/50"
      : "bg-neutral-200 focus:ring-primary-500/50";

    // Disabled styles
    const disabledStyles = disabled
      ? "cursor-not-allowed opacity-50"
      : "";

    // Thumb styles
    const thumbStyles = cn(
      "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
      checked ? "translate-x-6" : "translate-x-1",
      disabledStyles
    );

    return (
      <div className="flex items-start">
        <div className="relative">
          <input
            type="checkbox"
            role="switch"
            className={cn(
              baseStyles,
              stateStyles,
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
              baseStyles,
              stateStyles,
              disabledStyles
            )}
          >
            <span className={thumbStyles} />
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

Switch.displayName = "Switch"; 