'use client';

import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  color: string;
  description: string;
  languages: number;
}

const InteractiveMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      id: 'africa',
      name: 'Africa',
      top: '40%',
      left: '35%',
      color: 'bg-yellow-500',
      description: 'Home to over 2,000 languages, including Kifuliiru and other Bantu languages',
      languages: 2000
    },
    {
      id: 'asia',
      name: 'Asia',
      top: '35%',
      left: '75%',
      color: 'bg-teal-500',
      description: 'Diverse linguistic landscape with major language families like Sino-Tibetan and Indo-European',
      languages: 2300
    },
    {
      id: 'americas',
      name: 'Americas',
      top: '45%',
      left: '20%',
      color: 'bg-purple-500',
      description: 'Rich indigenous language heritage with over 1,000 native languages',
      languages: 1000
    },
    {
      id: 'europe',
      name: 'Europe',
      top: '30%',
      left: '50%',
      color: 'bg-indigo-500',
      description: 'Historical linguistic diversity with many endangered regional languages',
      languages: 300
    },
    {
      id: 'oceania',
      name: 'Oceania',
      top: '60%',
      left: '85%',
      color: 'bg-green-500',
      description: 'Vast array of Austronesian and Papuan languages across the Pacific',
      languages: 1200
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-96 relative bg-blue-50">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* World map outline */}
          <path
            d="M500,100 C600,100 700,150 750,250 C800,350 750,450 650,450 C550,450 450,400 400,300 C350,200 400,100 500,100 Z"
            fill="#E6F3FF"
            stroke="#B3D9FF"
            strokeWidth="2"
          />
          {/* Continent outlines */}
          <path
            d="M300,300 C350,250 400,200 450,250 C500,300 550,350 600,300 C650,250 700,200 750,250"
            fill="#CCE6FF"
            stroke="#80BFFF"
            strokeWidth="1"
          />
          <path
            d="M200,200 C250,150 300,100 350,150 C400,200 450,250 500,200"
            fill="#CCE6FF"
            stroke="#80BFFF"
            strokeWidth="1"
          />
          <path
            d="M600,400 C650,350 700,300 750,350 C800,400 850,450 900,400"
            fill="#CCE6FF"
            stroke="#80BFFF"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Interactive World Map</h3>
            <p className="mb-4">Select a continent to begin exploring languages in that region.</p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center font-medium transition-all inline-flex">
              Open Full Map <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Interactive points on the map */}
        {regions.map((region) => (
          <div
            key={region.id}
            className={`absolute ${region.top ? `top-[${region.top}]` : ''} ${region.left ? `left-[${region.left}]` : ''} ${region.right ? `right-[${region.right}]` : ''} ${region.bottom ? `bottom-[${region.bottom}]` : ''} ${region.color} w-4 h-4 rounded-full cursor-pointer hover:w-5 hover:h-5 transition-all group`}
            title={region.name}
            onClick={() => setSelectedRegion(region.id)}
          >
            {/* Tooltip */}
            {selectedRegion === region.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white text-gray-800 p-4 rounded-lg shadow-lg z-10">
                <h4 className="font-bold text-lg mb-2">{region.name}</h4>
                <p className="text-sm mb-2">{region.description}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{region.languages.toLocaleString()} languages</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap; 