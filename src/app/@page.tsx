"use client";

import React from "react";
import Layout from "./components/layout";
import { FadeIn } from "./components/FadeIn";
import Image from "next/image";

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Building Technology for Language Preservation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Wekify empowers communities to build and maintain their own language preservation platforms through innovative technology solutions and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/solutions/language-learning"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/about-us"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-base font-medium rounded-full text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-xl text-gray-600">
                Comprehensive tools and resources for language preservation
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Language Learning</h3>
                  <p className="text-gray-600">
                    Interactive tools and resources for learning endangered languages
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Archives</h3>
                  <p className="text-gray-600">
                    Secure storage and management of language documentation
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Tools</h3>
                  <p className="text-gray-600">
                    Collaborative platforms for language preservation
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Atlas Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Language Atlas</h2>
              <p className="text-xl text-gray-600">
                Explore our comprehensive database of languages and resources
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn>
                <a href="/languages" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Languages Directory</h3>
                  <p className="text-gray-600">
                    Browse our comprehensive database of languages
                  </p>
                </a>
              </FadeIn>

              <FadeIn>
                <a href="/assessment" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-gray-600">
                    Evaluate language vitality and preservation needs
                  </p>
                </a>
              </FadeIn>

              <FadeIn>
                <a href="/countries" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Countries</h3>
                  <p className="text-gray-600">
                    Explore languages by country and region
                  </p>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
              <p className="text-xl text-gray-600">
                Tools and information to support language preservation
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn>
                <a href="/blog" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog</h3>
                  <p className="text-gray-600">
                    Latest news and insights about language preservation
                  </p>
                </a>
              </FadeIn>

              <FadeIn>
                <a href="/docs" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
                  <p className="text-gray-600">
                    Technical guides and API documentation
                  </p>
                </a>
              </FadeIn>

              <FadeIn>
                <a href="/case-studies" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">
                    Success stories from language preservation projects
                  </p>
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary-600">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Us in Preserving Languages
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Be part of our mission to preserve and revitalize endangered languages through technology and community engagement.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors"
              >
                Get Involved
              </a>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  );
} 