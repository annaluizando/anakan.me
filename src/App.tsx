import "./App.css";
import { PostsProvider } from "./context/postsContext";
import { ThemeProvider } from "./context/themeContext";
import { TranslationProvider } from "./context/translationContext";
import { MusicProvider } from "./context/musicContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import ProjectsPage from "./pages/ProjectsPage";
import { TalksPage } from "./pages/TalksPage";
import { SinglePostPage } from "./pages/SinglePostPage";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import FooterMusicPlayer from "./components/FooterMusicPlayer";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <MusicProvider>
          <div className="min-h-screen flex flex-col bg-[#f0f0f0] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
            <PostsProvider>
              <Router>
                <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] flex-grow">
                  <Navbar />
                  <main className="pb-20 flex flex-col min-h-screen">
                    <div className="flex justify-end gap-2 p-4">
                      <ThemeToggle />
                      <LanguageToggle />
                    </div>
                    {/* Content centered within available space after navbar */}
                    <div className="flex-grow flex items-start justify-center">
                      <div className="w-full max-w-4xl">
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/posts" element={<PostsPage />} />
                          <Route path="/projects" element={<ProjectsPage />} />
                          <Route path="/talks" element={<TalksPage />} />
                          <Route
                            path="/posts/:slug"
                            element={<SinglePostPage />}
                          />
                        </Routes>
                      </div>
                    </div>
                  </main>
                </div>
              </Router>
            </PostsProvider>
            <Footer />
            {/* Scroll to top button */}
            <ScrollToTop />

            {/* Fixed music player at bottom */}
            <div className="fixed bottom-0 left-0 right-0 z-50">
              <FooterMusicPlayer />
            </div>
          </div>
        </MusicProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
}
