//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Wekify - Empowering Linguistic Diversity",
    template: "%s | Wekify",
  },
  description:
    "Empowering indigenous language preservation through digital innovation.",
  keywords: [
    "language preservation",
    "digital platform",
    "indigenous languages",
    "Kifuliiru",
    "technology",
  ],
  authors: [{ name: "Ayivugwe Kabemba" }],
  creator: "Wekify",
  publisher: "Wekify",
  metadataBase: new URL("https://wekify.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wekify.com",
    siteName: "Wekify",
    title: "Wekify - Digital Language Preservation",
    description:
      "Empowering indigenous language preservation through digital innovation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wekify",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wekify - Digital Language Preservation",
    description:
      "Empowering indigenous language preservation through digital innovation.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
