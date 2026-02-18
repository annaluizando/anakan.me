import { ProjectProps } from "../types/project";
import { useTranslation } from "../hooks/useTranslation";

interface ProjectCardProps {
  project: ProjectProps;
  /** When true, description is clamped to 3 lines (e.g. for home featured section) */
  compact?: boolean;
}

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { t } = useTranslation();

  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className={`
        relative bg-white/50 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl shadow-lg shadow-slate-200/20 dark:shadow-slate-900/30 hover:shadow-xl 
        transition-all duration-300 cursor-pointer p-6 border border-white/40 
        dark:border-white/10 hover:border-[#2047AD]/40 dark:hover:border-[#2047AD]/40
        transform hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-slate-700/50 
        md:min-h-[200px] overflow-hidden
        ${project.featured ? "ring-2 ring-[#2047AD]/30 ring-opacity-50" : ""}
      `}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="bg-[#2047AD] text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </span>
        </div>
      )}

      <div className="h-full flex flex-col">
        <h3 className="text-sm font-mono text-slate-900 dark:text-slate-100 mb-2 whitespace-pre leading-tight overflow-x-auto">
          {project.title.trim()}
        </h3>
        <p
          className={`text-slate-600 dark:text-slate-300 mb-4 leading-relaxed flex-1 ${
            compact ? "line-clamp-3" : ""
          }`}
        >
          {project.description}
        </p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-white/50 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md text-xs font-medium border border-white/40 dark:border-white/10 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-white/30 dark:border-white/10">
            <span className="text-[#2047AD] font-medium text-sm">
              {t("projects.viewOnGitHub")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-[#2047AD]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
