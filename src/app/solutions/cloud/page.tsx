
import React from "react";
import { Cloud, Shield, Server, BarChart, Clock, RefreshCw } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";

export default function CloudInfrastructurePage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cloud Infrastructure Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Reliable, secure, and scalable cloud infrastructure for hosting language 
              preservation platforms and cultural heritage applications.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="w-8 h-8 text-blue-600" />,
                  title: "Managed Hosting",
                  description: "Fully managed cloud hosting tailored specifically for language and cultural platforms."
                },
                {
                  icon: <Server className="w-8 h-8 text-blue-600" />,
                  title: "Automatic Scaling",
                  description: "Infrastructure that dynamically scales to accommodate growing user bases and content volume."
                },
                {
                  icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
                  title: "Backups & Recovery",
                  description: "Automated backup systems and disaster recovery planning to ensure your data is always safe."
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-600" />,
                  title: "24/7 Monitoring",
                  description: "Continuous system monitoring and alert management to prevent and quickly resolve issues."
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-600" />,
                  title: "Enterprise Security",
                  description: "Advanced security measures including encryption, access controls, and threat detection."
                },
                {
                  icon: <BarChart className="w-8 h-8 text-blue-600" />,
                  title: "Performance Optimization",
                  description: "Continuous performance tuning to ensure fast, responsive experiences for all users."
                }
              ].map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose Our Cloud Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Purpose-built for language and cultural applications",
                "High availability with 99.9% uptime guarantee",
                "Data residency options for legal compliance",
                "Optimized for multimedia content delivery",
                "Simplified deployment and management",
                "Cost-effective scaling as your project grows"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for a Reliable Cloud Solution?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us today to discuss your cloud infrastructure needs and how we can 
              help you build a reliable, secure platform.
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
    </Layout>
  );
}
