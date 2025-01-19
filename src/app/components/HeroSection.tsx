"use client";

import React from "react";
import { ArrowRight, Globe, BookOpen, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Pattern [No Change] */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      {/* Animated Background Shapes [No Change] */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/2 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-br from-violet-600/20 to-transparent rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Container - Adjusted padding */}
      <div className="relative z-10 pt-40 pb-24 px-4 max-w-7xl mx-auto">
        {/* Floating Cards - Moved down and reduced size slightly */}
        <div className="absolute inset-x-0 top-20 flex justify-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent backdrop-blur-lg rounded-2xl border border-white/10 p-3 animate-float-slow transform hover:scale-110 transition-transform">
            <Globe className="w-full h-full text-blue-400" />
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent backdrop-blur-lg rounded-2xl border border-white/10 p-3 animate-float-slower transform hover:scale-110 transition-transform">
            <BookOpen className="w-full h-full text-indigo-400" />
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500/10 via-violet-500/5 to-transparent backdrop-blur-lg rounded-2xl border border-white/10 p-3 animate-float-slowest transform hover:scale-110 transition-transform">
            <Users className="w-full h-full text-violet-400" />
          </div>
        </div>

        {/* Main Content - Added top margin */}
        <div className="max-w-4xl mx-auto space-y-12 mt-28">
          <div className="text-center space-y-8">
            <h1 className="relative">
              <span className="block text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100/80 to-white leading-tight">
                Preserving Languages
              </span>
              <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text leading-tight pb-4">
                Empowering Cultures
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-3xl -z-10"></div>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Building the future of indigenous language preservation through
              digital innovation, starting with Kifuliiru
            </p>

            {/* CTA Button */}
            <div className="flex justify-center pt-8">
              <a
                href="#mission"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-2">
                  <span className="font-medium text-white">
                    Learn About Our Mission
                  </span>
                  <ArrowRight className="w-5 h-5 text-white transform transition-transform group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-indigo-600 to-violet-600"></div>
              </a>
            </div>
          </div>

          {/* Stats Grid - Added more top padding */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            {[
              { label: "Languages Supported", value: "10+" },
              { label: "Active Users", value: "5,000+" },
              { label: "Dictionary Entries", value: "25,000+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-colors"
              >
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }
        @keyframes float-slowest {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s infinite ease-in-out;
        }
        .animate-float-slower {
          animation: float-slower 5s infinite ease-in-out;
        }
        .animate-float-slowest {
          animation: float-slowest 6s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
