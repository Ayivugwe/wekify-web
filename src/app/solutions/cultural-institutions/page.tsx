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
