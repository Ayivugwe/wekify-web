"use client";

import React from "react";
import Image from "next/image";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Timeline, TimelineItem } from "@/app/components/Timeline";
import { 
  GraduationCap, 
  Code, 
  Building2, 
  Heart, 
  Globe, 
  Users,
  BookOpen,
  Lightbulb,
  Rocket,
  MapPin,
  Home,
  User
} from "lucide-react";

const timelineItems: TimelineItem[] = [
  {
    year: "2014",
    title: "The First Vision",
    description: "Started with ARCIN project at Ngozi University, laying the foundation for future ideas.",
    icon: <GraduationCap className="w-6 h-6" />,
    details: "Created the initial vision document while studying at Ngozi University in Burundi. This project, called Agence pour le Renforcement des Connaissances Intellectuelles et Naturelles (ARCIN), planted the seeds for future developments.",
    phase: "education"
  },
  {
    year: "2015",
    title: "Technical Journey Begins",
    description: "First laptop and initial technical projects at university.",
    icon: <Code className="w-6 h-6" />,
    details: "Received first laptop from twin brother. Worked on BujaSAT project, a mobile app for Bujumbura city guide, while facing technical challenges and learning mobile development from scratch.",
    phase: "technical"
  },
  {
    year: "2017",
    title: "Professional Growth",
    description: "Started software development career and completed university.",
    icon: <Building2 className="w-6 h-6" />,
    details: "Secured first software development job and successfully presented the BujaSAT project, marking the beginning of professional growth.",
    phase: "professional"
  },
  {
    year: "2018-2019",
    title: "Memory Preservation",
    description: "Started Nikumbuke Weka Kumbukumbu project.",
    icon: <Heart className="w-6 h-6" />,
    details: "Inspired by personal loss, created Nikumbuke Weka Kumbukumbu (Remember Keep Records) project, later renamed to Weka Gasorwe, focusing on preserving memories of the refugee camp community.",
    phase: "community"
  },
  {
    year: "2020",
    title: "Language Preservation Vision",
    description: "Birth of the Kifuliiru language preservation initiative.",
    icon: <Globe className="w-6 h-6" />,
    details: "Discovered the absence of Ibufuliiru information online, leading to the creation of Ibufuliiru website and the broader vision of language preservation.",
    phase: "language"
  },
  {
    year: "2025",
    title: "Wekify LLC",
    description: "Establishment of Wekify LLC in the United States.",
    icon: <Rocket className="w-6 h-6" />,
    details: "Founded Wekify LLC, combining the Swahili word 'Weka' (to keep) with '-ify' suffix, representing our commitment to preserving linguistic and cultural heritage.",
    phase: "company"
  }
];

export default function OurStoryPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-primary-600 font-medium">Founded by Ayivugwe Kabemba</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Story</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From a refugee camp to a global mission of language preservation.
                Discover the journey that shaped Wekify LLC.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-24 h-1 bg-primary-600 rounded-full"></div>
                <span className="text-gray-500">Est. 2025</span>
              </div>
            </FadeIn>
            <FadeIn className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Modern office workspace with computer"
                fill
                className="object-cover"
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Founder's Journey: Meet Ayivugwe Kabemba
              </h2>

              <p className="text-lg text-gray-600">
                Founder of Wekify LLC - A story of resilience, determination, and the power of technology to preserve heritage
              </p>
            </FadeIn>
            <div className="space-y-8">
              <FadeIn className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">From Congo-Kinshasa to Burundi</h3>
                    <p className="text-sm text-gray-500">A Journey of Hope</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Born in the Democratic Republic of Congo, I fled the war-torn region with my family, 
                  seeking safety in Burundi. This experience of displacement and cultural adaptation 
                  deeply influenced my understanding of the importance of preserving cultural heritage 
                  and language.
                </p>
              </FadeIn>

              <FadeIn className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                    <Home className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Life in the Refugee Camp</h3>
                    <p className="text-sm text-gray-500">Building Community</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Growing up in a refugee camp taught me the value of community and the power of 
                  shared experiences. It was here that I first recognized how technology could be 
                  used to preserve and share our stories, traditions, and language.
                </p>
              </FadeIn>

              <FadeIn className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Education and Growth</h3>
                    <p className="text-sm text-gray-500">The Path to Innovation</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  At Ngozi University, I discovered my passion for technology and its potential to 
                  bridge cultural gaps. The ARCIN project became my first step in combining 
                  technology with cultural preservation, setting the foundation for what would 
                  become Wekify LLC.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Timeline
              </h2>
              <p className="text-lg text-gray-600">
                A journey of growth, innovation, and commitment to language preservation
              </p>
            </div>
            <Timeline items={timelineItems} />
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Join Us on Our Journey
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              As we continue to grow and evolve, our commitment to preserving linguistic diversity
              remains unwavering. We invite you to be part of our story and help us create a future
              where every language thrives in the digital age.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                Get Involved
              </button>
              <button className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                Learn More
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
} 