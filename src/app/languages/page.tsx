'use client';

import { useEffect, useState } from 'react';
import Layout from '@/app/components/layout';

interface Language {
  name: string;
  native_name: string;
  speakers: number;
  status: string;
}

interface PaginatedResponse {
  items: Language[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}

export default function LanguagesPage() {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLanguages(currentPage);
  }, [currentPage]);

  const fetchLanguages = async (page: number) => {
    try {
      const response = await fetch(`/api/languages?page=${page}&limit=10`);
      const data: PaginatedResponse = await response.json();
      setLanguages(data.items);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching languages:', error);
      setLoading(false);
    }
  };

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Languages</h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Native Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speakers</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {languages.map((language) => (
                <tr key={language.name}>
                  <td className="px-6 py-4 whitespace-nowrap">{language.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{language.native_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{language.speakers.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{language.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
}