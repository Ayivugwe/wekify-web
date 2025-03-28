"use client";

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Heart, Users, Target, Brain } from "lucide-react";

export default function AboutUsPage() {
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
                  Pioneering language preservation through innovative technology solutions, starting with the Kifuliiru language and expanding to serve indigenous communities worldwide.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-office.jpg"
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
                  Wekify LLC emerged from a profound connection to the Bafuliiru community and a deep understanding of the challenges facing indigenous languages in the digital age. Our founder, driven by personal experience and a vision for preserving cultural heritage, recognized the urgent need to bridge the gap between traditional language preservation methods and modern technology.
                </p>
                <p className="mb-6">
                  The journey began with the Kifuliiru language, facing the real risk of digital extinction despite being actively spoken by over 400,000 people. This realization sparked the creation of Wekify, established with the mission to develop innovative digital solutions that would not only preserve languages but also make them thrive in the modern world.
                </p>
                <p className="mb-6">
                  Our approach combines cutting-edge technology with deep cultural understanding, ensuring that our solutions are both effective and culturally appropriate. We work closely with communities, respecting their traditions while empowering them with digital tools for language preservation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                  <p className="text-gray-600">
                    To create a world where every indigenous language thrives in the digital age, preserving cultural heritage and knowledge for future generations through innovative technology solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                  <p className="text-gray-600">
                    To develop and provide accessible, culturally-sensitive digital tools that empower communities to preserve, teach, and celebrate their languages in the modern world.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cultural Respect</h3>
                <p className="text-gray-600">Honoring and preserving indigenous traditions and knowledge</p>
              </div>
              <div className="text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Leveraging technology to solve preservation challenges</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-gray-600">Prioritizing community needs and involvement</p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-gray-600">Creating lasting positive change for languages</p>
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
                Be part of our journey to preserve and revitalize indigenous languages through technology.
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