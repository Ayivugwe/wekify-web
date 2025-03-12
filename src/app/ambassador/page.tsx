import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import Section from "../components/Section";
import { FadeIn } from "../components/FadeIn";
import Layout from "../components/layout";
import SEOMetadata from "../components/SEOMetadata";
import { cn } from "@/lib/utils";
import { ChevronRight, Globe, Users, Award, MessageSquare, Zap, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Ambassador | Wekify",
  description: "Join our ambassador program and help preserve languages in your community. Make a difference by connecting technology with cultural heritage.",
  keywords: "language ambassador, cultural preservation, community leader, language technology",
  openGraph: {
    title: "Become an Ambassador | Wekify",
    description: "Be part of our global mission to preserve languages and cultures through technology."
  }
};

export default function AmbassadorPage() {
  return null;
}