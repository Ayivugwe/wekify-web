
'use client';

import { useState, useMemo } from 'react';
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Globe, Code, Users, Book, Shield, Heart } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/Button";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 5;

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
        },
        {
          title: "What is your long-term vision?",
          content: "Our vision is to create a sustainable model for language preservation that can be adapted for other indigenous languages worldwide."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: <Code className="h-5 w-5" />,
      questions: [
        {
          title: "What features does your platform offer?",
          content: "Our platform includes language learning tools, digital dictionaries, cultural archives, and community collaboration features."
        },
        {
          title: "How do you ensure content quality?",
          content: "We work closely with native speakers and language experts to verify and validate all content."
        },
        {
          title: "What technologies do you use?",
          content: "We use modern web technologies and AI to create engaging and effective language preservation tools."
        }
      ]
    },
    {
      title: "Community & Support",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          title: "How can I get involved?",
          content: "There are many ways to contribute, from content creation to community leadership."
        },
        {
          title: "Do you offer support for users?",
          content: "Yes, we provide comprehensive support through our community forums and direct assistance."
        },
        {
          title: "Is there a mobile app?",
          content: "We're currently developing mobile applications to make our platform more accessible."
        }
      ]
    },
    {
      title: "Educational Resources",
      icon: <Book className="h-5 w-5" />,
      questions: [
        {
          title: "What learning materials are available?",
          content: "We offer structured lessons, interactive exercises, and cultural content."
        },
        {
          title: "Can teachers use your platform?",
          content: "Yes, we provide special tools and resources for educators."
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          title: "How do you protect user data?",
          content: "We implement industry-standard security measures and strict privacy policies."
        },
        {
          title: "Who owns the content?",
          content: "The community retains ownership of all cultural and linguistic content."
        }
      ]
    }
  ];

  const flattenedQuestions = useMemo(() => {
    return faqCategories.flatMap(category => 
      category.questions.map(q => ({
        ...q,
        category: category.title,
        icon: category.icon
      }))
    );
  }, []);

  const filteredQuestions = useMemo(() => {
    if (!searchQuery) return flattenedQuestions;
    
    const query = searchQuery.toLowerCase();
    return flattenedQuestions.filter(q => 
      q.title.toLowerCase().includes(query) || 
      q.content.toLowerCase().includes(query) ||
      q.category.toLowerCase().includes(query)
    );
  }, [searchQuery, flattenedQuestions]);

  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Wekify and our language preservation platform
            </p>
          </FadeIn>

          <div className="mb-8">
            <Input
              type="search"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6">
            {currentQuestions.map((question, index) => (
              <FadeIn key={index}>
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary-50">
                      {question.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{question.title}</h3>
                      <p className="text-sm text-gray-500">{question.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{question.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
