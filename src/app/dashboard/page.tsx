
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/Button";
import { FadeIn } from "../components/FadeIn";
import { ArrowLeft, BarChart2, Download, DownloadCloud, FileText, Globe, Info, PieChart, Search } from "lucide-react";
import SEOMetadata from "../components/SEOMetadata";
import Layout from "../components/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getAllLanguagesSummary, getLanguageAssessments } from "@/lib/database";

export default function Dashboard() {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [languageDetails, setLanguageDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("risk"); // risk, count, name
  const [sortDirection, setSortDirection] = useState("desc");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await getAllLanguagesSummary();
      setSummaries(data);
      setLoading(false);
    };

    loadData();
  }, []);

  const handleViewDetails = async (language) => {
    setSelectedLanguage(language);
    const details = await getLanguageAssessments(language.languageName);
    setLanguageDetails(details);
  };

  const handleBack = () => {
    setSelectedLanguage(null);
    setLanguageDetails(null);
  };

  const sortedSummaries = [...summaries]
    .filter(lang => lang.languageName.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "risk") {
        return sortDirection === "desc" 
          ? b.averagePercentage - a.averagePercentage 
          : a.averagePercentage - b.averagePercentage;
      } else if (sortBy === "count") {
        return sortDirection === "desc" 
          ? b.assessmentsCount - a.assessmentsCount 
          : a.assessmentsCount - b.assessmentsCount;
      } else {
        return sortDirection === "desc" 
          ? b.languageName.localeCompare(a.languageName) 
          : a.languageName.localeCompare(b.languageName);
      }
    });

  const generateCsv = (data) => {
    // Create CSV header
    const headers = ["Language", "Assessments Count", "Average Risk %", "Risk Level", "Needs Support"];
    
    // Format data rows
    const rows = data.map(lang => [
      lang.languageName,
      lang.assessmentsCount,
      lang.averagePercentage.toFixed(2),
      lang.averagePercentage >= 75 ? "Critical Risk" :
      lang.averagePercentage >= 50 ? "High Risk" :
      lang.averagePercentage >= 25 ? "Moderate Risk" : "Low Risk",
      lang.needsSupport ? "Yes" : "No"
    ]);
    
    // Combine header and rows
    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");
    
    return csvContent;
  };

  const handleDownloadCsv = () => {
    const csvContent = generateCsv(sortedSummaries);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "language_assessments.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateLanguageReport = (language, details) => {
    // Create CSV header
    const headers = ["Date", "Score", "Max Score", "Risk %", "Risk Level", "Needs Support"];
    
    // Add criteria headers
    if (details.length > 0 && details[0].criteriaScores) {
      Object.keys(details[0].criteriaScores).forEach(key => {
        headers.push(`${key} Score`);
      });
    }
    
    // Format data rows
    const rows = details.map(assessment => {
      const baseData = [
        new Date(assessment.timestamp).toLocaleDateString(),
        assessment.score,
        assessment.maxScore,
        assessment.percentage.toFixed(2),
        assessment.riskLevel,
        assessment.needsSupport ? "Yes" : "No"
      ];
      
      // Add criteria scores
      if (assessment.criteriaScores) {
        Object.values(assessment.criteriaScores).forEach(score => {
          baseData.push(score);
        });
      }
      
      return baseData;
    });
    
    // Combine header and rows
    const csvContent = [
      [`Language Assessment Report for ${language.languageName}`],
      [`Generated on ${new Date().toLocaleDateString()}`],
      [""],
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");
    
    return csvContent;
  };

  const handleDownloadLanguageReport = () => {
    if (!selectedLanguage || !languageDetails) return;
    
    const csvContent = generateLanguageReport(selectedLanguage, languageDetails);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${selectedLanguage.languageName.toLowerCase()}_assessment_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <SEOMetadata
        title="Language Assessment Dashboard | Wekify"
        description="View statistics and reports for language assessments. Analyze trends and identify languages that need preservation support."
        keywords="language assessment, dashboard, statistics, language preservation, data analysis"
      />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-16">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <h1 className="mb-6 text-center">{selectedLanguage ? selectedLanguage.languageName : "Language Assessment Dashboard"}</h1>
                {!selectedLanguage ? (
                  <p className="text-xl mb-6 text-center">
                    View assessment data for all languages and generate reports for analysis.
                  </p>
                ) : (
                  <p className="text-xl mb-6 text-center">
                    Detailed assessment data for {selectedLanguage.languageName}.
                  </p>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {!selectedLanguage ? (
                <>
                  <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="relative w-full md:w-auto">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search languages..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                      <select 
                        className="px-4 py-2 border border-gray-300 rounded-md"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="risk">Sort by Risk</option>
                        <option value="count">Sort by Assessment Count</option>
                        <option value="name">Sort by Name</option>
                      </select>
                      <Button 
                        size="sm" 
                        onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
                      >
                        {sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}
                      </Button>
                      <Button 
                        size="sm"
                        variant="secondary"
                        onClick={handleDownloadCsv}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" /> Export CSV
                      </Button>
                    </div>
                  </div>

                  {loading ? (
                    <div className="text-center py-20">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
                      <p className="mt-4 text-gray-600">Loading language data...</p>
                    </div>
                  ) : summaries.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-lg">
                      <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Language Assessments</h2>
                      <p className="text-gray-600 mb-6">No languages have been assessed yet.</p>
                      <Link href="/assessment">
                        <Button>Assess a Language</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-medium text-sm text-gray-500 px-4 pb-2">
                        <div>Language</div>
                        <div>Assessments</div>
                        <div>Risk Level</div>
                        <div className="text-right">Actions</div>
                      </div>
                      {sortedSummaries.map((lang, index) => (
                        <div 
                          key={index} 
                          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div>
                            <h3 className="font-semibold text-lg">{lang.languageName}</h3>
                            <p className="text-gray-500 text-sm">
                              {lang.needsSupport ? "Needs preservation support" : "Has sufficient resources"}
                            </p>
                          </div>
                          <div>
                            <div className="text-lg font-medium">{lang.assessmentsCount}</div>
                            <p className="text-gray-500 text-sm">Total assessments</p>
                          </div>
                          <div>
                            <div className="flex items-center">
                              <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={cn(
                                    "absolute top-0 left-0 h-full",
                                    lang.averagePercentage >= 75 ? "bg-red-500" :
                                    lang.averagePercentage >= 50 ? "bg-orange-500" :
                                    lang.averagePercentage >= 25 ? "bg-yellow-500" : "bg-green-500"
                                  )}
                                  style={{ width: `${lang.averagePercentage}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 min-w-[40px] text-sm">{lang.averagePercentage.toFixed(0)}%</span>
                            </div>
                            <p className="text-sm mt-1">
                              <span className={cn(
                                "font-medium",
                                lang.averagePercentage >= 75 ? "text-red-600" :
                                lang.averagePercentage >= 50 ? "text-orange-600" :
                                lang.averagePercentage >= 25 ? "text-yellow-600" : "text-green-600"
                              )}>
                                {lang.averagePercentage >= 75 ? "Critical Risk" :
                                lang.averagePercentage >= 50 ? "High Risk" :
                                lang.averagePercentage >= 25 ? "Moderate Risk" : "Low Risk"}
                              </span>
                            </p>
                          </div>
                          <div className="text-right">
                            <Button 
                              size="sm" 
                              onClick={() => handleViewDetails(lang)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <div className="mb-8">
                    <Button onClick={handleBack} size="sm" variant="secondary" className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" /> Back to List
                    </Button>
                  </div>
                  
                  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                    <div className="flex flex-col md:flex-row gap-6 justify-between mb-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{selectedLanguage.languageName}</h2>
                        <p className="text-gray-600">{selectedLanguage.assessmentsCount} total assessments</p>
                        
                        <div className="mt-4">
                          <div className="flex items-center mt-1">
                            <span className="text-gray-600 mr-2">Average Risk Level:</span>
                            <span className={cn(
                              "font-medium",
                              selectedLanguage.averagePercentage >= 75 ? "text-red-600" :
                              selectedLanguage.averagePercentage >= 50 ? "text-orange-600" :
                              selectedLanguage.averagePercentage >= 25 ? "text-yellow-600" : "text-green-600"
                            )}>
                              {selectedLanguage.averagePercentage >= 75 ? "Critical Risk" :
                              selectedLanguage.averagePercentage >= 50 ? "High Risk" :
                              selectedLanguage.averagePercentage >= 25 ? "Moderate Risk" : "Low Risk"}
                            </span>
                          </div>
                          
                          <div className="relative h-2 w-full max-w-md bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div 
                              className={cn(
                                "absolute top-0 left-0 h-full",
                                selectedLanguage.averagePercentage >= 75 ? "bg-red-500" :
                                selectedLanguage.averagePercentage >= 50 ? "bg-orange-500" :
                                selectedLanguage.averagePercentage >= 25 ? "bg-yellow-500" : "bg-green-500"
                              )}
                              style={{ width: `${selectedLanguage.averagePercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        onClick={handleDownloadLanguageReport}
                        variant="secondary"
                        className="flex items-center gap-2 self-start"
                      >
                        <FileText className="h-4 w-4" /> Download Full Report
                      </Button>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Top Recommendations</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedLanguage.topRecommendations.map((rec, idx) => (
                          <li key={idx} className="text-gray-700">{rec}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Assessment History</h3>
                      {languageDetails && languageDetails.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="py-2 px-4 border text-left">Date</th>
                                <th className="py-2 px-4 border text-left">Risk Level</th>
                                <th className="py-2 px-4 border text-left">Score</th>
                                <th className="py-2 px-4 border text-left">Risk %</th>
                              </tr>
                            </thead>
                            <tbody>
                              {languageDetails.map((assessment, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  <td className="py-2 px-4 border">
                                    {assessment.timestamp ? new Date(assessment.timestamp).toLocaleDateString() : "N/A"}
                                  </td>
                                  <td className="py-2 px-4 border">
                                    <span className={cn(
                                      "font-medium",
                                      assessment.percentage >= 75 ? "text-red-600" :
                                      assessment.percentage >= 50 ? "text-orange-600" :
                                      assessment.percentage >= 25 ? "text-yellow-600" : "text-green-600"
                                    )}>
                                      {assessment.riskLevel}
                                    </span>
                                  </td>
                                  <td className="py-2 px-4 border">{assessment.score} / {assessment.maxScore}</td>
                                  <td className="py-2 px-4 border">{assessment.percentage.toFixed(1)}%</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-gray-500">No detailed assessment history available.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
