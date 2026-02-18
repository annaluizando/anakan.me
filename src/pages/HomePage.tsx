import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { useTranslation } from "../hooks/useTranslation";
import Post from "../components/Post";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export function HomePage() {
  const { posts } = usePosts();
  const { language, t } = useTranslation();
  const latestPosts = posts.slice(0, 2); // Get 2 most recent posts
  const featuredProjects = projects.slice(0, 2); // Get first 2 projects from shared data

  return (
    <div className="grid gap-8 w-full px-4">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="font-bold text-slate-900 text-4xl dark:text-slate-100 bg-clip-text">
          {t("home.title")}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {t("home.subtitle")}
        </p>
        <div className="flex justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
          <div className="text-center">
            <div className="font-bold text-lg text-slate-700 dark:text-slate-200">
              {posts.length}
            </div>
            <div>{t("home.posts")}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-slate-700 dark:text-slate-200">
              {projects.length}
            </div>
            <div>{t("home.projects")}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-slate-700 dark:text-slate-200">
              3+
            </div>
            <div>{t("home.yearsCoding")}</div>
          </div>
        </div>
      </div>

      {/* Latest Posts & Featured Projects Side by Side */}
      <div className="w-full grid lg:grid-cols-2 gap-8">
        {/* Latest Posts Section */}
        {latestPosts.length > 0 && (
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-2xl">{t("posts.title")}</h2>
              <Link
                to="/posts"
                className="text-[#2047AD] hover:text-[#2153D9] font-medium text-sm transition-colors"
              >
                {t("home.viewAll")}
              </Link>
            </div>
            <div className="grid gap-4">
              {latestPosts.map((post) => {
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
              })}
            </div>
          </div>
        )}

        {/* Featured Projects Section */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-2xl">{t("projects.title")}</h2>
            <Link
              to="/projects"
              className="text-[#2047AD] hover:text-[#2153D9] font-medium text-sm transition-colors"
            >
              {t("home.viewAll")}
            </Link>
          </div>
          <div className="grid gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 border border-white/40 dark:border-white/10 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/30">
        <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-slate-100">
          {t("home.letsConnect")}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {t("home.ctaDescription")}
        </p>
        <Link
          to="/about"
          className="inline-flex items-center bg-[#2047AD] hover:bg-[#2153D9] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          {t("home.getInTouch")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
