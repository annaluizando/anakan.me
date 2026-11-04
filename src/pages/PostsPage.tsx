import PostDirectory from "../components/PostDirectory";
import PageHeading from "../components/PageHeading";
import { usePosts } from "../hooks/usePosts";
import { useTranslation } from "../hooks/useTranslation";
export default function PostsPage() {
  const { posts, loading, error } = usePosts();
  const { t } = useTranslation();
  return <div className="inner-page"><PageHeading title={t("posts.pageTitle")} subtitle={t("posts.description")} number="01" />
    {loading ? <p role="status">{t("posts.loading")}</p> : error ? <p role="alert">{t("posts.error")}</p> : posts.length ? <PostDirectory posts={posts} /> : <p>{t("posts.noPosts")}</p>}
  </div>;
}
