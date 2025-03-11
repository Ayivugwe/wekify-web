
"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const languages = [
  "English",
  "Spanish",
  "French",
  "Mandarin",
  "Arabic",
  "Russian",
  "Japanese",
  "German",
  "Portuguese",
  "Hindi",
  "Bengali",
  "Punjabi",
  "Kifuliiru",
  "Swahili",
  "Yoruba",
  "Zulu",
  "Hausa",
  "Amharic",
  "Oromo",
  "Igbo",
  "Korean",
  "Italian",
  "Vietnamese",
  "Turkish",
  "Thai",
  "Dutch",
  "Polish",
  "Greek",
  "Hungarian",
  "Czech",
  "Swedish",
  "Malay",
  "Indonesian",
  "Tagalog",
  "Farsi",
  "Urdu",
];

interface GlobePoint {
  id: number;
  x: number;
  y: number;
  language: string;
  opacity: number;
  scale: number;
  entering: boolean;
}

const HeroSection: React.FC = () => {
  const [globePoints, setGlobePoints] = useState<GlobePoint[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const pointCountRef = useRef<number>(0);

  useEffect(() => {
    const createRandomPoint = (): GlobePoint => {
      // Calculate position on a sphere
      const theta = Math.random() * Math.PI * 2; // Longitude (0 to 2π)
      const phi = Math.acos(2 * Math.random() - 1); // Latitude (0 to π)
      
      // Convert to Cartesian coordinates and project to 2D
      const radius = 130;
      const x = 50 + radius * Math.sin(phi) * Math.cos(theta);
      const y = 50 + radius * Math.sin(phi) * Math.sin(theta);
      
      const language = languages[Math.floor(Math.random() * languages.length)];
      
      return {
        id: pointCountRef.current++,
        x,
        y,
        language,
        opacity: 0,
        scale: 0,
        entering: true
      };
    };

    // Initialize with 5 points
    const initialPoints: GlobePoint[] = [];
    for (let i = 0; i < 5; i++) {
      initialPoints.push(createRandomPoint());
    }
    setGlobePoints(initialPoints);

    const updateAnimation = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }
      
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      setGlobePoints(prev => {
        const updatedPoints = [...prev];
        
        // Check if we need to add a new point (keep a maximum of 10 points visible)
        if (updatedPoints.length < 10 && Math.random() < 0.02) {
          updatedPoints.push(createRandomPoint());
        }
        
        // Update existing points
        return updatedPoints.map(point => {
          if (point.entering) {
            // Fade in
            return {
              ...point,
              opacity: Math.min(1, point.opacity + 0.01 * deltaTime / 16),
              scale: Math.min(1, point.scale + 0.01 * deltaTime / 16),
              entering: point.opacity < 1 || point.scale < 1
            };
          } else {
            // Fade out
            const newOpacity = Math.max(0, point.opacity - 0.01 * deltaTime / 16);
            const newScale = Math.max(0, point.scale - 0.01 * deltaTime / 16);
            return {
              ...point,
              opacity: newOpacity,
              scale: newScale
            };
          }
        }).filter(point => {
          // Remove points that have completely faded out and are not entering
          return point.opacity > 0 || point.entering;
        });
      });
      
      // Randomly change state of points from entering to exiting
      if (Math.random() < 0.01) {
        setGlobePoints(prev => {
          const points = [...prev];
          if (points.length > 0) {
            const randomIndex = Math.floor(Math.random() * points.length);
            if (points[randomIndex].entering && points[randomIndex].opacity >= 1) {
              points[randomIndex].entering = false;
            }
          }
          return points;
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(updateAnimation);
    };
    
    animationFrameRef.current = requestAnimationFrame(updateAnimation);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section bg-gradient-to-b from-primary-50 to-white py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
            >
              Preserving Languages, Connecting Cultures
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary mb-8"
            >
              Our digital platform empowers language preservation and cultural
              heritage through innovative technology solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/solutions" className="btn-primary">
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="btn-secondary flex items-center justify-center"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="globe-container w-full h-96 md:h-[500px] relative flex items-center justify-center">
              {/* Globe background */}
              <div className="absolute w-64 h-64 bg-blue-50 rounded-full opacity-50"></div>
              <div className="absolute w-60 h-60 bg-blue-100 rounded-full opacity-30"></div>
              
              {/* Globe dots and languages */}
              <div className="globe-points relative w-full h-full">
                {globePoints.map((point) => (
                  <motion.div
                    key={point.id}
                    className="absolute"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      opacity: point.opacity,
                      scale: point.scale,
                      transformOrigin: 'center',
                    }}
                    initial={false}
                  >
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <div className="mt-1 px-2 py-1 bg-white rounded-md shadow-md">
                        <span className="text-xs font-medium text-primary whitespace-nowrap">
                          {point.language}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Rotating circle element */}
              <div className="absolute w-72 h-72 border border-blue-300 border-dashed rounded-full animate-spin-slow"></div>
              <div className="absolute w-80 h-80 border border-blue-200 border-dashed rounded-full animate-spin-reverse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
