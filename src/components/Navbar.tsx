import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import PixelIcon from "./PixelIcon";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const links = [
    { to: "/", key: "home", icon: "home" },
    { to: "/posts", key: "posts", icon: "document" },
    { to: "/projects", key: "projects", icon: "folder" },
    { to: "/talks", key: "talks", icon: "talk" },
    { to: "/about", key: "about", icon: "smile" },
  ] as const;
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="anakan.me — home" onClick={() => setIsMenuOpen(false)}>
        <span className="wordmark-bracket" aria-hidden="true">[</span><span>anakan<span className="wordmark-domain">.me</span></span><span className="wordmark-bracket" aria-hidden="true">]</span>
      </Link>
      <span className="header-caption">ANNA / SOFTWARE ENGINEER</span>
      <button className="menu-toggle icon-button" aria-label={t("common.menu")} aria-expanded={isMenuOpen} aria-controls="main-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "×" : <PixelIcon name="menu" />}
      </button>
      <nav id="main-navigation" aria-label={t("common.navigation")} className={`main-navigation ${isMenuOpen ? "is-open" : ""}`}>
        {links.map(({ to, key, icon }) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setIsMenuOpen(false)}><PixelIcon name={icon} /><span>{t(`navigation.${key}`)}</span></NavLink>)}
      </nav>
      <div className="header-controls"><ThemeToggle /><LanguageToggle /></div>
    </header>
  );
}
