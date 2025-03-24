"use client";

import React, { useState, useMemo } from 'react';
import { Code, BookOpen, Shield, Globe, Users, MessageSquare } from 'lucide-react';
import Layout from '../components/layout';
import { FadeIn } from '../components/FadeIn';
import { Button } from '../components/Button';
import Link from 'next/link';

const faqCategories = [
  {
    title: "About Wekify",
    icon: <Globe className="h-5 w-5" />,
    questions: [
      {
        title: "Why does Wekify focus on Kifuliiru?",
        content: "Our focus on Kifuliiru stems from our founder's connection to the Bafuliiru community and the urgent need to preserve this language in the digital age. We're creating a model that can be adapted for other indigenous languages in the future."
      },
      {
        title: "How are you working with the Bafuliiru community?",
        content: "We maintain close partnerships with the Bafuliiru community, ensuring their active participation in our platform's development. This includes community input on language documentation, learning materials, and cultural representation."
      }
    ]
  },
  {
    title: "Our Platform Features",
    icon: <Code className="h-5 w-5" />,
    questions: [
      {
        title: "What features does your platform offer?",
        content: "Our platform includes language learning tools, digital dictionaries, cultural archives, and community collaboration features. We focus on making language preservation accessible and engaging."
      },
      {
        title: "How do you ensure content quality?",
        content: "We work closely with native speakers and language experts to verify and validate all content. Our review process ensures accuracy and cultural authenticity."
      }
    ]
  },
  {
    title: "Community & Support",
    icon: <Users className="h-5 w-5" />,
    questions: [
      {
        title: "How can I contribute to the platform?",
        content: "Community members can contribute by submitting language content, participating in review processes, and providing feedback. Contact us to learn more about contribution opportunities."
      },
      {
        title: "Is the platform accessible to everyone?",
        content: "Yes, our platform is designed to be accessible to all members of the Bafuliiru community. We offer various ways to access content and participate in language preservation efforts."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | undefined>();

  const filteredQuestions = useMemo(() => {
    if (!searchQuery) return faqCategories;

    const query = searchQuery.toLowerCase();
    return faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.title.toLowerCase().includes(query) || 
        q.content.toLowerCase().includes(query)
      )
    })).filter(category => category.questions.length > 0);
  }, [searchQuery]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Wekify LLC and our language preservation platform
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="space-y-6">
              {filteredQuestions.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-50">
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {category.questions.map((question, qIndex) => (
                      <div key={qIndex} className="border-b border-gray-100 pb-4 last:border-0">
                        <h3 className="font-medium mb-2">{question.title}</h3>
                        <p className="text-gray-600">{question.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}