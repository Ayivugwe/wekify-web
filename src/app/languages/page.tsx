
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
