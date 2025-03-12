
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);

  // Slow rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                Preserving Indigenous Languages Through Digital Innovation
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Wekify empowers communities to document, learn, and celebrate
                their languages with cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="px-6 py-3 bg-white text-primary rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
                >
                  Discover Our Platform <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Schedule a Demo
                </Link>
              </div>
            </FadeIn>
          </div>
          <div className="hidden lg:flex justify-center items-center z-10">
            <GlobeAnimation rotation={rotation} />
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <style jsx>{`
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
}

// Separate component for the globe animation
function GlobeAnimation({ rotation }: { rotation: number }) {
  return (
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

      {/* Overlaying text element for Kifuliiru */}
      <div className="absolute top-[30%] left-[35%] transform px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
        Kifuliiru
      </div>
      
      {/* Pulsing highlight */}
      <div className="absolute top-[30%] left-[35%] w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
