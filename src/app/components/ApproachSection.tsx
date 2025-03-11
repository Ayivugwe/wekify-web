
import React from "react";
import { Code, Shapes, Database, LayoutGrid } from "lucide-react";

const ApproachSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Technical Approach</h2>
          <p className="max-w-3xl mx-auto">
            We combine cutting-edge technology with linguistic expertise to create sustainable, scalable solutions for language preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="bg-primary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Database className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Robust Data Architecture</h3>
            <p className="mb-4">
              We've developed a specialized database schema optimized for linguistic data, capturing complex relationships between words, meanings, and cultural contexts.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                Flexible schema supporting diverse language structures
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                Comprehensive metadata for linguistic analysis
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-primary">•</span>
                Efficient search and retrieval systems
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="bg-secondary/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Code className="text-secondary h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Web Technologies</h3>
            <p className="mb-4">
              Our platform is built with the latest web technologies, ensuring fast, responsive experiences across all devices.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center">
                <span className="mr-2 text-secondary">•</span>
                Next.js for performant, SEO-friendly interfaces
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">•</span>
                Progressive Web App capabilities for offline access
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-secondary">•</span>
                Responsive design optimized for all screen sizes
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="bg-accent/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Shapes className="text-accent h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Machine Learning Integration</h3>
            <p className="mb-4">
              We leverage AI to enhance language documentation, learning, and analysis capabilities.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center">
                <span className="mr-2 text-accent">•</span>
                Natural Language Processing for semantic analysis
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-accent">•</span>
                Automated speech recognition for audio transcription
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-accent">•</span>
                Adaptive learning algorithms for personalized education
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="bg-success/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <LayoutGrid className="text-success h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Modular Architecture</h3>
            <p className="mb-4">
              Our platform is built with modularity in mind, allowing for customization and extension to suit specific language needs.
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center">
                <span className="mr-2 text-success">•</span>
                Microservices-based backend for scalability
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-success">•</span>
                API-first design for integration with existing systems
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-success">•</span>
                Extensible framework for custom language features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
