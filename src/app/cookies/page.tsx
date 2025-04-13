"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import Link from "next/link";

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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Current Cookie Policy</h2>
                <p className="text-gray-600 mb-4">
                  At Wekify LLC, we currently do not use cookies or similar tracking technologies on our website. We believe in providing a simple, privacy-respecting experience without the need for tracking or data collection through cookies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit websites. They help websites provide you with a better experience by enabling them to monitor which pages you find useful and which you do not.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-600">
                      These cookies are necessary for websites to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600">
                      These cookies help website owners understand how visitors interact with their website. This helps improve services and user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                    <p className="text-gray-600">
                      These cookies remember user settings and preferences, such as language preferences and region settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-600">
                      These cookies track online activity to help advertisers deliver more relevant advertising or to limit how many times users see an ad.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Users can control and/or delete cookies as they wish. They can delete all cookies that are already on their computer and set most browsers to prevent them from being placed. However, if this is done, users may have to manually adjust some preferences every time they visit a site and some services and functionalities may not work.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Updates</h2>
                <p className="text-gray-600 mb-4">
                  Should we decide to implement cookies in the future, we will update this policy accordingly and provide clear information about the types of cookies we use and how they are managed.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about our privacy practices, please{" "}
                  <Link href="/contact" className="text-primary-600 hover:text-primary-700">
                    contact us
                  </Link>
                </p>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </Layout>
  );
} 