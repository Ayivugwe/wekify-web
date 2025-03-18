"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface ErrorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const Error = React.forwardRef<HTMLDivElement, ErrorProps>(
  (
    {
      className,
      message,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex items-center text-sm text-error",
          className
        )}
        ref={ref}
        {...props}
      >
        <AlertCircle className="mr-1 h-4 w-4" />
        {message}
      </div>
    );
  }
);

Error.displayName = "Error"; 