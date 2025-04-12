"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { FadeIn } from "@/app/components/ui/fade-in";
import Layout from "@/app/components/layout";
import {
  Globe,
  Database,
  LayoutDashboard,
  Mic,
  Book,
  BookOpen,
  FileText,
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
  Zap,
  MessageSquare,
  Search,
  Bell,
  Lock,
  Cloud,
} from "lucide-react";
import { KifuliiruPlatformsCTA } from '@/app/components/kifuliiru-platforms-cta';

interface FeatureSection {
  icon: React.ElementType;
  title: string;
  description: string;
  features: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
}

const sections: FeatureSection[] = [
  {
    icon: Code,
    title: "Platform Development",
    description: "Technical documentation for developers and system administrators",
    features: [
      {
        icon: Server,
        title: "Platform Architecture",
        description: "Overview of the platform's technical architecture and components"
      },
      {
        icon: Database,
        title: "Data Management",
        description: "Guidelines for managing and organizing language data"
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description: "Security measures and compliance requirements"
      }
    ]
  },
  {
    icon: Settings,
    title: "Platform Management",
    description: "Resources for platform administrators and content managers",
    features: [
      {
        icon: FileText,
        title: "Content Management",
        description: "How to manage and organize language content"
      },
      {
        icon: Users,
        title: "User Management",
        description: "Managing user accounts and permissions"
      },
      {
        icon: BarChart,
        title: "Analytics & Reporting",
        description: "Understanding platform usage and performance metrics"
      }
    ]
  },
  {
    icon: BookOpen,
    title: "Platform Features",
    description: "Documentation for platform features and functionality",
    features: [
      {
        icon: Mic,
        title: "Audio Recording",
        description: "How to record and manage audio content"
      },
      {
        icon: Book,
        title: "Documentation Tools",
        description: "Tools for creating and managing language documentation"
      },
      {
        icon: LayoutDashboard,
        title: "Dashboard Features",
        description: "Overview of dashboard functionality and features"
      }
    ]
  }
];

export function DocsContent() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-900 text-sm font-medium mb-4">
              Documentation
            </span>
            <h1 className="text-4xl font-bold mb-4">Platform Documentation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation for the Wekify language preservation platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-primary-100/50"
              >
                <section.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="space-y-4">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-primary-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <KifuliiruPlatformsCTA />
        </div>
      </div>
    </Layout>
  );
} 