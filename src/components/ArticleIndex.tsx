import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { useTranslation } from "../hooks/useTranslation";
import { slugify } from "../utils/headings";
import PixelIcon from "./PixelIcon";

interface Heading {
  text: string;
  id: string;
  level: number;
  children: Heading[];
}

function getHeadingTree(content: string): Heading[] {
  const roots: Heading[] = [];
  const ancestors: Heading[] = [];
  const matches = content.replace(/```[\s\S]*?```/g, "").matchAll(/^(#{1,3})\s+(.+)$/gm);

  for (const match of matches) {
    const text = match[2].trim();
    const heading: Heading = { text, id: slugify(text), level: match[1].length, children: [] };
    while (ancestors.length && ancestors[ancestors.length - 1].level >= heading.level) {
      ancestors.pop();
    }
    const parent = ancestors[ancestors.length - 1];
    (parent ? parent.children : roots).push(heading);
    ancestors.push(heading);
  }
  return roots;
}

function HeadingBranches({ headings }: { headings: Heading[] }) {
  return (
    <ul className="directory-tree tree-headings">
      {headings.map((heading, index) => (
        <li key={`${heading.id}-${index}`}>
          <a href={`#${heading.id}`}>
            <span className="tree-heading-marker" aria-hidden="true">{"#".repeat(heading.level)}</span>
            <span>{heading.text}</span>
          </a>
          {heading.children.length > 0 && <HeadingBranches headings={heading.children} />}
        </li>
      ))}
    </ul>
  );
}

export default function ArticleIndex({ content, slug }: { content: string; slug?: string }) {
  const { posts } = usePosts();
  const { language, t } = useTranslation();
  const headings = getHeadingTree(content);
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);
  const currentPost = posts.find((post) => post.slug === slug);
  const visiblePosts = currentPost && !recentPosts.some((post) => post.slug === slug)
    ? [currentPost, ...recentPosts]
    : recentPosts;
  const remainingCount = posts.length - visiblePosts.length;

  return (
    <aside className="article-index">
      <details className="article-directory" open>
        <summary><PixelIcon name="folder" /> ~/posts/</summary>
        <nav aria-label={t("posts.directory")}>
          <ul className="directory-tree">
            {visiblePosts.map((post) => {
              const isCurrent = post.slug === slug;
              return (
                <li key={post.slug} className={isCurrent ? "current-file" : undefined}>
                  <Link to={`/posts/${post.slug}`} aria-current={isCurrent ? "page" : undefined}>
                    <PixelIcon name="document" />
                    <span>{post.slug}<span className="file-extension">.md</span></span>
                  </Link>
                  {!isCurrent && <p className="tree-post-title">{post.translations?.[language]?.title ?? post.title}</p>}
                  {isCurrent && <HeadingBranches headings={headings} />}
                </li>
              );
            })}
          </ul>
          {remainingCount > 0 && <Link className="directory-more" to="/posts">+ {remainingCount} {t("common.morePosts")}</Link>}
        </nav>
      </details>
    </aside>
  );
}
