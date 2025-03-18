"use client";

import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  Terminal,
  ExternalLink,
  Globe,
  Users,
  Code,
  Sparkles
} from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Platform Insights - Wekify Blog",
  description: "Explore insights about language preservation platforms, implementation stories, and digital transformation strategies.",
  keywords: "platform blog, language technology, digital preservation, implementation stories",
};

const featuredPosts = [
  {
    title: "Building Scalable Language Platforms",
    description: "Learn how we architect platforms that can handle multiple languages and communities while maintaining performance.",
    image: "/blog/platform-architecture.png",
    category: "Platform Development",
    date: "March 15, 2024",
    author: "Sarah Chen",
    slug: "building-scalable-language-platforms"
  },
  {
    title: "Community-Driven Platform Design",
    description: "Discover our approach to designing platforms that truly serve community needs and cultural contexts.",
    image: "/blog/community-design.png",
    category: "Design",
    date: "March 10, 2024",
    author: "Michael Okonjo",
    slug: "community-driven-platform-design"
  },
  {
    title: "AI in Language Preservation",
    description: "Exploring our vision for future AI integration in language preservation platforms while maintaining data sovereignty.",
    image: "/blog/ai-preservation.png",
    category: "Technology",
    date: "March 5, 2024",
    author: "Dr. Lisa Wong",
    slug: "ai-in-language-preservation"
  }
];

const categories = [
  {
    name: "Platform Development",
    icon: Code,
    count: 12
  },
  {
    name: "Community Engagement",
    icon: Users,
    count: 8
  },
  {
    name: "Technology",
    icon: Terminal,
    count: 15
  },
  {
    name: "Implementation",
    icon: FileText,
    count: 10
  }
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
          <FadeIn className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Platform Insights
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Building Better Language Platforms
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Insights and stories about building powerful digital platforms for language preservation.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Featured Posts */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <FadeIn key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-medium text-primary-600">
                              {post.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-500">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">
                              {post.author}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <FadeIn key={category.name}>
                    <Link
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group block p-6 bg-white rounded-xl border border-gray-100 hover:border-primary-100 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-primary-50 w-fit mb-4">
                        <category.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">
                        {category.count} articles
                      </p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-primary-900 text-white">
          <FadeIn className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Get the latest insights about language preservation platforms delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          </FadeIn>
        </section>
      </div>
    </Layout>
  );
}
