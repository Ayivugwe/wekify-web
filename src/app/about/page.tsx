'use client';

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, BookOpen, Shield, Users, Building2, Rocket, Target, Heart, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
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
              Empowering Language Communities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building Digital Bridges for <span className="text-primary-600">Language Preservation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We create powerful digital platforms that empower communities to preserve, teach, and celebrate their linguistic heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start Your Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/solutions">
                  Explore Solutions
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Our Story",
                description: "Discover our journey and the story behind Wekify",
                href: "/about/our-story",
                icon: BookOpen,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Our Mission",
                description: "Learn about our mission to preserve indigenous languages",
                href: "/about/mission",
                icon: Target,
                color: "bg-green-50 text-green-600"
              },
              {
                title: "Our Team",
                description: "Meet the people behind our mission",
                href: "/about#team",
                icon: Users,
                color: "bg-purple-50 text-purple-600"
              }
            ].map((item) => (
              <FadeIn key={item.title}>
                <Link href={item.href} className="group block">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
                    <div className={`p-3 rounded-lg ${item.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium">
                      Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on principles that ensure sustainable language preservation through digital innovation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Data Sovereignty",
                description: "Communities maintain full control over their language data"
              },
              {
                icon: Users,
                title: "Community-Driven",
                description: "Platforms designed with and for the community"
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Advanced technology made accessible and practical"
              },
              {
                icon: Heart,
                title: "Cultural Respect",
                description: "Preservation of cultural context alongside language"
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "Platforms that work for everyone, everywhere"
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Effective tools for language learning and teaching"
              }
            ].map((value) => (
              <FadeIn key={value.title}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-lg bg-primary-50 w-fit mb-4">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
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
    </Layout>
  );
}