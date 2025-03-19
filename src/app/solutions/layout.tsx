import { Metadata } from "next";
import SolutionsPage from "./page";

export const metadata: Metadata = {
  title: "Solutions | Wekify",
  description: "Digital solutions for language preservation and cultural revitalization",
  keywords: ["language preservation", "digital solutions", "technology", "indigenous languages"],
};

export default function SolutionsLayout() {
  return <SolutionsPage />;
} 