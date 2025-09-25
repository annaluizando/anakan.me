import { useContext } from "react";
import { MusicContext } from "../context/musicContextDefinition";

export function useMusicContext() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusicContext must be used within a MusicProvider");
  }
  return context;
}
