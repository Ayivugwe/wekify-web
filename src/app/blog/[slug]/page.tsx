"use client";

import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Tag,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import Layout from "@/app/components/layout";
import { Button } from "@/app/components/Button";
import { FadeIn } from "@/app/components/FadeIn";
import { BlogPost } from "@/types/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Blog Post - Wekify",
  description: "Read our latest insights about language preservation platforms.",
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // This would typically come from your CMS or database
  const post: BlogPost = {
    id: "1",
    title: "Building Scalable Language Platforms",
    description: "Learn how we architect platforms that can handle multiple languages and communities while maintaining performance.",
    content: `
      <p>Language preservation is a critical mission in our increasingly connected world. As digital platforms become more sophisticated, we have an unprecedented opportunity to protect and promote linguistic diversity.</p>
      
      <h2>The Challenge of Scale</h2>
      <p>Building platforms that can handle multiple languages and communities while maintaining performance is no small feat. We need to consider:</p>
      <ul>
        <li>Data storage and retrieval efficiency</li>
        <li>User experience across different languages</li>
        <li>Community-specific customization</li>
        <li>Performance optimization</li>
      </ul>
      
      <h2>Our Approach</h2>
      <p>We've developed a robust architecture that addresses these challenges head-on. Our platform is built on:</p>
      <ul>
        <li>Scalable cloud infrastructure</li>
        <li>Efficient data caching</li>
        <li>Modular design patterns</li>
        <li>Community-driven development</li>
      </ul>
    `,
    image: "/blog/platform-architecture.png",
    category: "Platform Development",
    date: "March 15, 2024",
    author: "Sarah Chen",
    slug: "building-scalable-language-platforms",
    readingTime: "5 min read",
    tags: ["Platform Development", "Architecture", "Scalability"],
  };

  const shareUrl = `https://wekify.com/blog/${params.slug}`;

  return (
    <Layout>
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          </div>
          <FadeIn className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" size="sm" asChild className="mb-8">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {post.tags?.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    <Tag className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                {post.readingTime && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readingTime}
                  </div>
                )}
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </article>
    </Layout>
  );
} 