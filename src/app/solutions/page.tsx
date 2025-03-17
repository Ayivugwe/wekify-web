
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-blue-200 transition-all">
                  <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 group-hover:bg-blue-100 transition-all">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Digital Documentation</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>• Dictionary creation and management</p>
                    <p>• Grammar documentation tools</p>
                    <p>• Cultural materials archive</p>
                  </div>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-green-200 transition-all">
                  <div className="bg-green-50 p-4 rounded-xl w-fit mb-6 group-hover:bg-green-100 transition-all">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community Engagement</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>• Collaboration platforms</p>
                    <p>• Knowledge sharing tools</p>
                    <p>• Community forums</p>
                  </div>
                </div>
              </div>

              <div className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-purple-200 transition-all">
                  <div className="bg-purple-50 p-4 rounded-xl w-fit mb-6 group-hover:bg-purple-100 transition-all">
                    <Library className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Digital Literacy</h3>
                  <div className="space-y-3 text-gray-600">
                    <p>• Training resources</p>
                    <p>• Online presence guidance</p>
                    <p>• Digital asset management</p>
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
