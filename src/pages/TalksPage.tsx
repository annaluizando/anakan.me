import { useTranslation } from "../hooks/useTranslation";
import { talks } from "../data/talks";
import { YouTubeTalkCard } from "../components/YouTubeTalkCard";

export function TalksPage() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-6 w-full px-4">
      <header>
        <h2 className="font-bold text-3xl">{t("talks.title")}</h2>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          {t("talks.description")}
        </p>
      </header>

      {talks.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400 py-8">
          {t("talks.noTalks")}
        </p>
      ) : (
        <ul className="flex flex-col gap-4 list-none p-0 m-0">
          {talks.map((talk) => (
            <li key={talk.id}>
              <YouTubeTalkCard talk={talk} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
