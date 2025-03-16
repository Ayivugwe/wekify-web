
"use client";

import { useEffect, useState } from 'react';
import Layout from '@/app/components/layout';
import { Globe, Users, BookOpen, Activity } from 'lucide-react';

export default function LanguageDetailPage({ params }: { params: { id: string } }) {
  const [language, setLanguage] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/languages/${params.id}`)
      .then(res => res.json())
      .then(data => setLanguage(data.data));
  }, [params.id]);

  if (!language) return <div>Loading...</div>;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{language.name}</h1>
        {language.native_name && (
          <p className="text-xl text-gray-600 mb-8">Native name: {language.native_name}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Geographic Distribution</h2>
            </div>
            <p>Continent: {language.continent_name}</p>
            <p>Region: {language.region_name}</p>
            <p>Country: {language.country_name}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-xl font-semibold">Speakers</h2>
            </div>
            <p>{language.speakers?.toLocaleString()} native speakers</p>
          </div>
        </div>

        {language.description && (
          <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
            <div className="flex items-center mb-4">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-xl font-semibold">About</h2>
            </div>
            <p className="text-gray-700">{language.description}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
