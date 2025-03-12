
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Globe, Users, Award, MessageSquare, Zap, BookOpen } from "lucide-react";
import { Button } from "@/app/components/Button";
import Section from "../components/Section";
import { FadeIn } from "../components/FadeIn";
import Layout from "../components/layout";
import SEOMetadata from "../components/SEOMetadata";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Ambassador | Wekify",
  description: "Join our ambassador program and help preserve languages in your community. Make a difference by connecting technology with cultural heritage.",
  keywords: "language ambassador, cultural preservation, community leader, language technology",
  openGraph: {
    title: "Become an Ambassador | Wekify",
    description: "Be part of our global mission to preserve languages and cultures through technology."
  }
};

const HeroSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-primary to-accent text-white">
      <div className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
              Preserving Indigenous Languages Through Digital Innovation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Wekify empowers communities to document, learn, and celebrate their languages with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/solutions" className="bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300">
                Explore Solutions
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-primary transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Glowing circle background */}
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.3)]"></div>

              {/* Globe */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: `rotateY(${rotation}deg)` }}
              >
                <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <div className="absolute inset-0 bg-blue-500 opacity-70 rounded-full">
                    {/* World map pattern */}
                    <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-blue-400 to-indigo-600">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0" style={{ animation: 'spin 20s linear infinite' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>

              {/* Overlaying text elements */}
              <div className="absolute top-[15%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">Kifuliiru</div>
              <div className="absolute top-[70%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">Swahili</div>
              <div className="absolute top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">Yoruba</div>
              <div className="absolute top-[25%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs">Twi</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default function AmbassadorPage() {
  return (
    <Layout>
      <HeroSection />
      
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Become a Language Ambassador</h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Join our global network of language advocates and help preserve cultural heritage
              through innovative digital solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/ambassador-community.jpg" 
                  alt="Community of language ambassadors" 
                  width={600} 
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-gray-600 mb-4">
                    As a Wekify Language Ambassador, you'll be at the forefront of digital language preservation, equipped with cutting-edge tools and resources.
                  </p>
                  <Link href="/contact?topic=ambassador" className="text-primary font-medium flex items-center">
                    Apply Now <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="p-6 bg-gradient-to-br from-primary to-accent text-white">
                  <h3 className="text-2xl font-bold mb-4">Ambassador Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>Exclusive access to platform features</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>Network with language experts worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>Professional development resources</span>
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>Direct support from our technical team</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span>Early access to new features and tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/assessment" 
                className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Take Our Language Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
