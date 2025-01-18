// File location: app/resources/getting-started/page.tsx

import React from "react";
import { ArrowRight, BookOpen, PlayCircle, FileText } from "lucide-react";
import Layout from "@/app/components/layout";

export default function GettingStartedPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Getting Started with Wekify
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to begin your language preservation journey
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Quick Start Guide",
                  description:
                    "Get up and running with our platform in minutes",
                  href: "/docs/quickstart",
                },
                {
                  icon: <PlayCircle className="w-8 h-8 text-blue-600" />,
                  title: "Video Tutorials",
                  description: "Watch step-by-step guides for key features",
                  href: "/resources/tutorials",
                },
                {
                  icon: <FileText className="w-8 h-8 text-blue-600" />,
                  title: "Documentation",
                  description: "Detailed guides and API references",
                  href: "/resources/api",
                },
              ].map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-blue-100 transition-all">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="text-blue-600 font-medium inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Need Help?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help you get started
            </p>
            <a
              href="/support"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
