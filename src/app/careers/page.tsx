"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Briefcase, Users, Brain, ArrowRight, Code, BookOpen } from "lucide-react";

export default function CareersPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Careers at Wekify LLC
            </h1>
            <p className="text-xl text-gray-600">
              Join us in preserving the Kifuliiru language through technology
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Status</h2>
                <p className="text-gray-600 mb-4">
                  At present, Wekify LLC is a small team focused on developing our language preservation platform. While we don't have any open positions at the moment, we're always interested in connecting with talented individuals who share our passion for language preservation and technology.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Opportunities</h2>
                <p className="text-gray-600 mb-4">
                  As our projects grow and evolve, we anticipate needing additional team members in various roles. Here are some positions we may need in the future:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Code className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Software Engineers</h3>
                    </div>
                    <p className="text-gray-600">
                      Full-stack developers to help build and maintain our language preservation platform, with expertise in React, Next.js, and modern web technologies.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Brain className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Data Scientists</h3>
                    </div>
                    <p className="text-gray-600">
                      Experts in natural language processing and machine learning to help develop AI-powered language learning and preservation tools.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <BookOpen className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Linguists</h3>
                    </div>
                    <p className="text-gray-600">
                      Language experts to help document and structure the Kifuliiru language, ensuring accurate representation in our digital platform.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Users className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Community Engagement</h3>
                    </div>
                    <p className="text-gray-600">
                      Specialists to help build and maintain relationships with the Bafuliiru community and other language communities we may work with.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h2>
                <p className="text-gray-600 mb-4">
                  While we don't have immediate openings, we encourage you to stay in touch. When opportunities arise, we'll be looking for individuals who are passionate about our mission and bring relevant skills to the table.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Contact Us <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </a>
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </Layout>
  );
} 