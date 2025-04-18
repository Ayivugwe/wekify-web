
import { Metadata } from "next";

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  twitterHandle?: string;
  noIndex?: boolean;
}

// Changed to not be a React component but a function that returns Metadata
export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.jpg",
  canonicalUrl,
  twitterHandle = "@wekify",
  noIndex = false,
}: SEOMetadataProps): Metadata {
  const metadataBase = new URL("https://www.wekify.com");
  
  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
    metadataBase,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Wekify",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: twitterHandle,
      images: [ogImage],
    },
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
  };
}
