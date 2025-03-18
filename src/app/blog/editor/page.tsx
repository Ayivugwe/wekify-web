"use client";

import { Metadata } from "next";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Save,
  Image as ImageIcon,
  Link as LinkIcon,
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  Code,
  X,
} from "lucide-react";
import Layout from "@/app/components/layout";
import { Button } from "@/app/components/Button";
import { FadeIn } from "@/app/components/FadeIn";
import dynamic from "next/dynamic";

// Dynamically import the rich text editor to avoid SSR issues
const Editor = dynamic(() => import("@/app/components/Editor"), { ssr: false });

export const metadata: Metadata = {
  title: "Create Blog Post - Wekify",
  description: "Create and publish a new blog post about language preservation platforms.",
};

export default function BlogEditorPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [content, setContent] = useState("");

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSave = async () => {
    // Here you would typically:
    // 1. Validate the form
    // 2. Upload any images
    // 3. Save to your database/CMS
    // 4. Redirect to the published post
    
    // For now, we'll just redirect to the blog page
    router.push("/blog");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Create New Blog Post
                  </h1>
                  <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save & Publish
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your blog post title"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      rows={3}
                      placeholder="A brief description of your blog post"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="Platform Development">Platform Development</option>
                      <option value="Community Engagement">Community Engagement</option>
                      <option value="Technology">Technology</option>
                      <option value="Implementation">Implementation</option>
                    </select>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800"
                        >
                          {tag}
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-2 text-primary-600 hover:text-primary-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={handleAddTag}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Add tags (press Enter)"
                    />
                  </div>

                  {/* Content Editor */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content
                    </label>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="border-b border-gray-200 p-2 flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Bold className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Italic className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Heading1 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Heading2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <List className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ListOrdered className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Quote className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Code className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ImageIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <LinkIcon className="w-4 h-4" />
                        </Button>
                      </div>
                      <Editor
                        value={content}
                        onChange={setContent}
                        className="min-h-[400px] p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 