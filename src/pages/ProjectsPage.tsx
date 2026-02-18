import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="grid gap-4 w-full px-4">
      <h2 className="font-bold text-3xl">Projects</h2>
      <br />
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
