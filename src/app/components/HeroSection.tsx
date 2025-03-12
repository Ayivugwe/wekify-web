"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);
  const [languageIndex, setLanguageIndex] = useState(0);

  const languageSets = [
    ["English", "French", "Spanish", "Portuguese", "Italian", "German"],
    ["Mandarin", "Japanese", "Korean", "Vietnamese", "Thai", "Burmese"],
    ["Swahili", "Zulu", "Yoruba", "Amharic", "Kifuliiru", "Lingala"],
    ["Hindi", "Bengali", "Urdu", "Tamil", "Telugu", "Punjabi"],
    ["Arabic", "Hebrew", "Persian", "Turkish", "Kurdish", "Berber"],
  ];

  // Slow rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Language tag cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageIndex((prev) => (prev + 1) % languageSets.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [languageSets.length]);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preserving Languages Through Digital Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Wekify empowers communities to document, learn, and celebrate
              their languages with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
              >
                Discover Our Platform <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              {/* Globe Container */}
              <div
                className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 absolute transform transition-transform"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {/* Decorative points on the globe */}
                {Array.from({ length: 18 }).map((_, i) => {
                  const angle = (i * 20) % 360;
                  const size = i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2;
                  const radius = 46 + (i % 5) * 2;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: `${size}%`,
                        height: `${size}%`,
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.7 + (i % 3) * 0.1,
                      }}
                    />
                  );
                })}
              </div>

              {/* Floating language tags */}
              <div className="absolute inset-0">
                {languageSets[languageIndex].map((lang, i) => {
                  const angle = (i * 60) % 360;
                  const radius = 42;
                  const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <div
                      key={i}
                      className="absolute bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        opacity: 0.9,
                        transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                      }}
                    >
                      {lang}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}