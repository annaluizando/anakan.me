export interface ProjectProps {
  id: string;
  title: string;
  name?: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  featured?: boolean;
}
