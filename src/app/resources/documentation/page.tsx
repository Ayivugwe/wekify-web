
import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Search, Book, Code, Terminal, Shield, Zap } from "lucide-react";
import Layout from "../../components/layout";

export default function DocumentationPage() {
  const docCategories = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Platform Guide",
      description: "Complete documentation for the Wekify platform",
      sections: [
        { title: "Architecture Overview", href: "/resources/documentation/architecture" },
        { title: "Core Components", href: "/resources/documentation/components" },
        { title: "Admin Console", href: "/resources/documentation/admin" },
        { title: "User Management", href: "/resources/documentation/users" },
      ]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Documentation",
      description: "Detailed technical specifications and integration guides",
      sections: [
        { title: "API Reference", href: "/resources/documentation/api" },
        { title: "SDK Documentation", href: "/resources/documentation/sdk" },
        { title: "Data Models", href: "/resources/documentation/data-models" },
        { title: "Webhook Integration", href: "/resources/documentation/webhooks" },
      ]
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Developer Resources",
      description: "Resources specifically for developers integrating with Wekify",
      sections: [
        { title: "Authentication", href: "/resources/documentation/authentication" },
        { title: "Code Samples", href: "/resources/documentation/code-samples" },
        { title: "Error Handling", href: "/resources/documentation/errors" },
        { title: "Deployment Guide", href: "/resources/documentation/deployment" },
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Information about security features and compliance standards",
      sections: [
        { title: "Security Overview", href: "/resources/documentation/security" },
        { title: "Data Protection", href: "/resources/documentation/data-protection" },
        { title: "Access Control", href: "/resources/documentation/access-control" },
        { title: "Compliance", href: "/resources/documentation/compliance" },
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Guides for optimizing performance and scalability",
      sections: [
        { title: "Performance Best Practices", href: "/resources/documentation/performance" },
        { title: "Caching Strategies", href: "/resources/documentation/caching" },
        { title: "Scaling Guide", href: "/resources/documentation/scaling" },
        { title: "Monitoring & Analytics", href: "/resources/documentation/monitoring" },
      ]
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Comprehensive guides and technical documentation for the Wekify platform
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
                  placeholder="Search documentation..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
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
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.sections.map((section, idx) => (
                      <li key={idx}>
                        <Link
                          href={section.href}
                          className="flex items-center text-gray-700 hover:text-primary transition-colors py-1"
                        >
                          <ArrowRight className="w-4 h-4 mr-2 text-gray-400" />
                          {section.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Updated Docs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Recently Updated</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "API Authentication",
                  description: "Updated security protocols for API authentication",
                  date: "Updated 3 days ago",
                  link: "/resources/documentation/authentication"
                },
                {
                  title: "Mobile SDK",
                  description: "New features in the iOS and Android SDK",
                  date: "Updated 1 week ago",
                  link: "/resources/documentation/sdk"
                },
                {
                  title: "Data Export",
                  description: "Improved data export functionality and formats",
                  date: "Updated 2 weeks ago",
                  link: "/resources/documentation/data-export"
                },
              ].map((doc, index) => (
                <Link 
                  key={index} 
                  href={doc.link}
                  className="group bg-white rounded-lg p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-gray-400 mr-3 group-hover:text-primary transition-colors" />
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{doc.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
                  <p className="text-gray-400 text-xs">{doc.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Formats */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Available Documentation Formats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Online Documentation",
                  description: "Browse our comprehensive online documentation with full search capabilities",
                  link: "#",
                  linkText: "Browse Online"
                },
                {
                  title: "Downloadable PDF",
                  description: "Download complete documentation in PDF format for offline reference",
                  link: "#",
                  linkText: "Download PDF"
                },
                {
                  title: "GitHub Repository",
                  description: "Access our documentation repository on GitHub for contribution and version tracking",
                  link: "#",
                  linkText: "View on GitHub"
                },
              ].map((format, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{format.title}</h3>
                  <p className="text-gray-600 mb-4">{format.description}</p>
                  <Link 
                    href={format.link}
                    className="text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    {format.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Feedback */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Help Us Improve</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Our documentation is constantly evolving. If you find any issues or have suggestions for improvement, we'd love to hear from you.
            </p>
            <Link 
              href="/feedback" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Provide Feedback
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
