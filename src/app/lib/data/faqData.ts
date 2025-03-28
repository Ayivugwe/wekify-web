
import { Globe, Code, Users, Book, Shield, Heart, MessageCircle, Brain, Target, Sparkles, BookOpen, Zap, Languages, FileText, Settings, Cloud, Tool, Clock, Star } from "lucide-react";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
  relatedLink?: string;
}

export const faqData: FAQ[] = [
  // About Wekify (20 questions)
  {
    id: "about-1",
    question: "What is Wekify?",
    answer: "Wekify is a language technology company focused on preserving and revitalizing indigenous languages through innovative digital solutions. We're currently working with the Bafuliiru community to preserve the Kifuliiru language.",
    category: "About Us",
    icon: Globe,
    relatedLink: "/about"
  },
  // ... [Adding first 20 FAQs about Wekify]

  // Language Preservation (20 questions)
  {
    id: "preservation-1",
    question: "Why is language preservation important?",
    answer: "Language preservation is crucial because languages carry cultural heritage, unique worldviews, and traditional knowledge. When a language disappears, we lose not just words but entire ways of understanding the world.",
    category: "Language Preservation",
    icon: Heart,
    relatedLink: "/about/importance"
  },
  // ... [Adding 20 FAQs about language preservation]

  // Technology & Tools (20 questions)
  {
    id: "tech-1",
    question: "What technological solutions does Wekify offer?",
    answer: "We provide digital dictionaries, interactive learning tools, and AI-powered translation assistance, all designed specifically for indigenous language preservation.",
    category: "Technology",
    icon: Code,
    relatedLink: "/tools"
  },
  // ... [Adding 20 FAQs about technology]

  // Community & Collaboration (20 questions)
  {
    id: "community-1",
    question: "How can communities get involved with Wekify?",
    answer: "Communities can participate through our ambassador program, contribute to language documentation, help with translations, and engage in cultural preservation initiatives.",
    category: "Community",
    icon: Users,
    relatedLink: "/community"
  },
  // ... [Adding 20 FAQs about community]

  // Future Plans (20 questions)
  {
    id: "future-1",
    question: "What are Wekify's plans for AI integration?",
    answer: "We're developing AI tools specifically designed for indigenous language processing, including machine translation, speech recognition, and automated language learning assistants.",
    category: "Future Plans",
    icon: Brain,
    relatedLink: "/future"
  },
  // ... [Adding 20 FAQs about future plans]
];

// Group FAQs by category for easier filtering
export const faqCategories = Array.from(new Set(faqData.map(faq => faq.category)));
