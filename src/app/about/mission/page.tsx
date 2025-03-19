'use client';

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { ArrowRight, Globe, Shield, Users, Sparkles, Target, Heart } from "lucide-react";

export default function MissionPage() {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To preserve and revitalize indigenous languages through innovative digital solutions, making language resources accessible worldwide and connecting diaspora communities.
              </p>
            </div>
          </FadeIn>

          {/* Mission Statement */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Our Mission Statement</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Wekify is dedicated to preserving and revitalizing indigenous languages through innovative digital solutions. 
                  Our mission is to empower language communities by providing accessible, user-friendly platforms that facilitate 
                  language learning, documentation, and cultural preservation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Language Preservation
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Digital Innovation
                  </span>
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Community Empowerment
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Core Objectives */}
          <FadeIn>
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Core Objectives</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                  <p className="text-gray-600">
                    Making language resources accessible to communities worldwide, regardless of location or technical expertise.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cultural Preservation</h3>
                  <p className="text-gray-600">
                    Protecting and promoting indigenous languages while respecting cultural traditions and community values.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                  <p className="text-gray-600">
                    Empowering communities to take an active role in preserving and teaching their languages.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Developing cutting-edge solutions that combine traditional knowledge with modern technology.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Impact Areas */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Areas of Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Language Learning</h3>
                  <p className="text-gray-600">
                    Creating effective tools for language learning and teaching across generations.
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cultural Connection</h3>
                  <p className="text-gray-600">
                    Bridging gaps between diaspora communities and their linguistic heritage.
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                  <p className="text-gray-600">
                    Making indigenous languages accessible to a global audience while preserving their authenticity.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Call to Action */}
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Be part of our journey to preserve and celebrate indigenous languages through technology.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 