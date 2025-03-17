import React from "react";
import { Brain, Code, Globe, Server, Database, Mobile, Share2, BookOpen } from "lucide-react";
import Layout from "../components/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Wekify",
  description: "Digital solutions for language preservation and cultural revitalization",
  keywords: ["language preservation", "digital solutions", "technology", "indigenous languages"],
};

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Technology Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a technology company pushing boundaries in software development, AI, and digital transformation. While we're proud of our language preservation work, our expertise spans multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Tech Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-gray-600 mb-4">Enterprise-grade solutions, web applications, and specialized software tailored to your needs.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-purple-50 p-3 rounded-lg w-fit mb-6">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">Advanced AI solutions for process automation, data analysis, and intelligent systems.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-50 p-3 rounded-lg w-fit mb-6">
                <Mobile className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-4">Cross-platform mobile applications with cutting-edge features and seamless user experience.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-orange-50 p-3 rounded-lg w-fit mb-6">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data Solutions</h3>
              <p className="text-gray-600 mb-4">Big data processing, analytics, and intelligent database solutions for modern businesses.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-red-50 p-3 rounded-lg w-fit mb-6">
                <Server className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">Scalable cloud solutions, DevOps services, and infrastructure optimization.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="bg-teal-50 p-3 rounded-lg w-fit mb-6">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Language Technology</h3>
              <p className="text-gray-600 mb-4">Innovative solutions for language preservation and digital transformation of linguistic resources.</p>
            </div>
          </div>

          {/* Research & Innovation */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-8">Research & Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We're constantly exploring new technological frontiers through our R&D initiatives:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Current Research</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Advanced AI Applications</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Natural Language Processing</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Distributed Systems</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>Edge Computing Solutions</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Future Directions</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Quantum Computing Applications</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Advanced Cryptography</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Sustainable Tech Solutions</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Augmented Reality Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}