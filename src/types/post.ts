import { Language } from "./translation";

export interface PostTranslation {
  title: string;
  description: string;
  content: string;
}

export interface PostProps {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  content?: string;
  /** Localized title, description, and content by language code. */
  translations?: Partial<Record<Language, PostTranslation>>;
}
