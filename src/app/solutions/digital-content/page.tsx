
import React from "react";
import { Layout, Edit, Search, BarChart, Smartphone, Server } from "lucide-react";
import AppLayout from "@/app/components/layout";
import Link from "next/link";

export default function DigitalContentPage() {
  return (
    <AppLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Content Platform
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Build and manage comprehensive digital content platforms for languages, 
              cultural materials, and educational resources.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="w-8 h-8 text-blue-600" />,
                  title: "Content Management System",
                  description: "Intuitive tools for organizing, editing, and publishing content in multiple formats and languages."
                },
                {
                  icon: <Edit className="w-8 h-8 text-blue-600" />,
                  title: "Rich Content Editor",
                  description: "Create rich multimedia content with support for text, audio, video, images, and interactive elements."
                },
                {
                  icon: <Search className="w-8 h-8 text-blue-600" />,
                  title: "Advanced Search",
                  description: "Powerful search capabilities with filters, tags, and full-text search to easily find content."
                },
                {
                  icon: <BarChart className="w-8 h-8 text-blue-600" />,
                  title: "Analytics Dashboard",
                  description: "Track usage, engagement, and growth with detailed analytics and reporting tools."
                },
                {
                  icon: <Smartphone className="w-8 h-8 text-blue-600" />,
                  title: "Mobile-Ready Interface",
                  description: "Responsive design ensuring your content is accessible on any device, from desktop to mobile."
                },
                {
                  icon: <Server className="w-8 h-8 text-blue-600" />,
                  title: "Scalable Architecture",
                  description: "Built to grow with your content, handling thousands of entries with consistent performance."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your Digital Content Platform?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us today to discuss your specific requirements and get started on 
              your custom digital content solution.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
