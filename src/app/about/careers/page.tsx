// File location: app/solutions/ai-ml/page.tsx

import React from "react";
import ComingSoon from "@/app/components/coming-soon";
import Layout from "@/app/components/layout";

export default function AIMLPage() {
  return (
    <Layout>
      <ComingSoon
        title="Career Opportunities"
        description="Our career opportunities are coming soon. Get ready to explore exciting job openings and join our team of talented professionals."
        date="Q2 2024"
      />
    </Layout>
  );
}
