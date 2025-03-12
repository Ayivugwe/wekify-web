'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, X, Loader2 } from 'lucide-react';
import Layout from '../components/layout';
import { Button } from '../components/Button';

const questions = [
  {
    id: 'speakers',
    question: 'How many native speakers does the language have?',
    options: [
      { value: 'many', label: 'Over 1 million speakers', score: 10 },
      { value: 'moderate', label: 'Between 100,000 and 1 million speakers', score: 5 },
      { value: 'few', label: 'Between 10,000 and 100,000 speakers', score: 2 },
      { value: 'endangered', label: 'Less than 10,000 speakers', score: 0 }
    ]
  },
  {
    id: 'documentation',
    question: 'How well is the language documented?',
    options: [
      { value: 'extensive', label: 'Comprehensive dictionary, grammar, and learning resources', score: 10 },
      { value: 'moderate', label: 'Basic dictionary and some grammar resources', score: 5 },
      { value: 'minimal', label: 'Limited documentation with significant gaps', score: 2 },
      { value: 'none', label: 'Almost no documentation exists', score: 0 }
    ]
  },
  {
    id: 'digital',
    question: 'What is the digital presence of the language?',
    options: [
      { value: 'strong', label: 'Available in major platforms, apps, and has online content', score: 10 },
      { value: 'moderate', label: 'Some online content but limited app support', score: 5 },
      { value: 'minimal', label: 'Very little online content or digital resources', score: 2 },
      { value: 'none', label: 'No significant digital presence', score: 0 }
    ]
  },
  {
    id: 'education',
    question: 'Is the language taught in schools?',
    options: [
      { value: 'extensively', label: 'Taught as a primary language in many schools', score: 10 },
      { value: 'somewhat', label: 'Taught as a subject in some schools', score: 5 },
      { value: 'rarely', label: 'Taught in very few educational settings', score: 2 },
      { value: 'never', label: 'Not taught in formal education', score: 0 }
    ]
  },
  {
    id: 'government',
    question: 'What is the official status of the language?',
    options: [
      { value: 'official', label: 'Official national or regional language', score: 10 },
      { value: 'recognized', label: 'Recognized minority language with some protections', score: 5 },
      { value: 'unrecognized', label: 'No official recognition but tolerated', score: 2 },
      { value: 'suppressed', label: 'Actively discouraged by authorities', score: 0 }
    ]
  },
  {
    id: 'intergenerational',
    question: 'Is the language being passed to younger generations?',
    options: [
      { value: 'strong', label: 'Most children learn it as their first language', score: 10 },
      { value: 'moderate', label: 'Some children learn it, but many do not', score: 5 },
      { value: 'weak', label: 'Few children are learning it', score: 2 },
      { value: 'none', label: 'Almost no intergenerational transmission', score: 0 }
    ]
  },
  {
    id: 'media',
    question: 'Is there media content in this language?',
    options: [
      { value: 'abundant', label: 'Extensive TV, radio, newspapers, and online content', score: 10 },
      { value: 'moderate', label: 'Some dedicated media outlets and content', score: 5 },
      { value: 'minimal', label: 'Very limited media presence', score: 2 },
      { value: 'none', label: 'No significant media content', score: 0 }
    ]
  },
];

export default function LanguageAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [languageName, setLanguageName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, answer, score) => {
    setAnswers({
      ...answers,
      [questionId]: { answer, score }
    });

    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((total, item) => total + item.score, 0);
  };

  const calculatePercentage = () => {
    const totalPossible = questions.length * 10;
    const score = calculateTotalScore();
    return Math.round((score / totalPossible) * 100);
  };

  const handleSubmit = async () => {
    if (!languageName.trim()) {
      alert('Please enter a language name');
      return;
    }

    setIsSubmitting(true);

    try {
      const totalScore = calculateTotalScore();
      const percentage = calculatePercentage();

      const assessmentData = {
        language: languageName,
        answers,
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
      alert('There was an error submitting your assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setLanguageName('');
    setResult(null);
  };

  // Render the intro step
  if (currentStep === 0) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Language Resource Assessment</h1>
              <p className="text-lg text-gray-700 mb-8">
                Determine if a language needs digital preservation and support. This assessment evaluates
                key factors like speaker population, documentation, and digital presence.
              </p>

              <div className="mb-8">
                <label htmlFor="language-name" className="block text-lg font-medium text-gray-700 mb-2">
                  Language Name
                </label>
                <input
                  type="text"
                  id="language-name"
                  value={languageName}
                  onChange={(e) => setLanguageName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  placeholder="e.g., Swahili, Navajo, Welsh"
                />
              </div>

              <Button onClick={() => setCurrentStep(1)} className="w-full justify-center">
                Start Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Render results
  if (currentStep > questions.length || result) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Assessment Results</h1>

              {!result && !isSubmitting ? (
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

                    <p className="text-lg font-medium">
                      {calculatePercentage() < 50 ? (
                        <span className="text-red-600">This language may need significant support.</span>
                      ) : (
                        <span className="text-green-600">This language has a relatively strong foundation.</span>
                      )}
                    </p>
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

                    {result.needsSupport ? (
                      <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-4">
                        <p className="text-red-700">
                          This language has been identified as needing support. Your assessment helps us understand where to focus our preservation efforts.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
                        <p className="text-green-700">
                          This language appears to be well-resourced. However, continued monitoring and support is important.
                        </p>
                      </div>
                    )}

                    <p className="text-gray-700">
                      Thank you for contributing to our language preservation efforts. This data will help inform our work and priorities.
                    </p>
                  </div>

                  <Button onClick={resetAssessment} className="w-full justify-center">
                    Start New Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Render questions
  const question = questions[currentStep - 1];

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl md:text-3xl font-bold">Assessing: {languageName}</h1>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                Question {currentStep} of {questions.length}
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-6">{question.question}</h2>

              <div className="space-y-4">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(question.id, option.value, option.score)}
                    className="w-full text-left p-4 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border ${answers[question.id]?.answer === option.value ? 'bg-primary border-primary' : 'border-gray-400'} mr-3 flex items-center justify-center`}>
                        {answers[question.id]?.answer === option.value && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span>{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 1}>
                Previous
              </Button>

              {currentStep === questions.length && (
                <Button onClick={() => setCurrentStep(questions.length + 1)}>
                  See Results <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>

            <div className="mt-8">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(currentStep / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}