"use client";

import { Metadata } from "next";
import React from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Brain, 
  Globe, 
  Zap, 
  Code, 
  Users, 
  Database, 
  ArrowRight, 
  FileCode, 
  Share2, 
  MessageSquare, 
  Lightbulb,
  Shield,
  Cpu
} from "lucide-react";
import { Button } from "@/app/components/Button";
import { FadeIn } from "@/app/components/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Platform Vision - Wekify",
  description: "Learn about our vision for building powerful language preservation platforms and our future plans for AI integration.",
};

export default function AIAndUsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <FadeIn className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Platform-First Approach
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the Foundation for <span className="text-primary-600">Language Preservation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We're building powerful digital platforms that will enable communities to preserve their languages. Our future vision includes AI integration to enhance these platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="#ai-approach">
                  <Sparkles className="mr-2 h-5 w-5" /> Our Approach
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Platform Vision
            </h2>
            <p className="text-lg text-gray-600">
              We're focused on building robust digital platforms that will serve as the foundation for language preservation. As we gather more data and work with communities, we plan to integrate AI features to enhance these platforms.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Future AI Integration",
                description: "Planned AI-powered tools for efficient language documentation and transcription"
              },
              {
                icon: Shield,
                title: "Data Sovereignty",
                description: "Communities will maintain full control over their language data and AI models"
              },
              {
                icon: Globe,
                title: "Cross-Language Learning",
                description: "Future AI-assisted translation and learning tools across multiple languages"
              },
              {
                icon: Cpu,
                title: "Community AI Models",
                description: "Future development of AI models trained on community-specific language data"
              },
              {
                icon: Users,
                title: "Community Training",
                description: "Tools to help communities understand and control future AI features"
              },
              {
                icon: Database,
                title: "Smart Archives",
                description: "Future intelligent organization and retrieval of language materials"
              }
            ].map((feature) => (
              <FadeIn key={feature.title}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors">
                  <div className="p-3 rounded-lg bg-primary-50 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gray-50" id="ai-approach">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Future AI Vision
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                While we're currently focused on building robust digital platforms, we have a clear vision for how AI can enhance language preservation in the future.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <Image
                  src="/ai-platform.png"
                  alt="AI Platform Visualization"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </FadeIn>
              <FadeIn className="space-y-8">
                {[
                  {
                    title: "Community Control",
                    description: "Communities will decide how AI is used in their platforms"
                  },
                  {
                    title: "Transparent AI",
                    description: "Clear documentation of how future AI features will work"
                  },
                  {
                    title: "Cultural Context",
                    description: "Future AI models will be trained with cultural understanding"
                  },
                  {
                    title: "Data Privacy",
                    description: "Strict data protection and sovereignty measures"
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-primary-50">
                      <Shield className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 text-white">
        <FadeIn className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Build Your Language Platform Today
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Start building your community's digital platform today. We'll work together to create a foundation that can be enhanced with AI in the future.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </section>
    </Layout>
  );
}