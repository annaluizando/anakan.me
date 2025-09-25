export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  featured?: boolean;
}
