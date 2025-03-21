"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { MapPin, Building2, Globe, ArrowRight } from "lucide-react";

export default function LocationsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Location
            </h1>
            <p className="text-xl text-gray-600">
              Currently based in Spokane, Washington, USA
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Status</h2>
                <p className="text-gray-600 mb-4">
                  Wekify LLC is currently operating as a home-based company in Spokane, Washington, where we're developing our language preservation platform. While we don't have a physical office space yet, we're focused on building our digital infrastructure and community partnerships.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Office Plans</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg mr-3">
                      <Building2 className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Office Space</h3>
                  </div>
                  <p className="text-gray-600">
                    As our team grows and our projects expand, we plan to establish a physical office space in Spokane. This will provide a dedicated space for collaboration, community meetings, and language preservation activities.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h2>
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg mr-3">
                      <Globe className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Digital Presence</h3>
                  </div>
                  <p className="text-gray-600">
                    While our headquarters are in Spokane, our digital platform enables us to work with communities worldwide. We're currently focused on our partnership with the Bafuliiru community in Congo Kinshasa, and we look forward to expanding our reach to other communities in the future.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                  Whether you're in Spokane or anywhere else in the world, we'd love to hear from you. Our digital-first approach means we can collaborate effectively regardless of location.
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
