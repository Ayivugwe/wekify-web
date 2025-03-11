
import React from "react";
import { Book, Video, Mic, Users, BookOpen, Database } from "lucide-react";
import Layout from "@/app/components/layout";
import Link from "next/link";

export default function LanguagePreservationPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Language Preservation Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Comprehensive digital tools for documenting, preserving, and revitalizing 
              endangered languages and cultural heritage.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Book className="w-8 h-8 text-blue-600" />,
                  title: "Digital Dictionaries",
                  description: "Create comprehensive digital dictionaries with audio pronunciation, images, and cultural context."
                },
                {
                  icon: <Video className="w-8 h-8 text-blue-600" />,
                  title: "Media Archive",
                  description: "Store and organize audio and video recordings of native speakers, stories, and cultural practices."
                },
                {
                  icon: <Mic className="w-8 h-8 text-blue-600" />,
                  title: "Pronunciation Tools",
                  description: "Interactive tools for learning and practicing pronunciation with feedback systems."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Community Engagement",
                  description: "Platforms for community members to contribute content and collaborate on preservation efforts."
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                  title: "Learning Resources",
                  description: "Structured lessons, exercises, and materials for teaching and learning endangered languages."
                },
                {
                  icon: <Database className="w-8 h-8 text-blue-600" />,
                  title: "Cultural Knowledge Base",
                  description: "Document and organize cultural knowledge, traditions, and practices alongside language materials."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white mt-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Language Preservation Project Today
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Our team of experts will work with you to develop a customized solution 
              for your language preservation needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
