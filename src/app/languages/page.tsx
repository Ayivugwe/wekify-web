'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/app/components/layout';
import { BookOpen, FileSpreadsheet, ArrowRight, Search, X, Globe2, Users, AlertTriangle } from 'lucide-react';
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
  const [dialogStates, setDialogStates] = useState<{[key: string]: {
    data: any[],
    searchTerm: string,
    currentPage: number,
    originalData: any[]
  }}>({
    continents: { data: [], searchTerm: '', currentPage: 1, originalData: [] },
    countries: { data: [], searchTerm: '', currentPage: 1, originalData: [] },
    currencies: { data: [], searchTerm: '', currentPage: 1, originalData: [] }
  });

  const fetchDialogData = async (type: 'continents' | 'countries' | 'currencies') => {
    try {
      const response = await fetch(`/api/${type}`);
      const data = await response.json();
      const items = data.items || [];
      setDialogStates(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          data: items,
          originalData: items
        }
      }));
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
  };

  useEffect(() => {
    if (showDialog) {
      fetchDialogData(showDialog);
    }
  }, [showDialog]);

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

            {/* Language Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <Globe2 className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">7,151</h3>
                <p className="text-gray-600 text-center">Known Languages</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">40%</h3>
                <p className="text-gray-600 text-center">Endangered Languages</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">1 Every 14 Days</h3>
                <p className="text-gray-600 text-center">Language Loss Rate</p>
              </div>
            </div>

            {/* Assessment CTA */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <h2 className="text-2xl font-bold mb-4">Assess Your Language</h2>
              <p className="text-gray-600 mb-6">
                Help us understand the digital presence and needs of your language. Our assessment tool provides insights and recommendations for language preservation and development.
              </p>
              <Link 
                href="/assessment" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

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
                    [...Array(10)].map((_, index) => (
                      <tr key={`loading-row-${index}`}>
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

      <Dialog
        isOpen={showDialog !== null}
        onClose={() => setShowDialog(null)}
        title={showDialog ? `${showDialog.charAt(0).toUpperCase()}${showDialog.slice(1)}` : ''}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded"
            value={showDialog ? dialogStates[showDialog].searchTerm : ''}
            onChange={(e) => {
              if (!showDialog) return;
              const searchTerm = e.target.value.toLowerCase();
              const originalData = dialogStates[showDialog].originalData;
              const filtered = originalData.filter((item: any) => 
                item.name.toLowerCase().includes(searchTerm) ||
                (item.code && item.code.toLowerCase().includes(searchTerm)) ||
                (item.symbol && item.symbol.toLowerCase().includes(searchTerm))
              );
              setDialogStates(prev => ({
                ...prev,
                [showDialog]: {
                  ...prev[showDialog],
                  searchTerm: e.target.value,
                  data: filtered
                }
              }));
            }}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                {showDialog === 'countries' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Continent</th>
                  </>
                )}
                {showDialog === 'currencies' && (
                  <>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(showDialog ? dialogStates[showDialog].data : []).map((item: any) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                  {showDialog === 'countries' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.continent_name}</td>
                    </>
                  )}
                  {showDialog === 'currencies' && (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.symbol}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showDialog && (
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={() => setDialogStates(prev => ({
                ...prev,
                [showDialog]: {
                  ...prev[showDialog],
                  currentPage: Math.max(1, prev[showDialog].currentPage - 1)
                }
              }))}
              className="px-4 py-2 border rounded text-sm"
              disabled={dialogStates[showDialog].currentPage === 1}
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {dialogStates[showDialog].currentPage}
            </span>
            <button
              onClick={() => setDialogStates(prev => ({
                ...prev,
                [showDialog]: {
                  ...prev[showDialog],
                  currentPage: prev[showDialog].currentPage + 1
                }
              }))}
              className="px-4 py-2 border rounded text-sm"
            >
              Next
            </button>
          </div>
        )}
      </Dialog>
    </Layout>
  );
}