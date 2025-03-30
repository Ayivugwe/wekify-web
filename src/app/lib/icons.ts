
import { LucideIcon } from "lucide-react";
import {
  Home,
  Book,
  Users,
  Heart,
  Mail,
  Info,
  HelpCircle,
  FileText,
  Globe,
} from "lucide-react";

export type IconName =
  | "home"
  | "about"
  | "team"
  | "contact"
  | "resources"
  | "faq"
  | "docs"
  | "languages"
  | "mission";

export const IconMap: Record<IconName, LucideIcon> = {
  home: Home,
  about: Info,
  team: Users,
  contact: Mail,
  resources: Book,
  faq: HelpCircle,
  docs: FileText,
  languages: Globe,
  mission: Heart,
};
