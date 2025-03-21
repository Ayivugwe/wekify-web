"use client";

import React from "react";
import Image from "next/image";
import Layout from "@/app/components/layout";
import { Button } from "@/app/components/Button";
import { FadeIn } from "@/app/components/FadeIn";
import {
  Globe,
  BookOpen,
  Shield,
  Users,
  Target,
  Heart,
  Brain,
  ArrowRight,
  Sparkles,
  Building2,
  Rocket,
} from "lucide-react";
import { Accordion } from "@/app/components/Accordion";

const aboutFAQs = [
  {
    title: "What is Wekify LLC?",
    content: "Wekify LLC is a technology company focused on building digital platforms that empower communities to preserve, teach, and celebrate their languages. We're currently working with the Bafuliiru community in Congo Kinshasa to preserve the Kifuliiru language.",
    icon: <Globe className="h-5 w-5" />
  },
  {
    title: "Where is Wekify LLC located?",
    content: "We're currently operating as a home-based company in Spokane, Washington, with plans to establish a physical office space as our team grows.",
    icon: <Globe className="h-5 w-5" />
  },
  {
    title: "How can I get involved?",
    content: "Whether you're a member of the Bafuliiru community or passionate about language preservation, there are many ways to get involved. Visit our Contact page to learn more about opportunities.",
    icon: <Users className="h-5 w-5" />
  }
];

export default function AboutUsPage() {
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
              About <span className="text-primary-600">Wekify LLC</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Empowering communities to preserve and celebrate their languages through innovative digital solutions.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Core Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600">
                Founded in Spokane, Washington, Wekify LLC emerged from a passion for preserving indigenous languages in the digital age. Our journey began with a focus on the Kifuliiru language and the Bafuliiru community in Congo Kinshasa.
              </p>
            </FadeIn>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Globe,
                  title: "Location",
                  description: "Spokane, Washington"
                },
                {
                  icon: BookOpen,
                  title: "Focus",
                  description: "Kifuliiru Language"
                },
                {
                  icon: Shield,
                  title: "Community",
                  description: "Bafuliiru People"
                }
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300">
                    <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
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

            {/* Learn More Section */}
            <FadeIn className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Learn More About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href="/about/mission">
                    Our Mission <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href="/about/vision">
                    Our Vision <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href="/about/team">
                    Our Team <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <a href="/about/culture">
                    Our Culture <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>
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
                Find answers to common questions about Wekify LLC.
              </p>
            </FadeIn>
            <FadeIn>
              <Accordion items={aboutFAQs} variant="bordered" />
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}