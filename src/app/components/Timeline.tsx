"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState<number>(items.length - 1);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

      {/* Timeline Items */}
      <div className="relative space-y-16">
        {items.map((item, index) => (
          <div
            key={item.year}
            className={cn(
              "relative flex items-center",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
          >
            {/* Content */}
            <div className={cn(
              "w-1/2 p-6",
              index % 2 === 0 ? "pr-12" : "pl-12"
            )}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={cn(
                    "p-2 rounded-lg mr-3",
                    activeItem === index ? "bg-primary-100 text-primary-600" : "bg-gray-100 text-gray-600"
                  )}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <AnimatePresence>
                  {activeItem === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-600"
                    >
                      {item.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <motion.button
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold",
                  activeItem === index ? "bg-primary-600" : "bg-gray-400"
                )}
                onClick={() => setActiveItem(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: activeItem === index ? [1, 1.1, 1] : 1,
                  boxShadow: activeItem === index ? [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0.2)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ] : "none"
                }}
                transition={{
                  duration: 1.5,
                  repeat: activeItem === index ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                {item.year}
              </motion.button>
            </div>

            {/* Empty Space */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}; 