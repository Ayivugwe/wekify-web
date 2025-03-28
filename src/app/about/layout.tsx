import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Wekify | Digital Language Preservation Experts",
  description: "Discover how Wekify is revolutionizing indigenous language preservation, starting with the Kifuliiru language in Spokane, Washington. Learn about our mission, team, and innovative digital solutions.",
  keywords: "Wekify company, language preservation experts, Kifuliiru language, Spokane tech company, indigenous language technology, digital preservation platform, cultural heritage preservation, language revitalization, Bafuliiru community, AI language tools",
  openGraph: {
    title: "About Us | Wekify",
    description: "Learn about Wekify's mission to preserve and celebrate indigenous languages through innovative digital solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 