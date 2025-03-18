"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

export interface SuccessProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const Success = React.forwardRef<HTMLDivElement, SuccessProps>(
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
          "flex items-center text-sm text-success",
          className
        )}
        ref={ref}
        {...props}
      >
        <CheckCircle className="mr-1 h-4 w-4" />
        {message}
      </div>
    );
  }
);

Success.displayName = "Success"; 