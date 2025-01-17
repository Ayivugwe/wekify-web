import React from "react";
import Head from "next/head";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Github,
  Terminal,
  ExternalLink,
} from "lucide-react";
import Layout from "../components/layout";

export default function BlogPage() {
  return (
    <Layout>
      <>
        <Head>
          <title>Tech Insights & Articles - Wekify Blog</title>
          <meta
            name="description"
            content="Explore technical insights, implementation stories, and digital transformation strategies from the Wekify team."
          />
          <meta
            name="keywords"
            content="tech blog, digital transformation, software development, technology insights"
          />
          <meta
            property="og:title"
            content="Tech Insights & Articles - Wekify Blog"
          />
          <meta
            property="og:description"
            content="Deep dives into technology, implementation stories, and digital transformation strategies."
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Technical Insights & Stories
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Explore our latest thoughts on technology, implementation
                  strategies, and digital transformation
                </p>
                <a
                  href="https://blog.wekify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300"
                >
                  Visit Our Full Blog
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Terminal className="w-6 h-6" />,
                    category: "Technical Deep Dive",
                    title: "Building Scalable Language Platforms",
                    description:
                      "Exploring the architecture behind our multilingual digital solutions",
                    readTime: "12 min read",
                  },
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    category: "Case Study",
                    title: "Digital Transformation Journey",
                    description:
                      "How we built a comprehensive digital ecosystem for language preservation",
                    readTime: "8 min read",
                  },
                  {
                    icon: <Github className="w-6 h-6" />,
                    category: "Development",
                    title: "Modern Web Development Practices",
                    description:
                      "Best practices for building responsive, accessible web applications",
                    readTime: "10 min read",
                  },
                ].map((article, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-2 text-blue-600 mb-4">
                      {article.icon}
                      <span className="text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {article.readTime}
                      </span>
                      <button
                        className="text-blue-600 font-medium group-hover:text-blue-700 
                      transition-colors flex items-center gap-2"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Explore Topics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Terminal className="w-8 h-8" />,
                    title: "Technical Guides",
                    description:
                      "Implementation tutorials and technical deep dives",
                  },
                  {
                    icon: <FileText className="w-8 h-8" />,
                    title: "Case Studies",
                    description:
                      "Real-world implementation stories and lessons learned",
                  },
                  {
                    icon: <BookOpen className="w-8 h-8" />,
                    title: "Best Practices",
                    description:
                      "Industry standards and development best practices",
                  },
                  {
                    icon: <Github className="w-8 h-8" />,
                    title: "Development",
                    description: "Code examples and development insights",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 
                    transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <div
                      className="mb-4 p-2 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 
                    transition-all duration-300"
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
                <p className="text-xl mb-8 opacity-90">
                  Get the latest technical insights and updates delivered to
                  your inbox
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="px-6 py-4 bg-white text-blue-600 rounded-xl font-medium 
                  hover:bg-blue-50 transition-all duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </>
    </Layout>
  );
}
