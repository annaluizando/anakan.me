import Post from "../components/Post";
import { usePosts } from "../hooks/usePosts";
import { useTranslation } from "../hooks/useTranslation";

export default function PostsPage() {
  const { posts, loading, error } = usePosts();
  const { language, t } = useTranslation();

  if (loading) return <div className="text-center p-8">{t("posts.loading")}</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">
        {t("posts.error")}
      </div>
    );

  return (
    <div className="grid gap-4 w-full px-4">
      <h2 className="font-bold text-3xl">{t("posts.pageTitle")}</h2>
      <br />
      {posts.length > 0 ? (
        posts.map((post) => {
          const title = post.translations?.[language]?.title ?? post.title;
          const description = post.translations?.[language]?.description ?? post.description;
          return (
            <Post
              key={post.id}
              id={post.id}
              title={title}
              description={description}
              date={post.date}
              slug={post.slug}
            />
          );
        })
      ) : (
        <p className="text-center">{t("posts.noPosts")}</p>
      )}
    </div>
  );
}
