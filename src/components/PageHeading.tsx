import PixelIcon from "./PixelIcon";
export default function PageHeading({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) {
  return <header className="page-heading"><p className="eyebrow"><PixelIcon name="spark" /> ANAKAN.ME / {number}</p><h1>{title}<span>.</span></h1>{subtitle && <p>{subtitle}</p>}</header>;
}
