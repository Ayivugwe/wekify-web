"use client";

import React from "react";
import Image from "next/image";
import {
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Code,
  Database,
  Languages,
  BookOpen,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Passionate individuals dedicated to preserving linguistic diversity
            through technology
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Founder
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/api/placeholder/150/150"
                  alt="Ayivugwe Kabemba"
                  width={150}
                  height={150}
                  className="rounded-full w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ayivugwe Kabemba
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                Founder & Lead Developer
              </p>
              <p className="text-gray-600 mb-6">
                Passionate about leveraging technology to preserve indigenous
                languages and cultures. Leading the development of digital
                solutions for language preservation, starting with Kifuliiru.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We&apos;re looking for passionate individuals to join our mission of
            preserving indigenous languages through technology. If you&apos;re
            excited about making a difference in linguistic preservation,
            we&apos;d love to hear from you.
          </p>

          {/* Open Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Software Developers",
                description:
                  "Help build innovative language preservation tools",
              },
              {
                icon: <Languages className="w-6 h-6" />,
                title: "Linguists",
                description:
                  "Contribute to language documentation and structure",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Data Scientists",
                description: "Analyze and structure language data",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Content Writers",
                description: "Create educational and documentation materials",
              },
            ].map((position, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 p-2 bg-blue-50 rounded-lg w-fit mx-auto group-hover:bg-blue-100 transition-all duration-300 group-hover:scale-110">
                  {position.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{position.title}</h3>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-gray-600 mb-6">
              If you&apos;re passionate about our mission and want to
              contribute, we&apos;d love to hear from you. Visit our contact
              page to start the conversation.
            </p>
            <a
              href="https://ayivugwekabemba.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 border-2 border-blue-600 rounded-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
