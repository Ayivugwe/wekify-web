
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

const AmbassadorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-800 to-blue-700 relative overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Ambassador Program
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Become part of a global network of language preservation advocates. Help us bridge technology and culture while preserving linguistic heritage for future generations.
            </p>
            <Link
              href="/ambassador"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become an Ambassador <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {/* Glassy card */}
          <div className="flex justify-center">
            <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl max-w-md transform hover:scale-105 transition-all duration-500 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/30 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/30 rounded-full filter blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/20 rounded-xl inline-block">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ambassador Benefits</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <div className="h-5 w-5 mr-2 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Access to exclusive language resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 mr-2 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Networking with other language advocates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 mr-2 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Digital tools for community engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 mr-2 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Recognition for preservation efforts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorSection;
