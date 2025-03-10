"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-28 sm:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-900/30"></div>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl opacity-70"></div>
      <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-t from-violet-600/20 to-transparent blur-3xl opacity-70"></div>

      {/* Animated dots pattern (subtle background texture) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0,_rgba(255,255,255,0.1)_1px,_transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Main Content with enhanced spacing and animations */}
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <div className="space-y-8">
            <h1 className="relative inline-block">
              <span className="block text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100/90 to-white leading-tight">
                Preserving Languages
              </span>
              <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 text-transparent bg-clip-text leading-tight pb-4">
                Empowering Cultures
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-3xl -z-10 opacity-75"></div>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Building the future of indigenous language preservation through
              digital innovation, starting with Kifuliiru
            </p>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/case-studies" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center justify-center">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link href="/about" className="px-8 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>

          {/* Stats or highlights section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-300">Languages Supported</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-indigo-400 mb-2">5,000+</div>
              <div className="text-gray-300">Audio Recordings</div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300">
              <div className="text-4xl font-bold text-violet-400 mb-2">12</div>
              <div className="text-gray-300">Communities Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;