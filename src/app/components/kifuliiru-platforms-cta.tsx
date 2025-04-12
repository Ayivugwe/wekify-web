import React from 'react';
import { Globe, BookOpen, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { FadeIn } from './ui/fade-in';
import Link from 'next/link';

const platforms = [
  {
    icon: Globe,
    title: 'Kifuliiru.com',
    description: 'Main platform for Kifuliiru language resources and learning',
    linkTitle: 'Visit Kifuliiru.com',
    link: 'https://kifuliiru.com'
  },
  {
    icon: BookOpen,
    title: 'FuliiruHub.com',
    description: 'Comprehensive hub for Kifuliiru language documentation',
    linkTitle: 'Visit FuliiruHub.com',
    link: 'https://fuliiruhub.com'
  },
  {
    icon: Settings,
    title: 'Admin Dashboard',
    description: 'Management tools for Kifuliiru language content',
    linkTitle: 'Private Access',
    link: ''
  },

  {
    icon: Globe,
    title: 'Kifuliiru.net',
    description: 'Main platform for Kifuliiru language resources and learning in Kifuliiru',
    linkTitle: 'Visit Kifuliiru.net',
    link: 'https://kifuliiru.net'
  }, 
  {
    icon: BookOpen,
    title: 'Imyazi (The News in Kifuliiru)',
    description: 'One of the places where Kifuliiru language news is published',
    linkTitle: 'Visit Imyazi',
    link: 'https://imyazi.substack.com/'
  },
  {
    icon: BookOpen,
    title: 'Radio Ibufuliiru',
    description: 'One of the places where Kifuliiru language news is published',
    linkTitle: 'Visit Radio Ibufuliiru',
    link: 'https://radioibufuliiru.substack.com/'
  },

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
                <p className="text-primary-300 mb-4">{platform.description}</p>
                {platform.link && (
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
                    asChild
                  >
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      {platform.linkTitle}
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-primary-800/50 rounded-xl p-6 border border-primary-700/50">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-3">
                  <BookOpen className="w-5 h-5 text-primary-400" />
                  <p className="text-primary-200 text-lg">
                    Learn more about our vision for languages and its platforms and how we work to preserve and promote it.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900"
                  asChild
                >
                  <Link 
                    href="/atlas/languages/kifuliiru"
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    Learn more about Kifuliiru →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}; 