import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  variant?: "default" | "bordered" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = ({
  className,
  children,
  hover = false,
  variant = "default",
  padding = "md",
  ...props
}: CardProps) => {
  // Base card styles
  const baseStyles = "rounded-lg transition-colors duration-200 overflow-hidden";
  
  // Variant styles
  const variantStyles = {
    default: "bg-white border border-neutral-100",
    bordered: "bg-white border border-neutral-200",
    flat: "bg-neutral-50 border border-neutral-100"
  };
  
  // Padding styles
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  // Hover effects - only subtle border color change
  const hoverStyles = hover ? "hover:border-neutral-200" : "";
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = ({ className, children }: CardHeaderProps) => {
  return (
    <div 
      className={cn("mb-4", className)}
    >
      {children}
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CardTitle = ({ 
  className, 
  children, 
  as: Component = "h3" 
}: CardTitleProps) => {
  return (
    <Component 
      className={cn(
        "text-xl font-semibold text-neutral-800",
        className
      )}
    >
      {children}
    </Component>
  );
};

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription = ({ className, children }: CardDescriptionProps) => {
  return (
    <p 
      className={cn(
        "text-sm text-neutral-600 mt-1",
        className
      )}
    >
      {children}
    </p>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent = ({ className, children }: CardContentProps) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter = ({ className, children }: CardFooterProps) => {
  return (
    <div 
      className={cn(
        "mt-6 flex items-center",
        className
      )}
    >
      {children}
    </div>
  );
};
