
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  icon,
  iconPosition = "left",
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors";
  
  const variantStyles = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-sm",
    secondary: "bg-secondary hover:bg-secondary/90 text-white shadow-sm",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-2",
    md: "text-base px-4 py-2.5",
    lg: "text-lg px-5 py-3",
  };
  
  const allStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href && !disabled) {
    return (
      <Link href={href} className={allStyles}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      className={allStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
