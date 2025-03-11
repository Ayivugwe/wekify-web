
import React from 'react';
import Link from 'next/link';
import Layout from './components/layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Return to Homepage
        </Link>
      </div>
    </Layout>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import Layout from "./components/layout";

export default function NotFound() {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
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
            <div className={`text-9xl font-bold text-gray-100 transition-all duration-1000 absolute inset-0 flex items-center justify-center
              ${animationComplete ? 'opacity-20 scale-110' : 'opacity-0 scale-90'}`}>
              404
            </div>
            <div className={`text-8xl font-bold bg-gradient-to-r from-blue-600 to-primary text-transparent bg-clip-text 
              absolute inset-0 flex items-center justify-center transition-all duration-1000
              ${animationComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}>
              404
            </div>
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-primary/20"
                  style={{
                    width: `${Math.random() * 20 + 5}px`,
                    height: `${Math.random() * 20 + 5}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                    opacity: animationComplete ? 0.7 : 0,
                    transition: 'opacity 1s ease-in-out'
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
            We're currently focused on helping the Bafuliiru community preserve the Kifuliiru language. 
            Some sections of our website are still under development.
          </p>
          
          {/* Helpful links section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <Link href="/" className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-all">
                <Home className="w-6 h-6 text-primary group-hover:scale-110 transition-all" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
            <Link href="/solutions" className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-all">
                <Search className="w-6 h-6 text-primary group-hover:scale-110 transition-all" />
              </div>
              <span className="font-medium">Solutions</span>
            </Link>
            <Link href="/contact" className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="p-3 bg-blue-50 rounded-full mb-3 group-hover:bg-blue-100 transition-all">
                <ArrowLeft className="w-6 h-6 text-primary group-hover:scale-110 transition-all" />
              </div>
              <span className="font-medium">Contact Us</span>
            </Link>
          </div>
          
          <div className="animate-bounce mt-8">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animations for floating particles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-50px) translateX(15px); }
          50% { transform: translateY(-15px) translateX(-15px); }
          75% { transform: translateY(-30px) translateX(25px); }
        }
      `}</style>
    </Layout>
  );
}
