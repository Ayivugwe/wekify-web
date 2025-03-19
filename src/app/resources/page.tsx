"use client";

import React from "react";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Book,
  ExternalLink,
  FileCode,
  Users,
} from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";

interface ResourceLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface ResourceCategory {
  icon: React.ReactNode;
  title: string;
  items: Array<{
    title: string;
    href: string;
  }>;
}

interface SupportLink {
  title: string;
  href: string;
  icon: React.ReactNode;
  style: "primary" | "secondary";
}

const ResourcesPage: React.FC = () => {
  const quickLinks: ResourceLink[] = [
    {
      icon: <FileCode className="w-8 h-8" />,
      title: "Platform Documentation",
      description: "Comprehensive guides for building and managing your platform",
      link: "https://docs.wekify.com",
      linkText: "View Documentation",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Platform Tutorials",
      description: "Step-by-step guides for platform development and management",
      link: "/tutorials",
      linkText: "Watch Tutorials",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with other platform developers and share knowledge",
      link: "/community",
      linkText: "Join Discussion",
    },
  ];

  const resourceCategories: ResourceCategory[] = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Platform Development",
      items: [
        { title: "Platform Architecture", href: "/docs/architecture" },
        { title: "Development Guide", href: "/docs/development" },
        { title: "API Reference", href: "/docs/api" },
        { title: "Deployment Guide", href: "/docs/deployment" },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Platform Management",
      items: [
        { title: "Content Management", href: "/docs/content" },
        { title: "User Administration", href: "/docs/users" },
        { title: "Security Settings", href: "/docs/security" },
        { title: "Performance Guide", href: "/docs/performance" },
      ],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Platform Features",
      items: [
        { title: "Language Tools", href: "/docs/language-tools" },
        { title: "Community Features", href: "/docs/community" },
        { title: "Analytics Dashboard", href: "/docs/analytics" },
        { title: "Integration Guide", href: "/docs/integration" },
      ],
    },
  ];

  const supportLinks: SupportLink[] = [
    {
      title: "Platform Support",
      href: "/support",
      icon: <ArrowRight className="w-5 h-5" />,
      style: "primary",
    },
    {
      title: "Schedule Consultation",
      href: "/schedule",
      icon: <ArrowRight className="w-5 h-5" />,
      style: "secondary",
    },
  ];

  const renderQuickLink = (resource: ResourceLink, index: number) => (
    <div
      key={index}
      className="p-8 bg-white rounded-xl border border-primary-100 hover:border-primary-200 transition-colors"
    >
      <div className="mb-6 p-3 bg-primary-50 rounded-lg w-fit">
        {resource.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-primary-800">
        {resource.title}
      </h3>
      <p className="text-primary-700/70 mb-6">{resource.description}</p>
      <a
        href={resource.link}
        target={resource.link.startsWith("http") ? "_blank" : undefined}
        rel={
          resource.link.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 
          transition-colors"
      >
        {resource.linkText}
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );

  const renderResourceCategory = (
    category: ResourceCategory,
    index: number
  ) => (
    <div
      key={index}
      className="group p-6 bg-white rounded-xl border border-primary-100 hover:border-primary-200 
        transition-colors"
    >
      <div
        className="mb-4 p-2 bg-primary-50 rounded-lg w-fit group-hover:bg-primary-100 
        transition-colors"
      >
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-primary-800">
        {category.title}
      </h3>
      <ul className="space-y-2">
        {category.items.map((item, idx) => (
          <li key={idx} className="flex items-center text-primary-700/70 gap-2">
            <ArrowRight className="w-4 h-4 text-primary-600" />
            <a
              href={item.href}
              className="hover:text-primary-600 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSupportLink = (link: SupportLink) => (
    <Button
      key={link.title}
      size="lg"
      variant={link.style === "primary" ? "default" : "outline"}
      asChild
    >
      <a href={link.href}>
        {link.title}
        {link.icon}
      </a>
    </Button>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-800">
                Platform Resources
              </h1>
              <p className="text-xl text-primary-700/70 leading-relaxed">
                Comprehensive documentation and resources for building and managing your language preservation platform
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickLinks.map((resource, index) =>
                renderQuickLink(resource, index)
              )}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-32 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-primary-800">
              Documentation Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) =>
                renderResourceCategory(category, index)
              )}
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-primary-900 rounded-xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Need Platform Support?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our team is here to help you build and manage your language preservation platform
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {supportLinks.map((link) => renderSupportLink(link))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
