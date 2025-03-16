
export const continentsData = [
  { name: 'Africa', code: 'AF' },
  { name: 'Europe', code: 'EU' },
  { name: 'Asia', code: 'AS' },
  { name: 'North America', code: 'NA' },
  { name: 'South America', code: 'SA' },
  { name: 'Oceania', code: 'OC' }
];

export const regionsData = [
  { continent: 'Africa', regions: ['Eastern Africa', 'Western Africa', 'Southern Africa', 'Northern Africa', 'Central Africa'] },
  { continent: 'Europe', regions: ['Western Europe', 'Eastern Europe', 'Northern Europe', 'Southern Europe'] },
  { continent: 'Asia', regions: ['Eastern Asia', 'Southern Asia', 'Southeast Asia', 'Central Asia', 'Western Asia'] },
  { continent: 'North America', regions: ['Northern America', 'Central America', 'Caribbean'] },
  { continent: 'South America', regions: ['South America'] },
  { continent: 'Oceania', regions: ['Australasia', 'Melanesia', 'Micronesia', 'Polynesia'] }
];

export const countriesAndLanguagesData = [
  {
    region: 'Eastern Africa',
    countries: [
      {
        name: 'Kenya',
        code: 'KE',
        languages: [
          { name: 'Swahili', native_name: 'Kiswahili', speakers: 40000000, status: 'official' },
          { name: 'Kikuyu', native_name: 'Gĩkũyũ', speakers: 6600000, status: 'regional' },
          { name: 'Luo', native_name: 'Dholuo', speakers: 4200000, status: 'regional' }
        ]
      },
      {
        name: 'Ethiopia',
        code: 'ET',
        languages: [
          { name: 'Amharic', native_name: 'አማርኛ', speakers: 22000000, status: 'official' },
          { name: 'Oromo', native_name: 'Afaan Oromoo', speakers: 25000000, status: 'regional' }
        ]
      }
    ]
  },
  {
    region: 'Western Europe',
    countries: [
      {
        name: 'France',
        code: 'FR',
        languages: [
          { name: 'French', native_name: 'Français', speakers: 67000000, status: 'official' },
          { name: 'Breton', native_name: 'Brezhoneg', speakers: 200000, status: 'regional' },
          { name: 'Occitan', native_name: 'Occitan', speakers: 1500000, status: 'regional' }
        ]
      },
      {
        name: 'Germany',
        code: 'DE',
        languages: [
          { name: 'German', native_name: 'Deutsch', speakers: 95000000, status: 'official' },
          { name: 'Low German', native_name: 'Plattdüütsch', speakers: 2600000, status: 'regional' }
        ]
      }
    ]
  },
  {
    region: 'Eastern Asia',
    countries: [
      {
        name: 'China',
        code: 'CN',
        languages: [
          { name: 'Mandarin Chinese', native_name: '普通话', speakers: 920000000, status: 'official' },
          { name: 'Cantonese', native_name: '粵語', speakers: 80000000, status: 'regional' },
          { name: 'Wu', native_name: '吴语', speakers: 80000000, status: 'regional' }
        ]
      },
      {
        name: 'Japan',
        code: 'JP',
        languages: [
          { name: 'Japanese', native_name: '日本語', speakers: 125000000, status: 'official' },
          { name: 'Ryukyuan', native_name: '琉球語', speakers: 1000000, status: 'regional' }
        ]
      }
    ]
  }
];
