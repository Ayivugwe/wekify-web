"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEOMetadata from "./SEOMetadata";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

export default function Layout({ 
  children,
  title = "Wekify - Preserving Languages Through Technology",
  description = "Wekify develops technology solutions to preserve endangered languages, starting with the Bafuliiru language.",
  keywords = "language preservation, endangered languages, digital dictionaries, language technology, Bafuliiru language",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonical
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetadata
        title={title}
        description={description}
        keywords={keywords}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl={ogUrl}
        canonical={canonical}
      />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}