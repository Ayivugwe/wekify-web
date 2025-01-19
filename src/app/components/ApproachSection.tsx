"use client";

import React from "react";
import { FileText, Code, Users, Sparkles } from "lucide-react";

const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Document",
      description:
        "We work with native speakers to document vocabulary, phrases, and cultural context",
      gradient: "from-blue-500 to-blue-600",
      delay: "0",
    },
    {
      number: "02",
      icon: Code,
      title: "Digitize",
      description:
        "Create intuitive digital platforms for learning and preservation",
      gradient: "from-indigo-500 to-indigo-600",
      delay: "150",
    },
    {
      number: "03",
      icon: Users,
      title: "Engage",
      description: "Build active communities around each language platform",
      gradient: "from-purple-500 to-purple-600",
      delay: "300",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Evolve",
      description:
        "Continuously improve and expand based on community feedback and needs",
      gradient: "from-violet-500 to-violet-600",
      delay: "450",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-900">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Approach</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic methodology for preserving and digitizing languages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.5s ease-out forwards ${step.delay}ms`,
              }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent -translate-y-1/2 z-0"></div>
              )}

              {/* Card */}
              <div className="relative z-10 p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full transform hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ApproachSection;
