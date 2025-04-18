'use client';

import React from 'react';
import Link from 'next/link';

export function LanguageDirectoryPromo() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore the World's Languages</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover a comprehensive directory of languages organized by continent and country.
        </p>
        <Link href="/languages" className="btn-primary">
          View Directory
        </Link>
      </div>
    </section>
  );
}