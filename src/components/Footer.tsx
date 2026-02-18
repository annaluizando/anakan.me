import { useTranslation } from "../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-300 dark:border-slate-700 pb-16">
      <div className="py-4 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} • {t("footer.copyright")}
      </div>
    </footer>
  );
}
