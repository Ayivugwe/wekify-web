
import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Share2, Code, BookOpen, Users, Brain, Sparkles } from "lucide-react";
import Layout from "../components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Wekify",
  description: "Digital solutions for language preservation and cultural revitalization",
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
              Preserve Your Language in the Digital Age
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help communities document, teach, and revitalize their languages.
            </p>
          </div>
        </section>

        {/* Main Solutions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Digital Content Platform",
                  description: "A complete platform for managing and sharing your language content.",
                  features: [
                    "Digital Dictionary Management",
                    "Audio/Video Content Library",
                    "Learning Resources Portal",
                    "Community Contribution Tools"
                  ],
                  link: "/solutions/digital-content"
                },
                {
                  icon: <BookOpen className="w-12 h-12" />,
                  title: "Language Documentation",
                  description: "Professional tools for documenting and preserving your language.",
                  features: [
                    "Structured Documentation System",
                    "Cultural Context Recording",
                    "Multimedia Integration",
                    "Version Control & Backup"
                  ],
                  link: "/solutions/language-preservation"
                }
              ].map((solution, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit">
                    {solution.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="w-5 h-5 mr-3 text-blue-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={solution.link}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
                  >
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Coming Soon */}
        <section className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-700 text-sm font-medium mb-6">
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold mb-6">AI-Powered Language Solutions</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              We're working hard to bring you cutting-edge AI features that will revolutionize language preservation and learning. Stay tuned for these exciting developments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Smart Translation",
                  description: "Advanced AI-powered translation tools (Coming Q3 2024)"
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Adaptive Learning",
                  description: "Personalized language learning paths (Coming Q4 2024)"
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Automated Documentation",
                  description: "AI-assisted language documentation (Coming Q4 2024)"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-purple-100">
                  <div className="mb-4 p-3 bg-purple-50 rounded-lg w-fit mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Custom Development",
                  description: "Tailored solutions for your specific language needs"
                },
                {
                  icon: <Share2 className="w-8 h-8" />,
                  title: "Integration Services",
                  description: "Connect your existing platforms and tools"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Community Training",
                  description: "Expert guidance for your language team"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Preserving Your Language Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join other communities who are successfully preserving their languages with our digital solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all"
            >
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
