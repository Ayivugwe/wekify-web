"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Users,
  Shield,
  Code,
  Sparkles,
  BookOpen,
  FileText,
  Terminal,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import Layout from "./components/layout";
import { Button } from "./components/Button";
import { FadeIn } from "./components/FadeIn";
import { useState } from "react";

const languages = [
  "Kifuliiru",
  "Swahili",
  "Yoruba",
  "Quechua",
  "Navajo",
  "Māori",
  "Hawaiian",
  "Welsh",
  "Sámi",
];

export default function HomePage() {
  const [randomLanguage, setRandomLanguage] = useState(languages[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * languages.length);
      setRandomLanguage(languages[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] py-24 bg-gradient-to-b from-primary-50/50 to-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          </div>
          <FadeIn className="container mx-auto px-4 relative z-10 h-full">
            <div className="max-w-7xl mx-auto h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
                    <Globe className="w-4 h-4 mr-2" />
                    Language Preservation
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Building Digital Platforms for Language <span className="text-primary-600">Preservation</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-10">
                    Empowering communities with powerful digital platforms to preserve, teach, and celebrate their linguistic heritage.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" asChild>
                      <Link href="/contact">
                        Start Your Platform <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/solutions">View Solutions</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="relative w-[400px] h-[400px] animate-spin-slow">
                      <div className="absolute inset-0 rounded-full border-4 border-primary-200/50"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-primary-400/30"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-primary-600/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl font-bold text-primary-600">{randomLanguage}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Platform Features
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to build a powerful language preservation platform.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    icon: Users,
                    title: "Community Focus",
                    description: "Designed with and for language communities"
                  },
                  {
                    icon: Shield,
                    title: "Data Sovereignty",
                    description: "Full control over your language data"
                  },
                  {
                    icon: Code,
                    title: "Customizable",
                    description: "Tailored to your community's needs"
                  }
                ].map((feature) => (
                  <FadeIn key={feature.title}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-4 rounded-lg bg-primary-50 w-fit mb-6">
                        <feature.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-32 bg-gradient-to-b from-primary-50/30 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Platform Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive solutions for language preservation and revitalization.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  {
                    icon: BookOpen,
                    title: "Documentation",
                    description: "Digital tools for language documentation"
                  },
                  {
                    icon: FileText,
                    title: "Archives",
                    description: "Secure storage for language materials"
                  },
                  {
                    icon: Terminal,
                    title: "Technology",
                    description: "Modern digital infrastructure"
                  },
                  {
                    icon: ExternalLink,
                    title: "Integration",
                    description: "Connect with existing systems"
                  }
                ].map((solution) => (
                  <FadeIn key={solution.title}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-4 rounded-lg bg-primary-50 w-fit mb-6">
                        <solution.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {solution.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Common questions about our language preservation platforms.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    question: "What is a language preservation platform?",
                    answer: "A digital platform designed to help communities document, teach, and maintain their language through various tools and features."
                  },
                  {
                    question: "How long does it take to build a platform?",
                    answer: "Timeline varies based on community needs, but typically 3-6 months for initial launch with ongoing development."
                  },
                  {
                    question: "Do we own our language data?",
                    answer: "Yes, communities maintain full ownership and control of their language data and content."
                  },
                  {
                    question: "What kind of support do you provide?",
                    answer: "We offer comprehensive support including training, documentation, and ongoing technical assistance."
                  }
                ].map((faq, index) => (
                  <FadeIn key={index}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary-900 text-white">
          <FadeIn className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Language Platform?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Join us in creating a digital future for your language. Let's build something amazing together.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </section>
      </div>
    </Layout>
  );
}
