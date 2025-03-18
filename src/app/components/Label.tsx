"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      children,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          "block text-sm font-medium text-neutral-700",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-error">*</span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label"; 