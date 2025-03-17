
import React from "react";
import Image from "next/image";
import {
  Brain,
  Code,
  Globe,
  BookOpen,
  Users,
  Sparkles,
  Library,
  Share2,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Wekify",
  description: "Digital solutions for language preservation and cultural revitalization",
  keywords: ["language preservation", "digital solutions", "technology", "indigenous languages"],
};

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Language Preservation Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're developing comprehensive digital solutions to support language preservation, 
                focusing on both technological tools and community empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Current Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Current Solutions</h2>
            <div className="grid grid-cols-1 gap-12">
              {/* Digital Documentation */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-8">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <Globe className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-blue-600">Digital Documentation Solutions</h3>
                    <p className="text-gray-600 mb-6">We're developing comprehensive digital tools to capture, preserve, and manage language documentation effectively.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-blue-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Dictionary Management</h4>
                        <p className="text-gray-600">Advanced tools for creating, organizing, and maintaining comprehensive digital dictionaries with audio support.</p>
                      </div>
                      <div className="p-6 bg-blue-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Grammar Documentation</h4>
                        <p className="text-gray-600">Structured systems for documenting language grammar, syntax, and linguistic features.</p>
                      </div>
                      <div className="p-6 bg-blue-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Cultural Archive</h4>
                        <p className="text-gray-600">Digital preservation of cultural materials, stories, and traditional knowledge.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Engagement */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-8">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <Users className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">Community Engagement Platform</h3>
                    <p className="text-gray-600 mb-6">Building robust platforms that enable active community participation in language preservation efforts.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-green-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Collaboration Tools</h4>
                        <p className="text-gray-600">Interactive platforms for community members to contribute and collaborate on language documentation.</p>
                      </div>
                      <div className="p-6 bg-green-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Knowledge Exchange</h4>
                        <p className="text-gray-600">Systems for sharing linguistic knowledge and cultural wisdom between generations.</p>
                      </div>
                      <div className="p-6 bg-green-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Community Forums</h4>
                        <p className="text-gray-600">Dedicated spaces for discussions, queries, and collaborative problem-solving.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Literacy */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start gap-8">
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <Library className="w-12 h-12 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-purple-600">Digital Literacy & Training</h3>
                    <p className="text-gray-600 mb-6">Developing comprehensive programs to enhance digital skills within language communities.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-purple-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Training Resources</h4>
                        <p className="text-gray-600">Curated learning materials for digital tools and language documentation techniques.</p>
                      </div>
                      <div className="p-6 bg-purple-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Online Presence</h4>
                        <p className="text-gray-600">Guidance and tools for establishing and maintaining effective digital presence.</p>
                      </div>
                      <div className="p-6 bg-purple-50/50 rounded-xl">
                        <h4 className="font-semibold mb-3">Asset Management</h4>
                        <p className="text-gray-600">Systems for organizing and managing digital language resources effectively.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As we continue to grow, these are the key areas we're actively developing:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">AI & Language Technology</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <Brain className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Language Processing</h4>
                      <p className="text-gray-600">Advanced tools for analyzing and processing indigenous languages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <Sparkles className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Automated Transcription</h4>
                      <p className="text-gray-600">Smart transcription services for language documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                    <Code className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Pattern Recognition</h4>
                      <p className="text-gray-600">Machine learning applications for language patterns</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Community Development</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <Share2 className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Collaboration Platform</h4>
                      <p className="text-gray-600">Tools for cross-community collaboration and knowledge sharing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <BookOpen className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Educational Resources</h4>
                      <p className="text-gray-600">Comprehensive materials for language learning and teaching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <Users className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Cultural Preservation</h4>
                      <p className="text-gray-600">Initiatives for preserving cultural context alongside language</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
