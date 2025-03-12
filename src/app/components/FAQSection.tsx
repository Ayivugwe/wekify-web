"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  //rest of the file remains unchanged
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our language preservation platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-t-xl bg-white px-6 py-5 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary border-b border-gray-100">
                      <span className="pr-6">{faq.question}</span>
                      <ChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-primary flex-shrink-0`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-5 text-gray-600">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/faq" className="inline-flex items-center text-primary font-medium hover:underline">
              View all FAQs <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;