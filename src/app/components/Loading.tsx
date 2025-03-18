"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      className,
      size = "md",
      text,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    };

    return (
      <div
        className={cn(
          "flex items-center justify-center",
          className
        )}
        ref={ref}
        {...props}
      >
        <Loader2 className={cn("animate-spin text-primary-500", sizeStyles[size])} />
        {text && (
          <span className="ml-2 text-sm text-neutral-600">
            {text}
          </span>
        )}
      </div>
    );
  }
);

Loading.displayName = "Loading"; 