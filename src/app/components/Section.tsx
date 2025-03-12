
"use client";

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark" | "gradient";
  spacing?: "sm" | "md" | "lg" | "xl";
  container?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  background = "white",
  spacing = "lg",
  container = true,
}: SectionProps) => {
  const bgClasses = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    gradient: "bg-gradient-to-b from-gray-50 to-white",
  };
  
  const spacingClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };
  
  return (
    <section 
      id={id}
      className={cn(
        bgClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-6">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};
