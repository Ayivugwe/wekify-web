"use client";

import React from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import { ArrowRight } from "lucide-react";

export default function AboutUsFallbackPage() {
  return (
    <Layout>
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <FadeIn className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">Wekify LLC</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Empowering communities to preserve and celebrate their languages through innovative digital solutions.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="/about">
                Visit Our About Page <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
} 