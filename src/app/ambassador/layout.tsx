import { Metadata } from "next";
import AmbassadorPage from "./page";

export const metadata: Metadata = {
  title: "Platform Ambassadors - Wekify",
  description: "Join our ambassador program to help communities build and maintain their language preservation platforms.",
  keywords: "platform ambassador, language technology, community leader, digital platform",
};

export default function AmbassadorLayout() {
  return <AmbassadorPage />;
} 