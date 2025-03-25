"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BubbleLanguages = {
  topLeft: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  bottomLeft: string;
  middleLeft: string;
  topMiddle: string;
  bottomMiddle: string;
};

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState("Kifuliiru");
  const [bubbleLanguages, setBubbleLanguages] = useState<BubbleLanguages>({
    topLeft: "",
    topRight: "",
    middleRight: "",
    bottomRight: "",
    bottomLeft: "",
    middleLeft: "",
    topMiddle: "",
    bottomMiddle: "",
  });

  const languages = [
    "Kifuliiru",
    "Kiswahili",
    "Yoruba",
    "Twi",
    "Hausa",
    "Amharic",
    "Quechua",
    "Navajo",
    "Māori",
    "Hindi",
    "Mongolian",
    "Welsh",
    "Sámi",
    "Cherokee",
    "Ainu",
    "Zulu",
    "Inuktitut",
    "Guarani",
    "Xhosa",
    "Malagasy",
    "Basque",
    "Catalan",
    "Irish",
    "Scottish Gaelic",
    "Lakota",
    "Tibetan",
    "Hawaiian",
  ];

  // Function to get random languages for bubbles
  const getRandomLanguages = (): BubbleLanguages => {
    const selectedLanguages = [...languages];
    const result: BubbleLanguages = {
      topLeft: "",
      topRight: "",
      middleRight: "",
      bottomRight: "",
      bottomLeft: "",
      middleLeft: "",
      topMiddle: "",
      bottomMiddle: "",
    };

    // Remove the currently active language
    const activeIndex = selectedLanguages.indexOf(activeLanguage);
    if (activeIndex !== -1) {
      selectedLanguages.splice(activeIndex, 1);
    }

    // Randomly assign languages to each position
    const positions: (keyof BubbleLanguages)[] = [
      "topLeft",
      "topRight",
      "middleRight",
      "bottomRight",
      "bottomLeft",
      "middleLeft",
      "topMiddle",
      "bottomMiddle",
    ];

    positions.forEach((position) => {
      if (selectedLanguages.length === 0) return;
      const randomIndex = Math.floor(Math.random() * selectedLanguages.length);
      result[position] = selectedLanguages[randomIndex];
      selectedLanguages.splice(randomIndex, 1);
    });

    return result;
  };

  // Rotate the globe effect with smoother animation using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Slower rotation - 30 seconds for a full 360-degree rotation
      const newRotation = (elapsed * 0.012) % 360; // 0.012 = 360 / 30000
      setRotation(newRotation);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Cycle through main language display
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => {
        const currentIndex = languages.indexOf(prev);
        return languages[(currentIndex + 1) % languages.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Initialize and update bubble languages one after another with longer delays
  useEffect(() => {
    // Initialize with random languages
    setBubbleLanguages(getRandomLanguages());

    // Sequential update for bubble languages with much longer delays
    let currentPosition = 0;
    const positions: (keyof BubbleLanguages)[] = [
      "topLeft",
      "topRight",
      "middleRight",
      "bottomRight",
      "bottomLeft",
      "middleLeft",
      "topMiddle",
      "bottomMiddle",
    ];

    const updateInterval = setInterval(() => {
      const position = positions[currentPosition] as keyof BubbleLanguages;

      // Get new languages but only update the current position
      const newLanguages = getRandomLanguages();
      setBubbleLanguages((prev) => ({
        ...prev,
        [position]: newLanguages[position],
      }));

      // Move to next position or wrap around
      currentPosition = (currentPosition + 1) % positions.length;
    }, 3000); // 3 seconds between each individual bubble update

    return () => clearInterval(updateInterval);
  }, [activeLanguage]);

  return (
    <section className="bg-gradient-to-r from-slate-800 to-indigo-800 text-white relative overflow-hidden">
      <div className="container py-20 md:py-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Building Digital Platforms for Language Preservation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Wekify helps communities create powerful digital platforms to preserve, teach, and celebrate their languages. We combine cutting-edge technology with cultural sensitivity to build solutions that matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center"
              >
                See Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] transform hover:scale-105 transition-transform duration-500">
              {/* Glowing circle background */}
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.3)]"></div>

              {/* Simplified Globe with cleaner visuals */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `rotateY(${rotation}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Base layer with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-indigo-800 opacity-90 rounded-full"></div>

                  {/* Simplified continents layer */}
                  <div className="absolute inset-0 rounded-full">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    ></div>
                  </div>

                  {/* Simple highlight */}
                  <div className="absolute inset-[5%] -top-[20%] -left-[10%] bg-white opacity-5 rounded-full blur-md"></div>
                </div>
              </div>

              {/* Simplified orbiting elements with slower animation */}
              <div
                className="absolute inset-0"
                style={{ animation: "spin 60s linear infinite" }}
              >
                {/* Orbit ring - subtle visual guide */}
                <div className="absolute inset-0 rounded-full border border-white/10"></div>

                {/* Orbital points with moderate visual effects */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_10px_rgba(147,197,253,0.5)]"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-300 rounded-full shadow-[0_0_8px_rgba(165,180,252,0.5)]"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-200 rounded-full shadow-[0_0_8px_rgba(191,219,254,0.5)]"></div>

                {/* Just a couple additional orbital elements */}
                <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-indigo-200 rounded-full shadow-[0_0_5px_rgba(199,210,254,0.5)]"></div>
                <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-blue-100 rounded-full shadow-[0_0_5px_rgba(219,234,254,0.5)]"></div>
              </div>

              {/* Featured language with simplified, more legible design */}
              <div className="absolute top-[30%] left-[35%] transform -translate-x-1/3 -translate-y-1/3">
                <div className="px-4 py-2 bg-blue-900/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold transition-all duration-700 shadow-lg border border-blue-500/30">
                  {activeLanguage}
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-400/30 animate-pulse"></div>
              </div>

              {/* Dynamic language bubbles with simpler animations and clearer display */}
              <div className="absolute top-[15%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-1">
                {bubbleLanguages.topLeft}
              </div>
              <div className="absolute top-[70%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-2">
                {bubbleLanguages.bottomMiddle}
              </div>
              <div className="absolute top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-3">
                {bubbleLanguages.middleRight}
              </div>
              <div className="absolute top-[60%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-4">
                {bubbleLanguages.middleLeft}
              </div>
              <div className="absolute top-[85%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-5">
                {bubbleLanguages.bottomLeft}
              </div>
              <div className="absolute top-[30%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-2">
                {bubbleLanguages.topRight}
              </div>
              <div className="absolute top-[20%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-3">
                {bubbleLanguages.topMiddle}
              </div>
              <div className="absolute top-[75%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-4">
                {bubbleLanguages.bottomRight}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background decorative elements - fixed to match section height */}
      <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-white/10 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-3 bg-indigo-900"></div>
      {/* Border to separate sections */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-4px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-5px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
        }

        @keyframes float-4 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-4px);
          }
        }

        @keyframes float-5 {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-3px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Add custom animation classes to Tailwind with slower animations */}
      <style global jsx>{`
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-float-4 {
          animation: float-4 9s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-5 {
          animation: float-5 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;