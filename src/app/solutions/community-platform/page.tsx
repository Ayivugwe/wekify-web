import React from "react";
import { Users, MessageSquare, Share2, Shield, ArrowRight } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import { Button } from "@/app/components/Button";

export default function CommunityPlatformPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
              Community Platform Solutions
            </h1>
            <p className="text-xl text-primary-700/70 mb-10 max-w-3xl mx-auto">
              Engaging digital platforms that empower language communities to connect, 
              collaborate, and preserve their linguistic heritage together.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-primary-600" />,
                  title: "Community Spaces",
                  description: "Dedicated spaces for community members to connect, share, and collaborate on language preservation."
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-primary-600" />,
                  title: "Discussion Forums",
                  description: "Structured forums for meaningful discussions about language, culture, and preservation efforts."
                },
                {
                  icon: <Share2 className="w-8 h-8 text-primary-600" />,
                  title: "Content Sharing",
                  description: "Easy-to-use tools for sharing language materials, stories, and cultural resources."
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary-600" />,
                  title: "Privacy Controls",
                  description: "Granular privacy settings to protect sensitive cultural and linguistic materials."
                },
                {
                  icon: <Users className="w-8 h-8 text-primary-600" />,
                  title: "Member Roles",
                  description: "Flexible role management for community leaders, contributors, and participants."
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-primary-600" />,
                  title: "Moderation Tools",
                  description: "Comprehensive tools for maintaining community guidelines and content quality."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-primary-100 hover:border-primary-200 transition-colors">
                  <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-800">{feature.title}</h3>
                  <p className="text-primary-700/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary-800">
              Community-First Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-xl border border-primary-100">
                <h3 className="text-xl font-semibold mb-4 text-primary-800">For Language Communities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-primary-700/70">Empowerment through digital tools and resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-primary-700/70">Preservation of cultural knowledge and traditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-primary-700/70">Strengthened community bonds and collaboration</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl border border-primary-100">
                <h3 className="text-xl font-semibold mb-4 text-primary-800">For Language Preservation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-primary-700/70">Systematic documentation of language materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-primary-700/70">Intergenerational knowledge transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-primary-700/70">Sustainable language revitalization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary-900 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Build Your Community Platform
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Create a digital space that brings your language community together 
              and supports your preservation efforts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions/custom">
                  Learn More About Custom Solutions
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 