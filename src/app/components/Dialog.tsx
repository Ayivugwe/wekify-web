"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DialogProps extends React.HTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

export const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>(
  (
    {
      isOpen,
      onClose,
      title,
      description,
      children,
      size = "md",
      showCloseButton = true,
      closeOnBackdropClick = true,
      closeOnEscape = true,
      className,
      ...props
    },
    ref
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Size styles
    const sizeStyles = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full",
    };

    useEffect(() => {
      const dialog = dialogRef.current;
      if (dialog) {
        if (isOpen) {
          dialog.showModal();
        } else {
          dialog.close();
        }
      }
    }, [isOpen]);

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && closeOnEscape) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }, [isOpen, closeOnEscape, onClose]);

    return (
      <dialog
        ref={dialogRef}
        className={cn(
          "backdrop:bg-black/50 p-0 bg-transparent",
          className
        )}
        onClose={closeOnBackdropClick ? onClose : undefined}
        {...props}
      >
        <div
          className={cn(
            "min-w-[80vw] md:min-w-[90vw] lg:min-w-[95vw] max-w-[95%] rounded-lg bg-white shadow-xl max-h-[90vh] overflow-y-auto",
            sizeStyles[size]
          )}
        >
          {(title || description) && (
            <div className="flex items-center justify-between border-b p-4">
              <div>
                {title && (
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="mt-1 text-sm text-neutral-500">
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-full p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}
          <div className="p-4">{children}</div>
        </div>
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";
