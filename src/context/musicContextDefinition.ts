import { createContext } from "react";

export interface MusicContextType {
  isPlaying: boolean;
  currentSong: string;
  volume: number;
  setVolume: (volume: number) => void;
  playMusic: (code?: string) => Promise<void>;
  stopMusic: () => void;
  generateMusicFromCode: (code: string, scale?: string) => void;
}

export const MusicContext = createContext<MusicContextType | undefined>(undefined);
