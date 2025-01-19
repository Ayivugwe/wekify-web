// File location: app/solutions/digital-dictionary/page.tsx

import React from "react";
import { ArrowRight, BookOpen, Globe, Users } from "lucide-react";
import Layout from "@/app/components/layout";

export default function DigitalDictionaryPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Digital Dictionary Platform
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Preserve and digitize languages with our comprehensive
                dictionary platform
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Comprehensive Documentation",
                  description:
                    "Document vocabulary, phrases, and cultural context in a structured digital format",
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "Multi-Language Support",
                  description:
                    "Support for multiple dialects and variations within each language",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Community Contribution",
                  description:
                    "Enable native speakers to contribute and verify entries",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in preserving languages for future generations
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Start Preserving
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
