import { Metadata } from "next";
import BlogPostPage from "./page";

export const metadata: Metadata = {
  title: "Blog Post - Wekify",
  description: "Read our latest insights about language preservation platforms.",
};

export default function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return <BlogPostPage params={params} />;
} 