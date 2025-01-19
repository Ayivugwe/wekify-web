// File location: app/resources/api/page.tsx

import React from "react";
import { ArrowRight, Code, Database, Shield } from "lucide-react";
import Layout from "@/app/components/layout";

export default function ApiReferencePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                API Reference
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive documentation for Wekify&apos;s APIs and
                integrations
              </p>
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-8 h-8 text-blue-600" />,
                  title: "RESTful APIs",
                  description: "Modern REST APIs with comprehensive endpoints",
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-600" />,
                  title: "Data Models",
                  description: "Well-structured data models and schemas",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-600" />,
                  title: "Authentication",
                  description: "Secure authentication and authorization",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Explore Documentation
              </h2>
              <div className="space-y-4">
                <a
                  href="/docs/api/getting-started"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Getting Started
                      </h3>
                      <p className="text-gray-600">
                        Quick start guide for API integration
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </a>
                <a
                  href="/docs/api/authentication"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Authentication
                      </h3>
                      <p className="text-gray-600">
                        Learn about authentication methods
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </a>
                <a
                  href="/docs/api/endpoints"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        API Endpoints
                      </h3>
                      <p className="text-gray-600">
                        Complete endpoint reference
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
