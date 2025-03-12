"use client";

import React, { useState } from "react";
import Layout from "../components/layout";
import { Button } from "../components/ui/Button";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { assessmentQuestions } from "../lib/data/assessmentQuestions";
import Link from "next/link";

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [languageName, setLanguageName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    language: string;
    score: number;
    percentage: number;
    needsSupport: boolean;
  } | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const [resources, setResources] = useState({
    dictionary: {
      exists: false,
      type: "",
      format: [],
      info: ""
    },
    website: {
      exists: false,
      platforms: [],
      info: ""
    },
    news: {
      exists: false,
      types: [],
      info: ""
    },
    educationMaterials: {
      exists: false,
      types: [],
      info: ""
    }
  });

  const questions = assessmentQuestions;

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers({
      ...answers,
      [questionId]: score,
    });
  };

  const handleResourceToggle = (category: string, state: boolean) => {
    setResources(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        exists: state
      }
    }));
  };

  const handleResourceFieldChange = (category: string, field: string, value: string) => {
    setResources(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleMultiSelectChange = (category: string, field: string, value: string) => {
    const currentValues = resources[category][field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];

    setResources(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: newValues
      }
    }));
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((sum, score) => sum + score, 0);
  };

  const calculatePercentage = () => {
    const totalScore = calculateTotalScore();
    const maxPossibleScore = questions.length * 10;
    return Math.round((totalScore / maxPossibleScore) * 100);
  };

  const handleSubmit = async () => {
    if (!languageName.trim()) {
      alert('Please enter a language name');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      const totalScore = calculateTotalScore();
      const percentage = calculatePercentage();

      const assessmentData = {
        language: languageName,
        answers,
        resources,
        totalScore,
        percentage,
        timestamp: new Date().toISOString()
      };

      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessmentData),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResult({
          language: languageName,
          score: totalScore,
          percentage,
          needsSupport: percentage < 50
        });
      } else {
        throw new Error(data.error || 'Failed to save assessment');
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
      setSubmissionError(error.message || 'There was an error submitting your assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setLanguageName('');
    setResult(null);
    setSubmissionError(null);
  };

  if (currentStep === 0) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Language Assessment</h1>

              <p className="text-lg mb-8">
                This assessment will help determine the level of digital resources and support
                available for your indigenous language. Please provide the name of the language
                you would like to assess.
              </p>

              <div className="mb-8">
                <label htmlFor="language-name" className="block text-gray-700 text-sm font-medium mb-2">
                  Language Name
                </label>
                <input
                  type="text"
                  id="language-name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="e.g., Kifuliiru, Yoruba, etc."
                  value={languageName}
                  onChange={(e) => setLanguageName(e.target.value)}
                />
              </div>

              <div className="flex justify-end">
                <Button 
                  onClick={() => languageName ? setCurrentStep(1) : alert('Please enter a language name')}
                  className="justify-center"
                >
                  Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Assessment questions section
  if (currentStep === 1) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl md:text-4xl font-bold">Assessment: {languageName}</h1>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {Object.keys(answers).length}/{questions.length} Questions
                </span>
              </div>

              <div className="space-y-12 mb-10">
                {questions.map((question, index) => (
                  <div key={index} className="border-b border-gray-200 pb-10 last:border-0">
                    <div className="mb-4">
                      <h3 className="text-xl font-medium mb-2">{question.question}</h3>
                      <p className="text-gray-600">{question.description}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 mt-6">
                      {[
                        { value: 0, label: "Not at all", description: question.options[0] },
                        { value: 3, label: "Minimally", description: question.options[1] },
                        { value: 7, label: "Moderately", description: question.options[2] },
                        { value: 10, label: "Extensively", description: question.options[3] },
                      ].map((option) => (
                        <div 
                          key={option.value}
                          className={`border rounded-lg p-4 cursor-pointer transition-all hover:border-primary
                            ${answers[question.id] === option.value ? 'border-primary bg-primary/5' : 'border-gray-200'}`}
                          onClick={() => handleAnswer(question.id, option.value)}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3
                              ${answers[question.id] === option.value ? 'border-primary' : 'border-gray-300'}`}
                            >
                              {answers[question.id] === option.value && (
                                <div className="w-3 h-3 rounded-full bg-primary"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(0)}
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Back
                </Button>
                <Button 
                  onClick={() => {
                    if (Object.keys(answers).length === questions.length) {
                      setCurrentStep(2);
                    } else {
                      alert('Please answer all questions before proceeding');
                    }
                  }}
                >
                  Continue <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Resource information step
  if (currentStep === 2) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Additional Resource Information</h1>

              <p className="text-lg mb-8">
                Please provide details about existing resources for {languageName}.
                This information helps us better understand the current state of resources.
              </p>

              <div className="space-y-10">
                {/* Dictionary Resources */}
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">Dictionary Resources</h3>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-dictionary"
                          checked={!resources.dictionary.exists}
                          onChange={() => handleResourceToggle("dictionary", false)}
                        />
                        <span className="ml-2">No</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-dictionary"
                          checked={resources.dictionary.exists}
                          onChange={() => handleResourceToggle("dictionary", true)}
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                    </div>
                  </div>

                  {resources.dictionary.exists && (
                    <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Dictionary Type
                        </label>
                        <select
                          className="w-full p-2 border border-gray-300 rounded-md"
                          value={resources.dictionary.type}
                          onChange={(e) => handleResourceFieldChange("dictionary", "type", e.target.value)}
                        >
                          <option value="">Select type</option>
                          <option value="Print only">Print only</option>
                          <option value="Digital only">Digital only</option>
                          <option value="Both print and digital">Both print and digital</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Additional Information (optional)
                        </label>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={3}
                          placeholder="E.g., URLs, publication details, etc."
                          value={resources.dictionary.info}
                          onChange={(e) => handleResourceFieldChange("dictionary", "info", e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>

                {/* Website Resources */}
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">Website or Web Resources</h3>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-website"
                          checked={!resources.website.exists}
                          onChange={() => handleResourceToggle("website", false)}
                        />
                        <span className="ml-2">No</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-website"
                          checked={resources.website.exists}
                          onChange={() => handleResourceToggle("website", true)}
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                    </div>
                  </div>

                  {resources.website.exists && (
                    <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Additional Information (optional)
                        </label>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={3}
                          placeholder="E.g., website URLs, content types, etc."
                          value={resources.website.info}
                          onChange={(e) => handleResourceFieldChange("website", "info", e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>

                {/* News Resources */}
                <div className="border-b border-gray-200 pb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">News Resources</h3>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-news"
                          checked={!resources.news.exists}
                          onChange={() => handleResourceToggle("news", false)}
                        />
                        <span className="ml-2">No</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-news"
                          checked={resources.news.exists}
                          onChange={() => handleResourceToggle("news", true)}
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                    </div>
                  </div>

                  {resources.news.exists && (
                    <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Additional Information (optional)
                        </label>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={3}
                          placeholder="E.g., news sources, frequency, etc."
                          value={resources.news.info}
                          onChange={(e) => handleResourceFieldChange("news", "info", e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>

                {/* Educational Materials */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium">Educational Materials</h3>
                    <div className="flex items-center space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-education"
                          checked={!resources.educationMaterials.exists}
                          onChange={() => handleResourceToggle("educationMaterials", false)}
                        />
                        <span className="ml-2">No</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-primary"
                          name="has-education"
                          checked={resources.educationMaterials.exists}
                          onChange={() => handleResourceToggle("educationMaterials", true)}
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                    </div>
                  </div>

                  {resources.educationMaterials.exists && (
                    <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Additional Information (optional)
                        </label>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded-md"
                          rows={3}
                          placeholder="E.g., textbooks, learning apps, etc."
                          value={resources.educationMaterials.info}
                          onChange={(e) => handleResourceFieldChange("educationMaterials", "info", e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(currentStep - 1)} 
                  className="justify-center"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Back to Questions
                </Button>
                <Button 
                  onClick={handleSubmit} 
                  className="justify-center flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Submit Assessment <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>

              {submissionError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  <p>{submissionError}</p>
                  <p className="text-sm mt-1">Please try again or contact support if the problem persists.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Render results
  if (result) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Assessment Results</h1>

              {!isSubmitting ? (
                <>
                  <p className="text-lg text-gray-700 mb-6">
                    You've completed the assessment for <span className="font-semibold">{languageName}</span>.
                  </p>

                  <div className="bg-gray-100 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Summary</h2>
                    <p className="text-lg mb-4">
                      Score: <span className="font-bold">{calculateTotalScore()}</span> out of {questions.length * 10} ({calculatePercentage()}%)
                    </p>

                    <div className="w-full bg-gray-300 h-4 rounded-full mb-6">
                      <div 
                        className={`h-4 rounded-full ${calculatePercentage() < 50 ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${calculatePercentage()}%` }}
                      ></div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold mb-2">What this means:</h3>
                      {calculatePercentage() < 30 ? (
                        <p>Your language has very limited digital resources and requires significant support for preservation and revitalization.</p>
                      ) : calculatePercentage() < 50 ? (
                        <p>Your language has some digital resources but needs more support for comprehensive preservation.</p>
                      ) : calculatePercentage() < 70 ? (
                        <p>Your language has moderate digital resources but would benefit from additional support in specific areas.</p>
                      ) : (
                        <p>Your language has strong digital resources, with opportunities for further enhancement and innovation.</p>
                      )}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
                    <p className="mb-4">Based on your assessment, we recommend:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {calculatePercentage() < 50 ? (
                        <>
                          <li>Exploring our <Link href="/solutions/digital-content" className="text-primary hover:underline">Digital Content Platform</Link> to begin documenting your language</li>
                          <li>Connecting with our team for a <Link href="/contact" className="text-primary hover:underline">personalized consultation</Link></li>
                          <li>Reviewing our <Link href="/resources/getting-started" className="text-primary hover:underline">Getting Started guide</Link> for language preservation</li>
                        </>
                      ) : (
                        <>
                          <li>Exploring our <Link href="/solutions/integration-services" className="text-primary hover:underline">Integration Services</Link> to connect existing resources</li>
                          <li>Considering <Link href="/solutions/custom" className="text-primary hover:underline">Custom Solutions</Link> for unique language needs</li>
                          <li>Joining our <Link href="/resources/forum" className="text-primary hover:underline">Community Forum</Link> to connect with other language advocates</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={handleSubmit} className="flex-1 justify-center">
                      Save Results <Check className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" onClick={resetAssessment} className="flex-1 justify-center">
                      Start New Assessment
                    </Button>
                  </div>
                </>
              ) : isSubmitting ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                  <p className="text-lg">Saving your assessment...</p>
                </div>
              ) : (
                <>
                  <div className="bg-gray-100 rounded-lg p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">Results Saved</h2>
                      <div className={`px-4 py-1 rounded-full text-white ${result.needsSupport ? 'bg-red-500' : 'bg-green-500'}`}>
                        {result.needsSupport ? 'Needs Support' : 'Well Resourced'}
                      </div>
                    </div>

                    <p className="text-lg mb-4">
                      <span className="font-bold">{result.language}</span> scored {result.percentage}%
                    </p>

                    <p>Thank you for completing this assessment. Our team will review your submission and may reach out with additional resources specific to your language needs.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" onClick={resetAssessment} className="justify-center flex-1">
                      Assess Another Language
                    </Button>
                    <Link href="/dashboard" className="flex-1">
                      <Button className="w-full justify-center">
                        View All Assessments
                      </Button>
                    </Link>
                  </div>
                </>
              )}

              {submissionError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  <p>{submissionError}</p>
                  <p className="text-sm mt-1">Please try again or contact support if the problem persists.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return null;
}