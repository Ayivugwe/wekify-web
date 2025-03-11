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
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Video,
  Book,
  ExternalLink,
  FileCode,
  Users,
  Search,
  Download,
  MessageSquare
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
      link: "/resources/documentation",
      linkText: "View Documentation",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Step-by-step guides and implementation walkthroughs",
      link: "/resources/tutorials",
      linkText: "Watch Tutorials",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Forums",
      description: "Connect with other developers and share knowledge",
      link: "/resources/forum",
      linkText: "Join Discussion",
    },
  ];

  const resourceCategories: ResourceCategory[] = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Getting Started Guides",
      items: [
        { title: "Platform Overview", href: "/resources/getting-started" },
        { title: "Quick Start Tutorial", href: "/resources/getting-started/quickstart" },
        { title: "Basic Concepts", href: "/resources/getting-started/concepts" },
        { title: "First Implementation", href: "/resources/getting-started/implementation" },
      ],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Implementation Guides",
      items: [
        { title: "Architecture Overview", href: "/resources/documentation/architecture" },
        { title: "Best Practices", href: "/resources/documentation/best-practices" },
        { title: "Security Guidelines", href: "/resources/documentation/security" },
        { title: "Performance Tips", href: "/resources/documentation/performance" },
      ],
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Case Studies",
      items: [
        { title: "Success Stories", href: "/case-studies" },
        { title: "Implementation Examples", href: "/resources/examples" },
        { title: "Customer Journey", href: "/resources/customer-journey" },
        { title: "Impact Analysis", href: "/resources/impact" },
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

  const renderResourceCategory = (category: ResourceCategory, index: number) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg mr-3">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold">{category.title}</h3>
      </div>
      <ul className="space-y-3">
        {category.items.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSupportLink = (link: SupportLink, index: number) => (
    <Link
      key={index}
      href={link.href}
      className={`inline-flex items-center px-6 py-3 rounded-lg font-medium ${
        link.style === "primary"
          ? "bg-white text-blue-600 hover:bg-blue-50"
          : "bg-blue-700 text-white hover:bg-blue-800"
      } transition-colors`}
    >
      {link.title}
      {link.icon}
    </Link>
  );

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Everything you need to successfully implement and use Wekify's language preservation technology.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Search documentation, guides, and more..."
                />
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {quickLinks.map((link, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 p-3 bg-blue-50 rounded-xl inline-block">
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Link 
                    href={link.link}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    {link.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
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

        {/* Downloads Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Popular Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Platform White Paper",
                  description: "Technical overview of the Wekify platform architecture",
                  icon: <FileText className="w-6 h-6" />,
                  link: "#"
                },
                {
                  title: "SDK Package",
                  description: "Development toolkit for custom integrations",
                  icon: <Download className="w-6 h-6" />,
                  link: "#"
                },
                {
                  title: "Integration Samples",
                  description: "Code samples for common integration scenarios",
                  icon: <FileCode className="w-6 h-6" />,
                  link: "#"
                },
              ].map((download, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      {download.icon}
                    </div>
                    <h3 className="font-semibold">{download.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{download.description}</p>
                  <Link
                    href={download.link}
                    className="inline-flex items-center text-primary text-sm font-medium hover:text-primary-dark transition-colors"
                  >
                    Download <Download className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community & Support */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
                <p className="text-xl mb-8 opacity-90">
                  Connect with other developers and language preservation experts in our global community.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Developer Forum",
                      description: "Ask questions and share knowledge",
                      icon: <MessageSquare className="w-6 h-6" />,
                      link: "/resources/forum"
                    },
                    {
                      title: "GitHub Repository",
                      description: "Explore our open source projects",
                      icon: <ExternalLink className="w-6 h-6" />,
                      link: "https://github.com"
                    },
                    {
                      title: "Monthly Webinars",
                      description: "Learn from expert presentations",
                      icon: <Video className="w-6 h-6" />,
                      link: "/resources/webinars"
                    },
                  ].map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.link}
                      className="flex items-start group"
                    >
                      <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Need Additional Help?</h3>
                  <p className="mb-8 opacity-90">
                    Our support team is here to help you succeed with your language preservation projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {supportLinks.map(renderSupportLink)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ResourcesPage;
