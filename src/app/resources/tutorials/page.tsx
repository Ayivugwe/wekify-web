// File location: app/resources/tutorials/page.tsx

import React from "react";
import { ArrowRight, PlayCircle, Clock } from "lucide-react";
import Layout from "@/app/components/layout";

export default function TutorialsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Video Tutorials
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Step-by-step video guides to help you master our platform
              </p>
            </div>
          </div>
        </section>

        {/* Tutorial Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Getting Started with Wekify",
                  description: "Learn the basics of our platform",
                  duration: "10 mins",
                  category: "Beginner",
                },
                {
                  title: "Dictionary Management",
                  description: "Create and manage digital dictionaries",
                  duration: "15 mins",
                  category: "Intermediate",
                },
                {
                  title: "Advanced Integration",
                  description: "Connect with external systems",
                  duration: "20 mins",
                  category: "Advanced",
                },
                {
                  title: "Content Creation",
                  description: "Best practices for content creation",
                  duration: "12 mins",
                  category: "Beginner",
                },
                {
                  title: "User Management",
                  description: "Managing users and permissions",
                  duration: "8 mins",
                  category: "Intermediate",
                },
                {
                  title: "Analytics & Reporting",
                  description: "Understanding platform analytics",
                  duration: "18 mins",
                  category: "Advanced",
                },
              ].map((tutorial, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="aspect-video bg-gray-100 relative group-hover:bg-gray-200 transition-colors">
                    <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-blue-600 font-medium">
                        {tutorial.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{tutorial.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{tutorial.description}</p>
                    <button className="text-blue-600 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Watch Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Beginner",
                "Intermediate",
                "Advanced",
                "API",
                "Integration",
                "Best Practices",
              ].map((category, index) => (
                <a
                  key={index}
                  href={`/tutorials/${category.toLowerCase()}`}
                  className="px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all text-gray-700 hover:text-blue-600"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
