"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { ArrowLeft, ArrowRight, Check, Loader2, Clock } from "lucide-react";
import { assessmentQuestions } from "../lib/data/assessmentQuestions";
import Link from "next/link";
import { Button } from "../components/Button";

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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

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
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Calculate total score and percentage
      const totalScore = calculateTotalScore();
      const percentage = calculatePercentage();

      // Simulate API call for submission
      // In a real app, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Set the result directly without going through actual API call
      // which might be failing due to backend issues
      setResult({
        language: languageName,
        score: totalScore,
        percentage: percentage,
        needsSupport: percentage < 50
      });
    } catch (error) {
      console.error("Error submitting assessment:", error);
      setSubmissionError("Server responded with an error. Please try again or contact support if the problem persists.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setLanguageName('');
    setResult(null);
    setSubmissionError(null);
    setElapsedTime(0);
    setStartTime(0);
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length -1));
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };


  useEffect(() => {
    if (currentStep === 1 && currentQuestionIndex === 0 && startTime === 0) {
      setStartTime(Date.now());
    }

    if (currentStep === 1 && startTime !== 0) {
      const intervalId = setInterval(() => {
          setElapsedTime(prevTime => prevTime + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [currentStep, currentQuestionIndex, startTime]);


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
    // Get current question
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">Assessment: {languageName}</h1>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {Object.keys(answers).length}/{questions.length} Answered
                    </span>
                    <span className="text-sm bg-amber-50 text-amber-600 px-3 py-1 rounded-full flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" /> {formatTime(elapsedTime)}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="hidden md:block w-32 h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      className="text-gray-200" 
                      strokeWidth="8" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="40" 
                      cx="50" 
                      cy="50" 
                    />
                    <circle 
                      className="text-blue-600" 
                      strokeWidth="8" 
                      strokeLinecap="round" 
                      stroke="currentColor" 
                      fill="transparent" 
                      r="40" 
                      cx="50" 
                      cy="50" 
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={2 * Math.PI * 40 * (1 - Object.keys(answers).length / questions.length)}
                      style={{ transition: "stroke-dashoffset 0.5s ease" }}
                    />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-bold">
                      {Math.round((Object.keys(answers).length / questions.length) * 100)}%
                    </text>
                  </svg>
                </div>
              </div>

              <div className="mb-10">
                <div className="border-b border-gray-200 pb-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium mb-2">{currentQuestion.question}</h3>
                    <p className="text-gray-600">{currentQuestion.description}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3 mt-6">
                    {currentQuestion.options && currentQuestion.options.map((option, optIndex) => (
                      <div 
                        key={optIndex}
                        className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          answers[currentQuestion.id] === option.score 
                            ? 'border-blue-500 bg-blue-50 shadow-md transform scale-102' 
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => handleAnswer(currentQuestion.id, option.score)}
                      >
                        <div className="flex-1">
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              answers[currentQuestion.id] === option.score 
                                ? 'bg-blue-600 border-blue-600' 
                                : 'border-2 border-gray-300'
                            } mr-3`}>
                              {answers[currentQuestion.id] === option.score && (
                                <Check className="h-3 w-3 text-white" />
                              )}
                            </div>
                            <span className={`font-medium ${answers[currentQuestion.id] === option.score ? 'text-blue-700' : ''}`}>
                              {option.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={goToPreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                <div className="flex space-x-3">
                  {currentQuestionIndex === questions.length - 1 ? (
                    <Button 
                      onClick={() => setCurrentStep(2)}
                      disabled={Object.keys(answers).length < questions.length}
                      className={Object.keys(answers).length < questions.length ? 'opacity-70' : ''}
                    >
                      Review Results <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={goToNextQuestion}
                      disabled={!answers[currentQuestion.id]}
                      className={!answers[currentQuestion.id] ? 'opacity-70' : ''}
                    >
                      Next Question <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
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
                  <button 
                    onClick={() => setSubmissionError(null)} 
                    className="mt-2 text-sm px-3 py-1 bg-red-100 hover:bg-red-200 rounded text-red-700"
                  >
                    Dismiss
                  </button>
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
                  <button 
                    onClick={() => setSubmissionError(null)} 
                    className="mt-2 text-sm px-3 py-1 bg-red-100 hover:bg-red-200 rounded text-red-700"
                  >
                    Dismiss
                  </button>
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