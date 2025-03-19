"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/Button";
import {
  Globe,
  Search,
  Filter,
  ArrowRight,
  Languages,
  Map,
  Users,
  BookOpen,
} from "lucide-react";

export default function LanguagesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Languages Directory
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore our comprehensive directory of languages, their status, and preservation efforts worldwide.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search languages..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Languages,
                  title: "Total Languages",
                  value: "7,000+",
                  description: "Languages documented in our directory",
                },
                {
                  icon: Map,
                  title: "Countries",
                  value: "190+",
                  description: "Countries represented",
                },
                {
                  icon: Users,
                  title: "Communities",
                  value: "500+",
                  description: "Language communities supported",
                },
                {
                  icon: BookOpen,
                  title: "Resources",
                  value: "10,000+",
                  description: "Digital resources available",
                },
              ].map((stat) => (
                <FadeIn key={stat.title}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
                    <div className="p-3 rounded-lg bg-primary-50 text-primary-600 w-fit mb-4">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-1">
                      {stat.title}
                    </h4>
                    <p className="text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Languages Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Languages
              </h2>
              <p className="text-lg text-gray-600">
                Discover some of the languages we're working to preserve
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kifuliiru",
                  region: "Democratic Republic of Congo",
                  speakers: "200,000+",
                  status: "Vulnerable",
                },
                {
                  name: "Yoruba",
                  region: "Nigeria",
                  speakers: "20M+",
                  status: "Vulnerable",
                },
                {
                  name: "Quechua",
                  region: "South America",
                  speakers: "8M+",
                  status: "Vulnerable",
                },
                {
                  name: "Māori",
                  region: "New Zealand",
                  speakers: "150,000+",
                  status: "Vulnerable",
                },
                {
                  name: "Navajo",
                  region: "United States",
                  speakers: "170,000+",
                  status: "Vulnerable",
                },
                {
                  name: "Welsh",
                  region: "United Kingdom",
                  speakers: "900,000+",
                  status: "Vulnerable",
                },
              ].map((language) => (
                <FadeIn key={language.name}>
                  <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary-100 transition-all duration-300 hover:shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {language.name}
                    </h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center gap-2">
                        <Map className="h-4 w-4" />
                        {language.region}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {language.speakers} speakers
                      </p>
                      <p className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Status: {language.status}
                      </p>
                    </div>
                    <Button variant="outline" className="mt-4 w-full" asChild>
                      <a href={`/languages/${language.name.toLowerCase()}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <FadeIn className="bg-primary-900 rounded-xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-6">
                Want to Add Your Language?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Help us document and preserve your language by adding it to our directory
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  Submit Your Language <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </FadeIn>
          </div>
        </section>
      </div>
    </Layout>
  );
}