
// This file would connect to a database in production
// For now, we're using static data

export const languagesData = {
  africa: {
    "East Africa": [
      { name: "Swahili", speakers: "100-150 million", status: "healthy" },
      { name: "Amharic", speakers: "25 million", status: "healthy" },
      { name: "Oromo", speakers: "30 million", status: "vulnerable" },
      { name: "Somali", speakers: "16 million", status: "vulnerable" },
      { name: "Tigrinya", speakers: "7 million", status: "vulnerable" },
    ],
    // Other regions would be similarly structured
  },
  // Other continents would be similarly structured
};

export async function getAllLanguages() {
  // In a real implementation, this would fetch from a database
  return languagesData;
}

export async function getLanguagesByContinent(continent) {
  // In a real implementation, this would query a database
  return languagesData[continent] || {};
}

export async function searchLanguages(searchTerm) {
  const term = searchTerm.toLowerCase();
  let results = [];

  // Search across all continents and regions
  Object.entries(languagesData).forEach(([continent, regions]) => {
    Object.entries(regions).forEach(([region, languages]) => {
      const matchedLanguages = languages.filter(lang => 
        lang.name.toLowerCase().includes(term)
      );
      
      if (matchedLanguages.length > 0) {
        results.push({
          continent,
          region,
          languages: matchedLanguages
        });
      }
    });
  });

  return results;
}
