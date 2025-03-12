
"use client";

import React from "react";
import Image from "next/image";
import { SEOMetadata } from "../components/SEOMetadata";
import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { ChevronRight, Globe, Users, Award, MessageSquare, Zap, BookOpen } from "lucide-react";

export default function AmbassadorPage() {
  return (
    <>
      <SEOMetadata
        title="Become an Ambassador | Wekify"
        description="Join our ambassador program and help preserve languages in your community. Make a difference by connecting technology with cultural heritage."
        keywords="language ambassador, cultural preservation, community leader, language technology"
      />
      
      <main>
        {/* Hero Section */}
        <Section background="gradient" spacing="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h1 className="gradient-heading mb-6">
                Become a Language Ambassador
              </h1>
              <p className="text-lg mb-8">
                Join our global network of community advocates helping preserve languages and cultures through technology. Be the bridge between your community and the digital future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="#apply"
                  icon={<ChevronRight size={20} />}
                  iconPosition="right"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  href="#learn-more"
                >
                  Learn More
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn direction="right" delay={200}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/ambassador-community.jpg"
                  alt="Language ambassadors working with community"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </Section>
        
        {/* Role Description */}
        <Section background="light" id="learn-more">
          <FadeIn>
            <h2 className="section-title gradient-heading">What Does an Ambassador Do?</h2>
            <p className="text-center max-w-3xl mx-auto mb-16">
              Ambassadors are pivotal in connecting our technology with local communities. 
              They help bridge the digital divide while preserving cultural heritage.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Represent Your Language",
                description: "Be the voice for your community's language needs and help shape our technology to meet them.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Build Local Networks",
                description: "Connect with schools, cultural institutions, and community groups to expand language preservation efforts.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "Document Cultural Knowledge",
                description: "Help record and preserve language nuances, idioms, and cultural contexts that might otherwise be lost.",
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                title: "Facilitate Communication",
                description: "Bridge communication between our technical team and local language experts.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "Drive Engagement",
                description: "Create excitement around language preservation and encourage community participation.",
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Become a Leader",
                description: "Develop leadership skills while making a meaningful impact on your community's future.",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={100 * index} direction="up">
                <Card
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  accentColor="primary"
                />
              </FadeIn>
            ))}
          </div>
        </Section>
        
        {/* Benefits Section */}
        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <h2 className="gradient-heading mb-6">Ambassador Benefits</h2>
              <p className="mb-8">
                Joining our ambassador program offers both personal growth and community impact opportunities:
              </p>
              <ul className="space-y-4">
                {[
                  "Access to exclusive language technology tools and resources",
                  "Professional development and leadership training",
                  "Networking with linguists and language preservation experts",
                  "Financial support for community language initiatives",
                  "Recognition as a cultural preservation leader",
                  "Opportunity to influence product development",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn direction="right" delay={200}>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-center">Ambassador Testimonial</h3>
                <blockquote className="italic text-gray-600 mb-6">
                  "Being an ambassador has allowed me to reconnect with my heritage while helping my community embrace technology. It's incredibly rewarding to see elders sharing stories in our native language with younger generations through the platforms we've built together."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-primary">MA</span>
                  </div>
                  <div>
                    <div className="font-semibold">Maria Alvarez</div>
                    <div className="text-sm text-gray-500">Mixtec Language Ambassador</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
        
        {/* Application Section */}
        <Section background="gradient" spacing="xl" id="apply">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-center mb-8">Apply to Become an Ambassador</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="mb-6 text-center">
                  We're looking for passionate individuals who are committed to language preservation and community building. If that sounds like you, we'd love to hear from you!
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 font-medium">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 font-medium">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="language" className="block mb-2 font-medium">Language Community</label>
                    <input 
                      type="text" 
                      id="language" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="What language/community would you represent?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block mb-2 font-medium">Motivation</label>
                    <textarea 
                      id="motivation" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Why do you want to become an ambassador?"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" fullWidth>
                    Submit Application
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </Section>
        
        {/* FAQ Section */}
        <Section background="light">
          <FadeIn>
            <h2 className="section-title">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What qualifications do I need to become an ambassador?",
                  answer: "The most important qualification is passion for your language and community. Technical skills are helpful but not required—we provide training and support."
                },
                {
                  question: "How much time is required?",
                  answer: "The role is flexible, typically requiring 5-10 hours per month. You can adjust your involvement based on your availability."
                },
                {
                  question: "Is this a paid position?",
                  answer: "While primarily volunteer-based, we provide stipends for specific projects and activities, along with resources for community initiatives."
                },
                {
                  question: "Can I represent more than one language?",
                  answer: "Yes, if you have proficiency in multiple languages and connections to those communities."
                },
                {
                  question: "What support will I receive?",
                  answer: "Regular training, access to our technology platform, mentorship from experienced ambassadors, and financial support for community activities."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
      </main>
    </>
  );
}
