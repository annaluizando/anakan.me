import "./App.css";
import { useEffect } from "react";
import { PostsProvider } from "./context/postsContext";
import { ThemeProvider } from "./context/themeContext";
import { TranslationProvider } from "./context/translationContext";
import { MusicProvider } from "./context/musicContext";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import ProjectsPage from "./pages/ProjectsPage";
import { TalksPage } from "./pages/TalksPage";
import { SinglePostPage } from "./pages/SinglePostPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useTranslation } from "./hooks/useTranslation";
function SiteLayout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">{t("common.skip")}</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/posts/:slug" element={<SinglePostPage />} />
      </Routes>
    </main>
    <Footer /><ScrollToTop />
  </div>;
}
export default function App() {
  return <TranslationProvider><ThemeProvider><MusicProvider><PostsProvider><Router><SiteLayout /></Router></PostsProvider></MusicProvider></ThemeProvider></TranslationProvider>;
}
