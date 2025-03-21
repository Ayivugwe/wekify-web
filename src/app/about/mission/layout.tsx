import { Metadata } from "next";
import MissionPage from "./page";

export const metadata: Metadata = {
  title: "Our Mission | Wekify LLC",
  description: "Learn about Wekify LLC's mission to preserve indigenous languages through innovative digital solutions and community empowerment.",
  keywords: "language preservation mission, indigenous languages, digital solutions, community empowerment, cultural heritage",
  openGraph: {
    title: "Our Mission | Wekify LLC",
    description: "Learn about Wekify LLC's mission to preserve indigenous languages through innovative digital solutions and community empowerment.",
    type: "website",
    locale: "en_US",
  },
};

export default function MissionLayout() {
  return <MissionPage />;
} 