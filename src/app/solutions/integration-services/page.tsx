
import React from "react";
import { Link as LinkIcon, Code, Database, ArrowLeftRight, RefreshCw, GitBranch } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";

export default function IntegrationServicesPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Integration Services
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Connect and extend your platforms with our robust API and integration services. 
              Build seamless digital experiences across your applications.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <LinkIcon className="w-8 h-8 text-blue-600" />,
                  title: "RESTful APIs",
                  description: "Well-documented, secure APIs that allow seamless communication between your applications and services."
                },
                {
                  icon: <Code className="w-8 h-8 text-blue-600" />,
                  title: "Custom Integrations",
                  description: "Tailored integration solutions designed specifically for your unique application ecosystem."
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-600" />,
                  title: "Data Migration",
                  description: "Securely transfer and transform data between systems while maintaining integrity and relationships."
                },
                {
                  icon: <ArrowLeftRight className="w-8 h-8 text-blue-600" />,
                  title: "Third-party Connections",
                  description: "Connect your platform with popular services and tools through our pre-built integration modules."
                },
                {
                  icon: <RefreshCw className="w-8 h-8 text-blue-600" />,
                  title: "Automated Workflows",
                  description: "Create automated processes that connect different systems and trigger actions based on events."
                },
                {
                  icon: <GitBranch className="w-8 h-8 text-blue-600" />,
                  title: "Integration Architecture",
                  description: "Design robust integration architectures that can scale with your growing application landscape."
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

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Connect Your Digital Ecosystem
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Talk to our integration experts today to discover how we can help you 
              build a connected, efficient digital ecosystem.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
