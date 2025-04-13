import React, { useState } from 'react';
import { CheckCircle, Clock, AlertTriangle, BookOpen, Users, Database, Shield, Globe, Heart } from 'lucide-react';
import { FadeIn } from './FadeIn';

type StatusType = 'complete' | 'in-progress' | 'not-started';

const LanguagePreservationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Status indicators with their corresponding icons and colors
  const StatusIndicator = ({ status }: { status: StatusType }) => {
    if (status === 'complete') {
      return <CheckCircle className="text-green-500" size={20} />;
    } else if (status === 'in-progress') {
      return <Clock className="text-amber-500" size={20} />;
    } else {
      return <AlertTriangle className="text-red-500" size={20} />;
    }
  };
  
  // Status text with appropriate styling
  const StatusText = ({ status }: { status: StatusType }) => {
    if (status === 'complete') {
      return <span className="text-green-500 font-medium">Complete</span>;
    } else if (status === 'in-progress') {
      return <span className="text-amber-500 font-medium">In Progress</span>;
    } else {
      return <span className="text-red-500 font-medium">Not Started</span>;
    }
  };
  
  // Implementation criteria data
  const criteria = [
    {
      criterion: "Documentation Tools",
      requirements: "Comprehensive documentation system for language preservation",
      status: 'complete' as StatusType,
      details: "Implemented a robust documentation system with version control and collaborative features."
    },
    {
      criterion: "Learning Resources",
      requirements: "Interactive learning materials and courses",
      status: 'in-progress' as StatusType,
      details: "Developing interactive courses and learning materials with community input."
    },
    {
      criterion: "Community Engagement",
      requirements: "Active community participation and feedback mechanisms",
      status: 'in-progress' as StatusType,
      details: "Establishing community forums and feedback channels for continuous improvement."
    },
    {
      criterion: "Analytical Capabilities",
      requirements: "Advanced language analysis tools and metrics",
      status: 'not-started' as StatusType,
      details: "Planning to implement language analysis tools for tracking preservation progress."
    },
    {
      criterion: "Accessibility Considerations",
      requirements: "Universal access and inclusive design",
      status: 'in-progress' as StatusType,
      details: "Implementing accessibility features and testing with diverse user groups."
    },
    {
      criterion: "Long-term Sustainability",
      requirements: "Sustainable funding and maintenance plans",
      status: 'not-started' as StatusType,
      details: "Developing long-term sustainability strategies and funding models."
    }
  ];

  const platformCharacteristics = [
    {
      icon: BookOpen,
      title: "Comprehensive Documentation",
      description: "Platforms must provide tools for recording and storing language elements, from basic vocabulary to complex grammar structures.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Effective platforms enable community participation in language documentation and teaching, ensuring cultural authenticity.",
    },
    {
      icon: Database,
      title: "Digital Preservation",
      description: "Modern platforms must offer secure, scalable storage solutions that protect linguistic data for future generations.",
    },
    {
      icon: Shield,
      title: "Cultural Sensitivity",
      description: "Platforms should respect and protect cultural knowledge while making it accessible to authorized community members.",
    },
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kifuliiru Language{" "}
                <span className="text-primary-600">Preservation Platform</span>
              </h2>
              <p className="text-lg text-gray-600">Implementation Status Dashboard</p>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`mr-8 py-4 px-1 ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-primary-500 text-primary-600 font-medium'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('criteria')}
                  className={`mr-8 py-4 px-1 ${
                    activeTab === 'criteria'
                      ? 'border-b-2 border-primary-500 text-primary-600 font-medium'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Implementation Criteria
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`py-4 px-1 ${
                    activeTab === 'resources'
                      ? 'border-b-2 border-primary-500 text-primary-600 font-medium'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Resources
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">What is Language Preservation?</h2>
                    <p className="text-gray-600 mb-4">
                      Language preservation is the systematic effort to document, maintain, and revitalize languages, particularly those at risk of extinction. It encompasses not just the recording of vocabulary and grammar, but also the preservation of cultural contexts, oral traditions, and knowledge systems embedded within the language.
                    </p>
                    <p className="text-gray-600">
                      Effective language preservation requires collaboration between community members, linguists, technologists, and educators to create sustainable approaches that respect cultural autonomy while leveraging appropriate technologies.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">What is a Language Preservation Platform?</h2>
                    <p className="text-gray-600 mb-4">
                      A language preservation platform is a comprehensive technological ecosystem designed to support all aspects of language documentation, learning, and revitalization. It goes beyond simple digital dictionaries or applications to create an integrated environment where communities can collaborate, contribute, learn, and maintain their linguistic heritage.
                    </p>
                    <p className="text-gray-600">
                      An effective platform must balance technological innovation with community needs, ensuring accessibility across diverse contexts while providing sophisticated tools for documentation, analysis, and education.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">Essential Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {platformCharacteristics.map((characteristic, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                          <div className="bg-primary-50 p-6 rounded-lg">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 rounded-lg bg-white text-primary-600">
                                <characteristic.icon className="h-5 w-5" />
                              </div>
                              <h3 className="font-semibold text-gray-900">{characteristic.title}</h3>
                            </div>
                            <p className="text-gray-600">{characteristic.description}</p>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'criteria' && (
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Implementation Criteria</h2>
                    <p className="text-gray-600">Current status of our language preservation platform development</p>
                  </div>
                  
                  {/* Implementation Status Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Criteria
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            What Has To Be Done
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Where We Are
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {criteria.map((item) => (
                          <tr key={item.criterion} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{item.criterion}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-500">{item.requirements}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-500">{item.details}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <StatusIndicator status={item.status} />
                                <span className="ml-2">
                                  <StatusText status={item.status} />
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Summary Statistics */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <CheckCircle className="text-green-500 mr-2" size={24} />
                        <h3 className="text-lg font-medium text-green-800">Completed</h3>
                      </div>
                      <p className="mt-2 text-3xl font-bold text-green-700">
                        {criteria.filter(item => item.status === 'complete').length}
                      </p>
                      <p className="text-sm text-green-600">criteria fully implemented</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <Clock className="text-amber-500 mr-2" size={24} />
                        <h3 className="text-lg font-medium text-amber-800">In Progress</h3>
                      </div>
                      <p className="mt-2 text-3xl font-bold text-amber-700">
                        {criteria.filter(item => item.status === 'in-progress').length}
                      </p>
                      <p className="text-sm text-amber-600">criteria currently being developed</p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <AlertTriangle className="text-red-500 mr-2" size={24} />
                        <h3 className="text-lg font-medium text-red-800">Not Started</h3>
                      </div>
                      <p className="mt-2 text-3xl font-bold text-red-700">
                        {criteria.filter(item => item.status === 'not-started').length}
                      </p>
                      <p className="text-sm text-red-600">criteria planned for future implementation</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'resources' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
                  <p className="text-gray-600 mb-6">Additional resources and documentation for our language preservation platform</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium text-primary-700 mb-2">Technical Documentation</h3>
                      <p className="text-gray-600 mb-4">Comprehensive technical guides for developers and administrators</p>
                      <button className="text-primary-600 hover:text-primary-800 font-medium">
                        View Documentation →
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium text-primary-700 mb-2">User Guides</h3>
                      <p className="text-gray-600 mb-4">Step-by-step instructions for community members and language contributors</p>
                      <button className="text-primary-600 hover:text-primary-800 font-medium">
                        Access Guides →
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium text-primary-700 mb-2">Research Papers</h3>
                      <p className="text-gray-600 mb-4">Academic publications about our platform and methodologies</p>
                      <button className="text-primary-600 hover:text-primary-800 font-medium">
                        Browse Research →
                      </button>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-medium text-primary-700 mb-2">Case Studies</h3>
                      <p className="text-gray-600 mb-4">Success stories and implementation examples from language communities</p>
                      <button className="text-primary-600 hover:text-primary-800 font-medium">
                        Explore Case Studies →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer with Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="space-x-4">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Export Report
                </button>
                <button className="px-4 py-2 bg-primary-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-primary-700">
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LanguagePreservationDashboard; 