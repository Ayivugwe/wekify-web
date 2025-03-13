
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
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Brain, Globe, MessageSquare, Code, LayoutGrid, Share2, Github, Zap, BookOpen } from "lucide-react";
import Layout from "@/app/components/layout";

export default function AIMLPage() {
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
              AI-Powered Language Preservation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revitalizing Languages with Artificial Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              We're using AI as a transformative tool to preserve, document, and revitalize endangered languages around the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center"
              >
                <Sparkles className="mr-2 h-5 w-5" /> Partner With Us
              </Link>
              <Link 
                href="/solutions/language-preservation" 
                className="px-8 py-3 bg-white text-primary border border-primary rounded-xl font-medium hover:bg-gray-50 transition-all shadow-md"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Vision for AI
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                AI: A New Hope for Endangered Languages
              </h2>
              <p className="text-xl text-gray-600">
                We believe that AI has arrived at a critical moment to help save languages on the brink of extinction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    <Brain className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">The Challenge</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  According to UNESCO, a language dies every two weeks. By the end of this century, more than half of the 7,000+ languages spoken today could disappear.
                </p>
                <p className="text-gray-700">
                  Traditional documentation methods are time-consuming and resource-intensive, making it difficult to preserve languages before they're lost forever.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Sparkles className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">AI's Promise</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  AI is revolutionizing language preservation by making it faster, more accessible, and more efficient to create resources for endangered languages.
                </p>
                <p className="text-gray-700">
                  With AI tools, even small language communities can now build websites, apps, and educational materials that were previously out of reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How We Leverage AI for Language Revitalization
              </h2>
              <p className="text-xl text-gray-600">
                We combine cutting-edge AI technologies with community involvement to create sustainable language ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Presence</h3>
                <p className="text-gray-700">
                  AI enables us to rapidly develop websites and digital platforms for languages with limited resources, creating vibrant online communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">NLP Tools</h3>
                <p className="text-gray-700">
                  We develop AI-powered natural language processing tools specific to endangered languages, including text analysis, translation aids, and speech recognition.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">App Development</h3>
                <p className="text-gray-700">
                  AI accelerates the development of language learning apps, dictionaries, and other digital tools tailored to each community's unique needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <LayoutGrid className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Generation</h3>
                <p className="text-gray-700">
                  We use AI to help create educational content, stories, and learning materials in endangered languages, filling critical resource gaps.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Share2 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Transfer</h3>
                <p className="text-gray-700">
                  We train community members to use AI tools, empowering them to create their own language resources independently.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-pink-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-700">
                  AI helps us accelerate language documentation by assisting with transcription, annotation, and organization of linguistic materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Success Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kifuliiru: An AI-Assisted Revitalization
              </h2>
              <p className="text-xl text-gray-600">
                See how we used AI to help preserve and revitalize the Kifuliiru language in Eastern Congo.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    FuliiruHub Project
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    From Endangered to Thriving
                  </h3>
                  <p className="text-white/90 mb-8">
                    Using AI, we developed a comprehensive digital ecosystem for the Kifuliiru language in just months, including a website, dictionary app, and learning materials.
                  </p>
                  <ul className="space-y-3 text-white mb-8">
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Created 3,500+ dictionary entries with AI assistance</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Developed language learning apps in record time</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span>65% community participation rate</span>
                    </li>
                  </ul>
                  <Link 
                    href="/case-studies/fuliiru" 
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all"
                  >
                    Read Case Study <Sparkles className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="relative min-h-[300px] md:min-h-0">
                  <Image 
                    src="/fuliiru-hub-homepage.png" 
                    alt="FuliiruHub Project Screenshot" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Ethical AI
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Responsible AI Approach
              </h2>
              <p className="text-xl text-gray-600">
                We are committed to using AI ethically and responsibly in service of language communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-purple-600" />
                  Our Principles
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Community Ownership</span>
                      <p className="text-gray-600">All data and resources belong to the language communities themselves</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Human-in-the-Loop</span>
                      <p className="text-gray-600">AI augments human expertise but doesn't replace it</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Privacy First</span>
                      <p className="text-gray-600">We implement strong data protection for sensitive cultural materials</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Transparency</span>
                      <p className="text-gray-600">We're open about how AI is used in our projects</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-xl shadow-md text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3" />
                  Join Our AI Initiative
                </h3>
                <p className="mb-6">
                  Whether you're a language community, a developer, or an AI researcher, you can contribute to our mission of using AI to preserve linguistic diversity.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium block">Open Source</span>
                      <p className="text-white/80">Contribute to our open-source language tools</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-medium block">Partnerships</span>
                      <p className="text-white/80">Work with us on AI-powered language projects</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition-all"
                  >
                    Get Involved <Sparkles className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Harness AI for Your Language?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Let's work together to build a digital future for your language using the power of artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-primary rounded-xl font-medium hover:bg-blue-50 transition-all shadow-lg"
              >
                <Sparkles className="inline-block mr-2 h-5 w-5" /> Start Your AI Journey
              </Link>
              <Link 
                href="/resources/ai-for-languages" 
                className="px-8 py-4 bg-primary/30 border border-white/30 text-white rounded-xl font-medium hover:bg-primary/40 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
