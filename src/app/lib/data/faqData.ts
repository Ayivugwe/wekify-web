import {
  Globe,
  Code,
  Users,
  Book,
  Shield,
  Heart,
  MessageCircle,
  Brain,
  Target,
  Sparkles,
  BookOpen,
  Zap,
  Languages,
  FileText,
  Settings,
  Cloud,
  Clock,
  Star,
} from "lucide-react";
import { BsTools } from "react-icons/bs";

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
    answer:
      "Wekify is a language technology company focused on preserving and revitalizing indigenous languages through innovative digital solutions. We're currently working with the Bafuliiru community to preserve the Kifuliiru language.",
    category: "About Us",
    icon: Globe,
    relatedLink: "/about",
  },
  {
    id: "about-2",
    question: "What is your core focus?",
    answer:
      "Our primary focus is on developing digital platforms and tools for language preservation, starting with the Kifuliiru language. We combine technology with cultural preservation to ensure indigenous languages thrive in the digital age.",
    category: "About Us",
    icon: Target,
    relatedLink: "/about/mission",
  },
  {
    id: "about-3",
    question: "How did Wekify start?",
    answer:
      "Wekify began with a vision to preserve the Kifuliiru language through technology. Our journey started with the Bafuliiru community, developing solutions that address their specific language preservation needs.",
    category: "About Us",
    icon: Heart,
    relatedLink: "/about",
  },

  // Language Preservation
  {
    id: "preservation-1",
    question: "Why is language preservation important?",
    answer:
      "Language preservation is crucial because languages carry cultural heritage, unique worldviews, and traditional knowledge. When a language disappears, we lose not just words but entire ways of understanding the world.",
    category: "Language Preservation",
    icon: BookOpen,
    relatedLink: "/resources/importance",
  },
  {
    id: "preservation-2",
    question: "How does digital technology help in language preservation?",
    answer:
      "Digital technology enables efficient documentation, wider accessibility, and interactive learning experiences. It helps create lasting records of languages and provides tools for teaching and learning.",
    category: "Language Preservation",
    icon: Code,
    relatedLink: "/solutions",
  },
  {
    id: "preservation-3",
    question: "What challenges do endangered languages face?",
    answer:
      "Endangered languages face challenges such as globalization, lack of documentation, limited teaching resources, and declining usage among younger generations. Our solutions address these challenges through digital innovation.",
    category: "Language Preservation",
    icon: Shield,
    relatedLink: "/resources/challenges",
  },

  // Technology & Tools
  {
    id: "tech-1",
    question: "What tools does Wekify offer?",
    answer:
      "We offer digital dictionaries, learning platforms, documentation tools, and cultural preservation solutions. Our tools are designed to be user-friendly and culturally appropriate.",
    category: "Technology",
    icon: BsTools,
    relatedLink: "/tools",
  },
  {
    id: "tech-2",
    question: "How do you ensure data security?",
    answer:
      "We implement industry-standard security measures to protect language data. Communities maintain full control over their cultural and linguistic information.",
    category: "Technology",
    icon: Shield,
    relatedLink: "/security",
  },
  {
    id: "tech-3",
    question: "Can your tools be used offline?",
    answer:
      "Many of our tools have offline capabilities, ensuring communities can access and use resources even without constant internet connectivity.",
    category: "Technology",
    icon: Cloud,
    relatedLink: "/tools/offline",
  },

  // Community & Culture
  {
    id: "community-1",
    question: "How do you work with communities?",
    answer:
      "We follow a community-led approach, working closely with language speakers, cultural leaders, and educators to develop solutions that meet their specific needs and respect their cultural values.",
    category: "Community",
    icon: Users,
    relatedLink: "/community",
  },
  {
    id: "community-2",
    question: "What is the role of community members?",
    answer:
      "Community members are essential partners in our work. They contribute knowledge, guide development, and ensure cultural authenticity in our language preservation efforts.",
    category: "Community",
    icon: Heart,
    relatedLink: "/community/roles",
  },

  // Future & Innovation
  {
    id: "future-1",
    question: "What are your plans for AI integration?",
    answer:
      "We're developing AI tools specifically designed for indigenous language processing, including machine translation, speech recognition, and automated learning assistants.",
    category: "Future Plans",
    icon: Brain,
    relatedLink: "/future/ai",
  },
  {
    id: "future-2",
    question: "How do you plan to expand to other languages?",
    answer:
      "While focusing on Kifuliiru, we're designing our platform to be adaptable for other indigenous languages. Our success with Kifuliiru will serve as a model for future language preservation projects.",
    category: "Future Plans",
    icon: Globe,
    relatedLink: "/future/expansion",
  },

  // Educational Resources
  {
    id: "education-1",
    question: "What learning resources do you provide?",
    answer:
      "We offer digital learning materials, interactive lessons, cultural content, and teaching guides. These resources are designed to support both individual learners and educational institutions.",
    category: "Education",
    icon: BookOpen,
    relatedLink: "/resources/learning",
  },
  {
    id: "education-2",
    question: "How can schools use Wekify?",
    answer:
      "Schools can integrate our platform into their curriculum, using our digital tools for language instruction, cultural education, and student engagement.",
    category: "Education",
    icon: Book,
    relatedLink: "/resources/schools",
  },

  // Implementation & Support
  {
    id: "support-1",
    question: "What technical support do you offer?",
    answer:
      "We provide comprehensive technical support, including implementation assistance, training, and ongoing maintenance to ensure successful adoption of our tools.",
    category: "Support",
    icon: MessageCircle,
    relatedLink: "/support",
  },
  {
    id: "support-2",
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on community needs and project scope. We work closely with communities to ensure smooth adoption and successful outcomes.",
    category: "Support",
    icon: Clock,
    relatedLink: "/support/implementation",
  },
  {
    id: "tech-4",
    question: "What languages do your tools support?",
    answer:
      "Our platform currently focuses on Kifuliiru, but our infrastructure is designed to support multiple indigenous languages. We're constantly expanding our language support capabilities.",
    category: "Technology",
    icon: Languages,
    relatedLink: "/languages",
  },
  {
    id: "tech-5",
    question: "How do you handle different writing systems?",
    answer:
      "Our platform supports various writing systems and character sets, ensuring accurate representation of indigenous languages with unique alphabets or writing conventions.",
    category: "Technology",
    icon: FileText,
    relatedLink: "/features/writing-systems",
  },
  {
    id: "education-3",
    question: "Do you offer teacher training?",
    answer:
      "Yes, we provide comprehensive training programs for educators who want to use our platform effectively in their language preservation efforts.",
    category: "Education",
    icon: Book,
    relatedLink: "/education/training",
  },
  {
    id: "education-4",
    question: "How do you make learning engaging?",
    answer:
      "We incorporate interactive elements, cultural stories, and gamification to make language learning both engaging and culturally relevant.",
    category: "Education",
    icon: Sparkles,
    relatedLink: "/education/methods",
  },
  {
    id: "community-3",
    question: "Can communities customize the platform?",
    answer:
      "Yes, our platform is highly customizable to meet specific community needs, including custom vocabulary, cultural content, and learning paths.",
    category: "Community",
    icon: Settings,
    relatedLink: "/customization",
  },
  {
    id: "community-4",
    question: "How do you ensure cultural authenticity?",
    answer:
      "We work directly with community elders and cultural experts to ensure all content accurately represents the community's traditions and values.",
    category: "Community",
    icon: Star,
    relatedLink: "/community/authenticity",
  },
  {
    id: "preservation-4",
    question: "What makes your approach unique?",
    answer:
      "Our approach combines traditional knowledge with modern technology, creating solutions that respect cultural heritage while leveraging digital innovation.",
    category: "Language Preservation",
    icon: Zap,
    relatedLink: "/approach",
  },
  {
    id: "preservation-1",
    question: "Why is language preservation important?",
    answer:
      "Language preservation is crucial because languages carry cultural heritage, unique worldviews, and traditional knowledge. When a language disappears, we lose not just words but entire ways of understanding the world.",
    category: "Language Preservation",
    icon: Heart,
    relatedLink: "/about/importance",
  },
  {
    id: "preservation-5",
    question: "How does digital archiving help preserve languages?",
    answer: "Digital archiving creates permanent records of language materials, making them accessible to future generations and protecting them from physical degradation or loss.",
    category: "Language Preservation",
    icon: Cloud,
    relatedLink: "/preservation/digital-archiving"
  },
  {
    id: "preservation-6",
    question: "What role do elders play in language preservation?",
    answer: "Elders are vital knowledge holders who provide authentic pronunciation, cultural context, and traditional usage of language. They bridge past and present generations.",
    category: "Language Preservation",
    icon: Users,
    relatedLink: "/community/elders"
  },
  {
    id: "tech-6",
    question: "How do you ensure accessibility of digital tools?",
    answer: "Our tools are designed to work on various devices and internet conditions, with offline capabilities and user-friendly interfaces suitable for all age groups.",
    category: "Technology",
    icon: Sparkles,
    relatedLink: "/accessibility"
  },
  {
    id: "tech-7",
    question: "What security measures protect language data?",
    answer: "We implement end-to-end encryption, secure cloud storage, and regular backups to protect sensitive cultural and linguistic information.",
    category: "Technology",
    icon: Shield,
    relatedLink: "/security"
  },
  {
    id: "community-5",
    question: "How can schools integrate language preservation tools?",
    answer: "Schools can use our digital resources in curriculum planning, cultural education programs, and interactive language learning activities.",
    category: "Community",
    icon: Book,
    relatedLink: "/education/schools"
  },
  {
    id: "community-6",
    question: "What support do you offer to language teachers?",
    answer: "We provide training workshops, teaching materials, and ongoing technical support to help educators effectively use our language preservation tools.",
    category: "Community",
    icon: Heart,
    relatedLink: "/support/teachers"
  },
  // Technology & Tools (20 questions)
  {
    id: "tech-1",
    question: "What technological solutions does Wekify offer?",
    answer:
      "We provide digital dictionaries, interactive learning tools, and AI-powered translation assistance, all designed specifically for indigenous language preservation.",
    category: "Technology",
    icon: Code,
    relatedLink: "/tools",
  },
  // ... [Adding 20 FAQs about technology]

  // Community & Collaboration (20 questions)
  {
    id: "community-1",
    question: "How can communities get involved with Wekify?",
    answer:
      "Communities can participate through our ambassador program, contribute to language documentation, help with translations, and engage in cultural preservation initiatives.",
    category: "Community",
    icon: Users,
    relatedLink: "/community",
  },
  // ... [Adding 20 FAQs about community]

  // Future Plans (20 questions)
  {
    id: "future-1",
    question: "What are Wekify's plans for AI integration?",
    answer:
      "We're developing AI tools specifically designed for indigenous language processing, including machine translation, speech recognition, and automated language learning assistants.",
    category: "Future Plans",
    icon: Brain,
    relatedLink: "/future",
  },
  // ... [Adding 20 FAQs about future plans]
];

// Group FAQs by category for easier filtering
export const faqCategories = Array.from(
  new Set(faqData.map((faq) => faq.category)),
);
