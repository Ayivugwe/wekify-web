"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing or using Wekify's language preservation platform, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our platform.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-600 mb-4">
                  Wekify provides a platform for language preservation, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Digital language documentation tools</li>
                  <li>Community collaboration features</li>
                  <li>Language learning resources</li>
                  <li>Cultural preservation tools</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 mb-4">
                  To use our platform, you must:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Be at least 13 years old</li>
                  <li>Register for an account with accurate information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  The platform and its original content, features, and functionality are owned by Wekify and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
                <p className="text-gray-600 mb-4">
                  By uploading content to our platform, you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Retain all ownership rights to your content</li>
                  <li>Grant us a license to use and display your content</li>
                  <li>Ensure you have the right to share the content</li>
                  <li>Agree not to upload harmful or illegal content</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Activities</h2>
                <p className="text-gray-600 mb-4">
                  Users may not:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Impersonate others or provide false information</li>
                  <li>Interfere with the platform's operation</li>
                  <li>Attempt to gain unauthorized access</li>
                  <li>Engage in harmful or malicious activities</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to terminate or suspend your account and access to our platform at our sole discretion, without prior notice, for any violation of these Terms of Service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  Wekify shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-600">
                  For any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:legal@wekify.com" className="text-primary-600 hover:text-primary-700">
                    legal@wekify.com
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