
import React from "react";
import { Cpu, Globe, BarChart, MessageSquare, Search, Brain } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";

export default function AIMLPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI & Machine Learning Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Advanced artificial intelligence and machine learning technologies 
              for language analysis, translation, and content generation.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "Automated Translation",
                  description: "Machine learning powered translation systems tailored for indigenous and endangered languages."
                },
                {
                  icon: <Search className="w-8 h-8 text-blue-600" />,
                  title: "Content Analysis",
                  description: "AI tools to analyze and understand language patterns, usage, and linguistic structures."
                },
                {
                  icon: <BarChart className="w-8 h-8 text-blue-600" />,
                  title: "Pattern Recognition",
                  description: "Identify patterns and trends in language usage to aid preservation and revitalization efforts."
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
                  title: "Language Models",
                  description: "Custom language models designed for low-resource languages and specialized applications."
                },
                {
                  icon: <Cpu className="w-8 h-8 text-blue-600" />,
                  title: "Automated Transcription",
                  description: "Convert audio recordings to text with specialized models for indigenous languages."
                },
                {
                  icon: <Brain className="w-8 h-8 text-blue-600" />,
                  title: "Predictive Analytics",
                  description: "Forecast language trends and identify opportunities for preservation intervention."
                }
              ].map((solution, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              AI Applications for Language Preservation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Automated Documentation",
                  description: "Automatically process and organize language documentation from various sources."
                },
                {
                  title: "Grammar Assistance",
                  description: "AI-powered tools to help users learn and apply correct grammar in endangered languages."
                },
                {
                  title: "Speech Recognition",
                  description: "Convert spoken language to text for documentation and educational purposes."
                },
                {
                  title: "Content Generation",
                  description: "Generate new learning materials and texts in languages with limited resources."
                }
              ].map((useCase, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Harness the Power of AI for Language Preservation
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us to explore how AI and machine learning can accelerate and enhance 
              your language preservation and revitalization efforts.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
