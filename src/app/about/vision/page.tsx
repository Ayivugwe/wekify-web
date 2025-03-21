"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Globe, Brain, Target, Sparkles } from "lucide-react";
import { Accordion } from "@/app/components/Accordion";

const visionFAQs = [
  {
    title: "What is Wekify LLC's vision?",
    content: "We envision a world where the Kifuliiru language thrives in the digital age, serving as a model for preserving other indigenous languages through innovative technology solutions.",
    icon: <Target className="h-5 w-5" />
  },
  {
    title: "How will we achieve our vision?",
    content: "Through a combination of community engagement, digital innovation, and strategic partnerships, we're building scalable solutions that can be adapted for other languages and communities.",
    icon: <Sparkles className="h-5 w-5" />
  },
  {
    title: "What's next for Wekify LLC?",
    content: "We're laying the groundwork for future expansion, developing AI-powered tools for language preservation, and building partnerships with other language communities.",
    icon: <Brain className="h-5 w-5" />
  }
];

export default function VisionPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <FadeIn className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Vision</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              A world where every language has the digital resources it needs to thrive in the modern age.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Vision Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Digital Language Preservation",
                  description: "Creating comprehensive digital platforms that make language preservation accessible and effective for communities worldwide.",
                  icon: Globe,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "AI Integration",
                  description: "Developing AI-powered tools that enhance language learning and preservation while respecting cultural authenticity.",
                  icon: Brain,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Global Impact",
                  description: "Expanding our reach to support other indigenous languages and communities beyond Kifuliiru.",
                  icon: Target,
                  color: "bg-green-50 text-green-600"
                },
                {
                  title: "Innovation Hub",
                  description: "Building a center of excellence for language preservation technology and community engagement.",
                  icon: Sparkles,
                  color: "bg-orange-50 text-orange-600"
                }
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300">
                    <div className={`p-3 rounded-lg ${item.color} w-fit mb-4`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Learn more about our vision for the future.
              </p>
            </FadeIn>
            <FadeIn>
              <Accordion items={visionFAQs} variant="bordered" />
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}