const scenes = [
  { id: "duck", src: "/media/duck.mp4", author: "Nicky Pe", source: "https://www.pexels.com/video/a-duck-swimming-on-a-water-7520032/" },
  { id: "ducks", src: "/media/ducks.mp4", author: "Grisha Grishkoff", source: "https://www.pexels.com/video/duck-family-in-water-12435233/" },
  { id: "duck-run", src: "/media/duck-run.mp4", author: "Nicky Pe", source: "https://www.pexels.com/video/a-duckling-running-on-the-shore-7520246/" },
];
const storageKey = "anakan-last-duck-scene";
let visitScene: typeof scenes[number] | undefined;
export function getVisitDuck() {
  if (visitScene) return visitScene;
  let previous: string | null = null;
  try { previous = localStorage.getItem(storageKey); } catch { previous = null; }
  const previousIndex = scenes.findIndex(scene => scene.id === previous);
  const index = previousIndex < 0 ? 0 : (previousIndex + 1) % scenes.length;
  visitScene = scenes[index];
  try { localStorage.setItem(storageKey, visitScene.id); } catch { return visitScene; }
  return visitScene;
}
