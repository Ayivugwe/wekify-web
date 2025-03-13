
"use client";

import React from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Brain, Globe, Zap, Code, Users, Database, ArrowRight, FileCode, Share2, MessageSquare } from "lucide-react";

export default function AIVisionPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI For Language Innovation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Languages Through AI
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              At Wekify, we're harnessing the transformative power of AI to breathe new life into endangered languages and create digital ecosystems for all languages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center"
              >
                <Sparkles className="mr-2 h-5 w-5" /> Partner With Us
              </Link>
              <Link
                href="#ai-models"
                className="px-8 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-300 hover:bg-gray-50 transition-all flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI as a Force for Language Revitalization
              </h2>
              <p className="text-xl text-gray-600">
                We believe that AI has arrived at a pivotal moment in history to help preserve languages on the brink of extinction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Why AI for Languages?</h3>
                <p className="text-gray-600 mb-6">
                  Many languages around the world are at risk of disappearing. With AI, we can now:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Scale Documentation Efforts</p>
                      <p className="text-gray-600">Automate the process of collecting, transcribing, and organizing language data.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Create Learning Tools</p>
                      <p className="text-gray-600">Develop adaptive learning systems that respond to individual learner needs.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Bridge Communication Gaps</p>
                      <p className="text-gray-600">Build translation systems between low-resource languages and major world languages.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2 relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/fuliiru-hub-motherland.jpg"
                  alt="AI Language Preservation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technologies We Use */}
      <section className="py-20 bg-gray-50" id="ai-models">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Our Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI Technologies Powering Our Solutions
              </h2>
              <p className="text-xl text-gray-600">
                We leverage cutting-edge AI models and technologies to build comprehensive language tools.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Our NLP models are trained to understand the unique structures and features of indigenous languages, enabling accurate analysis and generation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Language Models</h3>
                <p className="text-gray-600">
                  We develop specialized language models that can work with limited datasets, making them ideal for low-resource languages.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Translation Systems</h3>
                <p className="text-gray-600">
                  Our neural machine translation systems help bridge communication gaps between languages, preserving meaning and cultural context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our AI Roadmap */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Roadmap
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building AI Models for All Languages
              </h2>
              <p className="text-xl text-gray-600">
                Our ambitious plan to develop AI models for languages based on collected data.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 text-amber-500" />
                  Phase 1: Data Collection & Documentation
                </h3>
                <p className="text-gray-600 mb-6">
                  The foundation of any AI model is quality data. Our approach includes:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Collaborating with native speakers to record natural speech</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Digitizing existing written materials and literature</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Creating parallel datasets with major languages</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">4</span>
                    </div>
                    <p className="text-gray-700">Documenting grammar, syntax, and semantic structures</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 text-amber-500" />
                  Phase 2: AI Model Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Once sufficient data is collected, we develop specialized AI models:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Speech recognition models for transcription</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Text generation models for content creation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Neural machine translation systems</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">4</span>
                    </div>
                    <p className="text-gray-700">Educational AI assistants for language learning</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Sparkles className="mr-3 h-6 w-6 text-amber-500" />
                  Phase 3: Deployment & Community Empowerment
                </h3>
                <p className="text-gray-600 mb-6">
                  Making our AI models accessible and useful for communities:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">User-friendly interfaces for non-technical users</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Mobile applications for widespread access</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Training programs for community members</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-amber-700 text-sm font-bold">4</span>
                    </div>
                    <p className="text-gray-700">Open APIs for developers to build upon</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Community-Centered Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Collaborative AI Development
              </h2>
              <p className="text-xl text-gray-600">
                We believe in putting communities at the center of AI development for their languages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/ambassadors.jpg"
                  alt="Community Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Community Ownership</h3>
                <p className="text-gray-600 mb-6">
                  We ensure that language communities maintain ownership and control over:
                </p>
                <ul className="space-y-4">
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Their Language Data</p>
                      <p className="text-gray-600">Communities decide what data is collected and how it's used.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Development Direction</p>
                      <p className="text-gray-600">Priorities for AI tools are set by the community's needs.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Sparkles className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Cultural Context</p>
                      <p className="text-gray-600">AI models are built with deep cultural understanding and respect.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Join Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with Us to Preserve Your Language
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Whether you're a language community, researcher, or organization, we invite you to collaborate with us in building AI-powered language preservation solutions.
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
                className="px-8 py-3 bg-transparent text-white rounded-xl font-medium border border-white/30 hover:bg-white/10 transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
