import { Metadata } from "next";
import BlogPage from "./page";

export const metadata: Metadata = {
  title: "Platform Insights - Wekify Blog",
  description: "Explore insights about language preservation platforms, implementation stories, and digital transformation strategies.",
  keywords: "platform blog, language technology, digital preservation, implementation stories, language AI, future AI, community AI, data sovereignty, language documentation, digital platforms, language preservation, community-driven AI, ethical AI, cultural preservation, language learning platforms, AI integration, future technology, language revitalization, digital heritage",
};

export default function BlogLayout() {
  return <BlogPage />;
} 