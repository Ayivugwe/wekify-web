import { NextResponse } from 'next/server';

export async function GET() {
  const languageData = {
    "Africa": [
      {
        name: "Eastern Africa",
        countries: [
          {
            name: "Kenya",
            code: "KE",
            languages: [
              { name: "Swahili", native_name: "Kiswahili", speakers: 40000000, status: "official" },
              { name: "Kikuyu", native_name: "Gĩkũyũ", speakers: 6600000, status: "regional" },
              { name: "Luo", native_name: "Dholuo", speakers: 4200000, status: "regional" }
            ]
          },
          {
            name: "Tanzania",
            code: "TZ",
            languages: [
              { name: "Swahili", native_name: "Kiswahili", speakers: 45000000, status: "official" },
              { name: "Sukuma", native_name: "Sukuma", speakers: 5400000, status: "regional" }
            ]
          }
        ]
      },
      {
        name: "Western Africa",
        countries: [
          {
            name: "Nigeria",
            code: "NG",
            languages: [
              { name: "Yoruba", native_name: "Èdè Yorùbá", speakers: 45000000, status: "official" },
              { name: "Hausa", native_name: "Harshen Hausa", speakers: 43000000, status: "official" },
              { name: "Igbo", native_name: "Asụsụ Igbo", speakers: 27000000, status: "official" }
            ]
          }
        ]
      }
    ]
  };

  return NextResponse.json(languageData);
}