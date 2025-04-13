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
    value: "40%",
    description: "of the world's languages are endangered",
    icon: Globe2,
    info: {
      details: "According to UNESCO, approximately 40% of the world's 7,000 languages are at risk of disappearing. Many of these languages have fewer than 1,000 speakers remaining.",
      source: "UNESCO Atlas of the World's Languages in Danger",
      link: "https://www.unesco.org/en/languages-education/atlas-languages"
    }
  },
  {
    title: "Languages Lost",
    value: "1",
    description: "language is lost every 2 weeks",
    icon: AlertTriangle,
    info: {
      details: "On average, one language disappears every two weeks, taking with it an entire cultural and intellectual heritage. This rate of language loss is unprecedented in human history.",
      source: "National Geographic - Vanishing Voices",
      link: "https://www.nationalgeographic.com/magazine/article/vanishing-voices"
    }
  },
  {
    title: "Digital Impact",
    value: "90%",
    description: "of language communities use digital tools",
    icon: Brain,
    info: {
      details: "A recent study found that 90% of language communities are now using digital tools for language preservation, including mobile apps, online dictionaries, and social media platforms.",
      source: "Endangered Languages Project",
      link: "https://www.endangeredlanguages.com/"
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
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Language Preservation
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Preserving Languages for Future Generations
                </h1>
                <p className="text-xl text-gray-600">
                  Language preservation is the systematic effort to maintain and revitalize endangered languages, while language preservation tools are the digital platforms that make this possible. Together, they form a powerful approach to safeguarding our linguistic heritage.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The State of Language Preservation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the current landscape of language preservation is crucial to our mission. These key statistics highlight both the challenges we face and the opportunities for digital solutions.
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

        {/* Definitions Section */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Understanding Language Preservation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  To effectively preserve languages, we need to understand both the concept of language preservation and the tools that make it possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Languages className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Language Preservation</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Language preservation is the systematic effort to maintain and revitalize languages that are at risk of extinction. 
                    It involves documenting linguistic elements, preserving cultural knowledge, and ensuring the transmission of language 
                    to future generations. This process is crucial for maintaining cultural diversity, traditional knowledge, and community 
                    identity.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Language Preservation Platforms</h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Language preservation platforms are digital tools and systems designed to support the documentation, teaching, and 
                    maintenance of endangered languages. These platforms provide comprehensive solutions for recording language elements, 
                    creating learning resources, facilitating community collaboration, and ensuring long-term accessibility of linguistic 
                    and cultural knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
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
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Preservation Implementation Status</h2>
                      <p className="text-gray-600">Current progress in implementing essential language preservation strategies</p>
                    </div>
                    
                    {/* Summary Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <CheckCircle className="text-blue-600 mr-2" size={24} />
                          <h3 className="text-lg font-medium text-gray-900">Implemented</h3>
                        </div>
                        <p className="text-4xl font-bold text-blue-600 mb-2">
                          {criteriaData.filter(item => item.status === 'complete').length}
                        </p>
                        <p className="text-sm text-gray-600">strategies fully implemented</p>
                      </div>
                      
                      <div className="bg-amber-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <Clock className="text-amber-600 mr-2" size={24} />
                          <h3 className="text-lg font-medium text-gray-900">In Progress</h3>
                        </div>
                        <p className="text-4xl font-bold text-amber-600 mb-2">
                          {criteriaData.filter(item => item.status === 'in-progress').length}
                        </p>
                        <p className="text-sm text-gray-600">strategies being developed</p>
                      </div>
                      
                      <div className="bg-red-50 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                          <AlertTriangle className="text-red-600 mr-2" size={24} />
                          <h3 className="text-lg font-medium text-gray-900">Not Started</h3>
                        </div>
                        <p className="text-4xl font-bold text-red-600 mb-2">
                          {criteriaData.filter(item => item.status === 'not-started').length}
                        </p>
                        <p className="text-sm text-gray-600">strategies planned for future</p>
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
                                  <StatusIndicator status={item.status} />
                                  <span className="ml-2">
                                    <StatusText status={item.status} />
                                  </span>
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