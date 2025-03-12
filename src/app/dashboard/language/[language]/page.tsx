
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Book, Globe, Newspaper, GraduationCap, Share2, AlertTriangle, Check, Download } from 'lucide-react';
import Layout from '@/app/components/layout';
import { Button } from '@/app/components/Button';
import Link from 'next/link';

export default function LanguageDetailPage() {
  const params = useParams();
  const languageName = decodeURIComponent(params.language as string);
  const [isLoading, setIsLoading] = useState(true);
  const [assessments, setAssessments] = useState([]);
  const [languageStats, setLanguageStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [assessmentsResponse, statsResponse] = await Promise.all([
          fetch('/api/assessments'),
          fetch('/api/language-stats')
        ]);

        const assessmentsData = await assessmentsResponse.json();
        const statsData = await statsResponse.json();

        if (assessmentsData.success) {
          // Filter assessments for this language
          const filteredAssessments = assessmentsData.data.filter(
            assessment => assessment.language.toLowerCase() === languageName.toLowerCase()
          );
          setAssessments(filteredAssessments);
        }

        if (statsData.success) {
          // Find stats for this language
          const langStats = statsData.data.find(
            stat => stat.language.toLowerCase() === languageName.toLowerCase()
          );
          setLanguageStats(langStats || null);
        }
      } catch (err) {
        console.error('Error fetching language data:', err);
        setError('Failed to load language data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [languageName]);

  const generateReportContent = () => {
    // This would be more sophisticated in a real app
    if (!languageStats) return '';
    
    return `Language Report: ${languageName}
Generated: ${new Date().toLocaleDateString()}

Overall Status: ${languageStats.needsSupport ? 'Needs Support' : 'Well Resourced'}
Total Assessments: ${assessments.length}
Average Score: ${languageStats.averageScore.toFixed(1)}

Resource Availability:
${getResourceSummary()}

Recommendations:
${getRecommendations()}
`;
  };

  const downloadReport = () => {
    const content = generateReportContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${languageName.toLowerCase().replace(/\s+/g, '-')}-language-report.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getResourceSummary = () => {
    if (assessments.length === 0) return 'No resource information available.';
    
    // Count different types of resources
    let dictCount = 0, websiteCount = 0, newsCount = 0, eduCount = 0;
    
    assessments.forEach(assessment => {
      if (assessment.resources) {
        if (assessment.resources.dictionary && assessment.resources.dictionary.exists) dictCount++;
        if (assessment.resources.website && assessment.resources.website.exists) websiteCount++;
        if (assessment.resources.news && assessment.resources.news.exists) newsCount++;
        if (assessment.resources.educationMaterials && assessment.resources.educationMaterials.exists) eduCount++;
      }
    });
    
    return `Dictionary resources: ${dictCount > 0 ? 'Available' : 'Not available'} (${dictCount}/${assessments.length})
Website resources: ${websiteCount > 0 ? 'Available' : 'Not available'} (${websiteCount}/${assessments.length})
News resources: ${newsCount > 0 ? 'Available' : 'Not available'} (${newsCount}/${assessments.length})
Educational materials: ${eduCount > 0 ? 'Available' : 'Not available'} (${eduCount}/${assessments.length})`;
  };

  const getRecommendations = () => {
    if (!languageStats) return 'Unable to generate recommendations.';
    
    if (languageStats.averageScore < 30) {
      return '- Urgent documentation needed\n- Basic digital dictionary creation\n- Speaker recording initiative\n- Teaching materials development';
    } else if (languageStats.averageScore < 50) {
      return '- Expand online presence\n- Develop mobile applications\n- Create digital learning resources\n- Community engagement program';
    } else if (languageStats.averageScore < 70) {
      return '- Advanced NLP tool development\n- Content creation incentives\n- Cross-platform integration\n- Academic research partnerships';
    } else {
      return '- Cultural heritage digitization\n- Knowledge exchange programs\n- Computational linguistics advancements\n- Content preservation strategies';
    }
  };

  // Display resource cards based on latest assessment
  const renderResourceCards = () => {
    if (assessments.length === 0) return null;
    
    // Get the most recent assessment with resources
    const recentAssessments = [...assessments].sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    const latestWithResources = recentAssessments.find(a => a.resources) || null;
    if (!latestWithResources) return null;
    
    const { resources } = latestWithResources;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Dictionary Resources */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Dictionary Resources</h3>
            <Book className="h-6 w-6 text-blue-600" />
          </div>
          
          {resources.dictionary && resources.dictionary.exists ? (
            <>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <p className="font-medium">Available</p>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong> {resources.dictionary.type || 'Not specified'}
              </p>
              {resources.dictionary.info && (
                <p className="text-sm text-gray-600">{resources.dictionary.info}</p>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <p className="text-gray-600">No dictionary resources reported</p>
            </div>
          )}
        </div>
        
        {/* Website Resources */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Website Resources</h3>
            <Globe className="h-6 w-6 text-purple-600" />
          </div>
          
          {resources.website && resources.website.exists ? (
            <>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <p className="font-medium">Available</p>
              </div>
              {resources.website.url && (
                <p className="text-sm text-gray-600 mb-1">
                  <strong>URL:</strong> {' '}
                  <a 
                    href={resources.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {resources.website.url}
                  </a>
                </p>
              )}
              {resources.website.info && (
                <p className="text-sm text-gray-600">{resources.website.info}</p>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <p className="text-gray-600">No website resources reported</p>
            </div>
          )}
        </div>
        
        {/* News Resources */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">News Resources</h3>
            <Newspaper className="h-6 w-6 text-amber-600" />
          </div>
          
          {resources.news && resources.news.exists ? (
            <>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <p className="font-medium">Available</p>
              </div>
              {resources.news.url && (
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Source:</strong> {' '}
                  {resources.news.url.startsWith('http') ? (
                    <a 
                      href={resources.news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {resources.news.url}
                    </a>
                  ) : (
                    resources.news.url
                  )}
                </p>
              )}
              {resources.news.info && (
                <p className="text-sm text-gray-600">{resources.news.info}</p>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <p className="text-gray-600">No news resources reported</p>
            </div>
          )}
        </div>
        
        {/* Educational Materials */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Educational Materials</h3>
            <GraduationCap className="h-6 w-6 text-green-600" />
          </div>
          
          {resources.educationMaterials && resources.educationMaterials.exists ? (
            <>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <p className="font-medium">Available</p>
              </div>
              {resources.educationMaterials.types && resources.educationMaterials.types.length > 0 && (
                <div className="mb-2">
                  <p className="text-sm text-gray-600 mb-1"><strong>Types:</strong></p>
                  <div className="flex flex-wrap gap-1">
                    {resources.educationMaterials.types.map(type => (
                      <span 
                        key={type} 
                        className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {resources.educationMaterials.info && (
                <p className="text-sm text-gray-600">{resources.educationMaterials.info}</p>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <p className="text-gray-600">No educational materials reported</p>
            </div>
          )}
        </div>
        
        {/* Social Media Presence */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-medium">Social Media Presence</h3>
            <Share2 className="h-6 w-6 text-indigo-600" />
          </div>
          
          {resources.socialMedia && resources.socialMedia.exists ? (
            <>
              <div className="flex items-center mb-2">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <p className="font-medium">Available</p>
              </div>
              {resources.socialMedia.platforms && resources.socialMedia.platforms.length > 0 && (
                <div className="mb-2">
                  <p className="text-sm text-gray-600 mb-1"><strong>Platforms:</strong></p>
                  <div className="flex flex-wrap gap-1">
                    {resources.socialMedia.platforms.map(platform => (
                      <span 
                        key={platform} 
                        className="inline-block px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {resources.socialMedia.info && (
                <p className="text-sm text-gray-600">{resources.socialMedia.info}</p>
              )}
            </>
          ) : (
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <p className="text-gray-600">No social media presence reported</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link href="/dashboard" className="mr-4">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{languageName} Language Report</h1>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
              <p className="mt-2 text-gray-600">Loading language data...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
              <p className="text-red-700">{error}</p>
            </div>
          ) : (
            <>
              {/* Language Statistics Summary */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Language Status Summary</h2>
                  <Button variant="outline" size="sm" onClick={downloadReport}>
                    <Download className="h-4 w-4 mr-2" />
                    Download Report
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                    {languageStats && (
                      <div className="flex items-center">
                        {languageStats.needsSupport ? (
                          <>
                            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                            <p className="text-lg font-semibold text-red-700">Needs Support</p>
                          </>
                        ) : (
                          <>
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <p className="text-lg font-semibold text-green-700">Well Resourced</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Assessment Score</h3>
                    {languageStats && (
                      <p className="text-2xl font-bold">
                        {languageStats.averageScore.toFixed(1)}%
                      </p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Total Assessments</h3>
                    <p className="text-2xl font-bold">{assessments.length}</p>
                  </div>
                </div>
              </div>
                
              {/* Resource Cards */}
              <h2 className="text-2xl font-bold mb-6">Available Resources</h2>
              {renderResourceCards()}
              
              {/* Assessment History */}
              <h2 className="text-2xl font-bold mb-6">Assessment History</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
                {assessments.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Assessment Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Score
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Resources Reported
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[...assessments]
                          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                          .map((assessment, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {new Date(assessment.timestamp).toLocaleDateString()} {new Date(assessment.timestamp).toLocaleTimeString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {assessment.percentage}%
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-wrap gap-1">
                                  {assessment.resources?.dictionary?.exists && (
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-1 rounded">
                                      Dictionary
                                    </span>
                                  )}
                                  {assessment.resources?.website?.exists && (
                                    <span className="inline-block bg-purple-100 text-purple-800 text-xs px-1 rounded">
                                      Website
                                    </span>
                                  )}
                                  {assessment.resources?.news?.exists && (
                                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-1 rounded">
                                      News
                                    </span>
                                  )}
                                  {assessment.resources?.educationMaterials?.exists && (
                                    <span className="inline-block bg-green-100 text-green-800 text-xs px-1 rounded">
                                      Educational
                                    </span>
                                  )}
                                  {assessment.resources?.socialMedia?.exists && (
                                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-1 rounded">
                                      Social Media
                                    </span>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="p-6 text-gray-500">No assessment history available.</p>
                )}
              </div>
              
              {/* Recommendations Section */}
              <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
              <div className="bg-white rounded-xl shadow-md p-6 mb-10">
                <div className="prose max-w-none">
                  {languageStats && languageStats.averageScore < 30 && (
                    <div className="mb-6">
                      <h3 className="text-red-700">Urgent Preservation Needed</h3>
                      <p>This language requires immediate documentation efforts:</p>
                      <ul>
                        <li>Document basic vocabulary and grammar structures</li>
                        <li>Record native speakers to preserve pronunciation and speaking patterns</li>
                        <li>Create a basic digital dictionary with phonetic guides</li>
                        <li>Develop elementary learning materials for community use</li>
                        <li>Apply for urgent preservation grants through UNESCO or similar organizations</li>
                      </ul>
                      <p>Our specialists can provide consultation on effective documentation methods.</p>
                    </div>
                  )}
                  
                  {languageStats && languageStats.averageScore >= 30 && languageStats.averageScore < 50 && (
                    <div className="mb-6">
                      <h3 className="text-amber-700">Digital Resources Development</h3>
                      <p>This language would benefit from expanded digital presence:</p>
                      <ul>
                        <li>Develop a comprehensive web-based dictionary</li>
                        <li>Create mobile applications for language learning</li>
                        <li>Build community spaces for speakers to connect</li>
                        <li>Produce digital educational content for schools</li>
                        <li>Establish language news outlets or blogs</li>
                      </ul>
                      <p>Our digital development team can assist with resource creation.</p>
                    </div>
                  )}
                  
                  {languageStats && languageStats.averageScore >= 50 && languageStats.averageScore < 75 && (
                    <div className="mb-6">
                      <h3 className="text-blue-700">Technical Enhancement</h3>
                      <p>This language has foundational resources but can benefit from technical advancements:</p>
                      <ul>
                        <li>Develop Natural Language Processing tools</li>
                        <li>Create machine translation capabilities</li>
                        <li>Build advanced search and retrieval systems for linguistic data</li>
                        <li>Develop speech recognition technology</li>
                        <li>Create corpus linguistics resources for researchers</li>
                      </ul>
                      <p>Our technology team specializes in computational linguistics solutions.</p>
                    </div>
                  )}
                  
                  {languageStats && languageStats.averageScore >= 75 && (
                    <div className="mb-6">
                      <h3 className="text-green-700">Preservation and Advancement</h3>
                      <p>This well-resourced language can focus on:</p>
                      <ul>
                        <li>Digitizing historical and cultural materials</li>
                        <li>Advanced computational linguistics research</li>
                        <li>Cross-language research initiatives</li>
                        <li>Development of specialized terminology for emerging fields</li>
                        <li>AI-powered content generation and translation</li>
                      </ul>
                      <p>Our research network offers collaboration opportunities for advanced language projects.</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
