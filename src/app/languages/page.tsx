'use client';

import React, { useEffect, useState } from "react";
import Layout from "@/app/components/layout";
import Link from "next/link";

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
  const [languageData, setLanguageData] = useState<ContinentData>({});
  const [loading, setLoading] = useState(true);
  const [selectedContinent, setSelectedContinent] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

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

  const continents = Object.keys(languageData);
  const regions = selectedContinent ? languageData[selectedContinent] : [];
  const countries = selectedRegion 
    ? regions.find(r => r.name === selectedRegion)?.countries
    : [];
  const languages = selectedCountry && countries
    ? countries.find(c => c.name === selectedCountry)?.languages
    : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">World Languages Directory</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Continent Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Continent
            </label>
            <select
              value={selectedContinent}
              onChange={(e) => {
                setSelectedContinent(e.target.value);
                setSelectedRegion("");
                setSelectedCountry("");
              }}
              className="w-full p-2 border rounded-md"
            >
              <option value="">All Continents</option>
              {continents.map((continent) => (
                <option key={continent} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
          </div>

          {/* Region Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Region
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setSelectedCountry("");
              }}
              className="w-full p-2 border rounded-md"
              disabled={!selectedContinent}
            >
              <option value="">All Regions</option>
              {regions.map((region) => (
                <option key={region.name} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          {/* Country Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full p-2 border rounded-md"
              disabled={!selectedRegion}
            >
              <option value="">All Countries</option>
              {countries?.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Languages Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Native Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Speakers
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Country
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {languages?.map((language, idx) => (
                <tr key={`${language.name}-${idx}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {language.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {language.native_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {language.speakers.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      language.status === 'official' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {language.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      {selectedCountry && (
                        <img
                          src={getCountryFlag(countries.find(c => c.name === selectedCountry)?.code || '')}
                          alt={selectedCountry}
                          className="w-5 h-4 mr-2"
                        />
                      )}
                      {selectedCountry}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}