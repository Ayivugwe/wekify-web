"use client";

import React from "react";
import { ArrowRight, Globe, BookOpen, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 left-1/2 -translate-x-1/2 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Floating Elements */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 animate-float-1">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 animate-float-2">
              <BookOpen className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 animate-float-3">
              <Users className="w-6 h-6 text-violet-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Preserving Languages
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">
                Empowering Cultures
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building the future of indigenous language preservation through
              digital innovation, starting with Kifuliiru
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href="#mission"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Learn About Our Mission
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              {[
                { label: "Languages Supported", value: "10+" },
                { label: "Active Users", value: "5,000+" },
                { label: "Dictionary Entries", value: "25,000+" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float-1 {
          animation: float-1 3s infinite ease-in-out;
        }
        .animate-float-2 {
          animation: float-2 3.5s infinite ease-in-out;
        }
        .animate-float-3 {
          animation: float-3 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
