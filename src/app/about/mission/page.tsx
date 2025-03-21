"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Globe, BookOpen, Users, Brain, Target } from "lucide-react";
import { Accordion } from "@/app/components/Accordion";

const missionFAQs = [
  {
    title: "What is Wekify LLC's mission?",
    content: "Our mission is to empower the Bafuliiru community to preserve and revitalize the Kifuliiru language through innovative digital solutions, making language resources accessible while respecting cultural sovereignty.",
    icon: <Target className="h-5 w-5" />
  },
  {
    title: "How do we approach language preservation?",
    content: "We combine community engagement with digital innovation, working closely with the Bafuliiru community to develop tools that meet their specific needs while preserving cultural authenticity.",
    icon: <BookOpen className="h-5 w-5" />
  },
  {
    title: "What makes our approach unique?",
    content: "Our community-first approach ensures that the Bafuliiru community maintains full control over their language resources while leveraging technology to make preservation more effective.",
    icon: <Users className="h-5 w-5" />
  }
];

export default function MissionPage() {
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
              Our <span className="text-primary-600">Mission</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              To empower the Bafuliiru community to preserve and revitalize the Kifuliiru language through innovative digital solutions.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Mission Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Community First",
                  description: "We believe in putting the Bafuliiru community at the center of our language preservation efforts, ensuring they have full control over their digital resources.",
                  icon: Users,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Digital Innovation",
                  description: "Leveraging technology to create powerful tools that make Kifuliiru language preservation more accessible and effective.",
                  icon: Brain,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Cultural Respect",
                  description: "Approaching our work with deep respect for Bafuliiru cultural traditions and community values.",
                  icon: Globe,
                  color: "bg-green-50 text-green-600"
                },
                {
                  title: "Future Growth",
                  description: "Building a foundation that can support future expansion to other languages and communities.",
                  icon: Target,
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
                Learn more about our mission and approach.
              </p>
            </FadeIn>
            <FadeIn>
              <Accordion items={missionFAQs} variant="bordered" />
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
} 