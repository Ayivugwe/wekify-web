
export const continentsData = [
  { name: 'Africa', code: 'AF' },
  { name: 'Europe', code: 'EU' },
  { name: 'Asia', code: 'AS' },
  { name: 'North America', code: 'NA' },
  { name: 'South America', code: 'SA' },
  { name: 'Oceania', code: 'OC' },
  { name: 'Antarctica', code: 'AN' }
];

export const regionsData = [
  { continent: 'Africa', name: 'Eastern Africa' },
  { continent: 'Africa', name: 'Western Africa' },
  { continent: 'Africa', name: 'Northern Africa' },
  { continent: 'Africa', name: 'Southern Africa' },
  { continent: 'Africa', name: 'Central Africa' },
  { continent: 'Europe', name: 'Western Europe' },
  { continent: 'Europe', name: 'Eastern Europe' },
  { continent: 'Europe', name: 'Northern Europe' },
  { continent: 'Europe', name: 'Southern Europe' },
  { continent: 'Asia', name: 'Eastern Asia' },
  { continent: 'Asia', name: 'Southern Asia' },
  { continent: 'Asia', name: 'Southeast Asia' },
  { continent: 'Asia', name: 'Central Asia' },
  { continent: 'Asia', name: 'Western Asia' },
  { continent: 'North America', name: 'Northern America' },
  { continent: 'North America', name: 'Central America' },
  { continent: 'North America', name: 'Caribbean' },
  { continent: 'South America', name: 'South America' },
  { continent: 'Oceania', name: 'Australasia' },
  { continent: 'Oceania', name: 'Melanesia' },
  { continent: 'Oceania', name: 'Micronesia' },
  { continent: 'Oceania', name: 'Polynesia' }
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
        name: 'Tanzania',
        code: 'TZ',
        languages: [
          { name: 'Swahili', native_name: 'Kiswahili', speakers: 45000000, status: 'official' },
          { name: 'Sukuma', native_name: 'Sukuma', speakers: 5400000, status: 'regional' }
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
          { name: 'Occitan', native_name: 'Occitan', speakers: 1500000, status: 'regional' },
          { name: 'Breton', native_name: 'Brezhoneg', speakers: 200000, status: 'regional' }
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
  }
  // Add more regions and countries as needed
];
