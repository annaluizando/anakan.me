export type Language = "en" | "pt-br";

export type TranslationContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: { code: Language; name: string; flag: string }[];
};
