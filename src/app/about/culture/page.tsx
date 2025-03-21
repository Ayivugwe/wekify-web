"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Shield,
  Star,
  Users,
  Lightbulb,
  RefreshCw,
  Globe,
  Target,
} from "lucide-react";
import Layout from "../../components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Accordion } from "@/app/components/Accordion";

const cultureFAQs = [
  {
    title: "What is Wekify LLC's culture?",
    content: "Our culture is built on respect, innovation, and community-first values. We believe in empowering communities to preserve their languages while leveraging technology responsibly.",
    icon: <Heart className="h-5 w-5" />
  },
  {
    title: "How do we work with communities?",
    content: "We work directly with communities through field programs, educational initiatives, and technology workshops, ensuring they have full control over their language resources.",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "What makes our culture unique?",
    content: "Our commitment to cultural preservation, combined with technological innovation, creates a unique environment where tradition meets modern solutions.",
    icon: <Globe className="h-5 w-5" />
  }
];

export default function CulturePage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          </div>
          <FadeIn className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Culture</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Building bridges between tradition and technology in language preservation.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeIn className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-gray-600">
                  The principles that guide everything we do.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Community First",
                    description: "We believe in putting communities at the center of our work, ensuring they have full control over their language resources.",
                    icon: Users,
                    color: "bg-blue-50 text-blue-600"
                  },
                  {
                    title: "Cultural Respect",
                    description: "We approach our work with deep respect for cultural traditions and community values.",
                    icon: Heart,
                    color: "bg-red-50 text-red-600"
                  },
                  {
                    title: "Innovation",
                    description: "We leverage technology to create powerful tools for language preservation while respecting cultural authenticity.",
                    icon: Target,
                    color: "bg-purple-50 text-purple-600"
                  },
                  {
                    title: "Global Impact",
                    description: "We're building solutions that can help preserve languages worldwide while maintaining local control.",
                    icon: Globe,
                    color: "bg-green-50 text-green-600"
                  }
                ].map((item) => (
                  <FadeIn key={item.title}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300">
                      <div className={`p-3 rounded-lg ${item.color} w-fit mb-4`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Working at Wekify */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Working at Wekify</h2>
                <p className="text-xl mb-8 opacity-90">
                  Our team comes from diverse backgrounds, united by a passion
                  for language, culture, and technology. We foster an
                  environment where innovation thrives and every voice is
                  valued.
                </p>
                <ul className="space-y-4">
                  {[
                    "Cross-functional collaboration across teams",
                    "Regular field work with language communities",
                    "Continuous learning and professional development",
                    "Flexible work arrangements",
                    "Transparent and open communication",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <ArrowRight className="h-3 w-3 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/ayivugwe.png"
                  alt="Working at Wekify"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Community Engagement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Field Work Programs",
                  description:
                    "Our teams regularly work directly with communities to document languages, record oral histories, and train local technologists.",
                },
                {
                  title: "Educational Initiatives",
                  description:
                    "We partner with schools and universities to support language learning and research in linguistic preservation.",
                },
                {
                  title: "Technology Workshops",
                  description:
                    "We conduct regular workshops to train community members in using digital tools for language documentation and teaching.",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              What Our Team Says
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  quote:
                    "Working at Wekify means having the opportunity to make a real difference in preserving cultural heritage while pushing the boundaries of technology.",
                  name: "Sarah Chen",
                  title: "Software Developer",
                },
                {
                  quote:
                    "I've never been part of a team so passionate about its mission. Every day we're solving challenging problems that have meaningful impact on communities.",
                  name: "Dayo Ogunlana",
                  title: "Linguistic Specialist",
                },
                {
                  quote:
                    "The collaborative environment at Wekify encourages innovation. We're constantly learning from each other and from the communities we serve.",
                  name: "Miguel Santos",
                  title: "UX Designer",
                },
                {
                  quote:
                    "What makes Wekify special is how we blend technological innovation with deep respect for cultural heritage and linguistic diversity.",
                  name: "Priya Sharma",
                  title: "Product Manager",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
                >
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
              Are you passionate about language preservation and innovation?
              We're always looking for talented individuals to join our mission.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FadeIn className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Learn more about our culture and values.
                </p>
              </FadeIn>
              <FadeIn>
                <Accordion items={cultureFAQs} variant="bordered" />
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
