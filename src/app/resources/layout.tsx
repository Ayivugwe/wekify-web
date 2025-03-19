import { Metadata } from "next";
import ResourcesPage from "./page";

export const metadata: Metadata = {
  title: "Platform Resources - Wekify",
  description:
    "Access comprehensive documentation and resources for building and managing your language preservation platform.",
  openGraph: {
    title: "Platform Resources - Wekify",
    description:
      "Everything you need to build and manage your language preservation platform.",
  },
};

export default function ResourcesLayout() {
  return <ResourcesPage />;
} 