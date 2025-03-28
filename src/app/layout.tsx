import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { inter, lexend, jetbrainsMono } from "./fonts";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wekify - Technology Solutions for Language Preservation",
  description: "Empowering communities to build digital language preservation platforms. Providing technology solutions and expertise for indigenous language initiatives.",
  keywords: [
    "language preservation",
    "digital platform",
    "indigenous languages",
    "Kifuliiru",
    "language technology",
    "cultural preservation",
    "digital dictionary",
    "language learning",
    "Bafuliiru community",
    "African languages",
  ],
  authors: [{ name: "Ayivugwe Kabemba" }],
  creator: "Wekify LLC",
  publisher: "Wekify LLC",
  metadataBase: new URL("https://wekify.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wekify.com",
    siteName: "Wekify LLC",
    title: "Wekify - Digital Language Preservation",
    description:
      "Empowering indigenous language preservation through digital innovation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wekify LLC",
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
    <html lang="en" className={interFont.className}>
      <head>
        <link rel="icon" href="/wekify-favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/wekify-favicon.svg" />
      </head>
      <body
        className={`${interFont.variable} ${lexend.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
