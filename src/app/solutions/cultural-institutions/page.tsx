// File location: app/solutions/cultural-institutions/page.tsx

import React from "react";
import { ArrowRight, Building, Globe, BookOpen } from "lucide-react";
import Layout from "@/app/components/layout";

export default function CulturalInstitutionsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Solutions for Cultural Institutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empower your institution with digital tools for preserving and
                sharing cultural heritage
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="w-8 h-8 text-blue-600" />,
                  title: "Institution Management",
                  description:
                    "Tools for managing your digital language preservation initiatives",
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "Public Access",
                  description:
                    "Share your cultural heritage with the world through online platforms",
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Digital Archives",
                  description:
                    "Secure, searchable archives for your cultural materials",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-8">Partner with Us</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join other cultural institutions in preserving linguistic
                heritage for future generations
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
import React from "react";
import { Building, Globe, BookOpen, Users, Database, FileText } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";

export default function CulturalInstitutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions for Cultural Institutions
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Digital tools and platforms designed specifically for museums, libraries, archives, and 
              cultural centers working to preserve linguistic and cultural heritage.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building className="w-8 h-8 text-blue-600" />,
                  title: "Institution Management",
                  description:
                    "Tools for managing your digital language preservation initiatives",
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-600" />,
                  title: "Public Access",
                  description:
                    "Share your cultural heritage with the world through online platforms",
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Digital Archives",
                  description:
                    "Secure, searchable archives for your cultural materials",
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Community Engagement",
                  description:
                    "Tools to involve community members in cultural preservation efforts",
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-600" />,
                  title: "Collection Management",
                  description:
                    "Organize and manage diverse collections of digital cultural assets",
                },
                {
                  icon: <FileText className="w-8 h-8 text-blue-600" />,
                  title: "Educational Resources",
                  description:
                    "Create and distribute educational materials for cultural learning",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Success Stories
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Indigenous Language Museum",
                  description: "Created a digital exhibition platform showcasing rare audio recordings and cultural artifacts, resulting in a 300% increase in public engagement.",
                },
                {
                  title: "Regional Heritage Archive",
                  description: "Developed a secure digital archive with advanced search capabilities, preserving over 10,000 historical documents and making them accessible to researchers worldwide.",
                },
              ].map((study, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Digitally Transform Your Institution?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us to discuss how our solutions can help your cultural institution 
              preserve and share important linguistic and cultural heritage.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
