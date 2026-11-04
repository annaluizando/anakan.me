import { useTranslation } from "../hooks/useTranslation";
import FooterMusicPlayer from "./FooterMusicPlayer";
import smilingFace from "../assets/smiling-face.svg";
export default function Footer() {
  const { t } = useTranslation();
  return <footer className="site-footer"><div className="footer-signature"><img className="footer-face" src={smilingFace} width={22} height={41} alt="" /><span>© {new Date().getFullYear()} · {t("footer.copyright")}</span><span className="footer-note">small software, big daydreams.</span></div><FooterMusicPlayer /></footer>;
}
