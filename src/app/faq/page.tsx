
'use client';

import { useState, useMemo } from 'react';
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Globe, Code, Users, Book, Shield, Heart, MessageCircle, ArrowRight } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/Button";
import Link from "next/link";

import { faqData, faqCategories } from "@/app/lib/data/faqData";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const questionsPerPage = 10;

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredFAQs.length / questionsPerPage);
  const currentFAQs = filteredFAQs.slice(
    (currentPage - 1) * questionsPerPage,
    currentPage * questionsPerPage
  );
    {
      title: "Getting Started",
      icon: <Globe className="h-5 w-5" />,
      questions: [
        {
          title: "What is Wekify?",
          content: "Wekify is a language technology company focused on preserving and revitalizing indigenous languages through innovative digital solutions. While we're currently working on the Kifuliiru language as our starting point, our vision extends to supporting many other indigenous languages in the future."
        },
        {
          title: "Why did you choose to start with the Kifuliiru language?",
          content: "We chose Kifuliiru as our initial focus due to our strong connections with the Bafuliiru community and our deep understanding of the language's needs. This allows us to develop and refine our approach effectively before expanding to other languages."
        },
        {
          title: "How can I start using Wekify's language preservation tools?",
          content: "You can begin by exploring our platform, creating an account, and accessing our basic language learning resources. We offer various entry points depending on your needs - whether you're a language learner, teacher, or community leader."
        }
      ]
    },
    {
      title: "Technical Features",
      icon: <Code className="h-5 w-5" />,
      questions: [
        {
          title: "What technological solutions does Wekify currently offer for language preservation?",
          content: "Our platform includes advanced digital dictionaries, interactive learning tools, AI-powered translation assistance, and community collaboration features. We're constantly developing new tools and technologies to enhance language preservation efforts."
        },
        {
          title: "How does Wekify ensure the accuracy of its language content?",
          content: "We employ a rigorous verification process involving native speakers, linguistic experts, and community elders. Our technology is designed to complement human expertise, not replace it."
        },
        {
          title: "What makes Wekify's approach to language technology unique?",
          content: "Our approach combines cutting-edge technology with deep cultural understanding. We develop solutions that are not just technically sophisticated but also culturally appropriate and community-centered."
        }
      ]
    },
    {
      title: "Community & Collaboration",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          title: "How can communities get involved in Wekify's language preservation efforts?",
          content: "Communities can participate through various channels: contributing language content, becoming community ambassadors, participating in our documentation projects, or helping test new features. We believe in active community participation at every level."
        },
        {
          title: "What support does Wekify provide to language communities?",
          content: "We offer technical support, training programs, community engagement tools, and customized solutions based on each community's specific needs. Our team works closely with communities to ensure our tools serve their language preservation goals effectively."
        }
      ]
    },
    {
      title: "Future Plans",
      icon: <Book className="h-5 w-5" />,
      questions: [
        {
          title: "What are Wekify's plans for expanding beyond the Kifuliiru language?",
          content: "While we're currently focused on perfecting our approach with Kifuliiru, we have extensive plans for supporting other indigenous languages. Our roadmap includes scaling our technology to accommodate different language families and linguistic structures. Note that not all our plans are publicly visible as some initiatives are still in development or confidential."
        },
        {
          title: "How does Wekify plan to ensure long-term sustainability of its language preservation efforts?",
          content: "We're developing sustainable models that combine community ownership, technological innovation, and strategic partnerships. Our approach includes building capacity within communities and creating self-sustaining preservation ecosystems."
        }
      ]
    }
    // Additional categories and questions continue...
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

          <div className="space-y-6 mb-16">
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
            <div className="flex justify-center items-center gap-2 mb-16">
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

          {/* CTA Section */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you with any questions about our language preservation platform.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
