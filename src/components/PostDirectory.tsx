import { PostProps } from "../types/post";
import { useTranslation } from "../hooks/useTranslation";
import Post from "./Post";
import PixelIcon from "./PixelIcon";

export default function PostDirectory({ posts }: { posts: PostProps[] }) {
  const { language, t } = useTranslation();

  return (
    <div className="post-directory">
      <div className="directory-bar">
        <span className="directory-path"><PixelIcon name="folder" /> ~/posts/</span>
        <span>{posts.length} {t(posts.length === 1 ? "posts.file" : "posts.files")}</span>
      </div>
      <ul className="directory-files" aria-label={t("posts.directory")}>
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post}
            title={post.translations?.[language]?.title ?? post.title}
            description={post.translations?.[language]?.description ?? post.description}
          />
        ))}
      </ul>
    </div>
  );
}
