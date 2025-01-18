// File location: app/resources/forum/page.tsx

import React from "react";
import { ArrowRight, MessageSquare, Users, Heart, Star } from "lucide-react";
import Layout from "@/app/components/layout";

export default function CommunityForumPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Community Forum
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with other users, share knowledge, and get help
              </p>
            </div>
          </div>
        </section>

        {/* Featured Discussions */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Featured Discussions</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Best Practices for Dictionary Organization",
                  replies: 24,
                  likes: 45,
                  category: "Tips & Tricks",
                },
                {
                  title: "Integration with External Systems Guide",
                  replies: 18,
                  likes: 32,
                  category: "Tutorials",
                },
                {
                  title: "Community Language Preservation Projects",
                  replies: 56,
                  likes: 89,
                  category: "Projects",
                },
              ].map((discussion, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm text-blue-600 font-medium">
                        {discussion.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-1 mb-2 text-gray-900">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-500">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "General Discussion",
                  count: "1.2k topics",
                },
                {
                  icon: <Star className="w-6 h-6" />,
                  title: "Tips & Tricks",
                  count: "856 topics",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Community Projects",
                  count: "432 topics",
                },
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Success Stories",
                  count: "324 topics",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a growing community of language preservation
              enthusiasts
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
