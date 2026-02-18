import { useState } from "react";
import { Talk } from "../types/talk";

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function getThumbnailUrl(videoId: string, quality: "maxresdefault" | "hqdefault" = "maxresdefault") {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

interface YouTubeTalkCardProps {
  talk: Talk;
}

export function YouTubeTalkCard({ talk }: YouTubeTalkCardProps) {
  const videoId = getYouTubeVideoId(talk.youtubeUrl);
  const [useFallbackThumb, setUseFallbackThumb] = useState(false);

  if (!videoId) {
    return (
      <a
        href={talk.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 rounded-xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl text-slate-700 dark:text-slate-300 hover:border-[#2047AD]/40 transition-colors"
      >
        <span className="font-medium">{talk.title}</span>
        <span className="text-sm text-slate-500">→ Open link</span>
      </a>
    );
  }

  const thumbUrl = getThumbnailUrl(videoId, useFallbackThumb ? "hqdefault" : "maxresdefault");

  return (
    <a
      href={talk.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row rounded-2xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl overflow-hidden hover:border-[#2047AD]/40 hover:bg-white/60 dark:hover:bg-slate-700/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2047AD] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/30"
    >
      {/* Thumbnail - left on desktop, top on mobile */}
      <div className="relative w-full sm:w-[420px] sm:shrink-0 aspect-video sm:aspect-auto sm:h-[240px] bg-slate-200/50 dark:bg-slate-700/50 overflow-hidden">
        <img
          src={thumbUrl}
          alt=""
          className="absolute inset-0 min-w-full min-h-full w-full h-full object-cover object-center scale-105 transition-transform duration-300 group-hover:scale-[1.07]"
          onError={() => setUseFallbackThumb(true)}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 sm:bg-black/0 group-hover:bg-black/20 transition-colors">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 shadow-md group-hover:bg-[#ff0000] group-hover:scale-110 transition-all duration-200">
            <svg className="w-5 h-5 text-slate-800 group-hover:text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 text-left">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 group-hover:text-[#2047AD] dark:group-hover:text-[#5b8def] transition-colors">
          {talk.title}
        </h3>
        {(talk.event || talk.date) && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {[talk.event, talk.date].filter(Boolean).join(" · ")}
          </p>
        )}
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#2047AD]">
          Watch on YouTube
          <svg className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </div>
    </a>
  );
}
