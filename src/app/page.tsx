import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Layout from "./components/layout";
import HeroSection from "./components/HeroSection";
import GamePromoSection from "./components/GamePromoSection";
import { LanguageDirectoryPromo } from "./components/LanguageDirectoryPromo";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wekify - Language Preservation Platform",
  description: "Empowering indigenous language preservation through digital innovation.",
  keywords: ["language preservation", "digital platform", "indigenous languages", "Kifuliiru"],
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Globe */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Language Preservation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers a complete set of tools for language documentation,
              learning, and cultural preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Digital Dictionary",
                description:
                  "Create comprehensive dictionaries with audio pronunciations, example sentences, and cultural context.",
                icon: "📚",
                link: "/solutions/digital-dictionary",
              },
              {
                title: "Learning Tools",
                description:
                  "Interactive lessons, quizzes, and games designed to make language learning engaging and effective.",
                icon: "🎓",
                link: "/solutions/learning-tools",
              },
              {
                title: "Cultural Documentation",
                description:
                  "Preserve stories, songs, and traditions alongside language data for holistic cultural preservation.",
                icon: "🏛️",
                link: "/solutions/cultural-documentation",
              },
              {
                title: "Community Engagement",
                description:
                  "Tools to connect speakers, learners, and experts to build a thriving language community.",
                icon: "👥",
                link: "/solutions/community",
              },
              {
                title: "Research Platform",
                description:
                  "Advanced features for linguists and researchers to analyze and document language structures.",
                icon: "🔍",
                link: "/solutions/research",
              },
              {
                title: "Integration Services",
                description:
                  "Connect with existing resources and platforms through our flexible API and integration tools.",
                icon: "🔄",
                link: "/solutions/integration",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Promo Section */}
      <GamePromoSection />

      {/* Language Directory Promo */}
      <LanguageDirectoryPromo />

      {/* FAQ Section */}
      <FAQSection faqs={faqData} />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Language Preservation Journey?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact our team today to discuss your language preservation goals and discover 
            how our solutions can help your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/solutions"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}