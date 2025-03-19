import { Metadata } from "next";
import TeamPage from "./page";

export const metadata: Metadata = {
  title: "Our Team | Wekify",
  description: "Meet the people behind Wekify's mission to preserve indigenous languages through technology and innovation.",
  keywords: "Wekify team, language preservation team, tech innovators, cultural preservation, language technology",
  openGraph: {
    title: "Our Team | Wekify",
    description: "Meet the people behind Wekify's mission to preserve indigenous languages through technology and innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function TeamLayout() {
  return <TeamPage />;
} 