import { Metadata } from "next";
import OurStoryPage from "./page";

export const metadata: Metadata = {
  title: "Our Story | Wekify LLC",
  description: "From a vision at university to a global mission of language preservation - discover the journey of Wekify LLC and its commitment to preserving linguistic heritage.",
  keywords: "Wekify LLC history, language preservation journey, Kifuliiru language, cultural heritage, startup story, tech innovation",
  openGraph: {
    title: "Our Story | Wekify LLC",
    description: "From a vision at university to a global mission of language preservation - discover the journey of Wekify LLC and its commitment to preserving linguistic heritage.",
    type: "website",
    locale: "en_US",
  },
};

export default function OurStoryLayout() {
  return <OurStoryPage />;
} 