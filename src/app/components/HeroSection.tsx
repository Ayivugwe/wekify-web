"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { section } from "framer-motion/client";
import { FadeIn } from "./FadeIn";
import { Button } from "./Button";

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

  <section className="relative min-h-[90vh] py-24 bg-gradient-to-b from-primary-50/50 to-white">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
    </div>
    <FadeIn className="container mx-auto px-4 relative z-10 h-full">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Language Preservation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Digital Platforms for Language{" "}
              <span className="text-primary-600">Preservation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Empowering communities with powerful digital platforms to
              preserve, teach, and celebrate their linguistic heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">Learn More About Our Vision</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative h-full flex items-center justify-center">
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

                {/* Additional orbital elements */}
                <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-indigo-200 rounded-full shadow-[0_0_5px_rgba(199,210,254,0.5)]"></div>
                <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-blue-100 rounded-full shadow-[0_0_5px_rgba(219,234,254,0.5)]"></div>
              </div>

              {/* Featured language */}
              <div className="absolute top-[30%] left-[35%] transform -translate-x-1/3 -translate-y-1/3">
                <div className="px-4 py-2 bg-blue-900/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold transition-all duration-700 shadow-lg border border-blue-500/30">
                  {activeLanguage}
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-400/30 animate-pulse"></div>
              </div>

              {/* Dynamic language bubbles */}
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
    </FadeIn>
  </section>;
};

export default HeroSection;
