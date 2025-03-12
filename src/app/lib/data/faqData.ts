import { FAQCategory } from "./types";

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    question: "What is Wekify?",
    answer: "Wekify is a digital platform dedicated to language preservation, particularly focused on indigenous and endangered languages. We provide tools for creating digital dictionaries, learning resources, and cultural documentation to help communities preserve and revitalize their languages.",
  },
  {
    question: "Which languages does Wekify currently support?",
    answer: "We are currently focused on supporting the Bafuliiru language from eastern DR Congo, but our platform is designed to be adaptable to many languages. We are continuously expanding our language support and welcome inquiries about additional languages.",
  },
  {
    question: "How can my community partner with Wekify?",
    answer: "We welcome partnerships with language communities, educational institutions, and cultural organizations. Please contact us through our website to discuss how we can work together to preserve your language and cultural heritage.",
  },
  {
    question: "Is Wekify suitable for schools and educational institutions?",
    answer: "Yes, Wekify is designed with educational applications in mind. Our platform includes tools for classroom learning, curriculum development, and student engagement that can be integrated into existing educational programs.",
  },
  {
    question: "How does Wekify help with language preservation?",
    answer: "Wekify provides digital tools for documenting language through dictionaries, phrase collections, and cultural content. We also create interactive learning resources and community engagement features to encourage language use and transmission to new generations.",
  },
  {
    question: "Do you offer technical support for your platform?",
    answer: "Yes, we provide comprehensive technical support for all our solutions. Our team is available to assist with implementation, training, and ongoing maintenance to ensure your language preservation initiatives are successful.",
  },
];