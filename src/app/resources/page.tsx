import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Resources & Documentation - Wekify",
  description:
    "Access comprehensive guides, documentation, and resources for implementing Wekify's technology solutions.",
  openGraph: {
    title: "Resources & Documentation - Wekify",
    description:
      "Everything you need to succeed with Wekify's technology solutions.",
  },
};

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
      title: "Technical Documentation",
      description: "Comprehensive API references and implementation guides",
      link: "https://docs.wekify.com",
      linkText: "View Documentation",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Step-by-step guides and implementation walkthroughs",
      link: "/tutorials",
      linkText: "Watch Tutorials",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Forums",
      description: "Connect with other developers and share knowledge",
      link: "/community",
      linkText: "Join Discussion",
    },
  ];

  const resourceCategories: ResourceCategory[] = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Getting Started Guides",
      items: [
        { title: "Platform Overview", href: "/docs/overview" },
        { title: "Quick Start Tutorial", href: "/docs/quickstart" },
        { title: "Basic Concepts", href: "/docs/concepts" },
        { title: "First Implementation", href: "/docs/implementation" },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Implementation Guides",
      items: [
        { title: "Architecture Overview", href: "/docs/architecture" },
        { title: "Best Practices", href: "/docs/best-practices" },
        { title: "Security Guidelines", href: "/docs/security" },
        { title: "Performance Tips", href: "/docs/performance" },
      ],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Case Studies",
      items: [
        { title: "Success Stories", href: "/case-studies" },
        { title: "Implementation Examples", href: "/examples" },
        { title: "Customer Journey", href: "/customer-journey" },
        { title: "Impact Analysis", href: "/impact" },
      ],
    },
  ];

  const supportLinks: SupportLink[] = [
    {
      title: "Contact Support",
      href: "/support",
      icon: <ArrowRight className="w-5 h-5" />,
      style: "primary",
    },
    {
      title: "Schedule a Call",
      href: "/schedule",
      icon: <ArrowRight className="w-5 h-5" />,
      style: "secondary",
    },
  ];

  const renderQuickLink = (resource: ResourceLink, index: number) => (
    <div
      key={index}
      className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 
        transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
        {resource.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        {resource.title}
      </h3>
      <p className="text-gray-600 mb-6">{resource.description}</p>
      <a
        href={resource.link}
        target={resource.link.startsWith("http") ? "_blank" : undefined}
        rel={
          resource.link.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 
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
      className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
        transition-all duration-300 hover:shadow-lg"
    >
      <div
        className="mb-4 p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 
        transition-all duration-300"
      >
        {category.icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">
        {category.title}
      </h3>
      <ul className="space-y-2">
        {category.items.map((item, idx) => (
          <li key={idx} className="flex items-center text-gray-600 gap-2">
            <ArrowRight className="w-4 h-4 text-blue-600" />
            <a
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSupportLink = (link: SupportLink) => (
    <a
      key={link.title}
      href={link.href}
      className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 
        inline-flex items-center justify-center gap-2 
        ${
          link.style === "primary"
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
    >
      {link.title}
      {link.icon}
    </a>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Resources Hub
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to successfully implement and utilize our
                technology solutions
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickLinks.map((resource, index) =>
                renderQuickLink(resource, index)
              )}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Resources Library
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) =>
                renderResourceCategory(category, index)
              )}
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Need Additional Help?</h2>
              <p className="text-xl mb-8 opacity-90">
                Our support team is here to help you succeed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {supportLinks.map(renderSupportLink)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
