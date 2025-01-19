"use client";

import React from "react";
import { ArrowRight, Globe, BookOpen, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute w-96 h-96 -bottom-48 left-1/2 -translate-x-1/2 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slowest"></div>
      </div>

      {/* Content Container */}
      <div className="relative pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Floating Elements */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/20 backdrop-blur-lg rounded-2xl p-4 animate-float-1">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-4 animate-float-2">
              <BookOpen className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/20 backdrop-blur-lg rounded-2xl p-4 animate-float-3">
              <Users className="w-6 h-6 text-violet-400" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Preserving Languages
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text">
                  Empowering Cultures
                </span>
              </h1>
              <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl blur-xl -z-10"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building the future of languages with limited content through
              digital innovation, starting with Kifuliiru
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href="#mission"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn About Our Mission
                  <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { label: "Languages Supported", value: "10+" },
              { label: "Active Users", value: "5,000+" },
              { label: "Dictionary Entries", value: "25,000+" },
            ].map((stat, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative backdrop-blur-lg rounded-xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-colors">
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(5deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes pulse-slowest {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
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
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        .animate-pulse-slower {
          animation: pulse-slower 4.5s infinite ease-in-out;
        }
        .animate-pulse-slowest {
          animation: pulse-slowest 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
