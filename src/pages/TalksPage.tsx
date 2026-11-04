import { useTranslation } from "../hooks/useTranslation";
import { talks } from "../data/talks";
import { YouTubeTalkCard } from "../components/YouTubeTalkCard";
import PageHeading from "../components/PageHeading";
export function TalksPage() {
  const { t } = useTranslation();
  return <div className="inner-page"><PageHeading title={t("talks.title")} subtitle={t("talks.description")} number="03" />
    {talks.length === 0 ? <p>{t("talks.noTalks")}</p> : <ul className="talk-list">{talks.map((talk) => <li key={talk.id}><YouTubeTalkCard talk={talk} /></li>)}</ul>}
  </div>;
}
