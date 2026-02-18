import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { useTranslation } from "../hooks/useTranslation";
import Post from "../components/Post";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export function HomePage() {
  const { posts } = usePosts();
  const { language, t } = useTranslation();
  const latestPosts = posts.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="w-full px-4">
      {/* Full-width gradient behind navbar and hero — fixed, viewport-wide */}
      <div
        className="fixed top-0 left-0 w-full h-[50vh] min-h-[280px] pointer-events-none z-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(32,71,173,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(32,71,173,0.2),transparent)]" />
      </div>

      {/* Hero — bold typography + soft glow */}
      <section className="relative py-12 sm:py-16">
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {t("home.title")}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t("home.subtitle")}
          </p>
          {/* Stats as pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-slate-700/60 border border-slate-300/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <span className="text-[#2047AD] dark:text-[#5b8def] font-bold tabular-nums">{posts.length}</span>
              {posts.length === 1 ? t("home.post") : t("home.posts")}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-slate-700/60 border border-slate-300/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <span className="text-[#2047AD] dark:text-[#5b8def] font-bold tabular-nums">{projects.length}</span>
              {t("home.projects")}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-slate-700/60 border border-slate-300/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 text-sm font-medium">
              <span className="text-[#2047AD] dark:text-[#5b8def] font-bold tabular-nums">3+</span>
              {t("home.yearsCoding")}
            </span>
          </div>
        </div>
      </section>

      {/* Posts & Projects — two columns with section accent */}
      <section className="w-full grid lg:grid-cols-2 gap-10 lg:gap-12 pb-10">
        {latestPosts.length > 0 && (
          <div className="w-full">
            <div className="flex items-baseline justify-between gap-4 mb-5">
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100">
                <span className="text-[#2047AD] dark:text-[#5b8def] font-mono">→</span>
                {t("posts.title")}
              </h2>
              <Link
                to="/posts"
                className="text-sm font-medium text-[#2047AD] dark:text-[#5b8def] hover:underline underline-offset-2 shrink-0"
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

        <div className="w-full">
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100">
              <span className="text-[#2047AD] dark:text-[#5b8def] font-mono">→</span>
              {t("projects.title")}
            </h2>
            <Link
              to="/projects"
              className="text-sm font-medium text-[#2047AD] dark:text-[#5b8def] hover:underline underline-offset-2 shrink-0"
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
      </section>

      {/* CTA — prominent block */}
      <section className="pb-12">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 bg-gradient-to-br from-slate-50 to-slate-100/80 dark:from-slate-800/80 dark:to-slate-900/80 p-8 sm:p-10 text-center shadow-lg shadow-slate-200/30 dark:shadow-slate-900/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2047AD]/5 dark:bg-[#2047AD]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {t("home.letsConnect")}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
              {t("home.ctaDescription")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2047AD] hover:bg-[#1a3a8a] dark:bg-[#2d5ac9] dark:hover:bg-[#3d6ad9] text-white font-medium transition-colors shadow-md hover:shadow-lg hover:shadow-[#2047AD]/25"
            >
              {t("home.getInTouch")}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
