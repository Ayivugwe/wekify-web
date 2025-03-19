'use client';

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, BookOpen, Shield, Users, Building2, Rocket, Target, Heart } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AboutUsPage() {
  return (
    <Layout>
      {/* Hero/Intro Section */}
      <section id="intro" className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <FadeIn className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of Language Preservation
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            We create powerful digital platforms that empower communities to preserve, teach, and celebrate their linguistic heritage.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Start Your Platform <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild>
              <Link href="/solutions">View Solutions</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of passionate technologists and language preservationists dedicated to creating innovative solutions for language communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To preserve and revitalize indigenous languages through innovative digital solutions, making language resources accessible worldwide and connecting diaspora communities.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary-50">
                    <Building2 className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Custom Platforms</h3>
                    <p className="text-gray-600">Tailored digital solutions for each community's unique needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary-50">
                    <Rocket className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Cutting-edge technology for effective language preservation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary-50">
                    <Target className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Impact</h3>
                    <p className="text-gray-600">Measurable results in language documentation and learning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                A world where every language thrives in the digital age, where communities have the tools and platforms they need to preserve their linguistic heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Vision Section */}
      <section id="ai-vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our AI Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI as a Force for Language Revitalization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that AI has arrived at a pivotal moment in history to help preserve languages on the brink of extinction, enabling new ways of documentation, learning, and cultural preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated group of innovators working to preserve linguistic diversity through technology
            </p>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Platform Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on principles that ensure sustainable language preservation through digital innovation.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Data Sovereignty",
                description: "Communities maintain full control over their language data"
              },
              {
                icon: Users,
                title: "Community-Driven",
                description: "Platforms designed with and for the community"
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Advanced technology made accessible and practical"
              },
              {
                icon: Heart,
                title: "Cultural Respect",
                description: "Preservation of cultural context alongside language"
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "Platforms that work for everyone, everywhere"
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Effective tools for language learning and teaching"
              }
            ].map((value) => (
              <FadeIn key={value.title}>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 rounded-lg bg-primary-50 w-fit mb-4">
                    <value.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 text-white">
        <FadeIn className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Language Platform?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Join us in creating a digital future for your language. Let's build something amazing together.
          </p>
          <Button asChild>
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </section>
    </Layout>
  );
}