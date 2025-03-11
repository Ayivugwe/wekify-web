
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const languages = [
  "English", "Spanish", "French", "Mandarin", "Arabic", 
  "Russian", "Hindi", "Portuguese", "Bengali", "Japanese",
  "Kifuliiru", "Swahili", "Yoruba", "Zulu", "Xhosa",
  "Amharic", "Tigrinya", "Hausa", "Igbo", "Wolof",
  "German", "Italian", "Dutch", "Swedish", "Norwegian",
  "Finnish", "Danish", "Polish", "Czech", "Hungarian",
  "Greek", "Turkish", "Korean", "Thai", "Vietnamese",
  "Malay", "Indonesian", "Tagalog", "Navajo", "Cherokee"
];

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [languageIndex, setLanguageIndex] = useState(0);

  useEffect(() => {
    // Rotation effect
    const rotationInterval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.5) % 360);
    }, 50);

    // Language changing effect
    const languageInterval = setInterval(() => {
      setLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(languageInterval);
    };
  }, []);

  useEffect(() => {
    setCurrentLanguage(languages[languageIndex]);
  }, [languageIndex]);

  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="container py-24 md:py-40">
        {/* Added more vertical padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Preserving Indigenous Languages Through Digital Innovation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Wekify empowers communities to document, learn, and celebrate their languages with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                Explore Solutions
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Glowing circle background */}
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.3)]"></div>
              
              {/* Globe */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotateY(${rotation}deg)` }}
              >
                <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 bg-blue-500 opacity-70 rounded-full">
                    {/* World map pattern */}
                    <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-blue-400 to-indigo-600">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dynamic Language Display */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <div 
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg text-white text-lg font-medium z-10 whitespace-nowrap"
                    style={{ 
                      animation: 'fadeInOut 2s infinite', 
                      boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                    }}
                  >
                    {currentLanguage}
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0" style={{ animation: 'spin 20s linear infinite' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>
              
              {/* Additional orbiting particles */}
              <div className="absolute inset-0" style={{ animation: 'reverseSpin 30s linear infinite' }}>
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                    style={{ 
                      top: `${50 + 35 * Math.sin(i * Math.PI / 4)}%`,
                      left: `${50 + 35 * Math.cos(i * Math.PI / 4)}%`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Pulsing core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 rounded-full" style={{ animation: 'pulse 2s ease-in-out infinite' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverseSpin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1) translate(-50%, -50%); opacity: 0.2; }
          50% { transform: scale(1.5) translate(-33%, -33%); opacity: 0.4; }
          100% { transform: scale(1) translate(-50%, -50%); opacity: 0.2; }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px) translateX(-50%); }
          20% { opacity: 1; transform: translateY(0) translateX(-50%); }
          80% { opacity: 1; transform: translateY(0) translateX(-50%); }
          100% { opacity: 0; transform: translateY(-10px) translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
