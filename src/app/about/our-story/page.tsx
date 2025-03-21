"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Timeline, TimelineItem } from "@/app/components/Timeline";
import { BookOpen, Code, Globe, Heart, Lightbulb, Users } from "lucide-react";

const timelineItems: TimelineItem[] = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Wekify LLC was founded with a vision to bridge technology and cultural preservation.",
    icon: <Lightbulb className="w-6 h-6" />,
    details: "Our journey began with a simple yet powerful idea: to create digital solutions that would help preserve and promote indigenous languages and cultures. Founded by Ayivugwe Kabemba, Wekify LLC emerged from a deep understanding of the urgent need to protect linguistic diversity in our increasingly digital world."
  },
  {
    year: "2023",
    title: "Building the Foundation",
    description: "Development of core technology and establishment of community partnerships.",
    icon: <Code className="w-6 h-6" />,
    details: "Throughout 2023, we focused on developing our core technology platform while building strong relationships with indigenous communities. We began creating tools that would make it easier for communities to digitize and preserve their languages, starting with innovative solutions for language documentation and learning."
  },
  {
    year: "2024",
    title: "Global Impact",
    description: "Expanding our reach and launching new initiatives for language preservation.",
    icon: <Globe className="w-6 h-6" />,
    details: "In 2024, we're expanding our impact globally, working with more communities and launching new initiatives. Our focus is on creating sustainable solutions that empower communities to preserve their linguistic heritage while embracing modern technology."
  },
  {
    year: "Future",
    title: "Vision Ahead",
    description: "Continuing our mission to preserve and promote linguistic diversity worldwide.",
    icon: <Heart className="w-6 h-6" />,
    details: "Looking ahead, we remain committed to our mission of preserving linguistic diversity. We envision a future where every language has a digital presence, where communities can easily create and share resources in their native languages, and where technology serves as a bridge between tradition and innovation."
  }
];

export default function OurStoryPage() {
  return (
    <Layout>
      <div className="relative isolate overflow-hidden bg-white">
        {/* Hero Section */}
        <FadeIn className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Story
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From a vision of preserving linguistic diversity to creating innovative digital solutions,
              discover the journey that shaped Wekify LLC and our commitment to empowering communities
              through technology.
            </p>
          </div>
        </FadeIn>

        {/* Timeline Section */}
        <FadeIn className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <Timeline items={timelineItems} />
        </FadeIn>

        {/* Mission Statement */}
        <FadeIn className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Join Us on Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As we continue to grow and evolve, our commitment to preserving linguistic diversity
              remains unwavering. We invite you to be part of our story and help us create a future
              where every language thrives in the digital age.
            </p>
          </div>
        </FadeIn>
      </div>
    </Layout>
  );
} 