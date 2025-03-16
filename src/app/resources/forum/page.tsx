
import React from "react";
import Link from "next/link";
import { MessageSquare, Users, Clock, Search, ArrowUp, Tag, Eye, MessageCircle, Heart, PlusCircle } from "lucide-react";
import Layout from "../../components/layout";

export default function ForumPage() {
  // Sample forum category data
  const categories = [
    {
      name: "Platform Announcements",
      description: "Official announcements about platform updates and features",
      topics: 24,
      posts: 87,
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      name: "General Discussion",
      description: "General discussion about language preservation and technology",
      topics: 156,
      posts: 1243,
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Technical Support",
      description: "Get help with technical issues and implementation questions",
      topics: 354,
      posts: 2876,
      icon: <Tag className="w-6 h-6" />
    },
    {
      name: "API & Integrations",
      description: "Discussions about API usage and third-party integrations",
      topics: 97,
      posts: 762,
      icon: <Tag className="w-6 h-6" />
    },
    {
      name: "Community Showcase",
      description: "Share your language preservation projects and implementations",
      topics: 83,
      posts: 541,
      icon: <Heart className="w-6 h-6" />
    },
  ];

  // Sample recent topics data
  const recentTopics = [
    {
      title: "How to implement custom language keyboards?",
      author: "maria_santos",
      replies: 12,
      views: 234,
      lastActivity: "2 hours ago",
      category: "Technical Support",
      isHot: true
    },
    {
      title: "New morphological analysis feature released!",
      author: "wekify_team",
      replies: 8,
      views: 176,
      lastActivity: "5 hours ago",
      category: "Platform Announcements",
      isOfficial: true
    },
    {
      title: "Best practices for bilingual dictionary structure",
      author: "linguist42",
      replies: 21,
      views: 309,
      lastActivity: "Yesterday",
      category: "General Discussion" 
    },
    {
      title: "Wekify API webhook documentation error",
      author: "dev_james",
      replies: 4,
      views: 98,
      lastActivity: "2 days ago",
      category: "API & Integrations",
      isSolved: true
    },
    {
      title: "Showcasing our Nahuatl language preservation project",
      author: "maya_rodriguez",
      replies: 16,
      views: 287,
      lastActivity: "3 days ago",
      category: "Community Showcase"
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Community Forum
                </h1>
                <p className="text-xl text-gray-600">
                  Connect, learn, and collaborate with the Wekify community
                </p>
              </div>
              <div className="mt-6 md:mt-0 space-x-4">
                <Link 
                  href="/resources/forum/new-topic" 
                  className="btn-primary inline-flex items-center"
                >
                  <PlusCircle className="w-5 h-5 mr-2" />
                  New Topic
                </Link>
                <Link 
                  href="/login" 
                  className="btn-secondary"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mt-8 max-w-2xl">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Search topics, posts, and users..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forum Statistics */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-wrap justify-around gap-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Topics</p>
                <p className="text-2xl font-bold text-primary">752</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Posts</p>
                <p className="text-2xl font-bold text-primary">5,489</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Members</p>
                <p className="text-2xl font-bold text-primary">3,217</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-1">Latest Member</p>
                <p className="text-primary font-medium">linguist_sara</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <Link 
                  key={index}
                  href={`/resources/forum/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-50 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap justify-between items-start">
                        <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                        <div className="flex space-x-6 text-sm text-gray-500">
                          <span className="flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {category.topics} topics
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {category.posts} posts
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Topics Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recent Discussions</h2>
              <Link 
                href="/resources/forum/recent" 
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Replies</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Views</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentTopics.map((topic, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <Link 
                            href={`/resources/forum/topic/${index}`}
                            className="font-medium text-gray-900 hover:text-primary transition-colors"
                          >
                            {topic.title}
                          </Link>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-gray-500">by {topic.author}</span>
                            {topic.isHot && (
                              <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs rounded-full">Hot</span>
                            )}
                            {topic.isOfficial && (
                              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">Official</span>
                            )}
                            {topic.isSolved && (
                              <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Solved</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <span className="px-2 py-1 bg-blue-50 text-primary-dark text-xs rounded-full">
                          {topic.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center hidden sm:table-cell">
                        <span className="text-gray-600">{topic.replies}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center hidden lg:table-cell">
                        <span className="text-gray-600">{topic.views}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="text-xs text-gray-500 flex items-center justify-end">
                          <Clock className="w-3 h-3 mr-1" />
                          {topic.lastActivity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Community Members */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Active Community Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "linguist_maria", posts: 142, joined: "2 years ago" },
                { name: "dev_alexander", posts: 98, joined: "1 year ago" },
                { name: "translator_james", posts: 86, joined: "8 months ago" },
                { name: "wekify_team", posts: 76, joined: "3 years ago", isStaff: true },
                { name: "language_expert", posts: 63, joined: "6 months ago" },
                { name: "community_sara", posts: 57, joined: "1 year ago" },
                { name: "code_master", posts: 52, joined: "10 months ago" },
                { name: "preservation_pro", posts: 49, joined: "5 months ago" },
              ].map((member, index) => (
                <Link 
                  key={index}
                  href={`/resources/forum/user/${member.name}`}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-primary">{member.name[0].toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {member.posts} posts
                      </div>
                    </div>
                    {member.isStaff && (
                      <span className="ml-auto px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">Staff</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="/resources/forum/members" 
                className="text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View All Members
              </Link>
            </div>
          </div>
        </section>

        {/* Forum Guidelines */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-gray-900">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Community Guidelines</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Our forum is a place for respectful, constructive discussions. Please review our community guidelines to ensure a positive experience for all members.
            </p>
            <Link 
              href="/resources/forum/guidelines" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Read Guidelines
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
