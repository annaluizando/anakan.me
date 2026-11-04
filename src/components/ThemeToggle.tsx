import { useTheme } from "../context/themeContext";
import { useTranslation } from "../hooks/useTranslation";
import PixelIcon from "./PixelIcon";
export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { t } = useTranslation();
  return <button onClick={toggleDarkMode} className="icon-button" aria-label={t(isDarkMode ? "common.lightMode" : "common.darkMode")} title={t(isDarkMode ? "common.lightMode" : "common.darkMode")}><PixelIcon name={isDarkMode ? "sun" : "moon"} /></button>;
}
