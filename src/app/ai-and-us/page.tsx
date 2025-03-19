"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import Image from "next/image";

export default function AIAndUsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI and Us
            </h1>
            <p className="text-xl text-gray-600">
              How We're Using Artificial Intelligence to Preserve Languages
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our AI Approach</h2>
                <p className="text-gray-600 mb-4">
                  At Wekify, we believe that artificial intelligence is not just a tool, but a powerful ally in our mission to preserve and revitalize endangered languages. Our approach combines cutting-edge AI technology with deep respect for linguistic diversity and cultural heritage.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key AI Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Language Recognition</h3>
                    <p className="text-gray-600">
                      Advanced speech recognition systems that can identify and transcribe spoken words in various languages, helping to document oral traditions and conversations.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Translation Assistance</h3>
                    <p className="text-gray-600">
                      AI-powered translation tools that help bridge language barriers while maintaining cultural context and nuance.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Pattern Recognition</h3>
                    <p className="text-gray-600">
                      Machine learning algorithms that identify linguistic patterns and relationships between languages, aiding in language documentation and analysis.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Generation</h3>
                    <p className="text-gray-600">
                      AI-assisted content creation tools that help generate educational materials and language learning resources while preserving cultural authenticity.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ethical AI Principles</h2>
                <p className="text-gray-600 mb-4">
                  We are committed to using AI responsibly and ethically in our language preservation efforts:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Respect for cultural context and authenticity</li>
                  <li>Transparency in AI usage and decision-making</li>
                  <li>Community involvement in AI development</li>
                  <li>Protection of sensitive cultural information</li>
                  <li>Continuous improvement and feedback integration</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
                <p className="text-gray-600 mb-4">
                  We leverage a combination of cutting-edge AI technologies:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Natural Language Processing (NLP) for text analysis</li>
                  <li>Speech Recognition for audio documentation</li>
                  <li>Machine Learning for pattern recognition</li>
                  <li>Neural Networks for translation assistance</li>
                  <li>Computer Vision for document digitization</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future of AI in Language Preservation</h2>
                <p className="text-gray-600 mb-4">
                  We are continuously exploring new ways to use AI in language preservation:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Advanced language modeling for endangered languages</li>
                  <li>AI-powered cultural context preservation</li>
                  <li>Interactive language learning experiences</li>
                  <li>Automated language documentation tools</li>
                  <li>Community-driven AI development</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
                <p className="text-gray-600 mb-4">
                  We believe in the power of community-driven development. Join us in shaping the future of AI in language preservation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors text-center">
                    Contact Us
                  </a>
                  <a href="/join" className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors text-center">
                    Join Our Team
                  </a>
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </Layout>
  );
} 