const paths = {
  folder: "M1 4h6v2h8v8H1V4zm2 2v6h10V8H6V6H3z",
  document: "M3 1h7v2h2v2h2v10H3V1zm2 2v10h7V6H9V3H5zm1 5h5v1H6V8zm0 3h5v1H6v-1z",
  home: "M7 1h2v2h2v2h2v2h2v2h-2v6H9v-4H7v4H3V9H1V7h2V5h2V3h2V1zm0 4v2H5v2h6V7H9V5H7z",
  talk: "M1 2h14v10H7v2H5v2H3v-4H1V2zm2 2v6h2v2h2v-2h6V4H3zm2 2h6v2H5V6z",
  smile: "M3 1h10v2h2v10h-2v2H3v-2H1V3h2V1zm0 2v10h10V3H3zm2 2h2v2H5V5zm4 0h2v2H9V5zM5 9h2v2H5V9zm2 2h2v1H7v-1zm2-2h2v2H9V9z",
  spark: "M7 0h2v5h2v2h5v2h-5v2H9v5H7v-5H5V9H0V7h5V5h2V0z",
  play: "M4 2h2v2h3v2h3v2h2v1h-2v2H9v2H6v2H4V2z",
  stop: "M3 3h10v10H3V3z",
  menu: "M2 3h12v2H2V3zm0 4h12v2H2V7zm0 4h12v2H2v-2z",
  moon: "M5 1h5v2H7v6h2v2h5v2h-2v2H5v-2H3v-2H1V5h2V3h2V1z",
  sun: "M7 0h2v3H7V0zm0 13h2v3H7v-3zM0 7h3v2H0V7zm13 0h3v2h-3V7zM5 4h6v1h1v6h-1v1H5v-1H4V5h1V4zM2 2h2v2H2V2zm10 0h2v2h-2V2zM2 12h2v2H2v-2zm10 0h2v2h-2v-2z",
} as const;
export default function PixelIcon({ name, className = "" }: { name: keyof typeof paths; className?: string }) {
  return <svg className={`pixel-icon ${className}`} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" shapeRendering="crispEdges"><path d={paths[name]} fillRule="evenodd" /></svg>;
}
