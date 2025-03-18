"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Star,
  Globe,
  Heart,
  Award,
  Users,
  Clock,
  Shield,
  Sparkles,
  Target,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Platform Ambassadors - Wekify",
  description: "Join our ambassador program to help communities build and maintain their language preservation platforms.",
  keywords: "platform ambassador, language technology, community leader, digital platform",
};

export default function AmbassadorPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-24">
          <FadeIn className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Platform Ambassador Program
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Lead Your Community's Digital Future
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Help communities build and maintain powerful digital platforms for language preservation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="#apply">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Role Overview */}
        <section className="py-24 bg-white" id="learn-more">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <FadeIn>
                <Image
                  src="/ambassador-platform.png"
                  alt="Platform Ambassador"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </FadeIn>
              <FadeIn className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Platform Ambassador Role
                </h2>
                <p className="text-lg text-gray-600">
                  As a Platform Ambassador, you'll help communities harness the power of digital platforms for language preservation. You'll be the bridge between technology and cultural heritage.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Target,
                      title: "Platform Guidance",
                      description: "Help communities choose and customize their platforms"
                    },
                    {
                      icon: Users,
                      title: "Community Training",
                      description: "Train users on platform features and best practices"
                    },
                    {
                      icon: Shield,
                      title: "Cultural Integration",
                      description: "Ensure platforms respect cultural values and practices"
                    }
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-1 p-2 rounded-lg bg-primary-50">
                        <item.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ambassador Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join our program and get access to exclusive resources and opportunities.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Star,
                  title: "Platform Training",
                  description: "Comprehensive training on our platform features and capabilities"
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  description: "Connect with platform ambassadors worldwide"
                },
                {
                  icon: Award,
                  title: "Certification",
                  description: "Official platform ambassador certification"
                },
                {
                  icon: Sparkles,
                  title: "Early Access",
                  description: "Preview and test new platform features"
                },
                {
                  icon: MessageSquare,
                  title: "Direct Support",
                  description: "Priority access to our technical team"
                },
                {
                  icon: Heart,
                  title: "Impact",
                  description: "Make a real difference in language preservation"
                }
              ].map((benefit) => (
                <FadeIn key={benefit.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-colors">
                    <div className="p-3 rounded-lg bg-primary-50 w-fit mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-24 bg-white" id="apply">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Become an Ambassador
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join us in building the future of language preservation platforms.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Apply",
                  description: "Fill out our ambassador application form"
                },
                {
                  step: "2",
                  title: "Interview",
                  description: "Meet with our team to discuss your goals"
                },
                {
                  step: "3",
                  title: "Training",
                  description: "Complete our platform ambassador training"
                }
              ].map((step) => (
                <FadeIn key={step.title}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary-600">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-900 text-white">
          <FadeIn className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Join our ambassador program and help communities preserve their languages through digital platforms.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </section>
      </div>
    </Layout>
  );
}
