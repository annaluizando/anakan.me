import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import PageHeading from "../components/PageHeading";
import { useTranslation } from "../hooks/useTranslation";
export default function ProjectsPage() {
  const { t } = useTranslation();
  return <div className="inner-page"><PageHeading title={t("navigation.projects")} subtitle={t("projects.description")} number="02" /><div className="project-grid projects-archive">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></div>;
}
