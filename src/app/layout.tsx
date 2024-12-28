import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wekify - Crafting Digital Experiences",
  description:
    "We're cooking up something extraordinary. Wekify is bringing innovative solutions that will transform the way you interact with technology.",
  keywords:
    "wekify, web development, software solutions, next.js, react, node.js, supabase, firebase",
  authors: [{ name: "Wekify" }],
  openGraph: {
    title: "Wekify - Crafting Digital Experiences",
    description:
      "We're cooking up something extraordinary. Wekify is bringing innovative solutions that will transform the way you interact with technology.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wekify - Crafting Digital Experiences",
    description:
      "We're cooking up something extraordinary. Wekify is bringing innovative solutions that will transform the way you interact with technology.",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
