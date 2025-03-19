"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";

export default function CookiesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookies Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none">
            <FadeIn>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by enabling us to monitor which pages you find useful and which you do not.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our site</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                  <li>Marketing cookies: Track your online activity to help advertisers deliver more relevant advertising</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600">
                      We use analytics cookies to help us understand how visitors interact with our website. This helps us improve our services and user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                    <p className="text-gray-600">
                      These cookies remember your settings and preferences, such as language preferences and region settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-600">
                      These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-600 mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-600 mb-4">
                  We use services from third parties that may also set cookies on your device. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for sharing functionality</li>
                  <li>Payment processors for secure transactions</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about our use of cookies, please contact us at{" "}
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