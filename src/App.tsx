import "./App.css";
import { PostsProvider } from "./context/postsContext";
import { ThemeProvider } from "./context/themeContext";
import { MusicProvider } from "./context/musicContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import ProjectsPage from "./pages/ProjectsPage";
import { SinglePostPage } from "./pages/SinglePostPage";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import FooterMusicPlayer from "./components/FooterMusicPlayer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider>
      <MusicProvider>
        <div className="min-h-screen flex flex-col bg-[#f0f0f0] dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
          <PostsProvider>
            <Router>
              <div className="flex flex-col md:grid md:grid-cols-[auto_1fr] flex-grow">
                <Navbar />
                <main className="pb-20 flex flex-col min-h-screen">
                  <div className="flex justify-end p-4">
                    <ThemeToggle />
                  </div>
                  {/* Content centered within available space after navbar */}
                  <div className="flex-grow flex items-start justify-center">
                    <div className="w-full max-w-4xl">
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/posts" element={<PostsPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
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
          <footer className="border-t border-slate-300 dark:border-slate-700 pb-16">
            <div className="py-4 text-center text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} • Built by anakan :)
            </div>
          </footer>
          {/* Scroll to top button */}
          <ScrollToTop />

          {/* Fixed music player at bottom */}
          <div className="fixed bottom-0 left-0 right-0 z-50">
            <FooterMusicPlayer />
          </div>
        </div>
      </MusicProvider>
    </ThemeProvider>
  );
}
