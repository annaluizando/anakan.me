import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

type Language = "en" | "pt-br";

/* SVG flags - colored, aspect ratio ~3:2 */
function USFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 27 18" fill="none" aria-hidden>
      {/* Stripes */}
      <path fill="#B22234" d="M0 0h27v1.38H0z" />
      <path fill="#fff" d="M0 1.38h27v1.38H0z" />
      <path fill="#B22234" d="M0 2.77h27v1.38H0z" />
      <path fill="#fff" d="M0 4.15h27v1.38H0z" />
      <path fill="#B22234" d="M0 5.54h27v1.38H0z" />
      <path fill="#fff" d="M0 6.92h27v1.38H0z" />
      <path fill="#B22234" d="M0 8.31h27v1.38H0z" />
      <path fill="#fff" d="M0 9.69h27v1.38H0z" />
      <path fill="#B22234" d="M0 11.08h27v1.38H0z" />
      <path fill="#fff" d="M0 12.46h27v1.38H0z" />
      <path fill="#B22234" d="M0 13.85h27v1.38H0z" />
      <path fill="#fff" d="M0 15.23h27v1.38H0z" />
      <path fill="#B22234" d="M0 16.62h27v1.38H0z" />
      {/* Canton */}
      <path fill="#3C3B6E" d="M0 0h10.8v7.38H0z" />
      {/* Stars (simplified 5x4 grid) */}
      {[1, 2, 3, 4].map((row) =>
        [1, 2, 3, 4, 5].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={0.9 + col * 2.25}
            cy={0.9 + row * 1.4}
            r="0.5"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
}

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 14" fill="none" aria-hidden>
      <rect width="20" height="14" fill="#009739" />
      {/* Yellow diamond */}
      <path
        fill="#FEDD00"
        d="M10 1 L19 7 L10 13 L1 7 Z"
      />
      {/* Blue circle */}
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      {/* Band (simplified arc) */}
      <path
        fill="none"
        stroke="#FEDD00"
        strokeWidth="0.4"
        strokeLinecap="round"
        d="M7.2 7.2 Q10 5.5 12.8 7.2 Q10 8.9 7.2 7.2"
      />
      {/* Stars in circle (simplified - a few dots) */}
      <circle cx="10" cy="5.8" r="0.35" fill="#fff" />
      <circle cx="8.2" cy="6.8" r="0.35" fill="#fff" />
      <circle cx="11.8" cy="6.8" r="0.35" fill="#fff" />
      <circle cx="9.2" cy="8" r="0.35" fill="#fff" />
      <circle cx="10.8" cy="8" r="0.35" fill="#fff" />
    </svg>
  );
}

const flagByCode: Record<Language, (props: { className?: string }) => React.ReactElement> = {
  en: USFlag,
  "pt-br": BrazilFlag,
};

function LanguageIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Left speech bubble (larger) */}
      <path
        d="M4 3h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-2 2v-2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
      />
      {/* Right speech bubble (smaller, overlapping) */}
      <path
        d="M12 11h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4l-1.5 1.5V20h-2.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
      />
      {/* Two dots between bubbles */}
      <circle cx="13" cy="10.5" r="0.9" fill="currentColor" />
      <circle cx="13" cy="13" r="0.9" fill="currentColor" />
      {/* 文 (language/writing) */}
      <text
        x="9"
        y="9.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="4.5"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        文
      </text>
      {/* A */}
      <text
        x="16"
        y="16.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="5"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        A
      </text>
    </svg>
  );
}

export default function LanguageToggle() {
  const { language, setLanguage, availableLanguages } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as Language);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors hover:bg-slate-300 dark:hover:bg-slate-600"
        aria-label="Change language"
      >
        <LanguageIcon className="w-5 h-5 shrink-0" />
        <svg
          className={`w-4 h-4 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-20 min-w-32">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 ${
                  language === lang.code
                    ? "bg-blue-50 dark:bg-blue-900/30 text-[#4161b1] dark:text-[#4161b1]"
                    : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {(() => {
                  const Flag = flagByCode[lang.code as Language];
                  return Flag ? (
                    <Flag className="w-6 h-4 shrink-0 rounded-sm overflow-hidden border border-slate-200 dark:border-slate-600" />
                  ) : null;
                })()}
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
