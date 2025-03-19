"use client";

import React from "react";
import { Users, Globe, Award, ArrowRight } from "lucide-react";
import Layout from "../components/layout";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";

export default function AmbassadorPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Become a Platform Ambassador
              </h1>
              <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
                Join our network of community leaders and help preserve languages through technology.
              </p>
              <Button size="lg" asChild>
                <a href="#apply">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-primary-600" />,
                  title: "Community Impact",
                  description: "Make a real difference in your community by helping preserve and promote your language."
                },
                {
                  icon: <Globe className="w-8 h-8 text-primary-600" />,
                  title: "Global Network",
                  description: "Connect with other ambassadors and language preservation experts worldwide."
                },
                {
                  icon: <Award className="w-8 h-8 text-primary-600" />,
                  title: "Recognition",
                  description: "Get recognized for your contributions to language preservation."
                }
              ].map((benefit, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="p-6 bg-white rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors">
                    <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900">{benefit.title}</h3>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section id="apply" className="py-32 bg-gradient-to-b from-white to-primary-50">
          <div className="max-w-3xl mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
                Apply to Become an Ambassador
              </h2>
              <div className="bg-white p-8 rounded-xl border border-neutral-100">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="community" className="block text-sm font-medium text-neutral-700 mb-1">
                      Language Community
                    </label>
                    <input
                      type="text"
                      id="community"
                      className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="Your language community"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Why do you want to become an ambassador?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                      placeholder="Tell us about your motivation and experience..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  );
}
