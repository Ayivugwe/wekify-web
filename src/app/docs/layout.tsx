import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Documentation',
  description: 'Comprehensive documentation for the Wekify language preservation platform'
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 