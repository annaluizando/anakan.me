import { useTranslation } from "../hooks/useTranslation";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="back-to-top fixed bottom-24 right-6 z-40 bg-slate-500/15 dark:bg-slate-800/80 backdrop-blur-md rounded-lg p-3 shadow-lg dark:shadow-2xl dark:shadow-slate-900/50 hover:shadow-xl hover:dark:shadow-slate-900/70 transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50 hover:border-[#2047AD]/50 dark:hover:border-[#2047AD]/50 transform hover:-translate-y-1 hover:bg-slate-500/20 dark:hover:bg-slate-700/90 group"
          aria-label={t("common.top")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-slate-700 dark:text-slate-200 group-hover:text-[#2047AD] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
