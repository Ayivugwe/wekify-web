
"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";
import { Button } from "../components/Button";
import { Search, Filter, MapPin, Globe, ArrowRight } from "lucide-react";

const continents = [
  { id: "africa", name: "Africa" },
  { id: "asia", name: "Asia" },
  { id: "europe", name: "Europe" },
  { id: "north-america", name: "North America" },
  { id: "south-america", name: "South America" },
  { id: "oceania", name: "Oceania" },
  { id: "antarctica", name: "Antarctica" },
];

// Sample data - in a real implementation, this would come from a database
const languagesData = {
  africa: {
    "East Africa": [
      { name: "Swahili", speakers: "100-150 million", status: "healthy" },
      { name: "Amharic", speakers: "25 million", status: "healthy" },
      { name: "Oromo", speakers: "30 million", status: "vulnerable" },
      { name: "Somali", speakers: "16 million", status: "vulnerable" },
      { name: "Tigrinya", speakers: "7 million", status: "vulnerable" },
    ],
    "West Africa": [
      { name: "Yoruba", speakers: "40 million", status: "healthy" },
      { name: "Igbo", speakers: "24 million", status: "vulnerable" },
      { name: "Hausa", speakers: "63 million", status: "healthy" },
      { name: "Fulani", speakers: "24 million", status: "vulnerable" },
      { name: "Wolof", speakers: "10 million", status: "vulnerable" },
    ],
    "Southern Africa": [
      { name: "Zulu", speakers: "12 million", status: "vulnerable" },
      { name: "Xhosa", speakers: "8 million", status: "vulnerable" },
      { name: "Shona", speakers: "10 million", status: "vulnerable" },
      { name: "Ndebele", speakers: "1.6 million", status: "endangered" },
      { name: "Tswana", speakers: "4.4 million", status: "vulnerable" },
    ]
  },
  asia: {
    "East Asia": [
      { name: "Mandarin Chinese", speakers: "920 million", status: "healthy" },
      { name: "Japanese", speakers: "128 million", status: "healthy" },
      { name: "Korean", speakers: "77 million", status: "healthy" },
      { name: "Cantonese", speakers: "80 million", status: "vulnerable" },
      { name: "Mongolian", speakers: "5 million", status: "vulnerable" },
    ],
    "South Asia": [
      { name: "Hindi", speakers: "341 million", status: "healthy" },
      { name: "Bengali", speakers: "228 million", status: "healthy" },
      { name: "Urdu", speakers: "170 million", status: "healthy" },
      { name: "Tamil", speakers: "75 million", status: "vulnerable" },
      { name: "Punjabi", speakers: "125 million", status: "vulnerable" },
    ],
    "Southeast Asia": [
      { name: "Indonesian", speakers: "199 million", status: "healthy" },
      { name: "Malay", speakers: "77 million", status: "healthy" },
      { name: "Thai", speakers: "60 million", status: "vulnerable" },
      { name: "Vietnamese", speakers: "85 million", status: "healthy" },
      { name: "Khmer", speakers: "16 million", status: "vulnerable" },
    ]
  },
  europe: {
    "Western Europe": [
      { name: "English", speakers: "1.5 billion", status: "healthy" },
      { name: "French", speakers: "267 million", status: "healthy" },
      { name: "German", speakers: "132 million", status: "healthy" },
      { name: "Dutch", speakers: "24 million", status: "healthy" },
      { name: "Breton", speakers: "200,000", status: "endangered" },
    ],
    "Eastern Europe": [
      { name: "Russian", speakers: "258 million", status: "healthy" },
      { name: "Polish", speakers: "45 million", status: "healthy" },
      { name: "Ukrainian", speakers: "40 million", status: "vulnerable" },
      { name: "Romanian", speakers: "28 million", status: "vulnerable" },
      { name: "Czech", speakers: "10 million", status: "vulnerable" },
    ],
    "Southern Europe": [
      { name: "Spanish", speakers: "543 million", status: "healthy" },
      { name: "Italian", speakers: "67 million", status: "healthy" },
      { name: "Portuguese", speakers: "252 million", status: "healthy" },
      { name: "Greek", speakers: "13 million", status: "vulnerable" },
      { name: "Catalan", speakers: "10 million", status: "vulnerable" },
    ]
  },
  "north-america": {
    "United States & Canada": [
      { name: "English", speakers: "335 million", status: "healthy" },
      { name: "Spanish", speakers: "52 million", status: "healthy" },
      { name: "French", speakers: "10 million", status: "healthy" },
      { name: "Navajo", speakers: "170,000", status: "endangered" },
      { name: "Cree", speakers: "96,000", status: "endangered" },
    ],
    "Mexico & Central America": [
      { name: "Spanish", speakers: "155 million", status: "healthy" },
      { name: "Nahuatl", speakers: "1.7 million", status: "endangered" },
      { name: "Maya", speakers: "6 million", status: "vulnerable" },
      { name: "Zapotec", speakers: "450,000", status: "endangered" },
      { name: "Garifuna", speakers: "200,000", status: "endangered" },
    ],
    "Caribbean": [
      { name: "Spanish", speakers: "25 million", status: "healthy" },
      { name: "Haitian Creole", speakers: "9.6 million", status: "vulnerable" },
      { name: "Jamaican Patois", speakers: "3 million", status: "vulnerable" },
      { name: "Papiamento", speakers: "330,000", status: "endangered" },
      { name: "Garifuna", speakers: "200,000", status: "endangered" },
    ]
  },
  "south-america": {
    "Northern South America": [
      { name: "Spanish", speakers: "100 million", status: "healthy" },
      { name: "Portuguese", speakers: "210 million", status: "healthy" },
      { name: "Quechua", speakers: "8-10 million", status: "vulnerable" },
      { name: "Guarani", speakers: "6 million", status: "vulnerable" },
      { name: "Aymara", speakers: "2 million", status: "endangered" },
    ],
    "Southern South America": [
      { name: "Spanish", speakers: "68 million", status: "healthy" },
      { name: "Portuguese", speakers: "210 million", status: "healthy" },
      { name: "Mapudungun", speakers: "250,000", status: "endangered" },
      { name: "Guarani", speakers: "6 million", status: "vulnerable" },
      { name: "Quechua", speakers: "8-10 million", status: "vulnerable" },
    ]
  },
  oceania: {
    "Australia": [
      { name: "English", speakers: "25 million", status: "healthy" },
      { name: "Warlpiri", speakers: "3,000", status: "critically endangered" },
      { name: "Yolŋu", speakers: "4,500", status: "critically endangered" },
      { name: "Pitjantjatjara", speakers: "3,000", status: "critically endangered" },
      { name: "Arrernte", speakers: "1,500", status: "critically endangered" },
    ],
    "New Zealand": [
      { name: "English", speakers: "4.8 million", status: "healthy" },
      { name: "Māori", speakers: "157,000", status: "endangered" },
    ],
    "Pacific Islands": [
      { name: "Tok Pisin", speakers: "4 million", status: "vulnerable" },
      { name: "Fijian", speakers: "350,000", status: "vulnerable" },
      { name: "Samoan", speakers: "510,000", status: "vulnerable" },
      { name: "Tongan", speakers: "187,000", status: "vulnerable" },
      { name: "Hawaiian", speakers: "24,000", status: "critically endangered" },
    ]
  },
  antarctica: {
    "Research Stations": [
      { name: "No indigenous languages", speakers: "N/A", status: "N/A" },
    ]
  }
};

export default function LanguagesPage() {
  const [selectedContinent, setSelectedContinent] = useState("africa");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(languagesData.africa);
  const [searchResults, setSearchResults] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800";
      case "vulnerable":
        return "bg-yellow-100 text-yellow-800";
      case "endangered":
        return "bg-orange-100 text-orange-800";
      case "critically endangered":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  useEffect(() => {
    setFilteredData(languagesData[selectedContinent]);
    setSearchResults(null);
  }, [selectedContinent]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredData(languagesData[selectedContinent]);
      setSearchResults(null);
      return;
    }

    const term = searchTerm.toLowerCase();
    let results = [];

    // Search across all continents and regions
    Object.entries(languagesData).forEach(([continent, regions]) => {
      Object.entries(regions).forEach(([region, languages]) => {
        const matchedLanguages = languages.filter(lang => 
          lang.name.toLowerCase().includes(term)
        );
        
        if (matchedLanguages.length > 0) {
          results.push({
            continent,
            region,
            languages: matchedLanguages
          });
        }
      });
    });

    setSearchResults(results);
  };

  return (
    <Layout>
      
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">World Languages Directory</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the rich diversity of languages across the globe, organized by continent and region.
              </p>
            </div>

            <div className="mb-8">
              <div className="relative max-w-xl mx-auto">
                <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    className="w-full px-4 py-3 outline-none"
                    placeholder="Search for a language..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <button 
                    onClick={handleSearch}
                    className="bg-primary-600 hover:bg-primary-700 text-white p-3"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {continents.map((continent) => (
                <button
                  key={continent.id}
                  onClick={() => setSelectedContinent(continent.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedContinent === continent.id
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {continent.name}
                </button>
              ))}
            </div>

            {searchResults ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Search Results</h2>
                {searchResults.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-lg text-gray-600">No languages found matching "{searchTerm}"</p>
                  </div>
                ) : (
                  searchResults.map((result, idx) => (
                    <div key={idx} className="mb-8">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-primary-600" />
                        {continents.find(c => c.id === result.continent)?.name} - {result.region}
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {result.languages.map((language, lidx) => (
                          <div key={lidx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <h4 className="text-lg font-medium">{language.name}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(language.status)}`}>
                                {language.status.charAt(0).toUpperCase() + language.status.slice(1)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                              <span className="font-medium">Speakers:</span> {language.speakers}
                            </p>
                            <Link href={`/assessment?language=${encodeURIComponent(language.name)}`} className="mt-3 text-primary-600 hover:text-primary-800 text-sm flex items-center">
                              Assess this language <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
                <button
                  onClick={() => {
                    setSearchResults(null);
                    setSearchTerm("");
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
                >
                  Clear search results
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-primary-600" />
                  {continents.find(c => c.id === selectedContinent)?.name}
                </h2>
                {Object.entries(filteredData).map(([region, languages]) => (
                  <div key={region} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 pb-2 border-b">{region}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {languages.map((language, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-medium">{language.name}</h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(language.status)}`}>
                              {language.status.charAt(0).toUpperCase() + language.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Speakers:</span> {language.speakers}
                          </p>
                          <Link href={`/assessment?language=${encodeURIComponent(language.name)}`} className="mt-3 text-primary-600 hover:text-primary-800 text-sm flex items-center">
                            Assess this language <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Want to add a language to our database?</h2>
              <p className="text-gray-600 mb-6">
                If you don't see your language listed or have updated information about a language,
                we welcome your contribution to our global language database.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="mx-auto">
                  Contribute Language Data
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
"use client";

import React from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Search, Filter, BookOpen, Sparkles } from "lucide-react";

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
              Discover the rich tapestry of human language and help preserve our collective linguistic heritage for future generations.
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
              <h2 className="text-3xl font-bold text-gray-900">Featured Languages</h2>
              <div className="flex items-center">
                <button className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredLanguages.map((language, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        language.status === "Endangered" ? "bg-red-100 text-red-800" :
                        language.status === "Vulnerable" ? "bg-amber-100 text-amber-800" :
                        "bg-green-100 text-green-800"
                      }`}>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Language Families</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore languages grouped by their historical and linguistic relationships.
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
                  href={`/languages/families/${family.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2">{family.name}</h3>
                  <p className="text-gray-500 text-sm">{family.count} languages</p>
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
              Take our comprehensive language assessment to evaluate the digital resources available for your language and receive tailored recommendations.
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
              <h2 className="text-3xl font-bold text-gray-900">Educational Resources</h2>
              <Link href="/resources" className="text-primary font-medium hover:text-primary/80 flex items-center">
                View all resources <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Language Documentation Guide",
                  description: "Learn best practices for documenting endangered languages with our comprehensive guide.",
                  icon: BookOpen,
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  title: "Linguistic Fieldwork Methods",
                  description: "Practical techniques for conducting linguistic fieldwork in diverse communities.",
                  icon: Mic,
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  title: "Language Revitalization Strategies",
                  description: "Effective approaches to revitalize and maintain endangered languages across generations.",
                  icon: Users,
                  color: "bg-green-100 text-green-600"
                }
              ].map((resource, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <div className={`w-12 h-12 ${resource.color} rounded-lg flex items-center justify-center mb-4`}>
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link href="/resources" className="text-primary font-medium hover:text-primary/80 flex items-center">
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
