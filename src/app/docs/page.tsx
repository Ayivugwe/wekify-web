"use client";

import React from "react";
import {
  BookOpen,
  FileText,
  Book,
  Code,
  Server,
  Settings,
  Shield,
  Gauge,
  Languages,
  Users,
  BarChart,
  GitMerge,
  Clock,
  Globe,
  Database,
  LayoutDashboard,
} from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";

interface FeatureSection {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    id: string;
  }>;
}

const DocsPage: React.FC = () => {
  const sections: FeatureSection[] = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Platform Development",
      description: "Comprehensive guides for developing and deploying your language preservation platform",
      features: [
        {
          icon: <Server className="w-5 h-5" />,
          title: "Platform Architecture",
          description: "Learn about the system architecture and technical design decisions",
          id: "platform-architecture",
        },
        {
          icon: <BookOpen className="w-5 h-5" />,
          title: "Development Guide",
          description: "Step-by-step guide for setting up your development environment",
          id: "development-guide",
        },
        {
          icon: <Code className="w-5 h-5" />,
          title: "API Reference",
          description: "Detailed documentation of all available APIs and endpoints",
          id: "api-reference",
        },
        {
          icon: <Server className="w-5 h-5" />,
          title: "Deployment Guide",
          description: "Instructions for deploying your platform to production",
          id: "deployment-guide",
        },
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Platform Management",
      description: "Tools and guides for managing your platform effectively",
      features: [
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Content Management",
          description: "Manage and organize your language content and resources",
          id: "content-management",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "User Administration",
          description: "Tools for managing users, roles, and permissions",
          id: "user-administration",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Security Settings",
          description: "Configure security settings and access controls",
          id: "security-settings",
        },
        {
          icon: <Gauge className="w-5 h-5" />,
          title: "Performance Guide",
          description: "Optimize your platform's performance and scalability",
          id: "performance-guide",
        },
      ],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Platform Features",
      description: "Explore the powerful features available in your platform",
      features: [
        {
          icon: <Languages className="w-5 h-5" />,
          title: "Language Tools",
          description: "Tools for language documentation and preservation",
          id: "language-tools",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Community Features",
          description: "Features for community engagement and collaboration",
          id: "community-features",
        },
        {
          icon: <BarChart className="w-5 h-5" />,
          title: "Analytics Dashboard",
          description: "Track and analyze platform usage and engagement",
          id: "analytics-dashboard",
        },
        {
          icon: <GitMerge className="w-5 h-5" />,
          title: "Integration Guide",
          description: "Integrate with other tools and services",
          id: "integration-guide",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50/30 via-white to-primary-50/30">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-50 rounded-full mb-6">
                  <BookOpen className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-primary-600 font-medium">Documentation</span>
                </div>
                <h1 className="text-5xl font-bold text-primary-900 mb-6">
                  Platform Documentation
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Comprehensive guides and resources for building and managing your language preservation platform
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-12 mb-16">
                {sections.map((section, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 border border-primary-100/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary-50 p-3 rounded-lg">
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-primary-900">{section.title}</h2>
                        <p className="text-slate-600">{section.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.features.map((feature, featureIndex) => (
                        <div key={featureIndex} id={feature.id} className="flex items-start gap-4 p-4 bg-primary-50/50 rounded-lg">
                          <div className="bg-white p-2 rounded-lg">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary-900 mb-1">{feature.title}</h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                            <div className="mt-2 inline-flex items-center gap-1 text-sm text-primary-600">
                              <Clock className="w-4 h-4" />
                              <span>Coming soon</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Kifuliiru Platforms CTA */}
              <div className="bg-slate-900 rounded-xl p-12 text-center text-white">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-white/10 rounded-full mb-6">
                  <Globe className="h-5 w-5 text-white mr-2" />
                  <span className="text-white font-medium">Kifuliiru Language</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Explore Our Kifuliiru Language Platforms
                </h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Discover the platforms we've built specifically for the Kifuliiru language community
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Kifuliiru.com</h3>
                    <p className="text-white/80 mb-4">The main platform for Kifuliiru language resources and learning</p>
                    <Button 
                      className="w-full px-8 py-3 text-base font-medium bg-white text-primary-900 hover:bg-primary-50 hover:text-primary-900 transition-colors duration-200"
                      asChild
                    >
                      <Link href="https://kifuliiru.com" target="_blank" rel="noopener noreferrer">
                        Visit Kifuliiru.com
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">FuliiruHub.com</h3>
                    <p className="text-white/80 mb-4">A comprehensive hub for Kifuliiru language documentation</p>
                    <Button 
                      className="w-full px-8 py-3 text-base font-medium bg-white text-primary-900 hover:bg-primary-50 hover:text-primary-900 transition-colors duration-200"
                      asChild
                    >
                      <Link href="https://fuliiruhub.com" target="_blank" rel="noopener noreferrer">
                        Visit FuliiruHub.com
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                      <LayoutDashboard className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
                    <p className="text-white/80 mb-4">This is a private platform</p>
                    <Button 
                      className="w-full px-8 py-3 text-base font-medium bg-white/20 text-white/80 cursor-not-allowed"
                      disabled
                    >
                      Private Access Only
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
};

export default DocsPage; 