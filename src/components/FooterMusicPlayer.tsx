import { useState } from "react";
import { useMusicContext } from "../hooks/useMusicContext";
import { useTranslation } from "../hooks/useTranslation";
import PixelIcon from "./PixelIcon";
export default function FooterMusicPlayer() {
  const { isPlaying, currentSong, volume, setVolume, playMusic, stopMusic } = useMusicContext();
  const { t } = useTranslation();
  const [isStarting, setIsStarting] = useState(false);
  const toggleMusic = async () => {
    if (isPlaying) { stopMusic(); return; }
    setIsStarting(true);
    try { await playMusic(); } finally { setIsStarting(false); }
  };
  return <section className={`music-player ${isPlaying ? "is-playing" : ""}`} aria-label={t("music.player")}>
    <button className="music-play" onClick={toggleMusic} disabled={isStarting} aria-label={t(isPlaying ? "music.stop" : "music.play")} aria-pressed={isPlaying}><PixelIcon name={isPlaying ? "stop" : "play"} /></button>
    <div className="music-info"><span>{currentSong}</span><span className="music-caption">{t("music.generated")}</span></div>
    <span className="music-wave" aria-hidden="true">{[3, 8, 14, 6, 11, 18, 7, 12, 4, 9, 15, 6].map((height, i) => <i key={i} style={{ height, animationDelay: `${i * 90}ms` }} />)}</span>
    <label className="music-volume"><span className="sr-only">{t("music.volume")}</span><input aria-label={t("music.volume")} type="range" min="0" max="1" step="0.05" value={volume} onChange={(e) => setVolume(Number(e.target.value))} /></label>
  </section>;
}
