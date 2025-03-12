import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "../components/Button";
import Link from "next/link";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import Layout from "../components/layout";
import SEOMetadata from "../components/SEOMetadata";
import { cn } from "@/lib/utils";
import { ChevronRight, Globe, Users, Award, MessageSquare, Zap, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Ambassador | Wekify",
  description: "Join our ambassador program and help preserve languages in your community. Make a difference by connecting technology with cultural heritage.",
  keywords: "language ambassador, cultural preservation, community leader, language technology",
  openGraph: {
    title: "Become an Ambassador | Wekify",
    description: "Be part of our global mission to preserve languages and cultures through technology."
  }
};

const AmbassadorPage = () => {
  return (
    <>
      <SEOMetadata
        title="Become an Ambassador | Wekify"
        description="Join our ambassador program and help preserve languages in your community. Make a difference by connecting technology with cultural heritage."
        keywords="language ambassador, cultural preservation, community leader, language technology"
      />
      <Layout>
        <Section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="mb-6">Become a Wekify Ambassador</h1>
                <p className="text-xl mb-8">Join our global network of language advocates making a difference in their communities.</p>
                <Button href="#apply" size="lg">
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <FadeIn>
                <div>
                  <h2 className="mb-6">Be the Voice of Your Language</h2>
                  <p className="mb-4">As a Wekify Ambassador, you'll represent your language community and help bridge the gap between technology and cultural preservation.</p>
                  <p className="mb-6">You'll work directly with language speakers, community leaders, and our team to ensure that your language thrives in the digital age.</p>
                  <ul className="space-y-3">
                    {[
                      { icon: <Globe className="text-primary" />, text: "Represent your language and region" },
                      { icon: <Users className="text-primary" />, text: "Build and nurture your local language community" },
                      { icon: <Award className="text-primary" />, text: "Gain recognition as a cultural preservation leader" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/ambassador-community.jpg"
                    alt="Wekify Ambassador working with community"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn>
              <div className="bg-background-alt rounded-xl p-8 md:p-12 mb-24">
                <h2 className="text-center mb-12">What Ambassadors Do</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <MessageSquare className="h-10 w-10 text-primary mb-4" />,
                      title: "Community Engagement",
                      description: "Connect with speakers of your language and build a vibrant community dedicated to language preservation."
                    },
                    {
                      icon: <BookOpen className="h-10 w-10 text-primary mb-4" />,
                      title: "Language Documentation",
                      description: "Help document vocabulary, phrases, and cultural context to create comprehensive language resources."
                    },
                    {
                      icon: <Zap className="h-10 w-10 text-primary mb-4" />,
                      title: "Technology Adoption",
                      description: "Guide your community in using Wekify's tools and technologies for language preservation and education."
                    }
                  ].map((item, i) => (
                    <div key={i} className={cn("text-center p-6 rounded-lg bg-white shadow-md")}>
                      <div className="flex justify-center">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div id="apply" className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="mb-6">Apply to Become an Ambassador</h2>
                <p className="mb-8">We're looking for passionate individuals who care deeply about language preservation and community building. If that sounds like you, we'd love to hear from you.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-10">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-text-secondary mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-text-secondary mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="language" className="block text-sm font-medium text-text-secondary mb-1">Language You Represent</label>
                      <input
                        type="text"
                        id="language"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-text-secondary mb-1">Location</label>
                      <input
                        type="text"
                        id="location"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="motivation" className="block text-sm font-medium text-text-secondary mb-1">Why do you want to be an ambassador?</label>
                      <textarea
                        id="motivation"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      ></textarea>
                    </div>

                    <div>
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </Layout>
    </>
  );
};

export default AmbassadorPage;