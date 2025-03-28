"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/app/components/FadeIn';
import { Layout } from '@/app/components/Layout';
import { Globe, Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-800 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                About Wekify LLC
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Learn More <span className="text-primary-600">About Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Discover our mission, vision, and the team behind Wekify LLC's language preservation initiatives.
              </p>
            </FadeIn>
            <FadeIn className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
                alt="Modern office workspace"
                fill
                className="object-cover"
                priority
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Our Mission', href: '/about/mission', icon: Target },
              { title: 'Our Vision', href: '/about/vision', icon: Globe },
              { title: 'Our Team', href: '/about/team', icon: Users },
              { title: 'Our Culture', href: '/about/culture', icon: Heart },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What is Wekify LLC?</h3>
                <p className="text-gray-600">
                  Wekify LLC is a language technology company dedicated to preserving and revitalizing indigenous languages through innovative digital solutions. We focus on creating comprehensive platforms for language documentation, learning, and cultural preservation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Where is Wekify LLC located?</h3>
                <p className="text-gray-600">
                  Wekify LLC is a digital-first company headquartered in the United States, with a global reach and focus on serving language communities worldwide.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How can I get involved?</h3>
                <p className="text-gray-600">
                  There are multiple ways to get involved with Wekify LLC. You can become a language ambassador, contribute to our language preservation projects, or partner with us for technology solutions. Visit our contact page to learn more about collaboration opportunities.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}