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

export default function AboutUsPage() {
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
              Empowering the Bafuliiru Community
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Preserving <span className="text-primary-600">Kifuliiru</span> Through Digital Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We're dedicated to helping the Bafuliiru community preserve and revitalize the Kifuliiru language through innovative digital solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/solutions">
                  Explore Our Solutions
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Wekify LLC
              </h2>
              <p className="text-lg text-gray-600">
                Wekify LLC is a technology company focused on building digital platforms that empower communities to preserve, teach, and celebrate their languages. Currently, we're working with the Bafuliiru community in Congo Kinshasa to preserve the Kifuliiru language.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Local Focus",
                  description: "Working closely with the Bafuliiru community in Congo Kinshasa"
                },
                {
                  icon: BookOpen,
                  title: "Language Preservation",
                  description: "Documenting and preserving the Kifuliiru language"
                },
                {
                  icon: Shield,
                  title: "Community Control",
                  description: "Ensuring the community maintains control over their language resources"
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
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                To empower the Bafuliiru community to preserve and revitalize the Kifuliiru language through innovative digital solutions, making language resources accessible while respecting cultural sovereignty.
              </p>
            </FadeIn>
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
                  icon: Heart,
                  color: "bg-red-50 text-red-600"
                },
                {
                  title: "Future Growth",
                  description: "Building a foundation that can support future expansion to other languages and communities.",
                  icon: Target,
                  color: "bg-green-50 text-green-600"
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

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Meet the people behind Wekify LLC, dedicated to preserving the Kifuliiru language.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src="/ayivugwe.png"
                      alt="Ayivugwe Kabemba"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    Ayivugwe Kabemba
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Founder & Lead Developer
                  </p>
                  <p className="text-gray-600 text-center">
                    Passionate about using technology to preserve indigenous languages and cultural heritage, currently focused on the Kifuliiru language.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 text-white">
        <FadeIn className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Preserving Kifuliiru
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Whether you're a member of the Bafuliiru community or passionate about language preservation, there's a place for you in our mission.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">
              Get Involved <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </section>
    </Layout>
  );
}