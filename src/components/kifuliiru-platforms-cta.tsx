import React from 'react';
import { Globe, BookOpen, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

const platforms = [
  {
    icon: Globe,
    title: 'Kifuliiru.com',
    description: 'Main platform for Kifuliiru language resources and learning'
  },
  {
    icon: BookOpen,
    title: 'FuliiruHub.com',
    description: 'Comprehensive hub for Kifuliiru language documentation'
  },
  {
    icon: Settings,
    title: 'Admin Dashboard',
    description: 'Management tools for Kifuliiru language content'
  }
];

export const KifuliiruPlatformsCTA = () => {
  return (
    <FadeIn>
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-800 text-sm font-medium mb-4">
              Kifuliiru Language
            </span>
            <h2 className="text-3xl font-bold mb-4">Explore Our Kifuliiru Platforms</h2>
            <p className="text-primary-200 max-w-2xl mx-auto">
              Discover our dedicated platforms for the Kifuliiru language, each designed to support different aspects of language preservation and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-primary-800/50 rounded-xl p-6 border border-primary-700/50"
              >
                <platform.icon className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
                <p className="text-primary-300">{platform.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
              asChild
            >
              <a href="/kifuliiru">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}; 