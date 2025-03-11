
import React from "react";
import { Lightbulb, Tool, Shield, Clock, Zap, MessageCircle } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";

export default function CustomSolutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Tailored technology solutions designed for your specific needs. 
              From concept to implementation, we're with you every step of the way.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
                  title: "Custom Development",
                  description: "Bespoke software development tailored to your specific requirements and objectives."
                },
                {
                  icon: <Tool className="w-8 h-8 text-blue-600" />,
                  title: "Platform Optimization",
                  description: "Improve performance, usability, and functionality of your existing digital platforms."
                },
                {
                  icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
                  title: "Technical Consultation",
                  description: "Expert advice and strategic planning to guide your technical decisions and implementations."
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-600" />,
                  title: "Maintenance & Support",
                  description: "Ongoing technical support and maintenance to ensure your solutions remain secure and effective."
                },
                {
                  icon: <Clock className="w-8 h-8 text-blue-600" />,
                  title: "Legacy System Modernization",
                  description: "Transform outdated systems into modern, scalable solutions while preserving valuable data and workflows."
                },
                {
                  icon: <Zap className="w-8 h-8 text-blue-600" />,
                  title: "Rapid Prototyping",
                  description: "Quickly develop and test functional prototypes to validate concepts before full development."
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

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Our Development Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We work with you to understand your goals, challenges, and requirements in detail."
                },
                {
                  step: "02",
                  title: "Strategy & Planning",
                  description: "Creating a comprehensive roadmap and technical strategy for your solution."
                },
                {
                  step: "03",
                  title: "Design & Development",
                  description: "Building your solution with iterative development and regular feedback cycles."
                },
                {
                  step: "04",
                  title: "Testing & Refinement",
                  description: "Rigorous testing to ensure quality, security, and performance."
                },
                {
                  step: "05",
                  title: "Deployment & Support",
                  description: "Smooth deployment and ongoing support to ensure long-term success."
                }
              ].map((process, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's work together to create a custom solution that perfectly addresses 
              your unique challenges and goals.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
