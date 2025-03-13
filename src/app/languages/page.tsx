"use client";

import React from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Search,
  Filter,
  BookOpen,
  Sparkles,
  Users,
  Mic,
} from "lucide-react";

export default function WorldLanguagesPage() {
  const featuredLanguages = [
    {
      name: "Kifuliiru",
      region: "Eastern Africa",
      speakers: "~350,000",
      status: "Vulnerable",
      image: "/fuliiru-hub-homepage.jpg",
      path: "/languages/kifuliiru",
    },
    {
      name: "Yoruba",
      region: "West Africa",
      speakers: "~50 million",
      status: "Developing",
      image: "/ambassador-community.jpg",
      path: "/languages/yoruba",
    },
    {
      name: "Quechua",
      region: "South America",
      speakers: "~8-10 million",
      status: "Endangered",
      image: "/fuliiru-hub-motherland.jpg",
      path: "/languages/quechua",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-800 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              World Languages
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Earth's Linguistic Diversity
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Discover the rich tapestry of human language and help preserve our
              collective linguistic heritage for future generations.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="relative flex-1 max-w-md mx-auto md:mx-0">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search languages..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <Link
                href="/assessment"
                className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center"
              >
                Assess Your Language <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Languages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Featured Languages
              </h2>
              <div className="flex items-center">
                <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredLanguages.map((language, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={language.image}
                      alt={language.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{language.name}</h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          language.status === "Endangered"
                            ? "bg-red-100 text-red-800"
                            : language.status === "Vulnerable"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-green-100 text-green-800"
                        }`}
                      >
                        {language.status}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600 flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-gray-400" />
                        {language.region}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        {language.speakers} speakers
                      </p>
                    </div>
                    <Link
                      href={language.path}
                      className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                    >
                      Explore language <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-300 hover:bg-gray-50 transition-all">
                View All Languages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Language Families */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Language Families
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore languages grouped by their historical and linguistic
                relationships.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Indo-European", count: 445 },
                { name: "Niger-Congo", count: 1532 },
                { name: "Austronesian", count: 1257 },
                { name: "Sino-Tibetan", count: 456 },
                { name: "Trans-New Guinea", count: 478 },
                { name: "Afro-Asiatic", count: 375 },
                { name: "Nilo-Saharan", count: 207 },
                { name: "Oto-Manguean", count: 174 },
              ].map((family, index) => (
                <Link
                  key={index}
                  href={`/languages/families/${family.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2">{family.name}</h3>
                  <p className="text-gray-500 text-sm">
                    {family.count} languages
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Take Assessment CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Evaluate Your Language
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Finding Your Language?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Take our comprehensive language assessment to evaluate the digital
              resources available for your language and receive tailored
              recommendations.
            </p>
            <Link
              href="/assessment"
              className="px-8 py-3 bg-white text-primary rounded-xl font-medium hover:bg-gray-100 transition-all shadow-lg inline-flex items-center"
            >
              Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Educational Resources
              </h2>
              <Link
                href="/resources"
                className="text-primary font-medium hover:text-primary/80 flex items-center"
              >
                View all resources <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Language Documentation Guide",
                  description:
                    "Learn best practices for documenting endangered languages with our comprehensive guide.",
                  icon: BookOpen,
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  title: "Linguistic Fieldwork Methods",
                  description:
                    "Practical techniques for conducting linguistic fieldwork in diverse communities.",
                  icon: Mic,
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  title: "Language Revitalization Strategies",
                  description:
                    "Effective approaches to revitalize and maintain endangered languages across generations.",
                  icon: Users,
                  color: "bg-green-100 text-green-600",
                },
              ].map((resource, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div
                    className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link
                    href="/resources"
                    className="text-primary font-medium hover:text-primary/80 flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
