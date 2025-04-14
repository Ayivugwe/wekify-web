"use client";

import React, { useState } from "react";
import {
  BookText,
  Users2,
  Globe2,
  Brain,
  History,
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  BookOpen,
  Heart,
  ArrowRight,
  Languages,
  Database,
  Info,
  ClipboardList,
  Check,
  Laptop,
  Users,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { FadeIn } from "@/app/components/ui/fade-in";
import Layout from "@/app/components/layout";
import Link from "next/link";

const criteriaData = [
  {
    id: 1,
    criteria: "Language Documentation",
    requirements: "Comprehensive recording of language elements",
    status: "complete",
    details: "Audio recordings, written documentation, and cultural context",
    icon: BookText,
  },
  {
    id: 2,
    criteria: "Community Engagement",
    requirements: "Active participation from language speakers",
    status: "in-progress",
    details: "Community workshops and language learning programs",
    icon: Users2,
  },
  {
    id: 3,
    criteria: "Digital Preservation",
    requirements: "Secure digital storage and access",
    status: "complete",
    details: "Online platforms and digital archives",
    icon: Globe2,
  },
  {
    id: 4,
    criteria: "Education & Training",
    requirements: "Teaching resources and programs",
    status: "in-progress",
    details: "Curriculum development and teacher training",
    icon: Brain,
  },
  {
    id: 5,
    criteria: "Cultural Integration",
    requirements: "Cultural context preservation",
    status: "not-started",
    details: "Documentation of traditions and practices",
    icon: History,
  },
  {
    id: 6,
    criteria: "Long-term Sustainability",
    requirements: "Ongoing support and maintenance",
    status: "not-started",
    details: "Funding and resource management",
    icon: Shield,
  },
];

const stats = [
  {
    title: "Endangered Languages",
    value: "Many",
    description: "of the world's languages are at risk of disappearing",
    icon: Globe2,
    info: {
      details: "A significant number of the world's languages are currently endangered, with many having only a few remaining speakers. This represents a critical loss of cultural and linguistic diversity.",
      source: "Language Preservation Research",
      link: "#"
    }
  },
  {
    title: "Languages Lost",
    value: "Regularly",
    description: "languages continue to disappear at an alarming rate",
    icon: AlertTriangle,
    info: {
      details: "Languages are disappearing at an unprecedented rate, with each loss representing the disappearance of unique cultural knowledge, traditions, and ways of understanding the world.",
      source: "Cultural Heritage Studies",
      link: "#"
    }
  },
  {
    title: "Digital Impact",
    value: "Growing",
    description: "use of digital tools in language preservation",
    icon: Brain,
    info: {
      details: "Digital technology is playing an increasingly important role in language preservation efforts, offering new ways to document, teach, and maintain endangered languages.",
      source: "Digital Preservation Research",
      link: "#"
    }
  },
];

const LanguagePreservationPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const StatusIndicator = ({ status }: { status: string }) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="h-5 w-5 text-blue-600" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "not-started":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const StatusText = ({ status }: { status: string }) => {
    switch (status) {
      case "complete":
        return "Complete";
      case "in-progress":
        return "In Progress";
      case "not-started":
        return "Not Started";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Globe2 className="w-4 h-4 mr-2" />
                Language Preservation & Modernization
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Preserving and Modernizing Languages for the Digital Age
              </h1>
              <p className="text-xl text-gray-600">
                Our mission combines language preservation with digital modernization, ensuring languages not only survive but thrive in today's digital world. We provide comprehensive solutions for all languages that need digital presence and support.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Digital Language Landscape
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the current state of language digitalization helps us develop effective solutions for language preservation and modernization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <stat.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 ml-4">{stat.title}</h3>
                      </div>
                      <div className="group relative">
                        <Info className="h-5 w-5 text-gray-400 cursor-pointer hover:text-blue-600" />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-64 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                          <div className="text-sm text-gray-600">
                            <p className="mb-2">{stat.info.details}</p>
                            <p className="text-xs text-gray-500 italic">
                              Source:{" "}
                              <a 
                                href={stat.info.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {stat.info.source}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Our Position Section */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Position in Language Preservation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our unique position combines deep cultural understanding with technical expertise, particularly in our work with the Kifuliiru language.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural & Technical Expertise</h3>
                  <p className="text-gray-600 mb-4">
                    Our founder's direct connection to the Bafuliiru-Kifuliiru community, combined with technical expertise, provides a unique foundation for our work. This includes comprehensive language capabilities in speaking, writing, reading, translating, and interpreting Kifuliiru.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Language Approach</h3>
                  <p className="text-gray-600 mb-4">
                    We've strategically chosen to work with multiple languages to maximize impact:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>English: Global technology and communication</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>French: DRC and Francophone countries</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>Kiswahili: East and Central Africa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>Kifuliiru: Native language focus with self-translation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Approach to Language Preservation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We combine traditional language preservation with modern digital solutions to create comprehensive support for all languages.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven</h3>
                  <p className="text-gray-600">
                    Working directly with language communities to ensure cultural authenticity and relevance in all our solutions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Laptop className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital-First</h3>
                  <p className="text-gray-600">
                    Creating modern digital tools and content that make languages accessible and relevant in today's world.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="p-3 bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Globe2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Support</h3>
                  <p className="text-gray-600">
                    Providing solutions for all languages that need digital presence, regardless of their current status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison and Future Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Comparing Approaches to Language Preservation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding different approaches helps us create more effective solutions for language preservation and modernization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Approaches</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <div className="p-2 bg-gray-100 rounded-lg mr-3">
                        <BookText className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Academic Documentation</h4>
                        <p className="text-sm">Focus on linguistic research and written documentation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-gray-100 rounded-lg mr-3">
                        <Users2 className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Community-Led Initiatives</h4>
                        <p className="text-sm">Local efforts to maintain language through cultural practices</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-gray-100 rounded-lg mr-3">
                        <Shield className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Government Programs</h4>
                        <p className="text-sm">Policy-driven initiatives for language protection</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Digital Approaches</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <Laptop className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Digital Platforms</h4>
                        <p className="text-sm">Online tools for learning, documentation, and community building</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <Brain className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">AI-Assisted Tools</h4>
                        <p className="text-sm">Technology-enhanced language learning and preservation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <Globe2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Global Collaboration</h4>
                        <p className="text-sm">Connecting communities worldwide for shared resources</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">The Future of Language Preservation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="p-3 bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">AI and Machine Learning</h4>
                    <p className="text-gray-600">
                      Advanced technologies will enable more sophisticated language analysis, automated translation, and personalized learning experiences.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Globe2 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Global Connectivity</h4>
                    <p className="text-gray-600">
                      Digital platforms will connect language communities worldwide, enabling real-time collaboration and resource sharing.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">Community Empowerment</h4>
                    <p className="text-gray-600">
                      Language communities will have more tools and resources to lead their own preservation efforts, ensuring cultural authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Title and Introduction */}
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Language Preservation Platform</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore our comprehensive approach to preserving the Kifuliiru language through various interconnected strategies. 
                  From documentation to community engagement, discover how we're working to ensure the language's vitality for future generations.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-4 px-1 text-center ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <Globe2 className="h-5 w-5 mr-2" />
                      Overview
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('criteria')}
                    className={`flex-1 py-4 px-1 text-center ${
                      activeTab === 'criteria'
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Implementation
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`flex-1 py-4 px-1 text-center ${
                      activeTab === 'resources'
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Resources
                    </div>
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl shadow-sm p-8">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">The Importance of Language Preservation</h2>
                        <p className="text-gray-600">
                          Language preservation is crucial for maintaining cultural diversity and heritage. Each language carries unique knowledge, 
                          traditions, and ways of understanding the world. When a language is lost, we lose not just words, but entire systems of 
                          knowledge and cultural identity.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">How Digital Platforms Help</h2>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                            <span>Recording and archiving spoken language samples</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                            <span>Creating interactive learning materials</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                            <span>Facilitating community collaboration</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                            <span>Making language resources accessible globally</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Preservation Strategies</h2>
                      <p className="text-gray-600 mb-6">Our comprehensive approach to language preservation combines traditional methods with modern technology to ensure long-term success.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {criteriaData.map((item) => (
                          <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                              <item.icon className="h-6 w-6 text-blue-600 mr-2" />
                              <h3 className="font-medium text-gray-900">{item.criteria}</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                                <span>{item.requirements}</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1" />
                                <span>{item.details}</span>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'criteria' && (
                  <div>
                    {/* Implementation Status Introduction */}
                    <div className="mb-8 bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <ClipboardList className="h-5 w-5 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Implementation Status</h2>
                      </div>
                      <div className="pl-12">
                        <p className="text-gray-600 leading-relaxed">
                          Our comprehensive approach to preserving the Kifuliiru language involves multiple interconnected strategies. 
                          Each strategy is currently in development, with specific requirements and progress tracking to ensure effective 
                          language preservation and revitalization.
                        </p>
                        <div className="mt-3 flex items-center text-sm text-blue-600">
                          <Info className="h-4 w-4 mr-2" />
                          <span>All strategies are actively being developed for the Kifuliiru language project</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-amber-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Clock className="text-amber-600 mr-2" size={24} />
                          <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
                        </div>
                        <p className="text-4xl font-bold text-amber-600 mb-2">6</p>
                        <p className="text-sm text-gray-600">strategies being developed</p>
                      </div>
                      
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Globe2 className="text-blue-600 mr-2" size={24} />
                          <h3 className="text-lg font-medium text-gray-900">Language Focus</h3>
                        </div>
                        <p className="text-4xl font-bold text-blue-600 mb-2">Kifuliiru</p>
                        <p className="text-sm text-gray-600">Language preservation project</p>
                      </div>
                    </div>
                    
                    {/* Implementation Status Table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Strategy
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Requirements
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Progress
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {criteriaData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <item.icon className="h-5 w-5 text-blue-600 mr-2" />
                                  <div className="text-sm font-medium text-gray-900">{item.criteria}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">{item.requirements}</div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="text-sm text-gray-500">{item.details}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <Clock className="h-5 w-5 text-amber-500" />
                                  <span className="ml-2">In Progress</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Learning Resources</h2>
                    <p className="text-gray-600 mb-8">Educational materials and guides for understanding language preservation</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <BookText className="h-6 w-6 text-blue-600 mr-2" />
                          <h3 className="text-lg font-medium text-gray-900">Language Documentation Guide</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Step-by-step guide to documenting and preserving language elements</p>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          View Guide <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <Users2 className="h-6 w-6 text-blue-600 mr-2" />
                          <h3 className="text-lg font-medium text-gray-900">Community Engagement Toolkit</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Resources for involving community members in preservation efforts</p>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          Access Toolkit <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <History className="h-6 w-6 text-blue-600 mr-2" />
                          <h3 className="text-lg font-medium text-gray-900">Cultural Context Documentation</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Methods for preserving cultural knowledge and traditions</p>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <Heart className="h-6 w-6 text-blue-600 mr-2" />
                          <h3 className="text-lg font-medium text-gray-900">Success Stories</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Examples of successful language preservation initiatives</p>
                        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                          View Stories <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-b from-amber-50 to-white p-8 rounded-xl shadow-sm">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Ready to Preserve Your Language?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Join us in our mission to preserve and revitalize endangered languages. 
                    Together, we can ensure that these precious cultural treasures are passed down to future generations.
                  </p>
                  <Button 
                    size="lg"
                    className="px-8 py-4 text-lg font-medium bg-amber-600 hover:bg-amber-700 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started with Your Language{" "}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Last updated: 4/13/2025</p>
            </div>
            <div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Update Status
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LanguagePreservationPage; 