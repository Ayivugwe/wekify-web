
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQDisclosureProps {
  faq: FAQ;
}

// Custom Disclosure component to replace @headlessui/react
const FAQDisclosure: React.FC<FAQDisclosureProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <div className="text-base text-gray-600">
            {typeof faq.answer === "string" ? (
              <p>{faq.answer}</p>
            ) : (
              faq.answer
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <FAQDisclosure key={index} faq={faq} />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/contact" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Have more questions? Contact us
            <ChevronDown className="ml-2 h-4 w-4 rotate-270" />
          </Link>
        </div>
      </div>
    </section>
  );
}
