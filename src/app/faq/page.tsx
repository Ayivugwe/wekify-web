"use client";

import React, { useState, useMemo } from "react";
import Layout from "@/app/components/layout";
import { FadeIn } from "@/app/components/FadeIn";
import { Accordion } from "@/app/components/Accordion";
import { Search, HelpCircle, BookOpen, Users, Code, Globe, Brain, Shield, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    title: "About Wekify LLC",
    icon: <HelpCircle className="h-5 w-5" />,
    questions: [
      {
        title: "What is Wekify LLC?",
        content: "Wekify LLC is a technology company focused on preserving indigenous languages through digital innovation. We're currently working on developing a comprehensive platform for the Kifuliiru language in partnership with the Bafuliiru community."
      },
      {
        title: "Where is Wekify LLC located?",
        content: "We're currently based in Spokane, Washington, USA, operating as a home-based company while developing our language preservation platform."
      },
      {
        title: "What makes Wekify LLC unique?",
        content: "Our approach combines cutting-edge technology with deep community engagement. We prioritize community control and cultural authenticity in our language preservation efforts, ensuring that the Bafuliiru community remains at the center of our work."
      }
    ]
  },
  {
    title: "The Kifuliiru Language Project",
    icon: <BookOpen className="h-5 w-5" />,
    questions: [
      {
        title: "What is Kifuliiru?",
        content: "Kifuliiru is an indigenous language spoken by the Bafuliiru community in Congo Kinshasa. It's a rich language with unique cultural significance that we're working to preserve and promote through digital means."
      },
      {
        title: "Why focus on Kifuliiru?",
        content: "Our focus on Kifuliiru stems from our founder's connection to the Bafuliiru community and the urgent need to preserve this language in the digital age. We're creating a model that can be adapted for other indigenous languages in the future."
      },
      {
        title: "How are you working with the Bafuliiru community?",
        content: "We maintain close partnerships with the Bafuliiru community, ensuring their active participation in our platform's development. This includes community input on language documentation, learning materials, and cultural representation."
      }
    ]
  },
  {
    title: "Our Platform Features",
    icon: <Code className="h-5 w-5" />,
    questions: [
      {
        title: "What features does your platform offer?",
        content: "Our platform includes digital dictionaries, language learning tools, audio recordings, cultural content, and community engagement features. We're continuously developing new features based on community needs."
      },
      {
        title: "How can I learn Kifuliiru using your platform?",
        content: "Our platform provides interactive learning modules, pronunciation guides, and practice exercises. Users can track their progress and engage with native speakers through our community features."
      },
      {
        title: "Is the platform available on mobile devices?",
        content: "Yes, our platform is fully responsive and works on all devices. We're developing native mobile apps to enhance the learning experience and make the platform more accessible."
      }
    ]
  },
  {
    title: "Technical Details",
    icon: <Brain className="h-5 w-5" />,
    questions: [
      {
        title: "What technologies do you use?",
        content: "We use modern web technologies including React, Next.js, and AI/ML tools for language processing. Our platform is built with scalability and performance in mind."
      },
      {
        title: "How do you handle data privacy?",
        content: "We implement strict data privacy measures and work closely with the community to ensure sensitive cultural information is protected. All data collection and usage follows community guidelines."
      },
      {
        title: "Do you use AI in your platform?",
        content: "Yes, we use AI to enhance language learning and preservation features. This includes speech recognition, translation assistance, and personalized learning recommendations, always with community oversight."
      }
    ]
  },
  {
    title: "Future Plans",
    icon: <Globe className="h-5 w-5" />,
    questions: [
      {
        title: "What are your plans for expansion?",
        content: "While our current focus is on Kifuliiru, we're building our platform with scalability in mind. We plan to expand to other indigenous languages while maintaining our community-first approach."
      },
      {
        title: "How can other communities get involved?",
        content: "We welcome inquiries from other language communities interested in digital preservation. We can adapt our platform and methodology to suit different languages and cultural contexts."
      },
      {
        title: "What are your long-term goals?",
        content: "Our long-term goals include establishing a comprehensive digital ecosystem for indigenous language preservation, developing advanced AI tools for language learning, and creating sustainable models for community-led language preservation."
      }
    ]
  },
  {
    title: "Getting Involved",
    icon: <Users className="h-5 w-5" />,
    questions: [
      {
        title: "How can I contribute to the project?",
        content: "There are several ways to contribute: as a community member providing language content, as a developer helping build the platform, or as a supporter spreading awareness about language preservation."
      },
      {
        title: "Are you hiring?",
        content: "While we're currently a small team, we anticipate needing additional team members as we grow. We're particularly interested in developers, linguists, and community engagement specialists."
      },
      {
        title: "How can I stay updated on your progress?",
        content: "You can follow our blog, subscribe to our newsletter, or connect with us on social media to stay informed about our latest developments and opportunities."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | undefined>();

  const filteredQuestions = useMemo(() => {
    if (!searchQuery) return faqCategories;

    const query = searchQuery.toLowerCase();
    return faqCategories.map(category => ({
      ...category,
      questions: category.questions.filter(q => 
        q.title.toLowerCase().includes(query) || 
        q.content.toLowerCase().includes(query)
      )
    })).filter(category => category.questions.length > 0);
  }, [searchQuery]);

  const allQuestions = useMemo(() => {
    return filteredQuestions.flatMap(category => 
      category.questions.map(q => ({
        title: q.title,
        content: q.content,
        icon: category.icon
      }))
    );
  }, [filteredQuestions]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Wekify LLC and our language preservation platform
            </p>
          </FadeIn>

          <FadeIn className="mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <Accordion
              items={allQuestions}
              variant="bordered"
              size="lg"
              onValueChange={setActiveCategory}
            />
          </FadeIn>

          <FadeIn className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
} 