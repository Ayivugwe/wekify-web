
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const FadeIn = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 400,
  threshold = 0.1,
  once = true,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "opacity-0",
  };

  useEffect(() => {
    const current = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && current) {
            observer.unobserve(current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );
    
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${direction !== "none" ? directionClasses[direction] : ""}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
