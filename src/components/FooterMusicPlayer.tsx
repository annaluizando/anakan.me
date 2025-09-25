import { useState, useEffect } from "react";
import { useMusicContext } from "../hooks/useMusicContext";
import { useTheme } from "../context/themeContext";

const getSliderStyles = (isDark: boolean) => `
  .custom-slider::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
  }
  .custom-slider::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3b82f6;
    cursor: pointer;
    border: none;
  }
  .custom-slider {
    background: ${isDark ? "#475569" : "#cbd5e1"};
  }
`;

export default function FooterMusicPlayer() {
  const { isPlaying, currentSong, volume, setVolume, playMusic, stopMusic } =
    useMusicContext();
  const { isDarkMode } = useTheme();
  const [showVolume, setShowVolume] = useState(false);

  // Inject minimal slider styles that update with theme
  useEffect(() => {
    let style = document.getElementById("slider-styles") as HTMLStyleElement;
    if (!style) {
      style = document.createElement("style");
      style.id = "slider-styles";
      document.head.appendChild(style);
    }
    style.textContent = getSliderStyles(isDarkMode);
  }, [isDarkMode]);

  const handlePlayPause = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      playMusic();
    }
  };

  return (
    <div className="bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-900 dark:text-white text-xs border-t border-slate-300 dark:border-slate-700 relative">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left: Now Playing */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="text-slate-600 dark:text-slate-400">♪</div>
          <div className="min-w-0">
            <div className="truncate text-slate-900 dark:text-white font-medium">
              {currentSong}
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-xs">
              Code-generated music
            </div>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
            )}
          </button>

          {/* Volume Control */}
          <div className="relative">
            <button
              className="px-2 py-1 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600 rounded text-xs transition-colors flex items-center justify-center"
              onMouseEnter={() => setShowVolume(true)}
              onMouseLeave={() => setShowVolume(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>
            {showVolume && (
              <div
                className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded shadow-lg flex items-center justify-center w-10 h-28 py-2"
                onMouseEnter={() => setShowVolume(true)}
                onMouseLeave={() => setShowVolume(false)}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-24 h-1 rounded appearance-none cursor-pointer custom-slider transform -rotate-90 origin-center"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 ml-3 w-8">
          <div
            className={`w-1 h-2 ${
              isPlaying ? "bg-green-500 animate-pulse" : "bg-transparent"
            }`}
          ></div>
          <div
            className={`w-1 h-3 ${
              isPlaying
                ? "bg-green-400 animate-pulse delay-100"
                : "bg-transparent"
            }`}
          ></div>
          <div
            className={`w-1 h-2 ${
              isPlaying
                ? "bg-green-500 animate-pulse delay-200"
                : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
