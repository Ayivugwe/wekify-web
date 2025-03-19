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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Mission to <span className="text-primary-600">Preserve Languages</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We're dedicated to helping communities preserve and revitalize their indigenous languages through innovative digital solutions.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Wekify LLC
              </h2>
              <p className="text-lg text-gray-600">
                Wekify LLC is a technology company focused on building digital platforms that empower communities to preserve, teach, and celebrate their languages. Our solutions combine cutting-edge technology with cultural sensitivity to create meaningful impact.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Supporting language communities worldwide through digital platforms"
                },
                {
                  icon: BookOpen,
                  title: "Cultural Preservation",
                  description: "Helping communities document and share their linguistic heritage"
                },
                {
                  icon: Shield,
                  title: "Data Sovereignty",
                  description: "Ensuring communities maintain control over their language data"
                }
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
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
      <section id="mission" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                To empower communities worldwide to preserve and revitalize their indigenous languages through innovative digital solutions, making language resources accessible while respecting cultural sovereignty.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Community First",
                  description: "We believe in putting communities at the center of language preservation efforts, ensuring they have full control over their digital resources.",
                  icon: Users,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Digital Innovation",
                  description: "Leveraging technology to create powerful tools that make language preservation more accessible and effective.",
                  icon: Brain,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Cultural Respect",
                  description: "Approaching each project with deep respect for cultural traditions and community values.",
                  icon: Heart,
                  color: "bg-red-50 text-red-600"
                },
                {
                  title: "Global Impact",
                  description: "Working towards a world where no language is left behind in the digital age.",
                  icon: Target,
                  color: "bg-green-50 text-green-600"
                }
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
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

      {/* AI & Us Section */}
      <section id="ai-and-us" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our AI Approach
              </h2>
              <p className="text-lg text-gray-600">
                While our current focus is on developing robust digital platforms for language preservation, we're laying the groundwork for future AI partnerships with the communities we serve.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Platform Development",
                  description: "Building powerful digital platforms that enable communities to preserve and share their languages effectively.",
                  icon: Globe,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Current AI Usage",
                  description: "Integrating existing AI tools to enhance our platforms' capabilities for language learning and documentation.",
                  icon: Brain,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Community Partnerships",
                  description: "Working closely with communities to understand their needs and ensure our solutions serve them effectively.",
                  icon: Users,
                  color: "bg-red-50 text-red-600"
                },
                {
                  title: "Future AI Vision",
                  description: "Planning future partnerships to develop specialized AI models in collaboration with language communities.",
                  icon: Target,
                  color: "bg-green-50 text-green-600"
                }
              ].map((item) => (
                <FadeIn key={item.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
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
            <FadeIn className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Our primary focus is on developing robust digital platforms that empower communities to preserve their languages. While we currently use existing AI technologies to enhance our platforms, we envision future partnerships with the communities we serve to develop specialized AI models that better meet their specific needs. This collaborative approach ensures that any future AI development is guided by community needs and cultural context.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  Learn More About Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-lg text-gray-600">
                Meet the people behind Wekify, dedicated to making language preservation accessible to all.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn>
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src="/ayivugwe.png"
                      alt="Ayivugwe"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    Ayivugwe
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    Founder & Lead Developer
                  </p>
                  <p className="text-gray-600 text-center">
                    Passionate about using technology to preserve indigenous languages and cultural heritage.
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
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Ready to start preserving your community's language? Let's build something meaningful together.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </FadeIn>
      </section>
    </Layout>
  );
} 