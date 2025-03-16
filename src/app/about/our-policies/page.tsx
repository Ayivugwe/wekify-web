"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, Globe, Heart, Shield } from "lucide-react";
import Layout from "../../components/layout";

export default function OurPoliciesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Policies
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Our guiding principles, what we're working on, and our vision for the future of language preservation.
            </p>
          </div>
        </section>

        {/* What We're Working On */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-10">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h2 className="ml-4 text-2xl font-bold text-gray-900">
                  What We're Working On
                </h2>
              </div>
              <p className="text-lg text-gray-700 mb-8">
                We are developing cutting-edge technologies designed to help languages prevail and not disappear. Our focus is on creating accessible digital tools that empower communities to document, teach, and preserve their linguistic heritage for future generations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Digital Documentation</h3>
                  <p>Creating comprehensive digital dictionaries, grammar resources, and cultural archives.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Learning Platforms</h3>
                  <p>Developing interactive language learning tools that make learning engaging and accessible.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">AI Translation</h3>
                  <p>Implementing AI-powered translation tools to bridge communication gaps.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Community Support</h3>
                  <p>Creating platforms for language communities to connect, share resources, and collaborate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-primary" />,
                  title: "Every Language Matters",
                  description:
                    "We believe in the future of languages both small and big. Each language represents a unique worldview and cultural heritage worth preserving.",
                },
                {
                  icon: <Heart className="w-8 h-8 text-primary" />,
                  title: "Community Independence",
                  description:
                    "We believe that by empowering communities to be independent and assisting them with technology, we can achieve more in preserving languages and cultures.",
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  title: "Mission-Driven Approach",
                  description:
                    "We are not working primarily for financial gain, but first and foremost to bring our mission to fruition: the preservation of linguistic diversity.",
                },
              ].map((belief, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                  transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex justify-center mb-4">
                    {belief.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                    {belief.title}
                  </h3>
                  <p className="text-gray-600 text-center">{belief.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Future */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-gray-900"> {/* Changed text color here */}
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Future Vision</h2>
            <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
              We believe that the future is bright. With continued collaboration, innovation, and community engagement, we envision a world where every language has the digital resources it needs to thrive.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Global Language Network</h3>
                <p className="text-gray-900/80">Building an interconnected network of language communities, technologists, and advocates working together.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Advanced AI Solutions</h3>
                <p className="text-gray-900/80">Developing next-generation AI tools specifically designed for low-resource languages.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Educational Integration</h3>
                <p className="text-gray-900/80">Working with schools and educational institutions to integrate indigenous language learning.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Cultural Preservation</h3>
                <p className="text-gray-900/80">Expanding beyond language to document and preserve cultural practices, stories, and traditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Whether you're a language speaker, a technologist, or simply passionate about preserving cultural heritage, there are many ways to get involved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/about/team" 
                className="inline-block bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}