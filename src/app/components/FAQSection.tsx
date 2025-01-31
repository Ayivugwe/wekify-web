"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQCategory } from "../lib/data/types";

interface FAQSectionProps {
  faqs: FAQCategory[];
  contactLink?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  contactLink = "https://ayivugwekabemba.com/contact",
}) => {
  const [openCategory, setOpenCategory] = useState(faqs[0]?.category || "");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleCategoryChange = (category: string) => {
    setOpenCategory(category);
    setOpenIndex(null);
  };

  const handleQuestionToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => handleCategoryChange(category.category)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                openCategory === category.category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs
            .find((cat) => cat.category === openCategory)
            ?.questions.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors duration-300"
              >
                <button
                  onClick={() => handleQuestionToggle(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
