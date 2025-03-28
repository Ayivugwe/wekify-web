
"use client";

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Heart, Users, Target, Brain, MapPin, Languages, Book } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <FadeIn className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  About <span className="text-primary-600">Wekify LLC</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                  Pioneering language preservation through innovative technology
                  solutions, starting with the Kifuliiru language and expanding
                  to serve indigenous communities worldwide.
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span>Spokane, Washington</span>
                </div>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/office.jpg"
                  alt="Wekify Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                  Wekify LLC emerged from a profound connection to the Bafuliiru
                  community and a deep understanding of the challenges facing
                  indigenous languages in the digital age. Our founder, driven
                  by personal experience and a vision for preserving cultural
                  heritage, recognized the urgent need to bridge the gap between
                  traditional language preservation methods and modern
                  technology.
                </p>
                <p className="mb-6">
                  The journey began with the Kifuliiru language, facing the real
                  risk of digital extinction despite being actively spoken by
                  over 400,000 people. This realization sparked the creation of
                  Wekify, established with the mission to develop innovative
                  digital solutions that would not only preserve languages but
                  also make them thrive in the modern world.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Learn More About Us</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link href="/about/mission" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Target className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-600">Discover our core mission and values in preserving indigenous languages.</p>
                </div>
              </Link>
              <Link href="/about/vision" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Sparkles className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-600">Learn about our future plans and goals for language preservation.</p>
                </div>
              </Link>
              <Link href="/about/team" className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Users className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Team</h3>
                  <p className="text-gray-600">Meet the passionate individuals behind Wekify's mission.</p>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-3">What is Wekify's primary focus?</h3>
                  <p className="text-gray-600">We are currently focused on preserving and digitizing the Kifuliiru language, creating digital tools and resources for the Bafuliiru community.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-3">How do you work with communities?</h3>
                  <p className="text-gray-600">We collaborate directly with language speakers, cultural leaders, and educators to develop solutions that meet their specific needs and respect their cultural values.</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-3">Do you plan to support other languages?</h3>
                  <p className="text-gray-600">Yes, while our current focus is on Kifuliiru, we are designing our platform to be adaptable for other indigenous languages in the future.</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link href="/faq">
                    View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                Be part of our journey to preserve and revitalize indigenous
                languages through technology.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
