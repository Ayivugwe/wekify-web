import { LucideIcon } from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
  slug: string;
  tags?: string[];
  readingTime?: string;
}

export interface BlogCategory {
  name: string;
  icon: LucideIcon;
  count: number;
  slug: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  keywords: string;
} 