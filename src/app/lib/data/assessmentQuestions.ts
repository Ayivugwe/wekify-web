
export const assessmentQuestions = [
  {
    id: "speakers",
    question: "How many people speak this language?",
    description: "Estimate the total number of native speakers worldwide.",
    options: [
      { label: "Less than 1,000", score: 1 },
      { label: "1,000 - 10,000", score: 3 },
      { label: "10,000 - 100,000", score: 5 },
      { label: "100,000 - 1 million", score: 7 },
      { label: "More than 1 million", score: 10 }
    ]
  },
  {
    id: "status",
    question: "What is the current status of the language?",
    description: "Select the option that best describes the language's current situation.",
    options: [
      { label: "Critically endangered (few elderly speakers left)", score: 1 },
      { label: "Severely endangered (spoken by older generations)", score: 3 },
      { label: "Definitely endangered (not learned by children)", score: 5 },
      { label: "Vulnerable (most children speak, but limited domains)", score: 7 },
      { label: "Safe (widely spoken across generations)", score: 10 }
    ]
  },
  {
    id: "official",
    question: "Does the language have any official status?",
    description: "Is it recognized at national, regional, or local levels?",
    options: [
      { label: "No official recognition", score: 1 },
      { label: "Recognized at local level only", score: 4 },
      { label: "Recognized at regional level", score: 7 },
      { label: "National official language", score: 10 }
    ]
  },
  {
    id: "education",
    question: "Is the language used in education?",
    description: "To what extent is the language incorporated into formal education systems?",
    options: [
      { label: "Not used in education at all", score: 1 },
      { label: "Limited use in primary education", score: 3 },
      { label: "Used in primary and some secondary education", score: 6 },
      { label: "Used throughout education system", score: 10 }
    ]
  },
  {
    id: "resources",
    question: "What learning resources exist for the language?",
    description: "Select all types of resources that currently exist.",
    options: [
      { label: "Few or no documented resources", score: 1 },
      { label: "Basic dictionary or wordlist", score: 3 },
      { label: "Comprehensive dictionary and grammar guide", score: 6 },
      { label: "Extensive learning resources (books, audio, etc.)", score: 10 }
    ]
  },
  {
    id: "media",
    question: "Is the language present in media?",
    description: "In what media formats can the language be found?",
    options: [
      { label: "Little to no media presence", score: 1 },
      { label: "Limited presence (occasional publications)", score: 3 },
      { label: "Regular media presence (newspapers, radio)", score: 6 },
      { label: "Strong media presence (TV, radio, newspapers, online)", score: 10 }
    ]
  },
  {
    id: "digital",
    question: "What is the language's digital presence?",
    description: "How well is the language represented in digital spheres?",
    options: [
      { label: "Minimal or no digital presence", score: 1 },
      { label: "Limited websites or social media", score: 3 },
      { label: "Moderate online presence and content", score: 6 },
      { label: "Strong digital presence with many resources", score: 10 }
    ]
  },
  {
    id: "intergenerational",
    question: "Is the language passed between generations?",
    description: "Are children learning the language from their parents?",
    options: [
      { label: "Rarely passed to the next generation", score: 1 },
      { label: "Some families maintain transmission", score: 4 },
      { label: "Most families pass on the language", score: 7 },
      { label: "Strong intergenerational transmission", score: 10 }
    ]
  },
  {
    id: "community",
    question: "How active is the language community?",
    description: "Are there active efforts to promote or preserve the language?",
    options: [
      { label: "Little to no organized efforts", score: 1 },
      { label: "Some grassroots initiatives", score: 4 },
      { label: "Active community with regular events", score: 7 },
      { label: "Highly organized community with many initiatives", score: 10 }
    ]
  },
  {
    id: "documentation",
    question: "How well documented is the language?",
    description: "What level of linguistic documentation exists?",
    options: [
      { label: "No or minimal documentation", score: 1 },
      { label: "Some basic documentation", score: 3 },
      { label: "Moderate documentation of grammar and vocabulary", score: 6 },
      { label: "Extensive documentation of all aspects", score: 10 }
    ]
  }
];
