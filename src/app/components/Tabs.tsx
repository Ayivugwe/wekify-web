"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface Tab {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  variant?: "default" | "pills" | "underline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      tabs,
      value,
      onChange,
      variant = "default",
      size = "md",
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    };

    // Variant styles
    const variantStyles = {
      default: {
        base: "border-b border-neutral-200",
        tab: "border-b-2 border-transparent hover:border-neutral-300 hover:text-neutral-700",
        active: "border-primary-500 text-primary-600",
      },
      pills: {
        base: "space-x-1",
        tab: "rounded-full hover:bg-neutral-100",
        active: "bg-primary-100 text-primary-600",
      },
      underline: {
        base: "border-b border-neutral-200",
        tab: "border-b-2 border-transparent hover:border-neutral-300 hover:text-neutral-700",
        active: "border-primary-500 text-primary-600",
      },
    };

    // Width styles
    const widthStyles = fullWidth
      ? "flex-1 justify-center"
      : "";

    return (
      <div
        className={cn(
          "flex",
          variantStyles[variant].base,
          className
        )}
        ref={ref}
        {...props}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={cn(
              "inline-flex items-center whitespace-nowrap font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              sizeStyles[size],
              variantStyles[variant].tab,
              tab.value === value && variantStyles[variant].active,
              tab.disabled && "opacity-50 cursor-not-allowed",
              widthStyles
            )}
            disabled={tab.disabled}
            onClick={() => onChange(tab.value)}
          >
            {tab.icon && (
              <span className="mr-2 text-current">
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>
    );
  }
);

Tabs.displayName = "Tabs"; 