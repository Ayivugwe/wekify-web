"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Globe,
  BarChart,
  Clock,
  CheckCircle,
  Calendar,
  Languages,
  Code,
  Share2,
} from "lucide-react";
import Layout from "../components/layout";

export default function CaseStudies() {
  return (
    <Layout>
      <>
        <Head>
          <title>Case Studies - Wekify Technology Solutions</title>
          <meta
            name="description"
            content="Explore how organizations are using Wekify's technology solutions to transform their digital presence. Real success stories and implementation insights."
          />
          <meta
            name="keywords"
            content="case studies, success stories, digital transformation, technology implementation, Kifuliiru"
          />
          <meta
            property="og:title"
            content="Case Studies - Wekify Technology Solutions"
          />
          <meta
            property="og:description"
            content="See how organizations achieve digital success with Wekify's innovative solutions."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Success Stories
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Explore how our technology solutions are powering digital
                  transformations and creating comprehensive online ecosystems
                </p>
              </div>
            </div>
          </section>

          {/* Featured Case Study */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="text-white space-y-6">
                    <div className="inline-flex items-center gap-2 text-blue-100 bg-white/10 px-4 py-2 rounded-full">
                      <Globe className="w-4 h-4" />
                      Featured Project
                    </div>
                    <h2 className="text-3xl font-bold">
                      Kifuliiru Public Dictionary
                    </h2>
                    <p className="text-lg text-blue-50">
                      Building a comprehensive digital platform for language
                      preservation and cultural heritage
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <Users className="w-5 h-5 mb-2" />
                        <div className="text-2xl font-bold">5,000+</div>
                        <div className="text-sm text-blue-100">
                          Active Users
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-lg p-4">
                        <Languages className="w-5 h-5 mb-2" />
                        <div className="text-2xl font-bold">10,000+</div>
                        <div className="text-sm text-blue-100">
                          Dictionary Entries
                        </div>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 group">
                      View Case Study
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="relative h-64 md:h-auto rounded-xl overflow-hidden">
                    <Image
                      src="/api/placeholder/800/600"
                      alt="Kifuliiru Dictionary Platform"
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Timeline */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Implementation Journey
              </h2>

              <div className="space-y-12">
                {[
                  {
                    icon: <Calendar className="w-6 h-6" />,
                    title: "Project Planning",
                    date: "Q3 2023",
                    description:
                      "Comprehensive analysis of language preservation needs and technical requirements",
                  },
                  {
                    icon: <Code className="w-6 h-6" />,
                    title: "Platform Development",
                    date: "Q4 2023",
                    description:
                      "Built scalable architecture and core features using modern technology stack",
                  },
                  {
                    icon: <Share2 className="w-6 h-6" />,
                    title: "Community Engagement",
                    date: "Q1 2024",
                    description:
                      "Launched beta version and gathered feedback from language experts",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: "Public Launch",
                    date: "Q2 2024",
                    description:
                      "Successfully deployed the platform with comprehensive language support",
                  },
                ].map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {phase.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {phase.date}
                        </span>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Case Studies */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Digital Ecosystem
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
                Powering a complete digital presence across multiple platforms
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tumenye Ibufuliiru",
                    description:
                      "Educational platform introducing Kifuliiru culture and history",
                    metrics: [
                      "Interactive learning modules",
                      "Cultural resources",
                      "Community engagement",
                    ],
                  },
                  {
                    title: "Tusome i Kifuliiru",
                    description: "Reading and literacy platform in Kifuliiru",
                    metrics: [
                      "Digital library",
                      "Reading progress tracking",
                      "Learning resources",
                    ],
                  },
                  {
                    title: "Imyazi",
                    description: "News and updates platform in Kifuliiru",
                    metrics: [
                      "Daily news updates",
                      "Community stories",
                      "Cultural events",
                    ],
                  },
                  {
                    title: "Radio Ibufuliiru",
                    description: "Digital radio and podcast platform",
                    metrics: [
                      "Live streaming",
                      "Podcast archives",
                      "Community shows",
                    ],
                  },
                  {
                    title: "Social Media Presence",
                    description: "Unified Ibufuliiru branding across platforms",
                    metrics: [
                      "Twitter",
                      "Facebook",
                      "Instagram",
                      "YouTube",
                      "TikTok",
                      "Threads",
                    ],
                  },
                  {
                    title: "Content Platforms",
                    description: "Extended reach through specialized platforms",
                    metrics: [
                      "Medium publications",
                      "Substack newsletters",
                      "Community forums",
                    ],
                  },
                ].map((study, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <ul className="space-y-2">
                        {study.metrics.map((metric, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-600 gap-2"
                          >
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-gray-100 p-4 bg-gray-50">
                      <button
                        className="text-blue-600 font-medium hover:text-blue-700 
                      transition-colors flex items-center gap-2 text-sm"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Project Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BarChart className="w-6 h-6 text-blue-600" />,
                    title: "Platform Growth",
                    metrics: [
                      "300% user growth in 3 months",
                      "95% user satisfaction rate",
                      "50+ community contributors",
                    ],
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-blue-600" />,
                    title: "Performance",
                    metrics: [
                      "99.9% uptime",
                      "< 100ms response time",
                      "Zero data loss incidents",
                    ],
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-blue-600" />,
                    title: "Community Impact",
                    metrics: [
                      "5 schools adopted platform",
                      "3 research partnerships",
                      "2 cultural preservation awards",
                    ],
                  },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                    transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mb-4 p-2 bg-blue-50 rounded-lg w-fit">
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {achievement.title}
                    </h3>
                    <ul className="space-y-2">
                      {achievement.metrics.map((metric, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 gap-2"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Ready to Build Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Let&apos;s discuss how our technology solutions can transform
                your digital presence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 inline-flex items-center justify-center gap-2 group">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300">
                  View More Case Studies
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}
