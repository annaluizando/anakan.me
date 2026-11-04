import { useTranslation } from "../hooks/useTranslation";
import { Language } from "../types/translation";
export default function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation();
  return <label className="language-control"><span className="sr-only">{t("common.language")}</span><select aria-label={t("common.language")} value={language} onChange={(e) => setLanguage(e.target.value as Language)}><option value="en">EN</option><option value="pt-br">PT</option></select></label>;
}
