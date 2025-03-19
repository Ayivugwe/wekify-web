'use client';

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, BookOpen, Shield, Users, Building2, Rocket, Target, Heart, ChevronRight, Calendar, MapPin, Lightbulb, Brain } from "lucide-react";
import Image from "next/image";

export default function OurStoryPage() {
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
              <Sparkles className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Story Behind <span className="text-primary-600">Wekify</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              From a vision to preserve indigenous languages to building powerful digital platforms that empower communities worldwide.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-2xl blur-2xl"></div>
                  <Image
                    src="/story-origin.jpg"
                    alt="Wekify's Origin Story"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl relative"
                  />
                </div>
              </FadeIn>
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Origin Story
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Wekify was born from a deep understanding of the challenges faced by indigenous language communities in the digital age. Our founder, working closely with language preservationists, recognized the urgent need for modern digital solutions that could help preserve and revitalize endangered languages.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-50">
                        <Lightbulb className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">The Vision</h3>
                        <p className="text-gray-600">Creating accessible digital platforms for language preservation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-green-50">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Global Impact</h3>
                        <p className="text-gray-600">Supporting language communities worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to preserve languages through technology.
            </p>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2020",
                title: "The Beginning",
                description: "Founded with a vision to bridge technology and language preservation",
                icon: Rocket
              },
              {
                year: "2021",
                title: "First Platform Launch",
                description: "Successfully launched our first language preservation platform",
                icon: Globe
              },
              {
                year: "2022",
                title: "Community Growth",
                description: "Expanded to support multiple language communities worldwide",
                icon: Users
              },
              {
                year: "2023",
                title: "Innovation Milestone",
                description: "Introduced advanced features for language learning and documentation",
                icon: Sparkles
              },
              {
                year: "2024",
                title: "Future Vision",
                description: "Planning AI integration to enhance language preservation",
                icon: Brain
              }
            ].map((milestone, index) => (
              <FadeIn key={milestone.year}>
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-primary-50">
                          <milestone.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Making a difference in language preservation through technology and community engagement.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  number: "100+",
                  title: "Language Communities",
                  description: "Supported in their digital language preservation journey"
                },
                {
                  number: "50K+",
                  title: "Digital Resources",
                  description: "Created and preserved through our platforms"
                },
                {
                  number: "25+",
                  title: "Countries",
                  description: "Where we're helping preserve indigenous languages"
                }
              ].map((stat) => (
                <FadeIn key={stat.title}>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 text-white">
        <FadeIn className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Journey
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
