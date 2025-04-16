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
  Info,
  ClipboardList,
  Check,
  Laptop,
  Users,
  Globe,
  TrendingUp,
  Code,
  Target,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { FadeIn } from "@/app/components/ui/fade-in";
import Link from "next/link";
import Layout from "../components/layout";

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
    description: "Languages are at risk of disappearing without proper preservation efforts",
    icon: Globe2,
    info: {
      details: "The loss of these languages represents a critical loss of cultural and linguistic diversity worldwide.",
      source: "UNESCO",
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
      <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary-600 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Language Preservation & Modernization
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                Bridging tradition with technology to preserve and modernize languages for the digital age
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              The Digital Language Landscape
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-6 h-6 text-blue-600" />,
                  title: "Endangered Languages",
                  value: "Many",
                  description: "Languages are at risk of disappearing, taking with them unique cultural knowledge and perspectives",
                  details: "The loss of these languages represents a critical loss of cultural and linguistic diversity worldwide",
                  href: "#"
                },
                {
                  icon: <Clock className="w-6 h-6 text-blue-600" />,
                  title: "Languages Lost",
                  value: "Regularly",
                  description: "Languages continue to disappear, each loss representing centuries of cultural knowledge",
                  details: "This ongoing loss impacts our collective understanding of human culture and history",
                  href: "#"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
                  title: "Digital Impact",
                  value: "Growing",
                  description: "Digital tools are becoming increasingly important in language preservation efforts",
                  details: "Technology offers new ways to document, teach, and revitalize languages",
                  href: "#"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      {stat.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{stat.title}</h3>
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  <p className="text-sm text-gray-500">{stat.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Position Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Our Position
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-6 h-6 text-blue-600" />,
                  title: "Community Connection",
                  description: "Our founder's deep connection to the Bafuliiru-Kifuliiru community provides authentic cultural understanding and trust"
                },
                {
                  icon: <Code className="w-6 h-6 text-blue-600" />,
                  title: "Technical Expertise",
                  description: "Strong background in software development and digital solutions for language preservation"
                },
                {
                  icon: <Target className="w-6 h-6 text-blue-600" />,
                  title: "Strategic Focus",
                  description: "Starting with Kifuliiru allows us to develop and refine our approach before expanding to other languages"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6 text-blue-600" />,
                  title: "Community-Driven",
                  description: "Working closely with language communities to ensure solutions meet their needs and respect cultural context"
                },
                {
                  icon: <Globe className="w-6 h-6 text-blue-600" />,
                  title: "Digital-First",
                  description: "Leveraging modern technology to create accessible, scalable solutions for language preservation"
                },
                {
                  icon: <BookOpen className="w-6 h-6 text-blue-600" />,
                  title: "Comprehensive Support",
                  description: "Providing tools, resources, and training to empower communities in their language preservation efforts"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision and Future Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Our Vision for Language Preservation
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  We envision a future where all languages can thrive in the digital age, preserving their cultural heritage while embracing modern technology.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Brain className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">Digital Innovation</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Leveraging cutting-edge technology to create accessible and engaging language learning experiences while maintaining cultural authenticity.
                  </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Users2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">Community-Centric</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Empowering language communities to lead their own preservation efforts with tools and resources that respect their cultural context.
                  </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-4">Global Accessibility</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Creating platforms that make language resources available worldwide while ensuring cultural sensitivity and proper context.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">The Future of Language Preservation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-purple-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                      <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-gray-900">AI and Machine Learning</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Advanced technologies will enable more sophisticated language analysis, automated translation, and personalized learning experiences.
                    </p>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-purple-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                      <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-gray-900">Global Connectivity</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Digital platforms will connect language communities worldwide, enabling real-time collaboration and resource sharing.
                    </p>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-2 md:p-3 bg-purple-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-base md:text-lg font-medium text-gray-900">Community Empowerment</h4>
                    <p className="text-sm md:text-base text-gray-600">
                      Language communities will have more tools and resources to lead their own preservation efforts, ensuring cultural authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Title and Introduction */}
              <div className="mb-8 md:mb-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Language Preservation Platform</h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore our comprehensive approach to preserving the Kifuliiru language through various interconnected strategies. 
                  From documentation to community engagement, discover how we're working to ensure the language's vitality for future generations.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="border-b border-gray-200 mb-6 md:mb-8">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-3 md:py-4 px-1 text-center ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <Globe2 className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="text-sm md:text-base">Overview</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('criteria')}
                    className={`flex-1 py-3 md:py-4 px-1 text-center ${
                      activeTab === 'criteria'
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="text-sm md:text-base">Implementation</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('resources')}
                    className={`flex-1 py-3 md:py-4 px-1 text-center ${
                      activeTab === 'resources'
                        ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="text-sm md:text-base">Resources</span>
                    </div>
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
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
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-b from-amber-50 to-white p-6 md:p-8 rounded-xl shadow-sm">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                    Ready to Preserve Your Language?
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                    Join us in our mission to preserve and revitalize endangered languages. 
                    Together, we can ensure that these precious cultural treasures are passed down to future generations.
                  </p>
                  <Button 
                    size="lg"
                    className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium bg-amber-600 hover:bg-amber-700 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started with Your Language{" "}
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Footer */}
        <div className="mt-12 md:mt-16 mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-200">
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-gray-500">Last updated: 4/13/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LanguagePreservationPage; 