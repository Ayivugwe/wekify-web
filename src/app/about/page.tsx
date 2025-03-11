
import React from "react";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Wekify</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Wekify, we are dedicated to the preservation and revitalization of indigenous languages through innovative digital solutions. Our mission is to empower communities to document, teach, and celebrate their linguistic heritage for future generations.
            </p>
            <p className="text-lg text-gray-700">
              We believe that language is the cornerstone of cultural identity, and we're committed to creating accessible tools that help communities maintain their linguistic traditions in an increasingly digital world.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Wekify was founded with a clear vision: to bridge the gap between traditional language preservation methods and modern technology. Our journey began with a focus on Kifuliiru, but has since expanded to support multiple indigenous languages facing similar challenges.
            </p>
            <p className="text-lg text-gray-700">
              Through partnerships with linguistic experts, community leaders, and technology innovators, we've developed a comprehensive platform that addresses the unique needs of language preservation initiatives worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-6">
              We take a community-centered approach to language preservation, recognizing that each language community has unique needs and goals. Our platform is designed to be flexible, accessible, and responsive to these diverse requirements.
            </p>
            <p className="text-lg text-gray-700">
              By combining cutting-edge technology with deep respect for cultural traditions, we create solutions that are both innovative and culturally appropriate.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
