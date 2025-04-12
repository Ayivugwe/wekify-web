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
  ChevronRight,
} from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50/30 via-white to-primary-50/30">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-50 rounded-full mb-6">
                  <Globe className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-primary-600 font-medium">Our Solutions</span>
                </div>
                <h1 className="text-5xl font-bold text-primary-900 mb-6">
                  Language Preservation Solutions
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Comprehensive digital solutions designed with and for language communities, 
                  focusing on cultural authenticity and community empowerment.
                </p>
                <div className="mt-8">
                  <Button 
                    className="px-8 py-3 text-base font-medium bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                    asChild
                  >
                    <Link href="/contact">
                      Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Core Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Language Documentation */}
                <div className="bg-white rounded-xl p-6 border border-primary-100/50 hover:border-primary-200/50 transition-colors">
                  <div className="bg-primary-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-900">Language Documentation</h3>
                  <p className="text-slate-600 mb-4">Comprehensive tools for capturing, organizing, and preserving language materials with cultural context.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Digital Dictionaries
                    </li>
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Grammar Documentation
                    </li>
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Cultural Archive
                    </li>
                  </ul>
                </div>

                {/* Community Platform */}
                <div className="bg-white rounded-xl p-6 border border-primary-100/50 hover:border-primary-200/50 transition-colors">
                  <div className="bg-primary-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-900">Community Platform</h3>
                  <p className="text-slate-600 mb-4">Engaging platforms that enable active community participation in language preservation.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Collaboration Tools
                    </li>
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Knowledge Exchange
                    </li>
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Community Forums
                    </li>
                  </ul>
                </div>

                {/* Digital Resources */}
                <div className="bg-white rounded-xl p-6 border border-primary-100/50 hover:border-primary-200/50 transition-colors">
                  <div className="bg-primary-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Library className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary-900">Digital Resources</h3>
                  <p className="text-slate-600 mb-4">Comprehensive digital tools and resources for language learning and teaching.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Learning Materials
                    </li>
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Media Library
                    </li>
                    <li className="flex items-center text-slate-700">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      Resource Management
                    </li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Community First */}
                <div className="bg-white rounded-xl p-6 border border-primary-100/50">
                  <h3 className="text-2xl font-bold mb-6 text-primary-900">Community First</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-primary-50/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-900">Community Control</h4>
                        <p className="text-slate-600">Full ownership and control of language data and content</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-primary-50/50 rounded-lg">
                      <Share2 className="w-5 h-5 text-primary-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-900">Collaborative Tools</h4>
                        <p className="text-slate-600">Features designed for community collaboration and contribution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-primary-50/50 rounded-lg">
                      <Shield className="w-5 h-5 text-primary-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-900">Data Sovereignty</h4>
                        <p className="text-slate-600">Secure and private data management respecting community rights</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Excellence */}
                <div className="bg-white rounded-xl p-6 border border-primary-100/50">
                  <h3 className="text-2xl font-bold mb-6 text-primary-900">Technical Excellence</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-primary-50/50 rounded-lg">
                      <Code className="w-5 h-5 text-primary-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-900">Modern Technology</h4>
                        <p className="text-slate-600">Built with reliable, scalable, and maintainable technology</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-primary-50/50 rounded-lg">
                      <Database className="w-5 h-5 text-primary-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-900">Robust Storage</h4>
                        <p className="text-slate-600">Secure and efficient storage for all language resources</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-primary-50/50 rounded-lg">
                      <FileText className="w-5 h-5 text-primary-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-900">Content Management</h4>
                        <p className="text-slate-600">Intuitive tools for organizing and managing language content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary-900 rounded-xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Ready to Start Your Language Preservation Project?
                </h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Our team will work with you to develop a customized solution that meets your community's needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="px-8 py-3 text-base font-medium bg-white text-primary-900 hover:bg-primary-50 hover:text-primary-900 transition-colors duration-200"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    className="px-8 py-3 text-base font-medium bg-primary-800 text-white hover:bg-primary-700 hover:text-white transition-colors duration-200"
                    asChild
                  >
                    <Link href="/solutions/custom">
                      Learn More About Custom Solutions
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
