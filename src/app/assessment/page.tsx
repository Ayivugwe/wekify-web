'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, X, Loader2, ArrowLeft, BarChart } from 'lucide-react';
import Layout from '../components/layout';
import { Button } from '../components/Button';
import Link from 'next/link';

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
  const [resources, setResources] = useState({
    dictionary: { exists: false, type: '', info: '' },
    website: { exists: false, url: '', info: '' },
    news: { exists: false, url: '', info: '' },
    socialMedia: { exists: false, platforms: [], info: '' },
    educationMaterials: { exists: false, types: [], info: '' },
    contactInfo: { name: '', email: '', organization: '' }
  });

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

  const handleResourceChange = (category, field, value) => {
    setResources(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleMultiSelectChange = (category, field, value) => {
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

  // Resource collection form after completing the core assessment
  if (currentStep === questions.length + 1) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Resource Information</h1>
              <p className="text-lg text-gray-700 mb-8">
                Please share information about existing resources for {languageName}. This helps us better understand the current state and provide targeted recommendations.
              </p>
              
              <div className="space-y-8">
                {/* Dictionary Resources */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold mb-4">Dictionary Resources</h2>
                  <div className="mb-4">
                    <label className="inline-flex items-center mr-6">
                      <input
                        type="radio"
                        checked={resources.dictionary.exists}
                        onChange={() => handleResourceChange('dictionary', 'exists', true)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">Yes, dictionaries exist</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={!resources.dictionary.exists}
                        onChange={() => handleResourceChange('dictionary', 'exists', false)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">No dictionaries available</span>
                    </label>
                  </div>
                  
                  {resources.dictionary.exists && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Dictionary Type
                        </label>
                        <select
                          value={resources.dictionary.type}
                          onChange={(e) => handleResourceChange('dictionary', 'type', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select type</option>
                          <option value="print">Print only</option>
                          <option value="digital">Digital only</option>
                          <option value="both">Both print and digital</option>
                          <option value="app">Mobile app</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          value={resources.dictionary.info}
                          onChange={(e) => handleResourceChange('dictionary', 'info', e.target.value)}
                          placeholder="Dictionary name, publication date, publisher, URL if digital..."
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          rows={2}
                        ></textarea>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Website Resources */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold mb-4">Website Resources</h2>
                  <div className="mb-4">
                    <label className="inline-flex items-center mr-6">
                      <input
                        type="radio"
                        checked={resources.website.exists}
                        onChange={() => handleResourceChange('website', 'exists', true)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">Yes, websites exist</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={!resources.website.exists}
                        onChange={() => handleResourceChange('website', 'exists', false)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">No websites available</span>
                    </label>
                  </div>
                  
                  {resources.website.exists && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Website URL
                        </label>
                        <input
                          type="text"
                          value={resources.website.url}
                          onChange={(e) => handleResourceChange('website', 'url', e.target.value)}
                          placeholder="https://example.com"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Website Description
                        </label>
                        <textarea
                          value={resources.website.info}
                          onChange={(e) => handleResourceChange('website', 'info', e.target.value)}
                          placeholder="What content is available, who maintains it, etc."
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          rows={2}
                        ></textarea>
                      </div>
                    </>
                  )}
                </div>
                
                {/* News Resources */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold mb-4">News Resources</h2>
                  <div className="mb-4">
                    <label className="inline-flex items-center mr-6">
                      <input
                        type="radio"
                        checked={resources.news.exists}
                        onChange={() => handleResourceChange('news', 'exists', true)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">Yes, news sources exist</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={!resources.news.exists}
                        onChange={() => handleResourceChange('news', 'exists', false)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">No news sources available</span>
                    </label>
                  </div>
                  
                  {resources.news.exists && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          News Source URL or Name
                        </label>
                        <input
                          type="text"
                          value={resources.news.url}
                          onChange={(e) => handleResourceChange('news', 'url', e.target.value)}
                          placeholder="https://news.example.com or newspaper name"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          value={resources.news.info}
                          onChange={(e) => handleResourceChange('news', 'info', e.target.value)}
                          placeholder="Publication frequency, content type, audience reach..."
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          rows={2}
                        ></textarea>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Educational Materials */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold mb-4">Educational Materials</h2>
                  <div className="mb-4">
                    <label className="inline-flex items-center mr-6">
                      <input
                        type="radio"
                        checked={resources.educationMaterials.exists}
                        onChange={() => handleResourceChange('educationMaterials', 'exists', true)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">Yes, educational materials exist</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={!resources.educationMaterials.exists}
                        onChange={() => handleResourceChange('educationMaterials', 'exists', false)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">No educational materials available</span>
                    </label>
                  </div>
                  
                  {resources.educationMaterials.exists && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Types of Educational Materials (select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {['Textbooks', 'Online courses', 'Mobile apps', 'Videos', 'Audio lessons', 'Flashcards', 'Grammar guides'].map(type => (
                          <label key={type} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={resources.educationMaterials.types.includes(type)}
                              onChange={() => handleMultiSelectChange('educationMaterials', 'types', type)}
                              className="form-checkbox h-4 w-4 text-primary"
                            />
                            <span className="ml-2 text-sm">{type}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          value={resources.educationMaterials.info}
                          onChange={(e) => handleResourceChange('educationMaterials', 'info', e.target.value)}
                          placeholder="Where these materials can be found, target audience, effectiveness..."
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          rows={2}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Social Media Presence */}
                <div className="border-b pb-6">
                  <h2 className="text-xl font-semibold mb-4">Social Media Presence</h2>
                  <div className="mb-4">
                    <label className="inline-flex items-center mr-6">
                      <input
                        type="radio"
                        checked={resources.socialMedia.exists}
                        onChange={() => handleResourceChange('socialMedia', 'exists', true)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">Yes, social media content exists</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        checked={!resources.socialMedia.exists}
                        onChange={() => handleResourceChange('socialMedia', 'exists', false)}
                        className="form-radio h-5 w-5 text-primary"
                      />
                      <span className="ml-2">No social media presence</span>
                    </label>
                  </div>
                  
                  {resources.socialMedia.exists && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Platforms (select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {['Facebook', 'Twitter', 'Instagram', 'YouTube', 'TikTok', 'LinkedIn', 'WhatsApp'].map(platform => (
                          <label key={platform} className="inline-flex items-center">
                            <input
                              type="checkbox"
                              checked={resources.socialMedia.platforms.includes(platform)}
                              onChange={() => handleMultiSelectChange('socialMedia', 'platforms', platform)}
                              className="form-checkbox h-4 w-4 text-primary"
                            />
                            <span className="ml-2 text-sm">{platform}</span>
                          </label>
                        ))}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Information
                        </label>
                        <textarea
                          value={resources.socialMedia.info}
                          onChange={(e) => handleResourceChange('socialMedia', 'info', e.target.value)}
                          placeholder="Community size, active groups or channels, notable content creators..."
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                          rows={2}
                        ></textarea>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Contact Information */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Your Contact Information (Optional)</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    If you'd like to receive targeted recommendations or be notified of resources that become available for this language, please provide your contact information.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={resources.contactInfo.name}
                        onChange={(e) => handleResourceChange('contactInfo', 'name', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={resources.contactInfo.email}
                        onChange={(e) => handleResourceChange('contactInfo', 'email', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization (if applicable)
                    </label>
                    <input
                      type="text"
                      value={resources.contactInfo.organization}
                      onChange={(e) => handleResourceChange('contactInfo', 'organization', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
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
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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
                        <div className="flex items-start">
                          <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-red-800">This language needs support</h3>
                            <p className="text-red-700">
                              This language has been identified as needing preservation support. Your assessment helps us understand where to focus our efforts.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
                        <div className="flex items-start">
                          <Check className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                          <div>
                            <h3 className="font-bold text-green-800">Well-resourced language</h3>
                            <p className="text-green-700">
                              This language appears to be well-resourced. However, continued monitoring and support remains important.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-8 mb-8">
                      <h3 className="text-xl font-semibold mb-4">Recommendations for {result.language}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {result.percentage < 30 && (
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-2">Urgent Documentation Needed</h4>
                            <p className="text-sm text-gray-700">We recommend:</p>
                            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                              <li>Documentation of basic vocabulary and grammar</li>
                              <li>Recording native speakers</li>
                              <li>Creating a basic digital dictionary</li>
                              <li>Seeking grant funding for documentation projects</li>
                            </ul>
                            <div className="mt-3">
                              <Link href="/contact" className="text-blue-600 hover:underline text-sm font-medium">Contact our documentation team →</Link>
                            </div>
                          </div>
                        )}
                        
                        {result.percentage >= 30 && result.percentage < 50 && (
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-2">Digital Resources Development</h4>
                            <p className="text-sm text-gray-700">We recommend:</p>
                            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                              <li>Expanding existing documentation</li>
                              <li>Creating digital learning materials</li>
                              <li>Developing multimedia resources</li>
                              <li>Building online community spaces</li>
                            </ul>
                            <div className="mt-3">
                              <Link href="/services" className="text-blue-600 hover:underline text-sm font-medium">Learn about our digital services →</Link>
                            </div>
                          </div>
                        )}
                        
                        {result.percentage >= 50 && result.percentage < 75 && (
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-2">Enhancement Opportunities</h4>
                            <p className="text-sm text-gray-700">We recommend:</p>
                            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                              <li>Advanced natural language processing tools</li>
                              <li>AI-assisted translation services</li>
                              <li>Educational app development</li>
                              <li>Academic research partnerships</li>
                            </ul>
                            <div className="mt-3">
                              <Link href="/technology" className="text-blue-600 hover:underline text-sm font-medium">Explore our technology solutions →</Link>
                            </div>
                          </div>
                        )}
                        
                        {result.percentage >= 75 && (
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium text-blue-800 mb-2">Preservation and Advancement</h4>
                            <p className="text-sm text-gray-700">We recommend:</p>
                            <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                              <li>Cultural heritage digitization</li>
                              <li>Advanced computational linguistics</li>
                              <li>Cross-language research initiatives</li>
                              <li>Knowledge exchange programs</li>
                            </ul>
                            <div className="mt-3">
                              <Link href="/research" className="text-blue-600 hover:underline text-sm font-medium">Join our research network →</Link>
                            </div>
                          </div>
                        )}
                        
                        <div className="bg-violet-50 rounded-lg p-4">
                          <h4 className="font-medium text-violet-800 mb-2">Wekify Services Available</h4>
                          <p className="text-sm text-gray-700">Based on your assessment:</p>
                          <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                            <li>Technical consultation with our linguists</li>
                            <li>Resource development planning</li>
                            <li>Community outreach strategies</li>
                            <li>Grant application assistance</li>
                          </ul>
                          <div className="mt-3">
                            <Link href="/services" className="text-violet-600 hover:underline text-sm font-medium">View all services →</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      Thank you for contributing to our language preservation efforts. Your data will help inform our work and priorities.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={resetAssessment} className="justify-center flex-1">
                      Start New Assessment <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Link href="/dashboard" className="flex-1">
                      <Button variant="outline" className="w-full justify-center">
                        View All Assessments <BarChart className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // After all questions, proceed to resource collection
  if (currentStep === questions.length) {
    // Move to resource collection step
    setCurrentStep(questions.length + 1);
    return null;
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