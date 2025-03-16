'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/app/components/layout';
import { BookOpen, FileSpreadsheet, ArrowRight } from 'lucide-react';

interface Language {
  id: number;
  name: string;
  code: string;
  id_country: number;
  country_name: string;
}

interface PaginatedResponse {
  items: Language[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export default function LanguagesPage() {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLanguages(currentPage);
  }, [currentPage]);

  const fetchLanguages = async (page: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/languages?page=${page}&limit=10`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: PaginatedResponse = await response.json();
      setLanguages(data.items || []);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching languages:', error);
      setError('Failed to load languages');
      setLanguages([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World Languages Directory
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive directory of languages from around the world,
            complete with detailed information and preservation status.
          </p>
        </div>
      </section>

      {/* Languages Table Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoading ? (
                  Array(10).fill(0).map((_, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                      </td>
                    </tr>
                  ))
                ) : !languages.length ? (
                  <tr>
                    <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                      No languages found
                    </td>
                  </tr>
                ) : (
                  languages.map((language) => (
                    <tr key={language.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{language.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.country_name || 'N/A'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-700">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1 || isLoading}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || isLoading}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <FileSpreadsheet className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Assess Your Language's Digital Presence
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a comprehensive evaluation of your language's current digital status
              and receive personalized recommendations for preservation.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our collection of materials designed to help you document,
              teach, and preserve your language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Documentation Guide",
                description: "Learn best practices for documenting your language"
              },
              {
                title: "Teaching Materials",
                description: "Resources for language education and transmission"
              },
              {
                title: "Digital Tools",
                description: "Technology solutions for language preservation"
              }
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}