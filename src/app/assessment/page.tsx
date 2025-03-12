
"use client";

import React, { useState } from "react";
import { Button } from "@/app/components/Button";
import { FadeIn } from "../components/FadeIn";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, BookOpen, Globe, Database, Users, BookMarked, GraduationCap } from "lucide-react";
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

  const handleOptionChange = (criteriaId, value) => {
    setFormData({
      ...formData,
      [criteriaId]: parseInt(value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate total score
    const values = Object.values(formData);
    const totalScore = values.reduce((sum, value) => sum + value, 0);
    const maxPossibleScore = assessmentCriteria.length * 4;
    const percentage = (totalScore / maxPossibleScore) * 100;
    
    // Determine risk level and recommendations
    let riskLevel, recommendations, needsSupport;
    
    if (percentage >= 75) {
      riskLevel = "Critical Risk";
      needsSupport = true;
      recommendations = [
        "Immediate documentation efforts needed",
        "Community engagement and revitalization programs",
        "Digital preservation of existing materials",
        "Development of basic learning resources",
        "Recording of fluent speakers urgently required"
      ];
    } else if (percentage >= 50) {
      riskLevel = "High Risk";
      needsSupport = true;
      recommendations = [
        "Structured documentation program required",
        "Development of educational materials",
        "Creation of digital presence and tools",
        "Community language programs",
        "Media development in the language"
      ];
    } else if (percentage >= 25) {
      riskLevel = "Moderate Risk";
      needsSupport = true;
      recommendations = [
        "Expand existing documentation",
        "Develop more advanced learning resources",
        "Enhance digital tools and presence",
        "Support media creation",
        "Formalize educational programs"
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
    
    setResults({
      languageName,
      score: totalScore,
      maxScore: maxPossibleScore,
      percentage,
      riskLevel,
      needsSupport,
      recommendations,
      criteriaScores: { ...formData }
    });
  };

  const resetForm = () => {
    setFormData({});
    setLanguageName("");
    setResults(null);
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
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                {!results ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <label htmlFor="languageName" className="block text-lg font-medium mb-2">
                        Language Name
                      </label>
                      <input
                        type="text"
                        id="languageName"
                        value={languageName}
                        onChange={(e) => setLanguageName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter language name"
                        required
                      />
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
                      <Button type="submit" size="lg">
                        Analyze Language Vitality <ArrowRight className="ml-2 h-5 w-5" />
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
