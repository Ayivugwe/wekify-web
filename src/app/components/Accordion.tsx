"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  defaultOpen?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "bordered";
  size?: "sm" | "md" | "lg";
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      items,
      defaultOpen,
      onValueChange,
      variant = "default",
      size = "md",
      ...props
    },
    ref
  ) => {
    const [openItem, setOpenItem] = React.useState<string | undefined>(
      defaultOpen
    );

    // Size styles
    const sizeStyles = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    };

    // Variant styles
    const variantStyles = {
      default: {
        item: "border-b border-neutral-200 last:border-0",
        button: "hover:bg-neutral-50",
      },
      bordered: {
        item: "border border-neutral-200 rounded-lg mb-2 last:mb-0",
        button: "hover:bg-neutral-50",
      },
    };

    const handleToggle = (title: string) => {
      const newValue = openItem === title ? undefined : title;
      setOpenItem(newValue);
      onValueChange?.(newValue || "");
    };

    return (
      <div
        className={cn(
          "divide-y divide-neutral-200",
          variant === "bordered" && "divide-y-0",
          className
        )}
        ref={ref}
        {...props}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className={cn(
              variantStyles[variant].item
            )}
          >
            <button
              type="button"
              className={cn(
                "w-full flex items-center justify-between font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                sizeStyles[size],
                variantStyles[variant].button,
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
              disabled={item.disabled}
              onClick={() => handleToggle(item.title)}
            >
              <div className="flex items-center">
                {item.icon && (
                  <span className="mr-2 text-neutral-400">
                    {item.icon}
                  </span>
                )}
                {item.title}
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform",
                  openItem === item.title && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                openItem === item.title
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <div className={cn("p-4", sizeStyles[size])}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Accordion.displayName = "Accordion"; 