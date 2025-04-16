"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Users,
  Shield,
  Code,
  Sparkles,
  BookOpen,
  FileText,
  Terminal,
  ExternalLink,
  Zap,
  Clipboard,
  Languages,
  Heart,
  Gamepad,
} from "lucide-react";
import Layout from "./components/layout";
import { Button } from "./components/Button";
import { FadeIn } from "./components/FadeIn";
import FAQSection from "./components/FAQSection";
import { faqData } from "./lib/data/faqData";
import GamePromoBanner from "./components/GamePromoBanner";
import FuliiruHubShowcase from "./components/FuliiruHubShowcase";
import FeaturesShowcase from "./components/FeaturesShowcase";
import { LanguagePreservationPlatforms } from "./components/LanguagePreservationPlatforms";

const languages = [
  "Kifuliiru",
  "Kiswahili",
  "Yoruba",
  "Twi",
  "Hausa",
  "Amharic",
  "Quechua",
  "Navajo",
  "Māori",
  "Hindi",
  "Mongolian",
  "Welsh",
  "Sámi",
  "Cherokee",
  "Ainu",
  "Zulu",
  "Inuktitut",
  "Guarani",
  "Xhosa",
  "Malagasy",
  "Basque",
  "Catalan",
  "Irish",
  "Scottish Gaelic",
  "Lakota",
  "Tibetan",
  "Hawaiian",
];

export default function HomePage() {
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  const [bubbleLanguages, setBubbleLanguages] = useState({
    topLeft: languages[1],
    bottomMiddle: languages[2],
    middleRight: languages[3],
    middleLeft: languages[4],
    bottomLeft: languages[5],
    topRight: languages[6],
    topMiddle: languages[7],
    bottomRight: languages[8],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * languages.length);
      setActiveLanguage(languages[randomIndex]);

      // Update bubble languages
      const newBubbleLanguages = { ...bubbleLanguages };
      Object.keys(newBubbleLanguages).forEach((key) => {
        const randomLang =
          languages[Math.floor(Math.random() * languages.length)];
        newBubbleLanguages[key as keyof typeof newBubbleLanguages] = randomLang;
      });
      setBubbleLanguages(newBubbleLanguages);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] py-24 bg-gradient-to-b from-primary-50/50 to-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          </div>
          <FadeIn className="container mx-auto px-4 relative z-10 h-full">
            <div className="max-w-7xl mx-auto h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
                    <Globe className="w-4 h-4 mr-2" />
                    Language Preservation
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Building Digital Platforms for Language{" "}
                    <span className="text-primary-600">Preservation</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-10">
                    Empowering communities with powerful digital platforms to
                    preserve, teach, and celebrate their linguistic heritage.
                  </p>
                  <div className="flex flex-wrap gap-4 max-w-3xl mx-auto">
                    <Button 
                      size="lg"
                      className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-sm transition-colors duration-200"
                      asChild
                    >
                      <Link href="/contact">
                        Start Your Project{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="px-8 py-3 text-base font-medium border-primary-600 text-primary-600 hover:bg-primary-50"
                      asChild
                    >
                      <Link href="/solutions">Learn More About Our Vision</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[600px] ">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl"></div>
                  <div className="relative h-full flex items-center justify-center">
                    {/* Simplified orbiting elements with slower animation */}
                    <div
                      className="absolute inset-0"
                      style={{ animation: "spin 60s linear infinite" }}
                    >
                      {/* Orbit ring - subtle visual guide */}
                      <div className="absolute inset-0 rounded-full border border-white/10"></div>

                      {/* Orbital points with moderate visual effects */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_10px_rgba(147,197,253,0.5)]"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-300 rounded-full shadow-[0_0_8px_rgba(165,180,252,0.5)]"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-200 rounded-full shadow-[0_0_8px_rgba(191,219,254,0.5)]"></div>

                      {/* Additional orbital elements */}
                      <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-indigo-200 rounded-full shadow-[0_0_5px_rgba(199,210,254,0.5)]"></div>
                      <div className="absolute bottom-[20%] left-[25%] w-1.5 h-1.5 bg-blue-100 rounded-full shadow-[0_0_5px_rgba(219,234,254,0.5)]"></div>
                    </div>

                    {/* Featured language */}
                    <div className="absolute top-[30%] left-[35%] transform -translate-x-1/3 -translate-y-1/3">
                      <div className="px-4 py-2 bg-blue-900/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold transition-all duration-700 shadow-lg border border-blue-500/30">
                        {activeLanguage}
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-blue-400/30 animate-pulse"></div>
                    </div>

                    {/* Dynamic language bubbles */}
                    <div className="absolute top-[15%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-1">
                      {bubbleLanguages.topLeft}
                    </div>
                    <div className="absolute top-[70%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-2">
                      {bubbleLanguages.bottomMiddle}
                    </div>
                    <div className="absolute top-[40%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-3">
                      {bubbleLanguages.middleRight}
                    </div>
                    <div className="absolute top-[60%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-4">
                      {bubbleLanguages.middleLeft}
                    </div>
                    <div className="absolute top-[85%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-5">
                      {bubbleLanguages.bottomLeft}
                    </div>
                    <div className="absolute top-[30%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-2">
                      {bubbleLanguages.topRight}
                    </div>
                    <div className="absolute top-[20%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-3">
                      {bubbleLanguages.topMiddle}
                    </div>
                    <div className="absolute top-[75%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-800/60 backdrop-blur-sm rounded-full text-white text-xs transition-all duration-1000 animate-float-4">
                      {bubbleLanguages.bottomRight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <LanguagePreservationPlatforms />

        {/* Platform Capabilities Section */}
        <section className="py-32 bg-gradient-to-b from-primary-600 to-primary-700">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Platform Capabilities
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  Our platform-building solutions provide everything communities
                  need to create comprehensive language preservation platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    icon: Globe,
                    title: "Custom Platform Development",
                    description:
                      "Tailored digital solutions that respect cultural context and community needs.",
                  },
                  {
                    icon: Users,
                    title: "Community Management",
                    description:
                      "Tools for community engagement, content moderation, and collaborative learning.",
                  },
                  {
                    icon: Shield,
                    title: "Data Sovereignty",
                    description:
                      "Ensuring communities maintain full control and ownership of their language data.",
                  },
                ].map((capability) => (
                  <FadeIn key={capability.title}>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-colors duration-300 text-white">
                      <div className="bg-white/20 p-4 rounded-lg inline-block mb-6">
                        <capability.icon className="h-8 w-8 text-primary-200" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-primary-100">
                        {capability.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FuliiruHub Case Study */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Success Story: FuliiruHub
                </h2>
                <p className="text-xl text-primary-700/70 max-w-3xl mx-auto">
                  See how we helped the Bafuliiru community create their digital
                  language platform
                </p>
              </div>
              <FuliiruHubShowcase />
            </FadeIn>
          </div>
        </section>

        {/* Platform Building Process */}
        <section className="py-32 bg-gradient-to-b from-primary-50/30 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Our Platform-Building Process
                </h2>
                <p className="text-xl text-primary-700/70 max-w-3xl mx-auto">
                  A comprehensive approach to creating your community's digital
                  platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  {
                    icon: Clipboard,
                    title: "Discovery & Planning",
                    description:
                      "Understanding your community's needs and planning the perfect platform solution.",
                  },
                  {
                    icon: Users,
                    title: "Community Integration",
                    description:
                      "Engaging with your community to ensure cultural authenticity and relevance.",
                  },
                  {
                    icon: BookOpen,
                    title: "Content Strategy",
                    description:
                      "Developing a comprehensive plan for content organization and management.",
                  },
                  {
                    icon: Code,
                    title: "Platform Development",
                    description:
                      "Building your custom platform with modern technology and cultural sensitivity.",
                  },
                ].map((step) => (
                  <FadeIn key={step.title}>
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-4 rounded-lg bg-primary-50 w-fit mb-6">
                        <step.icon className="h-8 w-8 text-primary-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-primary-800 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-primary-700/70">{step.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="text-center mt-16">
                <Button 
                  className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-sm transition-colors duration-200"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Platform Project{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Language Game Section */}
        <GamePromoBanner />

        {/* World Languages Showcase */}
        <section className="py-16 md:py-32 bg-gradient-to-b from-slate-100 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Supporting Languages Worldwide
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                  Our platform is designed to support indigenous and endangered
                  languages from every continent.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                <div className="p-6 md:p-8 rounded-xl bg-white shadow-lg border border-slate-200 min-h-[300px] md:h-[400px] flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-slate-100 p-3 md:p-4 rounded-full">
                      <Languages className="h-6 w-6 md:h-8 md:w-8 text-slate-700" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold ml-4 text-slate-800">
                      Global Language Directory
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Browse our extensive catalog of languages organized by
                    region, language family, and vitality status.
                  </p>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full md:w-auto"
                      asChild
                    >
                      <Link href="/languages">
                        Explore Languages
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-xl bg-white shadow-lg border border-slate-200 min-h-[300px] md:h-[400px] flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-slate-100 p-3 md:p-4 rounded-full">
                      <Globe className="h-6 w-6 md:h-8 md:w-8 text-slate-700" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold ml-4 text-slate-800">
                      Language Preservation Tools
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Access our suite of tools designed to help communities
                    preserve and revitalize their languages.
                  </p>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full md:w-auto"
                      asChild
                    >
                      <Link href="/solutions">
                        View Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Vision & Policies Section */}
        <section className="py-32 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Vision & Guiding Principles
                </h2>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                  We're committed to ethical language preservation that empowers
                  communities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Our Vision</h3>
                  </div>
                  <p className="text-primary-100 mb-6">
                    We envision a world where every language is valued,
                    documented, and actively used across generations, preserving
                    the unique cultural knowledge and perspectives they contain.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Empowering communities to lead their own language
                        preservation efforts
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Making language technology accessible to all communities
                        regardless of resources
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Creating sustainable models for ongoing language
                        development
                      </p>
                    </li>
                  </ul>
                  <Button 
                    className="px-8 py-3 text-base font-medium bg-white/10 hover:bg-white/20 text-white hover:text-white border border-white/20 shadow-sm transition-colors duration-200"
                    asChild
                  >
                    <Link href="/about/vision">
                      Learn More About Our Vision{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 p-4 rounded-full">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Our Policies</h3>
                  </div>
                  <p className="text-primary-100 mb-6">
                    Our work is guided by strong ethical principles that respect
                    community ownership and cultural sensitivity.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Community-driven development that centers indigenous
                        priorities
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Data sovereignty ensuring communities retain ownership
                        of their language data
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Privacy-first approach to technology development
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-300 rounded-full mr-3 mt-2"></span>
                      <p className="text-primary-100">
                        Transparent and accountable partnership models
                      </p>
                    </li>
                  </ul>
                  <Button 
                    className="px-8 py-3 text-base font-medium bg-white/10 hover:bg-white/20 text-white hover:text-white border border-white/20 shadow-sm transition-colors duration-200"
                    asChild
                  >
                    <Link href="/about/our-policies">
                      Review Our Policies{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features Showcase */}
        <FeaturesShowcase />

        {/* FAQ Section */}
        <section className="py-32 bg-gradient-to-b from-primary-50/30 to-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-primary-700/70 max-w-3xl mx-auto">
                  Find answers to common questions about our platform and
                  services
                </p>
              </div>
              <FAQSection faqs={faqData.slice(0, 10)} />
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">
                  Still have questions? Check out our comprehensive FAQ page
                </p>
                <Button 
                  className="px-8 py-3 text-base font-medium bg-white hover:bg-gray-100 text-primary-900 hover:text-primary-900 border border-primary-200 shadow-sm transition-colors duration-200"
                  asChild
                >
                  <Link href="/faq">
                    View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Preserving Your Language?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our team will work with you to develop a customized solution that
              meets your community's needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="px-8 py-3 text-base font-medium bg-white hover:bg-gray-100 text-primary-900 hover:text-primary-900 border border-white/20 shadow-sm transition-colors duration-200"
                asChild
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                className="px-8 py-3 text-base font-medium bg-white/10 hover:bg-white/20 text-white hover:text-white border border-white/20 shadow-sm transition-colors duration-200"
                asChild
              >
                <Link href="/solutions">
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
