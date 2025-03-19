"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  At Wekify LLC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our language preservation platform.
                </p>
                <p className="text-gray-600">
                  Please read this privacy policy carefully. By using our platform, you consent to the practices described in this policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Organization details</li>
                  <li>Account credentials</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Language Data</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Language content and materials</li>
                  <li>Audio and video recordings</li>
                  <li>Cultural context and metadata</li>
                  <li>Community contributions</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Usage Data</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Platform interaction data</li>
                  <li>Feature usage statistics</li>
                  <li>Technical logs and analytics</li>
                  <li>Device and browser information</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>To provide and maintain our language preservation services</li>
                  <li>To improve and personalize your experience</li>
                  <li>To communicate with you about our services</li>
                  <li>To protect and secure our platform</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Community members with appropriate permissions</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@wekify.com" className="text-primary-600 hover:text-primary-700">
                    privacy@wekify.com
                  </a>
                </p>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </Layout>
  );
} 