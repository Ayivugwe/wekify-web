import { Metadata } from "next";
import BlogPage from "./page";

export const metadata: Metadata = {
  title: "Platform Insights - Wekify Blog",
  description: "Explore insights about language preservation platforms, implementation stories, and digital transformation strategies.",
  keywords: "platform blog, language technology, digital preservation, implementation stories",
};

export default function BlogLayout() {
  return <BlogPage />;
} 