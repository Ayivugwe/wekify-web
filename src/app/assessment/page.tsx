"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/app/components/Button";
import { FadeIn } from "../components/FadeIn";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, BookOpen, Globe, Database, Users, BookMarked, GraduationCap, BarChart2 } from "lucide-react";
import SEOMetadata from "../components/SEOMetadata";
import Layout from "../components/layout";
import { cn } from "@/lib/utils";

// Assessment criteria
const assessmentCriteria = [
  {
    id: "documentation",
    title: "Documentation Status",
    icon: <BookOpen className="w-5 h-5" />,
    description: "Evaluate the availability of dictionaries, grammars, and linguistic resources",
    options: [
      { value: 0, label: "Extensive documentation (multiple comprehensive resources)" },
      { value: 1, label: "Good documentation (at least one comprehensive grammar and dictionary)" },
      { value: 2, label: "Limited documentation (partial grammar or small dictionary)" },
      { value: 3, label: "Minimal documentation (word lists or brief descriptions only)" },
      { value: 4, label: "No documentation (no written resources available)" }
    ]
  },
  {
    id: "speakers",
    title: "Number of Speakers",
    icon: <Users className="w-5 h-5" />,
    description: "Estimate the current number of fluent speakers",
    options: [
      { value: 0, label: "More than 1,000,000 speakers" },
      { value: 1, label: "100,000 - 1,000,000 speakers" },
      { value: 2, label: "10,000 - 100,000 speakers" },
      { value: 3, label: "1,000 - 10,000 speakers" },
      { value: 4, label: "Fewer than 1,000 speakers" }
    ]
  },
  {
    id: "digitalPresence",
    title: "Digital Presence",
    icon: <Globe className="w-5 h-5" />,
    description: "Assess online resources, social media use, and digital tools",
    options: [
      { value: 0, label: "Extensive (operating systems, multiple apps, active online communities)" },
      { value: 1, label: "Good (some applications, active websites, social media presence)" },
      { value: 2, label: "Limited (few websites, minimal social media, basic digital tools)" },
      { value: 3, label: "Minimal (occasional online content, no dedicated tools)" },
      { value: 4, label: "None (no meaningful digital presence)" }
    ]
  },
  {
    id: "education",
    title: "Educational Support",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Evaluate language teaching in schools and educational institutions",
    options: [
      { value: 0, label: "Taught at all levels of education with dedicated programs" },
      { value: 1, label: "Taught in some schools with formal curriculum" },
      { value: 2, label: "Optional subject or extracurricular activity in some schools" },
      { value: 3, label: "Informal teaching only (community-led initiatives)" },
      { value: 4, label: "No educational programs available" }
    ]
  },
  {
    id: "mediaContent",
    title: "Media & Content",
    icon: <BookMarked className="w-5 h-5" />,
    description: "Assess availability of books, media, and entertainment",
    options: [
      { value: 0, label: "Wide range of media (TV, radio, publications, literature)" },
      { value: 1, label: "Regular media presence (some TV/radio, periodic publications)" },
      { value: 2, label: "Limited media (occasional broadcasts, few publications)" },
      { value: 3, label: "Minimal media (rare publications, no regular broadcasts)" },
      { value: 4, label: "No media content available" }
    ]
  },
  {
    id: "dataAvailability",
    title: "Data Availability",
    icon: <Database className="w-5 h-5" />,
    description: "Evaluate existing corpus, recordings, and language data",
    options: [
      { value: 0, label: "Extensive corpora and datasets readily available" },
      { value: 1, label: "Good data availability with some structured datasets" },
      { value: 2, label: "Limited structured data with some recordings available" },
      { value: 3, label: "Minimal data (scattered recordings or text samples)" },
      { value: 4, label: "No significant language data available" }
    ]
  }
];

export default function LanguageAssessment() {
  const [formData, setFormData] = useState({});
  const [languageName, setLanguageName] = useState("");
  const [results, setResults] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [languageSummary, setLanguageSummary] = useState(null);
  const [existingLanguages, setExistingLanguages] = useState(["Swahili", "Navajo", "Welsh", "French", "Spanish"]); // Sample data
  const [isSearching, setIsSearching] = useState(false);


  const handleOptionChange = (criteriaId, value) => {
    setFormData({
      ...formData,
      [criteriaId]: parseInt(value)
    });
  };

  const saveLanguageAssessment = async (resultsData) => {
    // Simulate saving to a database.  Replace with your actual database interaction.
    const existingAssessments = localStorage.getItem('languageAssessments') ? JSON.parse(localStorage.getItem('languageAssessments')) : {};
    existingAssessments[resultsData.languageName] = existingAssessments[resultsData.languageName] || [];
    existingAssessments[resultsData.languageName].push(resultsData);
    localStorage.setItem('languageAssessments', JSON.stringify(existingAssessments));

  };

  const getLanguageSummary = async (language) => {
      const existingAssessments = localStorage.getItem('languageAssessments') ? JSON.parse(localStorage.getItem('languageAssessments')) : {};
      if (!existingAssessments[language] || existingAssessments[language].length === 0) return null;
      const assessments = existingAssessments[language];
      const totalPercentage = assessments.reduce((sum, assessment) => sum + assessment.percentage, 0);
      const averagePercentage = (totalPercentage / assessments.length).toFixed(2);

      return { assessmentsCount: assessments.length, averagePercentage: parseFloat(averagePercentage) };
  };

  const searchLanguage = async () => {
    setIsSearching(true);
    const summary = await getLanguageSummary(languageName);
    setLanguageSummary(summary);
    setIsSearching(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate scores
    const totalScore = Object.values(formData).reduce((sum, val) => sum + val, 0);
    const maxPossibleScore = assessmentCriteria.length * 4; // Maximum score is 4 per criteria
    const percentage = (totalScore / maxPossibleScore) * 100;

    // Determine risk level and recommendations
    let riskLevel;
    let needsSupport;
    let recommendations;

    if (percentage >= 75) {
      riskLevel = "Critical Risk";
      needsSupport = true;
      recommendations = [
        "Urgent documentation needed",
        "Develop learning materials",
        "Create digital archives",
        "Establish speaker communities",
        "Develop language technology tools"
      ];
    } else if (percentage >= 50) {
      riskLevel = "High Risk";
      needsSupport = true;
      recommendations = [
        "Expand documentation",
        "Create digital presence",
        "Develop educational programs",
        "Support intergenerational transmission",
        "Build mobile applications"
      ];
    } else if (percentage >= 25) {
      riskLevel = "Moderate Risk";
      needsSupport = true;
      recommendations = [
        "Enhance digital resources",
        "Improve educational materials",
        "Strengthen community engagement",
        "Develop specialized content",
        "Create technology integrations"
      ];
    } else {
      riskLevel = "Low Risk";
      needsSupport = false;
      recommendations = [
        "Maintain current resources",
        "Consider advanced digital integration",
        "Develop specialized content",
        "Support continued education programs",
        "Monitor language vitality periodically"
      ];
    }

    const resultsData = {
      languageName,
      score: totalScore,
      maxScore: maxPossibleScore,
      percentage,
      riskLevel,
      needsSupport,
      recommendations,
      criteriaScores: { ...formData }
    };

    // Save to database
    await saveLanguageAssessment(resultsData);

    setResults(resultsData);
    setIsSubmitting(false);

    // Update the language summary after saving
    const summary = await getLanguageSummary(languageName);
    setLanguageSummary(summary);
  };

  const resetForm = () => {
    setFormData({});
    setLanguageName("");
    setResults(null);
    setLanguageSummary(null);
  };

  return (
    <Layout>
      <SEOMetadata
        title="Language Resource Assessment | Wekify"
        description="Evaluate if a language needs preservation support by assessing its current resources, speakers, and digital presence."
        keywords="language assessment, language preservation, endangered languages, language resources, language vitality"
      />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-20">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="mb-6">Language Resource Assessment</h1>
                <p className="text-xl mb-6">
                  Evaluate if a language needs preservation and digitization support based on current resources and vitality.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  {!results ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="mb-6">
                        <label htmlFor="languageName" className="block text-sm font-medium text-gray-700 mb-1">
                          Language Name
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            id="languageName"
                            value={languageName}
                            onChange={(e) => {
                              setLanguageName(e.target.value);
                              setLanguageSummary(null);
                            }}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter language name (e.g., Swahili, Navajo, Welsh)"
                            list="languagesList"
                          />
                          <Button
                            type="button"
                            size="sm"
                            onClick={searchLanguage}
                            disabled={isSearching || !languageName.trim()}
                          >
                            {isSearching ? "Searching..." : "Search"}
                          </Button>
                        </div>

                        <datalist id="languagesList">
                          {existingLanguages.map((lang, index) => (
                            <option key={index} value={lang} />
                          ))}
                        </datalist>

                        {languageSummary && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <h3 className="text-lg font-medium flex items-center gap-2 text-blue-800">
                              <BarChart2 className="h-5 w-5" />
                              Existing Assessment Data
                            </h3>
                            <p className="text-sm text-blue-700 mt-2">
                              {languageSummary.assessmentsCount} {languageSummary.assessmentsCount === 1 ? 'person has' : 'people have'} already assessed this language.
                            </p>
                            <div className="mt-2">
                              <div className="flex items-center justify-between text-sm mt-1">
                                <span className="text-gray-600">Risk Level:</span>
                                <span className={cn(
                                  "font-medium",
                                  languageSummary.averagePercentage >= 75 ? "text-red-600" :
                                    languageSummary.averagePercentage >= 50 ? "text-orange-600" :
                                      languageSummary.averagePercentage >= 25 ? "text-yellow-600" : "text-green-600"
                                )}>
                                  {languageSummary.averagePercentage >= 75 ? "Critical Risk" :
                                    languageSummary.averagePercentage >= 50 ? "High Risk" :
                                      languageSummary.averagePercentage >= 25 ? "Moderate Risk" : "Low Risk"}
                                </span>
                              </div>
                              <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                                <div
                                  className={cn(
                                    "absolute top-0 left-0 h-full",
                                    languageSummary.averagePercentage >= 75 ? "bg-red-500" :
                                      languageSummary.averagePercentage >= 50 ? "bg-orange-500" :
                                        languageSummary.averagePercentage >= 25 ? "bg-yellow-500" : "bg-green-500"
                                  )}
                                  style={{ width: `${languageSummary.averagePercentage}%` }}
                                ></div>
                              </div>
                            </div>
                            <p className="text-sm text-blue-700 mt-3">
                              Your assessment will be added to the existing data to improve accuracy.
                            </p>
                          </div>
                        )}
                      </div>

                      <h2 className="text-2xl font-bold mb-6">Assessment Criteria</h2>

                      {assessmentCriteria.map((criteria) => (
                        <div key={criteria.id} className="mb-8 p-6 border border-gray-200 rounded-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                              {criteria.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{criteria.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{criteria.description}</p>

                          <div className="space-y-3">
                            {criteria.options.map((option) => (
                              <div key={option.value} className="flex items-start">
                                <input
                                  type="radio"
                                  id={`${criteria.id}-${option.value}`}
                                  name={criteria.id}
                                  value={option.value}
                                  checked={formData[criteria.id] === option.value}
                                  onChange={(e) => handleOptionChange(criteria.id, e.target.value)}
                                  className="mt-1 mr-3"
                                  required
                                />
                                <label htmlFor={`${criteria.id}-${option.value}`} className="text-gray-700">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      <div className="text-center">
                        <Button type="submit" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? "Analyzing..." : "Analyze Language Vitality"} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="results">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Assessment Results</h2>
                        <p className="text-gray-600">Analysis for {results.languageName}</p>

                        <div className="my-8">
                          <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={cn(
                                "absolute top-0 left-0 h-full",
                                results.percentage >= 75 ? "bg-red-500" :
                                  results.percentage >= 50 ? "bg-orange-500" :
                                    results.percentage >= 25 ? "bg-yellow-500" : "bg-green-500"
                              )}
                              style={{ width: `${results.percentage}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-2 text-sm text-gray-600">
                            <span>Lower Risk</span>
                            <span>Higher Risk</span>
                          </div>
                        </div>

                        <div className={cn(
                          "inline-flex items-center px-4 py-2 rounded-full text-white font-medium",
                          results.percentage >= 75 ? "bg-red-500" :
                            results.percentage >= 50 ? "bg-orange-500" :
                              results.percentage >= 25 ? "bg-yellow-500" : "bg-green-500"
                        )}>
                          {results.riskLevel} - Score: {results.score}/{results.maxScore} ({Math.round(results.percentage)}%)
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Assessment Summary</h3>
                        <div className="p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-4">
                            {results.needsSupport ? (
                              <>
                                <AlertCircle className="text-red-500" />
                                <p className="font-medium">This language needs preservation support.</p>
                              </>
                            ) : (
                              <>
                                <CheckCircle className="text-green-500" />
                                <p className="font-medium">This language has sufficient resources.</p>
                              </>
                            )}
                          </div>
                          <p className="text-gray-700">
                            Based on the assessment, {results.languageName} {results.needsSupport
                              ? "requires assistance with preservation and digitization. The language shows significant gaps in resources that could affect its long-term viability."
                              : "appears to have good support and resources. The language has a solid foundation for continued use and development."}
                          </p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
                        <ul className="space-y-2">
                          {results.recommendations.map((recommendation, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ArrowRight className="min-w-5 h-5 text-blue-500 mt-0.5" />
                              <span>{recommendation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Detailed Criteria Scores</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          {assessmentCriteria.map((criteria) => {
                            const score = results.criteriaScores[criteria.id] || 0;
                            return (
                              <div key={criteria.id} className="p-4 border border-gray-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="p-1.5 bg-blue-50 rounded-md text-blue-600">
                                    {criteria.icon}
                                  </div>
                                  <h4 className="font-medium">{criteria.title}</h4>
                                </div>
                                <div className={cn(
                                  "text-sm font-medium",
                                  score >= 3 ? "text-red-500" :
                                    score >= 2 ? "text-orange-500" :
                                      score >= 1 ? "text-yellow-500" : "text-green-500"
                                )}>
                                  Score: {score}/4 - {score === 0 ? "Excellent" :
                                    score === 1 ? "Good" :
                                      score === 2 ? "Limited" :
                                        score === 3 ? "Minimal" : "None"}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex gap-4 justify-center mt-8">
                        {results.needsSupport && (
                          <Button href="/ambassador" variant="primary">
                            Become an Ambassador
                          </Button>
                        )}
                        <Button onClick={resetForm} variant="outline">
                          New Assessment
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Assess Language Resources?</h2>
              <p className="text-gray-700 mb-10">
                Understanding the current state of a language's resources and vitality is the first step in creating
                effective preservation strategies. This assessment helps identify specific areas that need support
                and development.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Identify Gaps</h3>
                  <p className="text-gray-600">Pinpoint specific resource gaps that need to be addressed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Prioritize Efforts</h3>
                  <p className="text-gray-600">Focus resources where they will have the greatest impact</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="p-3 bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Track Progress</h3>
                  <p className="text-gray-600">Measure improvements over time as preservation efforts advance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}