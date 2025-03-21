"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Lightbulb, Globe, Target, Users, Brain, ArrowRight } from "lucide-react";

export default function VisionPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision
            </h1>
            <p className="text-xl text-gray-600">
              Building a digital future for the Kifuliiru language while laying the groundwork for broader language preservation efforts.
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Focus</h2>
                <p className="text-gray-600 mb-4">
                  Our immediate vision is centered on creating a robust digital platform for the Kifuliiru language in partnership with the Bafuliiru community. We're developing comprehensive tools for language documentation, learning, and preservation, ensuring that the language thrives in the digital age.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Expansion</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Globe className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Beyond Kifuliiru</h3>
                    </div>
                    <p className="text-gray-600">
                      While our current focus is on Kifuliiru, we're building our platform with scalability in mind. Our goal is to create a model that can be adapted for other indigenous languages in the future.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Brain className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">AI Integration</h3>
                    </div>
                    <p className="text-gray-600">
                      We're laying the groundwork for future AI partnerships that will enhance language learning and preservation, always in close collaboration with the communities we serve.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Goals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Target className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Short-term Goals</h3>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Complete the Kifuliiru digital platform</li>
                      <li>• Establish strong community partnerships</li>
                      <li>• Document and preserve language resources</li>
                      <li>• Create effective learning tools</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg mr-3">
                        <Lightbulb className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Long-term Vision</h3>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Expand to other indigenous languages</li>
                      <li>• Develop advanced AI capabilities</li>
                      <li>• Build a global network of language communities</li>
                      <li>• Create sustainable preservation models</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
                <p className="text-gray-600 mb-4">
                  Join us in shaping the future of language preservation. Whether you're a member of the Bafuliiru community, a developer, or passionate about language preservation, there's a place for you in our vision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Contact Us <ArrowRight className="ml-2 h-4 w-4 inline" />
                  </a>
                  <a
                    href="/careers"
                    className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    View Careers
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