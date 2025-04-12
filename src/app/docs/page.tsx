import { Metadata } from 'next';
import { DocsContent } from '@/app/components/docs-content';

export const metadata: Metadata = {
  title: 'Platform Documentation',
  description: 'Comprehensive documentation for the Wekify language preservation platform'
};

export default function DocsPage() {
  return <DocsContent />;
} 