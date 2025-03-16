
'use client';
import { useState, useEffect } from 'react';
import Layout from '@/app/components/layout';

export default function ContinentsPage() {
  const [continents, setContinents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContinents();
  }, [searchTerm]);

  const fetchContinents = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/continents`);
      const data = await response.json();
      setContinents(data.items || []);
    } catch (error) {
      console.error('Error fetching continents:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Continents Directory
            </h1>

            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search continents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Continents Table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
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
                      </tr>
                    ))
                  ) : (
                    continents.map((continent: any) => (
                      <tr key={continent.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{continent.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{continent.code}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
