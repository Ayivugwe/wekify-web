import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Heart,
  Users,
  Shield,
  Code,
  Sparkles,
  Building2,
  Rocket,
  Target,
} from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Wekify - Platform for Language Preservation",
  description: "Learn about our mission to empower communities with custom digital platforms for language preservation and revitalization.",
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
          <FadeIn className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the Future of Language Preservation
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We create powerful digital platforms that empower communities to preserve, teach, and celebrate their linguistic heritage.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Start Your Platform <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </FadeIn>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <Image
                  src="/platform-showcase.png"
                  alt="Wekify Platform"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </FadeIn>
              <FadeIn className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600">
                  We believe every language deserves a digital future. Our mission is to provide communities with powerful, customizable platforms that make language preservation accessible, engaging, and sustainable.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Building2,
                      title: "Custom Platforms",
                      description: "Tailored digital solutions for each community's unique needs"
                    },
                    {
                      icon: Rocket,
                      title: "Innovation",
                      description: "Cutting-edge technology for effective language preservation"
                    },
                    {
                      icon: Target,
                      title: "Impact",
                      description: "Measurable results in language documentation and learning"
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

        {/* Values Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Platform Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built on principles that ensure sustainable language preservation through digital innovation.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </Layout>
  );
}
