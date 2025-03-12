'use client';

import React from 'react';
import Link from 'next/link';

export default function GamePromoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Play Our Word Preservation Game!</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn about endangered languages and help preserve them by playing our fun and engaging game.
        </p>
        <Link href="/game" className="btn-primary">
          Play Now
        </Link>
      </div>
    </section>
  );
}