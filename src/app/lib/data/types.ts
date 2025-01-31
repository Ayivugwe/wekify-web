// types.ts
export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  questions: FAQ[];
}
