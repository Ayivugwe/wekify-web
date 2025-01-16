"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AboutCompany() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            About Wekify
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Building bridges between languages and technology to preserve
            cultural heritage
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                Wekify is dedicated to preserving and promoting linguistic
                diversity through innovative digital solutions. We believe that
                every language deserves a place in the digital world, and
                we&apos;re starting with Kifuliiru.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where every language, no matter how small,
                has access to modern digital tools and resources. Our goal is to
                bridge the digital divide and ensure cultural preservation
                through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            The Kifuliiru Project
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Our flagship initiative focuses on Kifuliiru, a language spoken in
              Congo-Kinshasa. This project represents our commitment to
              preserving indigenous languages through digital innovation.
            </p>
            <p>
              Through comprehensive digital dictionaries, interactive learning
              tools, and community engagement platforms, we&apos;re creating a
              sustainable model for language preservation that can be replicated
              for other languages facing similar challenges.
            </p>
            <p>
              The Kifuliiru project is more than just a digital dictionary -
              it&apos;s a bridge between generations, connecting elders with
              youth, and tradition with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re always looking for passionate individuals and
            organizations to join our mission. Whether you&apos;re a developer,
            linguist, or simply passionate about language preservation,
            there&apos;s a place for you at Wekify.
          </p>
          <a
            href="https://ayivugwekabemba.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
