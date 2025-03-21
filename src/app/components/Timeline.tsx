"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  phase: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const [activeItem, setActiveItem] = React.useState<TimelineItem | null>(null);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>

      {/* Timeline Items */}
      <div className="relative flex justify-between items-center">
        {items.map((item, index) => (
          <div key={item.year} className="flex flex-col items-center">
            <motion.button
              onClick={() => setActiveItem(activeItem?.year === item.year ? null : item)}
              className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-primary-400 hover:border-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              whileHover={{ scale: 1.1 }}
              animate={{
                borderColor: activeItem?.year === item.year ? "#2563eb" : "#60a5fa",
                boxShadow: activeItem?.year === item.year 
                  ? "0 0 0 4px rgba(37, 99, 235, 0.1)" 
                  : "none"
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {item.icon}
              </div>
            </motion.button>

            <div className="mt-4 text-center">
              <div className="text-sm font-semibold text-gray-900">{item.year}</div>
              <div className="text-sm text-gray-600">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Details Panel */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-12 p-6 bg-white rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                {activeItem.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{activeItem.title}</h3>
                <p className="text-sm text-gray-500">{activeItem.year}</p>
              </div>
            </div>
            <p className="text-gray-600">{activeItem.details}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 