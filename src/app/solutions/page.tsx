
import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Database, Code, Settings, Cloud, Lock, Zap } from "lucide-react";
import Layout from "../components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Solutions | Wekify",
  description: "Innovative technology designed to preserve, promote, and revitalize languages across all communities.",
  keywords: ["language preservation", "digital solutions", "technology", "indigenous languages"],
};

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital Solutions for Language Preservation
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Innovative technology designed to preserve, promote, and revitalize languages 
              across all communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Core Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Digital Content Platform",
                  description:
                    "Build and manage digital content platforms with our scalable solution. Perfect for languages, cultural content, and educational materials.",
                  features: [
                    "Content Management System",
                    "User Management",
                    "Analytics Dashboard",
                    "Mobile-Ready Interface",
                  ],
                  link: "/solutions/digital-content",
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Integration Services",
                  description:
                    "Connect and extend your platforms with our robust API and integration services. Build seamless digital experiences.",
                  features: [
                    "RESTful APIs",
                    "Custom Integrations",
                    "Data Migration",
                    "Third-party Connections",
                  ],
                  link: "/solutions/integration-services",
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Custom Solutions",
                  description:
                    "Tailored technology solutions designed for your specific needs. From concept to implementation.",
                  features: [
                    "Custom Development",
                    "Platform Optimization",
                    "Technical Consultation",
                    "Maintenance & Support",
                  ],
                  link: "/solutions/custom",
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Language Preservation",
                  description:
                    "Specialized tools for documenting, archiving, and revitalizing endangered languages.",
                  features: [
                    "Digital Dictionaries",
                    "Audio/Video Archives",
                    "Language Learning Tools",
                    "Cultural Documentation",
                  ],
                  link: "/solutions/language-preservation",
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Cloud Infrastructure",
                  description:
                    "Reliable, secure, and scalable cloud infrastructure for hosting language and cultural platforms.",
                  features: [
                    "Managed Hosting",
                    "Automatic Scaling",
                    "Backups & Recovery",
                    "24/7 Monitoring",
                  ],
                  link: "/solutions/cloud",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "AI & Machine Learning",
                  description:
                    "Advanced AI tools for language analysis, translation, and content generation.",
                  features: [
                    "Automated Translation",
                    "Content Analysis",
                    "Pattern Recognition",
                    "Language Models",
                  ],
                  link: "/solutions/ai-ml",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className="mb-6 p-3 bg-blue-50 rounded-xl w-fit 
                    group-hover:bg-blue-100 transition-all duration-300"
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={solution.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Language Preservation Journey?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Contact our team today to discuss your language preservation goals and discover 
              how our solutions can help your community.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
