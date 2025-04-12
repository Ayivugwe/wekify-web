"use client";

import React from "react";
import Layout from "../../../components/layout";
import { FadeIn } from "../../../components/FadeIn";
import { Button } from "../../../components/Button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ContributionSuccessPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You for Your Contribution!
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Your language contribution has been received and is pending review. We'll contact you soon regarding the status of your submission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/languages" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto px-8 py-3 text-base font-medium"
                >
                  Back to Languages
                </Button>
              </Link>
              <Link href="/languages/contribute" className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white"
                >
                  Submit Another Language
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 