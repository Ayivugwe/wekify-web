'use client';

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, BookOpen, Shield, Users, Target, Heart, ChevronRight, Lightbulb, Lock, Database, Network } from "lucide-react";
import Image from "next/image";

export default function MissionPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <FadeIn className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Preserving Languages Through <span className="text-primary-600">Digital Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We're dedicated to creating powerful digital platforms that empower communities to preserve, teach, and celebrate their linguistic heritage.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Mission Statement
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    To preserve and revitalize indigenous languages through innovative digital solutions, making language resources accessible worldwide and connecting diaspora communities.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-50">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Innovation</h3>
                        <p className="text-gray-600">Using cutting-edge technology to preserve languages</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-green-50">
                        <Globe className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Accessibility</h3>
                        <p className="text-gray-600">Making language resources available to everyone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl blur-2xl"></div>
                  <Image
                    src="/mission-statement.jpg"
                    alt="Wekify's Mission"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl relative"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Objectives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key goals that guide our work in language preservation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Globe,
                title: "Global Accessibility",
                description: "Making language resources available to everyone, everywhere",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Shield,
                title: "Cultural Preservation",
                description: "Protecting and preserving cultural heritage through language",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Users,
                title: "Community Engagement",
                description: "Empowering communities to take ownership of their language",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: Database,
                title: "Digital Documentation",
                description: "Creating comprehensive digital archives of languages",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: Network,
                title: "Global Network",
                description: "Building connections between language communities",
                color: "bg-pink-50 text-pink-600"
              },
              {
                icon: Lock,
                title: "Data Sovereignty",
                description: "Ensuring communities maintain control of their data",
                color: "bg-indigo-50 text-indigo-600"
              }
            ].map((objective) => (
              <FadeIn key={objective.title}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className={`p-3 rounded-lg ${objective.color} w-fit mb-4`}>
                    <objective.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600">
                    {objective.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we're making a difference in language preservation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: BookOpen,
                title: "Language Learning",
                description: "Creating effective tools for teaching and learning languages",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Heart,
                title: "Cultural Connection",
                description: "Bridging generations through language preservation",
                color: "bg-green-50 text-green-600"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Making languages accessible to diaspora communities",
                color: "bg-purple-50 text-purple-600"
              }
            ].map((area) => (
              <FadeIn key={area.title}>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300">
                  <div className={`p-3 rounded-lg ${area.color} w-fit mb-4`}>
                    <area.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">
                    {area.description}
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
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Be part of our mission to preserve languages through technology. Let's build something amazing together.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Get Involved <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </section>
    </Layout>
  );
} 