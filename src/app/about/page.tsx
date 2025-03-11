
import React from "react";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Wekify</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Wekify, we are dedicated to the preservation and revitalization of indigenous languages through innovative digital solutions. Our mission is to empower communities to document, teach, and celebrate their linguistic heritage for future generations.
            </p>
            <p className="text-lg text-gray-700">
              We believe that language is the cornerstone of cultural identity, and we're committed to creating accessible tools that help communities maintain their linguistic traditions in an increasingly digital world.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Wekify was founded with a clear vision: to bridge the gap between traditional language preservation methods and modern technology. Our journey began with a focus on Kifuliiru, but has since expanded to support multiple indigenous languages facing similar challenges.
            </p>
            <p className="text-lg text-gray-700">
              Through partnerships with linguistic experts, community leaders, and technology innovators, we've developed a comprehensive platform that addresses the unique needs of language preservation initiatives worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6">
              We take a community-centered approach to language preservation, recognizing that each language community has unique needs and goals. Our platform is designed to be flexible, accessible, and responsive to these diverse requirements.
            </p>
            <p className="text-lg text-gray-700">
              By combining cutting-edge technology with deep respect for cultural traditions, we create solutions that are both innovative and culturally appropriate.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Globe, Heart, Users, Shield } from "lucide-react";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Wekify
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Our mission is to preserve and revitalize indigenous languages through innovative technology solutions.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We envision a world where every language, no matter how small, has the digital tools and resources needed to thrive in the modern era.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To build bridges between ancient wisdom and modern technology, creating innovative solutions that empower communities to preserve, teach, and celebrate their linguistic heritage.
                </p>
                <Link 
                  href="/about/our-story" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Read Our Full Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Navigation Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Learn More About Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Our Story",
                  description: "Learn about our founding journey and mission",
                  icon: <BookOpen className="w-8 h-8" />,
                  href: "/about/our-story",
                },
                {
                  title: "Our Team",
                  description: "Meet the passionate people behind Wekify",
                  icon: <Users className="w-8 h-8" />,
                  href: "/about/team",
                },
                {
                  title: "Our Culture",
                  description: "Discover our values and what drives us",
                  icon: <Heart className="w-8 h-8" />,
                  href: "/about/culture",
                },
              ].map((item, index) => (
                <Link 
                  href={item.href} 
                  key={index}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div
                    className="mb-6 p-3 bg-blue-50 rounded-xl w-fit 
                    group-hover:bg-blue-100 transition-all duration-300"
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Whether you're a language expert, developer, or someone passionate about cultural preservation, there's a place for you in our community.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
