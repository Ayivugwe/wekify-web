'use client';

import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { ArrowRight, Users, Heart, Globe, Sparkles, Target } from "lucide-react";
import Image from "next/image";

export default function TeamPage() {
  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission-Driven Team</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Currently, Wekify is led by a passionate founder dedicated to preserving indigenous languages through technology. 
                While we're in our early stages, we're building the foundation for a team that will make a global impact.
              </p>
            </div>
          </FadeIn>

          {/* Current Team Section */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Current Leadership</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 relative rounded-full overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Wekify Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Founder & Visionary</h3>
                  <p className="text-gray-600 mb-4">
                    Leading Wekify's mission to preserve indigenous languages through innovative technology solutions.
                    Passionate about combining cultural preservation with modern digital tools.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Language Preservation
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Technology Innovation
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      Cultural Heritage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Future Team Section */}
          <FadeIn>
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Join Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                We're building a team of passionate individuals who want to make a difference in language preservation.
                While we're not currently hiring, we're always interested in connecting with people who share our vision.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Future Roles</h3>
                  <p className="text-gray-600">
                    We'll be looking for experts in language technology, community engagement, and cultural preservation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Join us in making a worldwide difference in preserving indigenous languages and cultures.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Be part of cutting-edge technology solutions for language preservation and revitalization.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button asChild>
                  <Link href="/contact">
                    Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Values Section */}
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Passion</h3>
                  <p className="text-gray-600">
                    Deep commitment to preserving linguistic diversity and cultural heritage.
                  </p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Focus</h3>
                  <p className="text-gray-600">
                    Clear vision and dedication to making a meaningful impact in language preservation.
                  </p>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Global Vision</h3>
                  <p className="text-gray-600">
                    Commitment to creating solutions that benefit language communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
