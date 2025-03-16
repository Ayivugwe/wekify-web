import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target, Globe, Users, Zap, BookOpen } from "lucide-react";
import Layout from "@/app/components/layout";

export default function VisionPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We envision a world where every language, no matter how small,
              has the digital tools and resources needed to thrive in the modern era.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/ayivugwe.png"
                  alt="Wekify Vision"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <div className="mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Vision Statement
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We envision a world where every language, no matter how small,
                  has the digital tools and resources needed to thrive in the
                  modern era. Where cultural heritage is preserved, celebrated, and
                  passed down through generations with the help of technology.
                </p>
                <div className="mt-10 mb-6 p-3 bg-blue-50 rounded-xl w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  To build bridges between ancient wisdom and modern technology,
                  creating innovative solutions that empower communities to
                  preserve, teach, and celebrate their linguistic heritage.
                </p>
                <Link
                  href="/about/our-story"
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Learn more about our story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-gray-900"> {/* Changed text color here */}
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 mb-4" />,
                  title: "Cultural Respect",
                  description: "We honor the diversity of languages and cultures, recognizing each as unique and valuable."
                },
                {
                  icon: <Users className="h-10 w-10 mb-4" />,
                  title: "Community Empowerment",
                  description: "We build solutions that give communities ownership of their language preservation efforts."
                },
                {
                  icon: <Zap className="h-10 w-10 mb-4" />,
                  title: "Technological Innovation",
                  description: "We leverage cutting-edge technology to create effective, accessible language tools."
                },
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl">
                  <div className="flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-900"> {/* Changed text color here */} {value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Vision for the Future
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-8 w-8 text-primary" />,
                  title: "100+ Languages",
                  description: "Expanding our platform to support over 100 indigenous languages by 2025, focusing first on the most endangered."
                },
                {
                  icon: <Zap className="h-8 w-8 text-primary" />,
                  title: "Advanced AI Tools",
                  description: "Developing cutting-edge AI to assist in translation, transcription, and language learning for communities worldwide."
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Global Community",
                  description: "Building a worldwide network of language experts, developers, and cultural advocates working together."
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-primary" />,
                  title: "Digital Libraries",
                  description: "Creating comprehensive digital libraries of linguistic resources for every supported language."
                },
                {
                  icon: <Target className="h-8 w-8 text-primary" />,
                  title: "Self-Sustaining Communities",
                  description: "Empowering communities to independently maintain and grow their digital language resources."
                },
                {
                  icon: <Eye className="h-8 w-8 text-primary" />,
                  title: "UNESCO Recognition",
                  description: "Becoming a recognized UNESCO partner in global language preservation efforts by 2026."
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Together, we can ensure that no language is left behind in the digital age.
              Reach out to learn how you can be part of our vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/about/partners" 
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Partnership Opportunities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}