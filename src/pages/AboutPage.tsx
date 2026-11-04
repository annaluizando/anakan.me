import { useTranslation } from "../hooks/useTranslation";
import PageHeading from "../components/PageHeading";
import PixelIcon from "../components/PixelIcon";
import smilingFace from "../assets/smiling-face.svg";
export function AboutPage() {
  const { t } = useTranslation();
  return <div className="inner-page"><PageHeading title={t("about.title")} subtitle={t("about.description")} number="04" />
    <div className="about-layout">
      <aside className="profile-note"><img className="profile-face" src={smilingFace} width={112} height={112} alt="" /><strong>anna / anakan</strong><span>software engineer</span><span className="profile-signature">always learning_<PixelIcon name="spark" /></span></aside>
      <div className="about-copy">
        <p className="about-intro">{t("about.intro")}</p><p>{t("about.experience")}</p><p>{t("about.journey")}</p><p>{t("about.learning")}</p><p>{t("about.teaching")}</p><p>{t("about.belief")}</p>
        <ul className="about-now"><li>↗ {t("about.work")}</li><li>↗ {t("about.study")}</li><li>↗ {t("about.hobbies")}</li></ul>
        <section className="contact-links"><h2>{t("about.contact")}</h2>
          <a href="https://www.github.com/annaluizando"><span>GitHub</span>github.com/annaluizando <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/annaluizando"><span>LinkedIn</span>linkedin.com/in/annaluizando <span aria-hidden="true">↗</span></a>
          <a href="mailto:contact@anakan.me"><span>Email</span>contact@anakan.me <span aria-hidden="true">↗</span></a>
        </section>
      </div>
    </div>
  </div>;
}
