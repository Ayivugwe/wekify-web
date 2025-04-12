import React from "react";
import { 
  BookOpen, Database, Layers, Globe, Users, 
  BarChart, Shield, Award, Zap, Smartphone, 
  MessageCircle, Settings, ArrowRight
} from "lucide-react";
import { FadeIn } from "./FadeIn";
import Link from "next/link";
import { Card } from "./Card";
import { Button } from "./Button";

export default function FeaturesShowcase() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary-600" />,
      title: "Digital Dictionary",
      description: "Comprehensive, searchable dictionary with audio recordings and cultural context"
    },
    {
      icon: <Database className="h-6 w-6 text-primary-600" />,
      title: "Content Management",
      description: "Easily add, edit, and organize language content with our intuitive tools"
    },
    {
      icon: <Layers className="h-6 w-6 text-primary-600" />,
      title: "Learning Modules",
      description: "Structured lessons and exercises for effective language acquisition"
    },
    {
      icon: <Globe className="h-6 w-6 text-primary-600" />,
      title: "Web Accessibility",
      description: "Access your language resources from any device with internet connection"
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: "Community Tools",
      description: "Connect speakers and learners through collaborative features"
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary-600" />,
      title: "Analytics Dashboard",
      description: "Track language learning progress and content engagement"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary-600" />,
      title: "Cultural Safeguarding",
      description: "Protect sensitive cultural knowledge with permission controls"
    },
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: "Certification",
      description: "Create custom language proficiency certifications for learners"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-600" />,
      title: "Interactive Games",
      description: "Gamified learning experiences to make language acquisition fun"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary-600" />,
      title: "Mobile Optimization",
      description: "Full functionality on smartphones and tablets for learning on the go"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary-600" />,
      title: "Discussion Forums",
      description: "Community spaces for discussions about language and culture"
    },
    {
      icon: <Settings className="h-6 w-6 text-primary-600" />,
      title: "Customization",
      description: "Tailor the platform to meet the specific needs of your language"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to document, teach, and celebrate your language
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary-100 transition-colors duration-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-50 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4 text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-3 text-base font-medium bg-primary-600 hover:bg-primary-700 text-white hover:text-white shadow-sm transition-colors duration-200"
              asChild
            >
              <Link href="/solutions">
                Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
