"use client";

import { useState, useMemo } from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { faqData, FAQ } from "@/app/lib/data/faqData";
import {MessageCircle, ArrowRight, ArrowLeft, ChevronDown} from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());
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
            {currentFAQs.map((faq) => (
              <FadeIn key={faq.id}>
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div 
                    className="cursor-pointer" 
                    onClick={() => {
                      const newExpandedState = new Set(expandedFaqs);
                      if (newExpandedState.has(faq.id)) {
                        newExpandedState.delete(faq.id);
                      } else {
                        newExpandedState.add(faq.id);
                      }
                      setExpandedFaqs(newExpandedState);
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary-50">
                        {faq.icon && <faq.icon className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{faq.question}</h3>
                        <p className="text-sm text-gray-500">{faq.category}</p>
                      </div>
                      <div className={`transform transition-transform duration-200 ${expandedFaqs.has(faq.id) ? 'rotate-180' : ''}`}>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-200 ease-in-out ${expandedFaqs.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-600 mb-4">{faq.answer}</p>
                    {faq.relatedLink && (
                      <Link 
                        href={faq.relatedLink} 
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors mt-2 mb-4"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex flex-col items-center gap-4 mb-16">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 flex items-center gap-2 hover:bg-primary-50"
                >
                  <ArrowLeft className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`mx-1 min-w-[2.5rem] h-10 rounded-lg transition-colors ${
                        currentPage === pageNum
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-primary-50 text-gray-700"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 flex items-center gap-2 hover:bg-primary-50"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-gray-500">
                Showing page {currentPage} of {totalPages}
              </div>
            </div>
          )}
          {/* CTA Section */}
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you with any questions about our language
              preservation platform.
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