
"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  accentColor?: string;
  className?: string;
  iconClass?: string;
  children?: ReactNode;
}

export const Card = ({
  title,
  description,
  icon,
  accentColor = "primary",
  className = "",
  iconClass = "",
  children,
}: CardProps) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      {icon && (
        <div className={cn(
          `bg-${accentColor}/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6`,
          iconClass
        )}>
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      {children}
    </div>
  );
};
