"use client";

import React from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Brain, Globe, Zap, Code, Users, Database, ArrowRight, FileCode, Share2, MessageSquare, Lightbulb } from "lucide-react";

export default function AIAndUsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI & Language Revitalization
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Wekify & <span className="text-primary">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Our vision for harnessing AI to breathe new life into endangered languages and create innovative solutions for all languages worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#ai-approach" 
                className="px-8 py-3 bg-primary text-gray-900 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center"
              >
                <Sparkles className="mr-2 h-5 w-5" /> Our Approach
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-300 hover:bg-gray-50 transition-all flex items-center"
              >
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Approach */}
      <section className="py-20 bg-white" id="ai-approach">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI as a Catalyst for Language Renaissance
              </h2>
              <p className="text-xl text-gray-600">
                We see AI not just as technology, but as a transformative force that can help revitalize languages on the brink of extinction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/fuliiru-hub-motherland.jpg"
                  alt="AI Language Preservation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our AI Philosophy</h3>
                <p className="text-gray-600 mb-6">
                  At Wekify, we believe that AI has arrived at precisely the right moment in history to help languages not just survive, but thrive in the digital age.
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Community-Centered Development</p>
                      <p className="text-gray-600">We develop AI solutions with and for language communities, ensuring their needs, values, and knowledge guide our work.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Ethical Data Practices</p>
                      <p className="text-gray-600">We prioritize responsible data collection and usage, ensuring communities maintain ownership of their linguistic heritage.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Accessibility For All</p>
                      <p className="text-gray-600">We build tools that work for communities with varying levels of technological access and literacy.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Impact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Transformative Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How AI Changes Everything for Languages
              </h2>
              <p className="text-xl text-gray-600">
                With AI, what once seemed impossible for language preservation and revitalization is now within reach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accelerated Development</h3>
                <p className="text-gray-600">
                  AI enables us to create websites, mobile apps, and digital tools for languages in a fraction of the time previously required, making digital presence possible for all languages.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Low-Resource Solutions</h3>
                <p className="text-gray-600">
                  Modern AI techniques can work with limited data, making it possible to build useful tools even for languages with minimal digital presence or documentation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Accessibility</h3>
                <p className="text-gray-600">
                  AI-powered translation and interfaces make language content accessible to broader audiences, connecting communities across borders and generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Current Initiatives
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our AI Projects in Action
              </h2>
              <p className="text-xl text-gray-600">
                From concept to implementation, we're putting AI to work for languages worldwide.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="rounded-xl overflow-hidden shadow-md h-48 md:h-full relative">
                      <Image 
                        src="/fuliiru-hub-homepage.jpg"
                        alt="Kifuliiru Language Model"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Sparkles className="mr-3 h-6 w-6 text-amber-500" />
                      Kifuliiru Language Model
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our flagship project is developing specialized AI models for the Kifuliiru language of Eastern Congo, creating a technological foundation that will power translation, learning tools, and content creation.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Speech Recognition</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Neural Translation</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Text Generation</span>
                    </div>
                    <Link href="/solutions/language-preservation" className="text-primary font-medium hover:underline flex items-center w-fit">
                      Learn more about this project <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="rounded-xl overflow-hidden shadow-md h-48 md:h-full relative">
                      <Image 
                        src="/ambassadors.jpg"
                        alt="Multilingual Content Generation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 flex items-center">
                      <Sparkles className="mr-3 h-6 w-6 text-amber-500" />
                      Multilingual Content Platform
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We're building an AI-assisted content creation platform that helps communities produce educational materials, stories, and media in their native languages with unprecedented efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Content Generation</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Cross-Lingual Transfer</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Educational Resources</span>
                    </div>
                    <Link href="/solutions/digital-content" className="text-primary font-medium hover:underline flex items-center w-fit">
                      Explore our content platform <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Commitment */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Commitment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Wekify AI Promise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our dedication to ethical, inclusive, and community-centered AI development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-y-12 gap-x-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">AI for Community Empowerment</h3>
                  <p className="text-gray-600">
                    We develop AI tools that put power in the hands of language communities, enabling them to create, preserve, and share their linguistic heritage on their own terms.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Transparency in AI Development</h3>
                  <p className="text-gray-600">
                    We commit to clear communication about how our AI systems work, their capabilities, limitations, and the data they use, building trust through openness.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Knowledge Transfer</h3>
                  <p className="text-gray-600">
                    We train community members in AI tools and techniques, ensuring technological self-sufficiency and reducing dependency on external expertise.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    We constantly explore new AI techniques and applications to push the boundaries of what's possible for language technology, especially for low-resource languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-gray-900"> {/* Changed text-white to text-gray-900 */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-gray-900 text-sm font-medium mb-6"> {/* Changed text-white to text-gray-900 */}
              <Sparkles className="w-4 h-4 mr-2" />
              Join Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Wekify on AI Innovation
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Whether you're a language community, AI researcher, or organization interested in language technology, we invite you to collaborate with us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-primary rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-3 bg-transparent text-gray-900 rounded-xl font-medium border border-white/30 hover:bg-white/10 transition-all"
              > {/* Changed text-white to text-gray-900 */}
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}