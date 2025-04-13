"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { ContactForm } from "@/app/components/ContactForm";
import { Toaster } from "sonner";

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <FadeIn className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something <span className="text-primary-600">Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Ready to start your language preservation project? We're here to help you create a powerful digital platform for your community.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn className="bg-primary-50/50 rounded-2xl shadow-sm p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Start Your Project
              </h2>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
      <Toaster position="top-center" />
    </Layout>
  );
}
