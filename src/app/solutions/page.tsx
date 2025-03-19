"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  BookOpen,
  Users,
  Library,
  Share2,
  ArrowRight,
  Shield,
  Code,
  Database,
  FileText,
} from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen">
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-800">
                Language Preservation Solutions
              </h1>
              <p className="text-xl text-primary-700/70 max-w-3xl mx-auto">
                Comprehensive digital solutions designed with and for language communities, 
                focusing on cultural authenticity and community empowerment.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-primary-800">Core Solutions</h2>
            <div className="grid grid-cols-1 gap-12">
              {/* Language Documentation */}
              <div className="bg-white rounded-2xl p-8 border border-primary-100 hover:border-primary-200 transition-colors">
                <div className="flex items-start gap-8">
                  <div className="bg-primary-50 p-4 rounded-xl">
                    <BookOpen className="w-12 h-12 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-primary-800">Language Documentation</h3>
                    <p className="text-primary-700/70 mb-6">Comprehensive tools for capturing, organizing, and preserving language materials with cultural context.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Digital Dictionaries</h4>
                        <p className="text-primary-700/70">Create and maintain comprehensive digital dictionaries with audio support and cultural context.</p>
                      </div>
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Grammar Documentation</h4>
                        <p className="text-primary-700/70">Structured systems for documenting language grammar, syntax, and linguistic features.</p>
                      </div>
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Cultural Archive</h4>
                        <p className="text-primary-700/70">Digital preservation of cultural materials, stories, and traditional knowledge.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Platform */}
              <div className="bg-white rounded-2xl p-8 border border-primary-100 hover:border-primary-200 transition-colors">
                <div className="flex items-start gap-8">
                  <div className="bg-primary-50 p-4 rounded-xl">
                    <Users className="w-12 h-12 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-primary-800">Community Platform</h3>
                    <p className="text-primary-700/70 mb-6">Engaging platforms that enable active community participation in language preservation.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Collaboration Tools</h4>
                        <p className="text-primary-700/70">Interactive features for community members to contribute and collaborate effectively.</p>
                      </div>
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Knowledge Exchange</h4>
                        <p className="text-primary-700/70">Systems for sharing linguistic knowledge and cultural wisdom between generations.</p>
                      </div>
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Community Forums</h4>
                        <p className="text-primary-700/70">Dedicated spaces for discussions, queries, and collaborative problem-solving.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Resources */}
              <div className="bg-white rounded-2xl p-8 border border-primary-100 hover:border-primary-200 transition-colors">
                <div className="flex items-start gap-8">
                  <div className="bg-primary-50 p-4 rounded-xl">
                    <Library className="w-12 h-12 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-primary-800">Digital Resources</h3>
                    <p className="text-primary-700/70 mb-6">Comprehensive digital tools and resources for language learning and teaching.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Learning Materials</h4>
                        <p className="text-primary-700/70">Curated resources for teaching and learning endangered languages.</p>
                      </div>
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Media Library</h4>
                        <p className="text-primary-700/70">Organized collection of audio, video, and text resources.</p>
                      </div>
                      <div className="p-6 bg-primary-50/50 rounded-xl border border-primary-100">
                        <h4 className="font-semibold mb-3 text-primary-800">Resource Management</h4>
                        <p className="text-primary-700/70">Tools for organizing and managing digital language resources.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-32 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary-800">Key Features</h2>
              <p className="text-xl text-primary-700/70 max-w-3xl mx-auto">
                Essential features that make our solutions effective and community-focused
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors">
                <h3 className="text-2xl font-bold mb-6 text-primary-800">Community First</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <Users className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">Community Control</h4>
                      <p className="text-primary-700/70">Full ownership and control of language data and content</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <Share2 className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">Collaborative Tools</h4>
                      <p className="text-primary-700/70">Features designed for community collaboration and contribution</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <Shield className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">Data Sovereignty</h4>
                      <p className="text-primary-700/70">Secure and private data management respecting community rights</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-primary-100 hover:border-primary-200 transition-colors">
                <h3 className="text-2xl font-bold mb-6 text-primary-800">Technical Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <Code className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">Modern Technology</h4>
                      <p className="text-primary-700/70">Built with reliable, scalable, and maintainable technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <Database className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">Robust Storage</h4>
                      <p className="text-primary-700/70">Secure and efficient storage for all language resources</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <FileText className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary-800">Content Management</h4>
                      <p className="text-primary-700/70">Intuitive tools for organizing and managing language content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Language Preservation Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our team will work with you to develop a customized solution that meets your community's needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions/custom">
                  Learn More About Custom Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
