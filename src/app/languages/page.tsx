
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/app/components/layout';
import { BookOpen, FileSpreadsheet, ArrowRight, Search, X } from 'lucide-react';
import Dialog from '@/app/components/Dialog';

interface Language {
  id: number;
  name: string;
  native_name: string;
  status: string;
  speakers: number;
  countries: string;
  region: string;
  continent: string;
}

interface FilterParams {
  search: string;
  continent: string;
  region: string;
}

export default function LanguagesPage() {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterParams>({
    search: '',
    continent: '',
    region: '',
  });
  const [showDialog, setShowDialog] = useState<'continents' | 'countries' | 'currencies' | null>(null);

  useEffect(() => {
    fetchLanguages(currentPage);
  }, [currentPage, filters]);

  const fetchLanguages = async (page: number) => {
    try {
      setIsLoading(true);
      setError(null);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        ...filters,
      });

      const response = await fetch(`/api/languages?${params}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
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

  const handleFilterChange = (key: keyof FilterParams, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchLanguages(1);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              World Languages Directory
            </h1>
            
            {/* Search and Filters */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  placeholder="Search languages..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="flex-1 p-2 border rounded-lg"
                />
                <select
                  value={filters.continent}
                  onChange={(e) => handleFilterChange('continent', e.target.value)}
                  className="p-2 border rounded-lg"
                >
                  <option value="">All Continents</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Oceania">Oceania</option>
                </select>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Search
                </button>
              </div>
            </form>

            {/* Quick Access Buttons */}
            <div className="flex gap-4 mb-8 justify-center">
              <button
                onClick={() => setShowDialog('continents')}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                View Continents
              </button>
              <button
                onClick={() => setShowDialog('countries')}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                View Countries
              </button>
              <button
                onClick={() => setShowDialog('currencies')}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              >
                View Currencies
              </button>
            </div>

            {/* Languages Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Native Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speakers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Countries</th>
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
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
                        </td>
                      </tr>
                    ))
                  ) : !languages.length ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No languages found
                      </td>
                    </tr>
                  ) : (
                    languages.map((language) => (
                      <tr key={language.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{language.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.native_name || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.speakers?.toLocaleString() || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.status || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.region || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{language.countries || 'N/A'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
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
        </div>
      </section>
    </Layout>
  );
}
