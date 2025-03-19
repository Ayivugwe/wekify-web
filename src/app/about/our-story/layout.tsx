import { Metadata } from "next";
import OurStoryPage from "./page";

export const metadata: Metadata = {
  title: "Our Story | Wekify",
  description: "Discover how Wekify began its journey to preserve indigenous languages through technology and innovation.",
  keywords: "Wekify history, language preservation journey, digital innovation, cultural heritage, language technology",
  openGraph: {
    title: "Our Story | Wekify",
    description: "Discover how Wekify began its journey to preserve indigenous languages through technology and innovation.",
    type: "website",
    locale: "en_US",
  },
};

export default function OurStoryLayout() {
  return <OurStoryPage />;
} 