
import { Globe, Code, Users, Book, Shield, Heart, MessageCircle, Brain, Target, Sparkles, BookOpen } from "lucide-react";

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
  relatedLink?: string;
}

export const faqData: FAQ[] = [
  // About Wekify
  {
    id: "about-1",
    question: "What is Wekify?",
    answer: "Wekify is a language technology company focused on preserving and revitalizing indigenous languages through innovative digital solutions. We're currently working with the Bafuliiru community to preserve the Kifuliiru language.",
    category: "About Us",
    icon: Globe,
    relatedLink: "/about"
  },
  {
    id: "about-2",
    question: "What is Wekify's primary mission?",
    answer: "Our mission is to empower the Bafuliiru community to preserve and revitalize the Kifuliiru language through innovative digital solutions, making language resources accessible while respecting cultural sovereignty.",
    category: "About Us",
    icon: Target,
    relatedLink: "/about/mission"
  },
  // Vision & Future
  {
    id: "vision-1",
    question: "What is Wekify's vision for language preservation?",
    answer: "We envision a world where indigenous languages thrive in the digital age, with Kifuliiru serving as a model for preserving other indigenous languages through innovative technology solutions.",
    category: "Vision & Future",
    icon: Sparkles,
    relatedLink: "/about/vision"
  },
  // Technology & Tools
  {
    id: "tech-1",
    question: "What technological solutions does Wekify offer?",
    answer: "We provide digital dictionaries, interactive learning tools, and AI-powered translation assistance, all designed specifically for indigenous language preservation.",
    category: "Technology",
    icon: Code,
    relatedLink: "/tools"
  },
  // Add many more FAQs following this pattern...
];

// Group FAQs by category for easier filtering
export const faqCategories = Array.from(new Set(faqData.map(faq => faq.category)));
