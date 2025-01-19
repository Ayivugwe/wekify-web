// File location: app/components/coming-soon.tsx
"use client";
import React from "react";
import { ArrowRight, Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
  date?: string;
  showNewsletter?: boolean;
}

export default function ComingSoon({
  title,
  description = "We're working hard to bring you something amazing. Stay tuned!",
  date = "Coming Soon",
  showNewsletter = true,
}: ComingSoonProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-30">
          <div className="absolute h-96 w-96 -left-48 -top-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute h-96 w-96 -right-48 -top-48 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute h-96 w-96 -bottom-48 left-1/2 transform -translate-x-1/2 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-8">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{date}</span>
        </div>

        {/* Title & Description */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-12">{description}</p>

        {/* Newsletter Form */}
        {showNewsletter && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white rounded-xl text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
              />
              <button className="group px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                Notify Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-sm text-gray-500">
              We&apos;ll notify you when this content becomes available.
            </p>
          </div>
        )}
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
