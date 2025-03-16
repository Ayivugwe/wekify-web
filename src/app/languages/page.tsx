'use client';

import React, { useEffect, useState } from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import { Globe, Search, ArrowRight, BookOpen, Sparkles, Users, Mic } from "lucide-react";

interface Language {
  name: string;
  native_name: string;
  speakers: number;
  status: string;
}

interface Country {
  name: string;
  code: string;
  languages: Language[];
}

interface Region {
  name: string;
  countries: Country[];
}

interface ContinentData {
  [key: string]: Region[];
}

export default function WorldLanguagesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [languageData, setLanguageData] = useState<ContinentData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/languages');
        const data = await response.json();
        setLanguageData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching language data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCountryFlag = (countryCode: string) => {
    return `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
  };

  const renderLanguages = () => (
    <>
      {Object.entries(languageData).map(([continent, regions]: [string, Region[]]) => (
        <div key={continent} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{continent}</h2>
          <div className="space-y-6">
            {Array.isArray(regions) && regions.map((region) => (
              <div key={region.name} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{region.name}</h3>
                <div className="space-y-6">
                  {region.countries.map((country) => (
                    <div key={country.name} className="bg-white rounded-xl shadow-sm p-6">
                      <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                        <img 
                          src={getCountryFlag(country.code)} 
                          alt={`${country.name} flag`}
                          className="w-6 h-4 mr-2"
                        />
                        {country.name}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {country.languages.map((language) => (
                          <Link
                            key={language.name}
                            href={`/languages/${language.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center px-3 py-2 bg-gray-50 hover:bg-primary/10 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                          >
                            <span>{language.name}</span>
                            <span className="text-xs text-gray-500 ml-2">({language.native_name})</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading languages...</div>
        </div>
      </Layout>
    );
  }

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <Link
                href="/assessment"
                className="px-6 py-3 bg-primary text-gray-900 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center"
              >
                Assess Your Language <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Languages by Region */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {renderLanguages()}
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
      <section className="py-16 bg-primary text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-gray-900 text-sm font-medium mb-6">
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