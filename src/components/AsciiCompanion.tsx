import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { getVisitDuck } from "../utils/duckScenes";
import { createVideoRenderer } from "../utils/videoArt";

export default function AsciiCompanion() {
  const { t } = useTranslation();
  const [scene] = useState(getVisitDuck);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const art = useRef<HTMLCanvasElement>(null);
  const footage = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setPaused(motion.matches);
    motion.addEventListener("change", syncMotion);
    return () => motion.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const canvas = art.current;
    const video = footage.current;
    if (!canvas || !video) return;
    const render = createVideoRenderer(canvas);
    let visible = false;
    let disposed = false;
    let raf = 0;
    let lastDraw = 0;
    let playbackRequest = 0;
    const paint = () => render(video);
    const animate = (now: number) => {
      if (now - lastDraw >= 1000 / 24) { paint(); lastDraw = now; }
      raf = requestAnimationFrame(animate);
    };
    const sync = () => {
      const request = ++playbackRequest;
      cancelAnimationFrame(raf);
      if (visible && !document.hidden && !paused && !video.error) {
        video.play().catch(error => {
          if (!disposed && request === playbackRequest && error.name !== "AbortError") setPaused(true);
        });
        raf = requestAnimationFrame(animate);
      } else video.pause();
    };
    const loaded = () => { setStatus("ready"); paint(); };
    const failed = () => { setStatus("error"); video.pause(); cancelAnimationFrame(raf); };
    video.addEventListener("loadeddata", loaded);
    video.addEventListener("error", failed);
    video.addEventListener("seeked", paint);
    if (video.readyState >= 2) loaded();
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(canvas);
    const resize = new ResizeObserver(paint);
    resize.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      video.pause();
      cancelAnimationFrame(raf);
      observer.disconnect();
      resize.disconnect();
      video.removeEventListener("loadeddata", loaded);
      video.removeEventListener("error", failed);
      video.removeEventListener("seeked", paint);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return (
    <figure className="ascii-companion" aria-label={t("ascii.duck.description")}>
      <div className="ascii-toolbar"><span><span aria-hidden="true">[ : ]</span> {t("ascii.title")}</span><span>{scene.id}.bmp · Dither</span></div>
      <div className="ascii-viewport" aria-busy={status === "loading"}>
        <video ref={footage} src={scene.src} muted loop playsInline preload="auto" hidden />
        <canvas ref={art} aria-hidden="true" />
        {status !== "ready" && <span className="ascii-status" role="status">{t(status === "error" ? "ascii.error" : "ascii.loading")}</span>}
      </div>
      <figcaption className="ascii-caption">
        <div>
          <span>{t("ascii.duck.caption")}</span>
          <a href={scene.source} target="_blank" rel="noreferrer">{scene.author} / Pexels ↗</a>
        </div>
      </figcaption>
    </figure>
  );
}
