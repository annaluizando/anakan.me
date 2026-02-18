import { useContext } from "react";
import { TranslationContext } from "../context/translationContext";
import { TranslationContextType } from "../types/translation";

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
