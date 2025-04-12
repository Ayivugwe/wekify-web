"use client";

import React from "react";
import Layout from "../components/layout";
import { FadeIn } from "../components/FadeIn";
import { Button } from "../components/Button";
import Link from "next/link";

export default function CurrenciesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Currencies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Currency information is now available on the Countries page, where you can view currencies alongside their respective countries.
            </p>
            <Link href="/countries">
              <Button className="flex items-center gap-2">
                View Countries & Currencies
              </Button>
            </Link>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
