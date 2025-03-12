
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState("Kifuliiru");
  const languages = ["Kifuliiru", "Swahili", "Yoruba", "Twi", "Hausa", "Amharic"];
  
  // Rotate the globe effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Cycle through languages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage(prev => {
        const currentIndex = languages.indexOf(prev);
        return languages[(currentIndex + 1) % languages.length];
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-slate-800 to-indigo-800 text-white">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Preserving Indigenous Languages Through Digital Innovation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Wekify empowers communities to document, learn, and celebrate their languages with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/solutions" 
                className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
              >
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-all duration-300 shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-[400px] h-[400px] transform hover:scale-105 transition-transform duration-500">
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

              {/* Orbiting elements */}
              <div className="absolute inset-0" style={{ animation: 'spin 20s linear infinite' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>

              {/* Featured language with animation */}
              <div className="absolute top-[30%] left-[35%] transform">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-all duration-500">
                  {activeLanguage}
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white/10 animate-pulse"></div>
              </div>

              {/* Static language bubbles */}
              <div className="absolute top-[15%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">
                Amharic
              </div>
              <div className="absolute top-[70%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">
                Swahili
              </div>
              <div className="absolute top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">
                Yoruba
              </div>
              <div className="absolute top-[60%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">
                Hausa
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
