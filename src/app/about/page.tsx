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
} from "lucide-react";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Digital Platforms for Language Preservation
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We help communities create custom digital platforms to preserve and revitalize their languages through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/ayivugwe.png"
                  alt="Wekify Vision"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We envision a world where every language community has access to custom digital platforms that enable them to preserve, teach, and celebrate their linguistic heritage.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower communities with the digital tools and expertise they need to build and maintain their own language preservation platforms, ensuring cultural authenticity and community ownership.
                </p>
                <Link
                  href="/about/our-story"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read Our Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Platform-Building Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Development",
                  description: "Tailored platform solutions that respect cultural context and community needs",
                  icon: <Code className="w-8 h-8" />,
                  href: "/solutions",
                },
                {
                  title: "AI & ML Integration",
                  description: "Smart features for language learning and content organization",
                  icon: <Sparkles className="w-8 h-8" />,
                  href: "/solutions",
                },
                {
                  title: "Community Tools",
                  description: "Engagement features for active community participation",
                  icon: <Users className="w-8 h-8" />,
                  href: "/solutions",
                },
                {
                  title: "Cultural Preservation",
                  description: "Tools for documenting and sharing cultural knowledge",
                  icon: <Globe className="w-8 h-8" />,
                  href: "/solutions",
                },
                {
                  title: "Learning Resources",
                  description: "Interactive tools for language teaching and learning",
                  icon: <BookOpen className="w-8 h-8" />,
                  href: "/solutions",
                },
                {
                  title: "Data Sovereignty",
                  description: "Ensuring communities retain ownership of their language data",
                  icon: <Shield className="w-8 h-8" />,
                  href: "/about/our-policies",
                },
              ].map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="group p-8 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <span className="inline-flex items-center text-blue-600 font-medium">
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Platform Project
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
              Let's discuss how we can help your community build a custom digital platform for language preservation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
