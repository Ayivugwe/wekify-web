"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      content,
      children,
      icon = <HelpCircle className="h-4 w-4 text-neutral-400" />,
      position = "top",
      ...props
    },
    ref
  ) => {
    // Position styles
    const positionStyles = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    // Arrow styles
    const arrowStyles = {
      top: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-neutral-800 border-x-transparent border-b-transparent",
      bottom: "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-neutral-800 border-x-transparent border-t-transparent",
      left: "right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-neutral-800 border-y-transparent border-r-transparent",
      right: "left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-neutral-800 border-y-transparent border-l-transparent",
    };

    return (
      <div
        className={cn(
          "group relative inline-flex",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <div
          className={cn(
            "absolute z-50 hidden group-hover:block",
            positionStyles[position]
          )}
        >
          <div className="relative">
            <div
              className={cn(
                "absolute border-4",
                arrowStyles[position]
              )}
            />
            <div className="bg-neutral-800 text-white text-sm rounded-lg py-2 px-3">
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip"; 