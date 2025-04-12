import Layout from "@/app/components/layout";

export default function AtlasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
} 