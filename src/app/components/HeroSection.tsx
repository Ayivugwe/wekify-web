
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);
  const [languageIndex, setLanguageIndex] = useState(0);

  const languageSets = [
    // First set
    [
      { name: "Kifuliiru", position: "top-[15%] left-[20%]" },
      { name: "Swahili", position: "top-[70%] left-[65%]" },
      { name: "Yoruba", position: "top-[40%] left-[80%]" },
      { name: "Twi", position: "top-[25%] left-[60%]" },
    ],
    // Second set
    [
      { name: "Zulu", position: "top-[15%] left-[20%]" },
      { name: "Hausa", position: "top-[70%] left-[65%]" },
      { name: "Igbo", position: "top-[40%] left-[80%]" },
      { name: "Kikuyu", position: "top-[25%] left-[60%]" },
    ],
    // Third set
    [
      { name: "Amharic", position: "top-[15%] left-[20%]" },
      { name: "Wolof", position: "top-[70%] left-[65%]" },
      { name: "Bambara", position: "top-[40%] left-[80%]" },
      { name: "Oromo", position: "top-[25%] left-[60%]" },
    ],
    // Fourth set
    [
      { name: "Xhosa", position: "top-[15%] left-[20%]" },
      { name: "Lingala", position: "top-[70%] left-[65%]" },
      { name: "Fula", position: "top-[40%] left-[80%]" },
      { name: "Somali", position: "top-[25%] left-[60%]" },
    ],
    // Fifth set
    [
      { name: "Malagasy", position: "top-[15%] left-[20%]" },
      { name: "Tigrinya", position: "top-[70%] left-[65%]" },
      { name: "Tswana", position: "top-[40%] left-[80%]" },
      { name: "Ndebele", position: "top-[25%] left-[60%]" },
    ],
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
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
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
                className="btn-primary inline-flex items-center"
              >
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Glowing circle background */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-500/20 blur-xl"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              ></div>

              {/* Globe outline */}
              <div
                className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
                style={{
                  transform: `rotate(${rotation * 0.5}deg)`,
                }}
              ></div>

              <div
                className="absolute inset-0 border-2 border-dashed border-indigo-500/20 rounded-full"
                style={{
                  transform: `rotate(${-rotation * 0.3}deg)`,
                }}
              ></div>

              {/* Inner rotating elements */}
              <div
                className="absolute inset-[50px] border border-blue-400/40 rounded-full"
                style={{
                  transform: `rotate(${-rotation * 0.7}deg)`,
                }}
              ></div>

              {/* Central logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center p-2">
                  <Image
                    src="/ayivugwe.png"
                    alt="Wekify Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Language tags */}
              {languageSets[languageIndex].map((lang, i) => (
                <div
                  key={`${lang.name}-${i}`}
                  className={`absolute ${lang.position} language-tag bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium text-primary`}
                  style={{
                    animation: `fadeInOut 5s ease ${i * 0.5}s`,
                  }}
                >
                  {lang.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px) translateX(-50%); }
          20% { opacity: 1; transform: translateY(0) translateX(-50%); }
          80% { opacity: 1; transform: translateY(0) translateX(-50%); }
          100% { opacity: 0; transform: translateY(-10px) translateX(-50%); }
        }

        .language-tag {
          animation-fill-mode: both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
