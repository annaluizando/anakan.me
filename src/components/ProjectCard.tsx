import { ProjectProps } from "../types/project";
import { useTranslation } from "../hooks/useTranslation";
const illustrations: Record<string, string> = {
  blindspot: "   .----------.\n  /  .------.  \\\n |  /  .--.  \\  |\n | |  ( oo )  | |\n |  \\  '--'  /  |\n  \\  '------'  /\n   '----------'",
  "met-museum": "       /\\\n      /  \\\n  ___/____\\___\n |____________|\n   || || || ||\n   || || || ||\n __||_||_||_||__\n|______________|",
  aegis: "   .--------.\n   | .----. |\n   | | /\\ | |\n   | |/  \\| |\n   |  /__\\  |\n    \\      /\n     \\____/",
  locksmith: "   .----.\n  / .--. \\\n | |    | |\n | '----' |\n '---..---'\n     ||___\n     | ___|\n     |_|",
};
export default function ProjectCard({ project, compact = false, index = 0 }: { project: ProjectProps; compact?: boolean; index?: number }) {
  const { t } = useTranslation();
  const name = project.name ?? project.title.trim();
  return (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`project-card ${compact ? "is-compact" : ""}`}>
      <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
      <div className={`project-art project-art--${project.id}`} aria-hidden="true">
        <span className="terminal-toolbar">+ {project.id}.txt</span><pre>{illustrations[project.id] ?? project.title.trim()}</pre><span className="terminal-prompt">{"> ./"}{project.id}<span aria-hidden="true"> _</span></span>
      </div>
      <div className="project-copy">
        <h3>{name} {project.featured && <span className="tag">{t("projects.featured")}</span>}</h3>
        <p>{project.description}</p>
        <div className="project-tags">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
        <span className="project-link">{t("projects.viewOnGitHub")} <span aria-hidden="true">↗</span></span>
      </div>
    </a>
  );
}
