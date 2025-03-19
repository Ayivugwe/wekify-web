import { Metadata } from "next";
import LanguageGame from "./page";

export const metadata: Metadata = {
  title: "Language Longevity Game - Wekify",
  description: "Test your skills and help preserve endangered languages by learning and correctly identifying words.",
  keywords: "language game, language learning, endangered languages, language preservation, interactive learning, language quiz, word matching, language skills, cultural preservation, digital learning",
};

export default function LanguageGameLayout() {
  return <LanguageGame />;
} 