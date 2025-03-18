"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      isOpen,
      onClose,
      title,
      children,
      size = "md",
      showCloseButton = true,
      ...props
    },
    ref
  ) => {
    // Size styles
    const sizeStyles = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    };

    if (!isOpen) {
      return null;
    }

    return (
      <div
        className="fixed inset-0 z-50 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={onClose}
          />
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className={cn(
              "inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:p-6 sm:align-middle",
              sizeStyles[size],
              className
            )}
            ref={ref}
            {...props}
          >
            <div className="absolute top-0 right-0 pt-4 pr-4">
              {showCloseButton && (
                <button
                  type="button"
                  className="rounded-md bg-white text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
            {title && (
              <div className="mb-4">
                <h3
                  className="text-lg font-medium leading-6 text-neutral-900"
                  id="modal-title"
                >
                  {title}
                </h3>
              </div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal"; 