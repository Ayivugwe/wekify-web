import { Metadata } from "next";
import AboutPage from "./page";

export const metadata: Metadata = {
  title: "About Us - Wekify - Platform for Language Preservation",
  description: "Learn about our mission to empower communities with custom digital platforms for language preservation and revitalization.",
};

export default function AboutLayout() {
  return <AboutPage />;
} 