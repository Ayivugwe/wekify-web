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
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4 md:mb-6">
                <Globe2 className="w-4 h-4 mr-2" />
                Language Preservation & Modernization
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Preserving and Modernizing Languages for the Digital Age
              </h1>
              <p className="text-base md:text-xl text-gray-600">
                Our mission combines language preservation with digital modernization, ensuring languages not only survive but thrive in today's digital world. We provide comprehensive solutions for all languages that need digital presence and support.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                The Digital Language Landscape
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the current state of language digitalization helps us develop effective solutions for language preservation and modernization.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Globe2,
                  title: "Endangered Languages",
                  value: "Many",
                  description: "Languages are at risk of disappearing, taking with them unique cultural knowledge and perspectives"
                },
                {
                  icon: Clock,
                  title: "Languages Lost",
                  value: "Regularly",
                  description: "Languages continue to disappear, each loss representing centuries of cultural knowledge"
                },
                {
                  icon: Laptop,
                  title: "Digital Impact",
                  value: "Growing",
                  description: "Digital tools are becoming increasingly important in language preservation efforts"
                }
              ].map((stat, index) => (
                <FadeIn key={index}>
                  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="p-2 md:p-3 bg-blue-50 rounded-lg">
                        <stat.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                      </div>
                      <h3 className="text-base md:text-lg font-medium text-gray-900 ml-3 md:ml-4">{stat.title}</h3>
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
                    <p className="text-sm md:text-base text-gray-600">{stat.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Our Position Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Our Position in Language Preservation
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  Our unique position combines deep cultural understanding with technical expertise, particularly in our work with the Kifuliiru language.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Cultural & Technical Expertise</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    Our founder's direct connection to the Bafuliiru-Kifuliiru community, combined with technical expertise, provides a unique foundation for our work. This includes comprehensive language capabilities in speaking, writing, reading, translating, and interpreting Kifuliiru.
                  </p>
                </div>
                
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Strategic Language Approach</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    We've strategically chosen to work with multiple languages to maximize impact:
                  </p>
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>English: Global technology and communication</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>French: DRC and Francophone countries</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>Kiswahili: East and Central Africa</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-600 mr-2 mt-0.5" />
                      <span>Kifuliiru: Native language focus with self-translation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                  Our Approach to Language Preservation
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  We combine traditional language preservation with modern digital solutions to create comprehensive support for all languages.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Community-Driven</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Working directly with language communities to ensure cultural authenticity and relevance in all our solutions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Laptop className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Digital-First</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Creating modern digital tools and content that make languages accessible and relevant in today's world.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    <Globe2 className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Comprehensive Support</h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Providing solutions for all languages that need digital presence, regardless of their current status.
                  </p>
                </div>
              </div>
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
              {/* Overview Section */}
              <div className="mb-12">
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
              </div>

              {/* Resources Section */}
              <div className="mb-12">
                <div className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-6 md:p-8 shadow-sm mb-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Learning Resources</h2>
                  </div>
                  <div className="pl-12">
                    <p className="text-gray-600 leading-relaxed">
                      Our comprehensive collection of resources supports language preservation efforts through 
                      educational materials, guides, and tools designed for both community members and preservation specialists.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation Resources</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <BookText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Language Documentation Guide</h4>
                          <p className="text-gray-600">A comprehensive manual covering best practices for recording and documenting language elements, including phonetic transcription, grammar documentation, and cultural context preservation.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <History className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Cultural Context Documentation</h4>
                          <p className="text-gray-600">Detailed methodologies for capturing and preserving the cultural knowledge, traditions, and practices that are intertwined with language.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Resources</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <Users2 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Community Engagement Toolkit</h4>
                          <p className="text-gray-600">Practical resources and strategies for involving community members in language preservation efforts, including workshop templates and engagement techniques.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <Heart className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Success Stories</h4>
                          <p className="text-gray-600">Case studies and examples of successful language preservation initiatives from around the world, highlighting effective strategies and community impact.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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