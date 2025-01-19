// File location: app/solutions/ai-ml/page.tsx

import React from "react";
import ComingSoon from "@/app/components/coming-soon";
import Layout from "@/app/components/layout";

export default function AIMLPage() {
  return (
    <Layout>
      <ComingSoon
        title="Learning Tools"
        description="Learning tools are coming soon. Get ready to explore exciting tools that will help you learn and grow."
        date="Q2 2024"
      />
    </Layout>
  );
}
