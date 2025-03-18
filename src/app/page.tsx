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
} from "lucide-react";
import Layout from "./components/layout";
import { Button } from "./components/Button";
import { FadeIn } from "./components/FadeIn";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-primary-50/50 to-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          </div>
          <FadeIn className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl"></div>
                  <div className="relative">
                    <Image
                      src="/globe.png"
                      alt="Language Preservation"
                      width={600}
                      height={600}
                      className="rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Platform Features
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to build a powerful language preservation platform.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
            </FadeIn>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-gradient-to-b from-primary-50/30 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Platform Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive solutions for language preservation and revitalization.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-3 rounded-lg bg-primary-50 w-fit mb-4">
                        <solution.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600">
                        {solution.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-900 text-white">
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
