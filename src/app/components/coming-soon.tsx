import React from "react";
import Link from "next/link";
import { Calendar, ArrowLeft, Sparkles } from "lucide-react";

type ComingSoonProps = {
  title: string;
  description: string;
  date: string;
};

export default function ComingSoon({
  title,
  description,
  date,
}: ComingSoonProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Coming Soon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-10">{description}</p>
        <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-xl text-gray-700 mb-10">
          <Calendar className="w-5 h-5 mr-2 text-primary" />
          Expected launch: {date}
        </div>
        <div className="mt-4">
          <Link
            href="/"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}
