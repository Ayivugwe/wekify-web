"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Book,
  Users,
  Globe,
  MessageSquare,
  Heart,
  Lightbulb,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent animate-pulse-slow"></div>
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text transform transition-transform duration-700 hover:scale-105 pb-4">
              Preserving Languages
              <br />
              Empowering Cultures
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
              Starting with Kifuliiru - Building the future of indigenous
              language preservation through digital innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-8">
              <div
                className={`flex-1 relative transform transition-all duration-300 ${
                  isInputFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white rounded-xl text-gray-900 placeholder:text-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
                />
                <div
                  className={`absolute inset-0 -z-10 bg-blue-100 rounded-xl transition-transform duration-300 ${
                    isInputFocused
                      ? "scale-105 opacity-50"
                      : "scale-100 opacity-0"
                  }`}
                ></div>
              </div>
              <button className="group px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 hover:scale-105 hover:shadow-lg hover:shadow-blue-200 active:scale-95">
                Join Our Mission
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text transform transition-transform duration-500 hover:scale-105">
              Our Mission
            </h2>
            <p className="text-gray-600 animate-fade-in">
              We&apos;re dedicated to preserving and promoting linguistic
              diversity through innovative digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Book className="w-8 h-8 text-blue-600" />,
                title: "Digital Dictionaries",
                description:
                  "Creating comprehensive digital dictionaries for languages with limited online presence",
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Community Building",
                description:
                  "Connecting native speakers and learners in engaging, supportive communities",
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Cultural Preservation",
                description:
                  "Ensuring languages and cultures thrive in the digital age",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl transition-all duration-500 border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit transition-all duration-300 group-hover:bg-blue-100 group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kifuliiru Project */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Kifuliiru Public Dictionary
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our flagship project focuses on Kifuliiru, a language spoken in
              Congo-Kinshasa, creating the first comprehensive digital platform
              for its preservation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
                title: "Interactive Learning",
                description:
                  "Engage with native speakers and learn through immersive content",
              },
              {
                icon: <Book className="w-6 h-6 text-blue-600" />,
                title: "Digital Resources",
                description:
                  "Access comprehensive dictionary and learning materials",
              },
              {
                icon: <Heart className="w-6 h-6 text-blue-600" />,
                title: "Cultural Context",
                description:
                  "Understand the rich cultural heritage behind the language",
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
                title: "Community Input",
                description:
                  "Contribute to the growth and accuracy of the platform",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-all duration-300 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Our Approach
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Document",
                description:
                  "We work with native speakers to document vocabulary, phrases, and cultural context",
              },
              {
                step: 2,
                title: "Digitize",
                description:
                  "Create intuitive digital platforms for learning and preservation",
              },
              {
                step: 3,
                title: "Engage",
                description:
                  "Build active communities around each language platform",
              },
              {
                step: 4,
                title: "Evolve",
                description:
                  "Continuously improve and expand based on community feedback and needs",
              },
            ].map((step, index) => (
              <div key={index} className="group flex gap-8 items-start">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:border-blue-100 transition-all duration-300 text-blue-600 font-semibold group-hover:rotate-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Help us preserve and promote linguistic diversity. Starting with
            Kifuliiru, we&apos;re building the future of language preservation.
          </p>
          <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-medium transition-all inline-flex items-center gap-2 overflow-hidden">
            <span className="relative z-10">Join Our Mission</span>
            <ArrowRight className="w-5 h-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 border-2 border-blue-600 rounded-xl"></div>
            <div className="absolute inset-0 border-2 border-white rounded-xl opacity-0 scale-50 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            opacity: 0.5;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
