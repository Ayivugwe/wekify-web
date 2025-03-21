import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Wekify",
  description: "Learn about Wekify's mission to preserve and celebrate indigenous languages through innovative digital solutions.",
  keywords: "language preservation, indigenous languages, digital solutions, cultural heritage, language technology, AI in language preservation",
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