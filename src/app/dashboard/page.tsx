'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  FileText, 
  Download, 
  Search, 
  AlertTriangle, 
  Check, 
  Loader2 
} from 'lucide-react';
import Layout from '../components/layout';
import { Button } from '../components/Button';

export default function LanguageDashboardPage() {
  const [stats, setStats] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'needs-support', 'well-resourced'

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [statsResponse, assessmentsResponse] = await Promise.all([
          fetch('/api/language-stats'),
          fetch('/api/assessments')
        ]);

        const statsData = await statsResponse.json();
        const assessmentsData = await assessmentsResponse.json();

        if (statsData.success) {
          setStats(statsData.data);
        }

        if (assessmentsData.success) {
          setAssessments(assessmentsData.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredStats = stats
    .filter(stat => {
      if (filter === 'needs-support') return stat.needsSupport;
      if (filter === 'well-resourced') return !stat.needsSupport;
      return true;
    })
    .filter(stat => 
      stat.language.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredAssessments = assessments
    .filter(assessment => {
      if (filter === 'needs-support') return assessment.percentage < 50;
      if (filter === 'well-resourced') return assessment.percentage >= 50;
      return true;
    })
    .filter(assessment => 
      assessment.language.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const generateCSV = (data) => {
    if (data.length === 0) return '';

    const headers = Object.keys(data[0]).filter(key => key !== 'answers');
    const csvRows = [];

    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    for (const item of data) {
      const values = headers.map(header => {
        const value = item[header];
        return typeof value === 'string' ? `"${value}"` : value;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  const downloadCSV = () => {
    const csv = generateCSV(assessments);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'language_assessments.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              <p className="text-lg">Loading dashboard data...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Language Preservation Dashboard</h1>
            <p className="text-lg text-gray-700">
              Monitor the status of languages assessed through our platform and identify preservation priorities.
            </p>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Total Languages</h3>
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold">{stats.length}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Need Support</h3>
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <p className="text-3xl font-bold">{stats.filter(s => s.needsSupport).length}</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Total Assessments</h3>
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <p className="text-3xl font-bold">{assessments.length}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold">Language Statistics</h2>
              
              <div className="text-sm text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-1 rounded mr-1">Dict</span> Dictionary
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-1 rounded mx-1">Web</span> Website
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-1 rounded mx-1">News</span> News
                <span className="inline-block bg-green-100 text-green-800 text-xs px-1 rounded ml-1">Edu</span> Education
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search languages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-primary focus:border-primary"
                  />
                </div>

                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                >
                  <option value="all">All Languages</option>
                  <option value="needs-support">Needs Support</option>
                  <option value="well-resourced">Well Resourced</option>
                </select>

                <Button onClick={downloadCSV} variant="outline" className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Export Data
                </Button>
              </div>
            </div>

            {filteredStats.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No languages match your search criteria.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Language
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assessments
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Average Score
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredStats.map((stat, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {stat.language}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {stat.count}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {Math.round(stat.averageScore / 70 * 100)}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {stat.needsSupport ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Needs Support
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Well Resourced
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Recent Assessments */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Recent Assessments</h2>

            {filteredAssessments.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No recent assessments match your search criteria.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Language
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAssessments.slice(0, 10).map((assessment) => (
                      <tr key={assessment.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <Link 
                            href={`/dashboard/language/${encodeURIComponent(assessment.language)}`}
                            className="text-primary hover:text-primary-dark hover:underline"
                          >
                            {assessment.language}</Link>
                          {assessment.resources && (
                            <div className="flex space-x-1 mt-1">
                              {assessment.resources.dictionary && assessment.resources.dictionary.exists && (
                                <span title="Has dictionary" className="inline-block bg-blue-100 text-blue-800 text-xs px-1 rounded">
                                  Dict
                                </span>
                              )}
                              {assessment.resources.website && assessment.resources.website.exists && (
                                <span title="Has website" className="inline-block bg-purple-100 text-purple-800 text-xs px-1 rounded">
                                  Web
                                </span>
                              )}
                              {assessment.resources.news && assessment.resources.news.exists && (
                                <span title="Has news sources" className="inline-block bg-yellow-100 text-yellow-800 text-xs px-1 rounded">
                                  News
                                </span>
                              )}
                              {assessment.resources.educationMaterials && assessment.resources.educationMaterials.exists && (
                                <span title="Has educational materials" className="inline-block bg-green-100 text-green-800 text-xs px-1 rounded">
                                  Edu
                                </span>
                              )}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {assessment.percentage}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {assessment.percentage < 50 ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Needs Support
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Well Resourced
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {new Date(assessment.timestamp).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}