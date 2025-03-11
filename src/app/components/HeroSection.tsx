"use client";

import React, { useEffect, useState } from "react";
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

const HeroSection: React.FC = () => {
  const [activeLanguage, setActiveLanguage] = useState<string>("English");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLanguage =
        languages[Math.floor(Math.random() * languages.length)];
      setActiveLanguage(randomLanguage);
    }, 2000);

    return () => clearInterval(interval);
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

              {/* Language display */}
              <div className="absolute language-display">
                <motion.span
                  key={activeLanguage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-primary"
                >
                  {activeLanguage}
                </motion.span>
              </div>

              {/* Globe animations */}
              <div className="absolute w-72 h-72 border border-blue-300 border-dashed rounded-full animate-spin-slow"></div>
              <div className="absolute w-80 h-80 border border-blue-200 border-dashed rounded-full animate-spin-reverse-slow"></div>

              {/* Globe dots - let's add more to represent different languages */}
              <div className="globe-dots">
                {[...Array(15)].map((_, index) => {
                  const angle = (index / 15) * Math.PI * 2;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute h-2 w-2 bg-primary rounded-full"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        opacity: Math.random() * 0.5 + 0.5,
                      }}
                    ></div>
                  );
                })}

                {/* Add language labels at specific points around the globe */}
                {languages.slice(0, 6).map((lang, index) => {
                  const angle = (index / 6) * Math.PI * 2;
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={`lang-${index}`}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className="px-2 py-1 bg-white rounded-md shadow-sm">
                        <span className="text-xs font-medium text-primary">{lang}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pulsing center */}
              <div className="absolute w-4 h-4 bg-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;