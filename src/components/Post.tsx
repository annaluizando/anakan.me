import { Link } from "react-router-dom";
import { PostProps } from "../types/post";
import { useTranslation } from "../hooks/useTranslation";
import PixelIcon from "./PixelIcon";

export default function Post({ title, description, date, slug }: PostProps) {
  const { language } = useTranslation();
  const formattedDate = new Date(date).toLocaleDateString(
    language === "pt-br" ? "pt-BR" : "en-US",
    { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" },
  );

  return (
    <li className="directory-file">
      <Link to={`/posts/${slug}`}>
        <PixelIcon name="document" />
        <div className="file-copy">
          <span className="file-name">{slug}<span className="file-extension">.md</span></span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <time dateTime={date}>{formattedDate}</time>
        <span className="file-arrow" aria-hidden="true">↗</span>
      </Link>
    </li>
  );
}
