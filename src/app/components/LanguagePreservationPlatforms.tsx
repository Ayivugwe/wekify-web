import { FadeIn } from "./FadeIn";
import { Button } from "./Button";
import Link from "next/link";
import { BookOpen, Users, Globe, Database, Shield, Heart, ArrowRight } from "lucide-react";

const stats = [
  {
    number: "40%",
    label: "of languages are endangered",
  },
  {
    number: "1",
    label: "language lost every 2 weeks",
  },
];

const platformCharacteristics = [
  {
    icon: BookOpen,
    title: "Comprehensive Documentation",
    description: "Platforms must provide tools for recording and storing language elements, from basic vocabulary to complex grammar structures.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Effective platforms enable community participation in language documentation and teaching, ensuring cultural authenticity.",
  },
  {
    icon: Database,
    title: "Digital Preservation",
    description: "Modern platforms must offer secure, scalable storage solutions that protect linguistic data for future generations.",
  },
  {
    icon: Shield,
    title: "Cultural Sensitivity",
    description: "Platforms should respect and protect cultural knowledge while making it accessible to authorized community members.",
  },
];

export function LanguagePreservationPlatforms() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Understanding{" "}
                <span className="text-primary-600">Language Preservation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Language preservation is the systematic effort to maintain and revitalize languages at risk of disappearing. 
                In a world where 40% of languages are endangered and one language is lost every two weeks, 
                digital platforms play a crucial role in this preservation effort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">What is Language Preservation?</h3>
                </div>
                <p className="text-gray-600">
                  Language preservation involves documenting, teaching, and maintaining languages that are at risk of extinction. 
                  It's not just about saving words, but preserving cultural identity, traditional knowledge, and community heritage 
                  for future generations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                    <Heart className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Why Digital Platforms?</h3>
                </div>
                <p className="text-gray-600">
                  Digital platforms provide scalable, accessible, and interactive ways to preserve languages. 
                  They enable communities to document their languages, create learning resources, and share their 
                  cultural heritage with future generations.
                </p>
              </div>
            </div>

            {/* Platform Characteristics Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Essential Characteristics of Language Preservation Platforms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platformCharacteristics.map((characteristic, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                          <characteristic.icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{characteristic.title}</h3>
                      </div>
                      <p className="text-gray-600">{characteristic.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-sm transition-colors duration-200"
                asChild
              >
                <Link href="/language-preservation">
                  Learn More About Our Platforms{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
} 