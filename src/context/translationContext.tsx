import { createContext, useState, ReactNode, useEffect } from "react";
import enTranslations from "../translations/en.json";
import ptBrTranslations from "../translations/pt-br.json";
import { Language, TranslationContextType } from "../types/translation";

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

const translations = {
  en: enTranslations,
  "pt-br": ptBrTranslations,
};

const availableLanguages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "pt-br" as Language, name: "Português", flag: "🇧🇷" },
];

const getNestedValue = (obj: Record<string, unknown>, key: string): string => {
  const result = key.split(".").reduce((current: unknown, prop) => {
    return typeof current === "object" && current !== null
      ? (current as Record<string, unknown>)[prop]
      : current;
  }, obj as unknown);
  return typeof result === "string" ? result : key;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    const browserLanguage = navigator.language.split("-")[0] as Language;

    return (
      (savedLanguage && savedLanguage in translations ? savedLanguage : null) ||
      (browserLanguage in translations ? browserLanguage : null) ||
      "en"
    );
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    return translation;
  };

  const value: TranslationContextType = {
    language,
    setLanguage,
    t,
    availableLanguages,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext };
