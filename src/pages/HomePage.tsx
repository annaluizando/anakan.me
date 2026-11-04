import { Link } from "react-router-dom";
import { useGithubStats } from "../hooks/useGithubStats";
import { githubRepositoriesUrl } from "../utils/githubStats";
import { usePosts } from "../hooks/usePosts";
import { useTranslation } from "../hooks/useTranslation";
import PostDirectory from "../components/PostDirectory";
import ProjectCard from "../components/ProjectCard";
import PixelIcon from "../components/PixelIcon";
import { projects } from "../data/projects";
import AsciiCompanion from "../components/AsciiCompanion";
export function HomePage() {
  const { posts, loading, error } = usePosts();
  const { t } = useTranslation();
  const github = useGithubStats();
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-square" /> {t("home.eyebrow")}</p>
          <h1>{t("home.code")}<br />{t("home.curiosity")} <em>&</em><br />{t("home.experiments")}<span className="hero-period">.</span></h1>
          <p className="hero-description">{t("home.subtitle")}</p>
          <Link to="/projects" className="text-link">{t("home.explore")} <span aria-hidden="true">↗</span></Link>
        </div>
        <AsciiCompanion />
      </section>
      <div className="site-stats" aria-label={t("home.stats")}>
        <span><b>{String(posts.length).padStart(2, "0")}</b> {posts.length === 1 ? t("home.post") : t("home.posts")}</span>
        <span title={t(`home.github.${github.status}`)} aria-busy={github.status === "loading"}>
          <a className="github-stat" href={githubRepositoriesUrl} target="_blank" rel="noreferrer">
            <b>{github.count === null ? (github.status === "loading" ? "…" : "—") : String(github.count).padStart(2, "0")}</b> {t("home.projects")}
          </a>
          {github.status !== "ready" && <span className="sr-only"> — {t(`home.github.${github.status}`)}</span>}
        </span>
        <span><b>3+</b> {t("home.yearsCoding")}</span>
        <span className="stats-signature">BUILD. LEARN. REPEAT. <PixelIcon name="spark" /></span>
      </div>
      <section className="home-section">
        <div className="section-heading"><h2>{t("projects.title")}</h2><span className="heading-rule" /><Link to="/projects">{t("home.viewAll")}</Link></div>
        <div className="project-grid">{projects.slice(0, 2).map((project, i) => <ProjectCard key={project.id} project={project} index={i} compact />)}</div>
      </section>
      <section className="home-section">
        <div className="section-heading"><h2>{t("posts.title")}</h2><span className="heading-rule" /><Link to="/posts">{t("home.viewAll")}</Link></div>
        {loading ? <p role="status">{t("posts.loading")}</p> : error ? <p role="alert">{t("posts.error")}</p> : posts.length ? <PostDirectory posts={posts.slice(0, 2)} /> : <p>{t("posts.noPosts")}</p>}
      </section>
      <section className="contact-strip">
        <PixelIcon name="talk" />
        <div><h2>{t("home.letsConnect")}</h2><p>{t("home.ctaDescription")}</p></div>
        <Link to="/about" className="text-link">{t("home.getInTouch")} <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
