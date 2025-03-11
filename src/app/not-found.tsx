"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import Layout from "./components/layout";

export default function NotFound() {
  // Pre-define animation state to avoid hydration mismatch
  const [animationComplete, setAnimationComplete] = useState(true);

  useEffect(() => {
    // Reset animation state on client side to trigger animation sequence
    setAnimationComplete(false);
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center">
          {/* Animated 404 Section */}
          <div className="relative mb-8 h-48">
            <div
              className={`text-9xl font-bold text-gray-100 transition-all duration-1000 absolute inset-0 flex items-center justify-center
              ${animationComplete ? "opacity-20 scale-110" : "opacity-0 scale-90"}`}
            >
              404
            </div>
            <div
              className={`text-8xl font-bold bg-gradient-to-r from-blue-600 to-primary text-transparent bg-clip-text 
              absolute inset-0 flex items-center justify-center transition-all duration-1000
              ${animationComplete ? "opacity-100 scale-100" : "opacity-0 scale-150"}`}
            >
              404
            </div>
            {/* Animated particles with fixed positions to avoid hydration issues */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Fixed particle positions instead of random */}
              {[
                { size: 12, left: 20, top: 30, duration: 15, delay: 0 },
                { size: 8, left: 45, top: 60, duration: 18, delay: 1 },
                { size: 15, left: 70, top: 25, duration: 13, delay: 2 },
                { size: 10, left: 85, top: 80, duration: 16, delay: 3 },
                { size: 7, left: 30, top: 85, duration: 14, delay: 1 },
                { size: 16, left: 60, top: 40, duration: 17, delay: 2 },
                { size: 9, left: 15, top: 50, duration: 19, delay: 0 },
                { size: 13, left: 75, top: 65, duration: 12, delay: 3 },
                { size: 11, left: 40, top: 15, duration: 16, delay: 2 },
                { size: 14, left: 55, top: 75, duration: 15, delay: 1 },
                { size: 8, left: 25, top: 60, duration: 14, delay: 3 },
                { size: 12, left: 90, top: 35, duration: 18, delay: 0 },
                { size: 10, left: 5, top: 70, duration: 13, delay: 2 },
                { size: 15, left: 50, top: 10, duration: 17, delay: 1 },
                { size: 9, left: 80, top: 55, duration: 15, delay: 0 },
                { size: 13, left: 35, top: 45, duration: 16, delay: 3 },
                { size: 11, left: 65, top: 20, duration: 14, delay: 1 },
                { size: 14, left: 10, top: 90, duration: 19, delay: 2 },
                { size: 8, left: 95, top: 5, duration: 13, delay: 0 },
                { size: 12, left: 20, top: 95, duration: 15, delay: 3 }
              ].map((particle, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-primary/20"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `float ${particle.duration}s linear infinite`,
                    animationDelay: `${particle.delay}s`,
                    opacity: animationComplete ? 0.7 : 0,
                    transition: "opacity 1s ease-in-out",
                  }}
                />
              ))}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            We're currently focused on helping the Bafuliiru community preserve
            the Kifuliiru language. Some sections of our website are still under
            development.
          </p>

          {/* Helpful links section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <Link
              href="/"
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-all">
                <Home className="w-6 h-6 text-primary group-hover:scale-110 transition-all" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
            <Link
              href="/solutions"
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-all">
                <Search className="w-6 h-6 text-primary group-hover:scale-110 transition-all" />
              </div>
              <span className="font-medium">Solutions</span>
            </Link>
            <Link
              href="/contact"
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-all">
                <ArrowLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-all" />
              </div>
              <span className="font-medium">Contact Us</span>
            </Link>
          </div>

          <div className="animate-bounce mt-8">
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>

      {/* Animations for floating particles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-50px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(25px);
          }
        }
      `}</style>
    </Layout>
  );
}
