import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import Layout from "../../components/layout";

export default function GettingStartedPage() {
  const resources = [
    {
      title: "Platform Overview",
      description: "Learn about the core components of the Wekify platform",
      link: "/resources/getting-started/overview",
      image: "/ayivugwe.png",
    },
    {
      title: "Quick Start Guide",
      description: "Get up and running with Wekify in under 30 minutes",
      link: "/resources/getting-started/quickstart",
      image: "/ayivugwe.png",
    },
    {
      title: "Basic Concepts",
      description: "Understand the key terminology and concepts",
      link: "/resources/getting-started/concepts",
      image: "/ayivugwe.png",
    },
    {
      title: "First Implementation",
      description: "Step-by-step guide to your first language project",
      link: "/resources/getting-started/implementation",
      image: "/ayivugwe.png",
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Getting Started with Wekify
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Everything you need to begin your language preservation
                  journey with our platform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#quick-start" className="btn-primary">
                    Quick Start Guide
                  </Link>
                  <Link
                    href="#video-tutorial"
                    className="btn-secondary flex items-center"
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Watch Tutorial
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/ayivugwe.png"
                  alt="Getting Started"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Resources Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Key Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  href={resource.link}
                  className="group flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-1/3 relative">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <span className="text-blue-600 font-medium inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section id="quick-start" className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Quick Start Guide
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Follow these simple steps to get started with your first language
              preservation project
            </p>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {[
                {
                  step: 1,
                  title: "Create Your Account",
                  description:
                    "Sign up for a Wekify account to access all platform features.",
                },
                {
                  step: 2,
                  title: "Set Up Your Project",
                  description:
                    "Create a new language project and configure basic settings.",
                },
                {
                  step: 3,
                  title: "Add Language Content",
                  description:
                    "Begin adding words, phrases, and audio recordings to your dictionary.",
                },
                {
                  step: 4,
                  title: "Customize Your Interface",
                  description:
                    "Personalize the look and feel of your language platform.",
                },
                {
                  step: 5,
                  title: "Invite Contributors",
                  description:
                    "Build your community by inviting others to contribute content.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`flex p-6 items-start ${
                    index < 4 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-6">
                    <span className="font-bold text-primary">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/resources/getting-started/quickstart"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View Detailed Quick Start Guide{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Video Tutorial */}
        <section id="video-tutorial" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Video Tutorial
            </h2>
            <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video shadow-xl">
              <div className="flex items-center justify-center h-full">
                <PlayCircle className="w-20 h-20 text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Getting Started with Wekify Platform
              </h3>
              <p className="text-gray-600">
                A complete walkthrough of setting up your first language
                preservation project
              </p>
            </div>
          </div>
        </section>

        {/* Platform Benefits */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Why Choose Wekify
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {[
                {
                  title: "User-Friendly Interface",
                  description:
                    "Intuitive design that makes language documentation accessible to everyone.",
                },
                {
                  title: "Powerful Language Tools",
                  description:
                    "Specialized features designed specifically for indigenous language preservation.",
                },
                {
                  title: "Community Collaboration",
                  description:
                    "Built-in tools for community members to contribute and collaborate.",
                },
                {
                  title: "Multimedia Support",
                  description:
                    "Capture the richness of language with audio, video, and image support.",
                },
                {
                  title: "Offline Accessibility",
                  description:
                    "Access essential features even without an internet connection.",
                },
                {
                  title: "Customizable Platform",
                  description:
                    "Tailor the platform to meet your community's specific needs.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                >
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-6 h-6 mr-3 text-white flex-shrink-0" />
                    <h3 className="font-semibold ">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-9">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question:
                    "How long does it take to set up a basic language project?",
                  answer:
                    "Most users can set up a basic project in under 30 minutes, including account creation and initial configuration.",
                },
                {
                  question: "Do I need technical skills to use Wekify?",
                  answer:
                    "No, Wekify is designed to be user-friendly for non-technical users. Advanced features are available for those with technical backgrounds.",
                },
                {
                  question: "Can multiple people work on a language project?",
                  answer:
                    "Yes, Wekify supports collaborative editing with role-based permissions to control who can make changes.",
                },
                {
                  question: "How do I get support if I encounter issues?",
                  answer:
                    "We offer multiple support channels including documentation, community forums, email support, and scheduled consultation calls.",
                },
                {
                  question: "Is my language data secure?",
                  answer:
                    "Yes, we implement industry-standard security measures and give you full control over who can access your language data.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View All FAQs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Start your language preservation journey today with Wekify.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Create Account
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
