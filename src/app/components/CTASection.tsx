"use client";

import React from "react";
import { ArrowRight, Globe, Heart, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="relative max-w-3xl w-full">
          {/* Background Gradient Elements */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"></div>

            <div className="p-12">
              {/* Floating Icons */}
              <div className="absolute top-6 right-6 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center animate-float-slow">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center animate-float-slower">
                  <Heart className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center animate-float-slowest">
                  <Users className="w-5 h-5 text-violet-500" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Join Our Mission
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Help us preserve and promote linguistic diversity. Starting
                  with Kifuliiru, we&apos;re building the future of language
                  preservation.
                </p>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Early Access
                      <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                    </span>
                    {/* Button Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float-slowest {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 4.5s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float-slowest 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CTASection;
