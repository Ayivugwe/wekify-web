"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Globe, BookOpen, Users, Target, Heart, Brain } from "lucide-react";

export default function MissionPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-600">
              Empowering the Bafuliiru community to preserve and revitalize the Kifuliiru language through innovative digital solutions.
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  At Wekify LLC, we envision a world where the Kifuliiru language thrives in the digital age. We believe that technology can be a powerful ally in preserving linguistic diversity and cultural heritage, starting with our work with the Bafuliiru community in Congo Kinshasa.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Globe className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Local Focus</h3>
                    </div>
                    <p className="text-gray-600">
                      Working closely with the Bafuliiru community in Congo Kinshasa to understand their specific needs and cultural context.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <BookOpen className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Language Preservation</h3>
                    </div>
                    <p className="text-gray-600">
                      Creating digital tools and resources to document and preserve the Kifuliiru language.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Users className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Community First</h3>
                    </div>
                    <p className="text-gray-600">
                      Ensuring the Bafuliiru community has full control over their language resources and digital content.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Brain className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                    </div>
                    <p className="text-gray-600">
                      Leveraging technology to create powerful tools for language learning and documentation.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h2>
                <p className="text-gray-600 mb-4">
                  Starting with the Bafuliiru community, we're creating comprehensive digital platforms that preserve the Kifuliiru language and connect community members. Our goal is to ensure the language has the digital tools and resources it needs to thrive in the modern world.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
                <p className="text-gray-600 mb-4">
                  Join us in our mission to preserve and revitalize the Kifuliiru language. Whether you're a member of the Bafuliiru community or passionate about language preservation, there's a place for you at Wekify LLC.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                    href="/join"
                    className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    Join Our Team
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