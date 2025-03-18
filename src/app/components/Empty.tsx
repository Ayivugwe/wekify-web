"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

export interface EmptyProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  (
    {
      className,
      title,
      description,
      icon = <Inbox className="h-12 w-12 text-neutral-400" />,
      action,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-12 text-center",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-neutral-900 mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-neutral-500 mb-4">
            {description}
          </p>
        )}
        {action && (
          <div>
            {action}
          </div>
        )}
      </div>
    );
  }
);

Empty.displayName = "Empty"; 