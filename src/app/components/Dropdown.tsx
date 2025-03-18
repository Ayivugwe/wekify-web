"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface DropdownItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  items: DropdownItem[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      label,
      items,
      value,
      onChange,
      disabled,
      error,
      size = "md",
      icon,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    };

    // Base button styles
    const baseStyles = "w-full flex items-center justify-between rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    // State styles
    const stateStyles = error
      ? "border-error focus:ring-error/50"
      : "border-neutral-300 focus:border-primary-500 focus:ring-primary-500/50";

    // Disabled styles
    const disabledStyles = disabled
      ? "bg-neutral-100 cursor-not-allowed"
      : "bg-white hover:border-primary-500";

    // Icon styles
    const iconStyles = icon
      ? "pl-10"
      : "";

    const selectedItem = items.find((item) => item.value === value);

    return (
      <div className="relative w-full">
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
        <button
          type="button"
          className={cn(
            baseStyles,
            stateStyles,
            disabledStyles,
            iconStyles,
            sizeStyles[size],
            className
          )}
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          ref={ref}
          {...props}
        >
          <div className="flex items-center">
            {icon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                {icon}
              </div>
            )}
            <span className="text-neutral-900">
              {selectedItem?.label || "Select an option"}
            </span>
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-neutral-400 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {items.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className={cn(
                    "w-full px-4 py-2 text-left text-sm hover:bg-neutral-50 focus:outline-none focus:bg-neutral-50",
                    item.disabled && "opacity-50 cursor-not-allowed",
                    item.value === value && "bg-primary-50 text-primary-900"
                  )}
                  disabled={item.disabled}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    } else if (onChange) {
                      onChange(item.value);
                    }
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    {item.icon && (
                      <span className="mr-2 text-neutral-400">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown"; 