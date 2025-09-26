import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import Post from "../components/Post";
import { projects } from "../data/projects";

export function HomePage() {
  const { posts } = usePosts();
  const latestPosts = posts.slice(0, 2); // Get 2 most recent posts
  const featuredProjects = projects.slice(0, 2); // Get first 2 projects from shared data

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid gap-8 w-full px-4">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="font-bold text-4xl dark:text-slate-100 bg-clip-text">
          Welcome to anakan.me
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Here you can find some of my projects and posts. Feel free to look
          around! =)
        </p>
        <div className="flex justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
          <div className="text-center">
            <div className="font-bold text-lg text-slate-700 dark:text-slate-200">
              {posts.length}
            </div>
            <div>Posts</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-slate-700 dark:text-slate-200">
              {projects.length}
            </div>
            <div>Open-Source Projects</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg text-slate-700 dark:text-slate-200">
              3+
            </div>
            <div>Years Coding</div>
          </div>
        </div>
      </div>

      {/* Latest Posts & Featured Projects Side by Side */}
      <div className="w-full grid lg:grid-cols-2 gap-8">
        {/* Latest Posts Section */}
        {latestPosts.length > 0 && (
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-2xl">Latest Posts</h2>
              <Link
                to="/posts"
                className="text-[#41b4bb] hover:text-[#369a9f] font-medium text-sm transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-4">
              {latestPosts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        )}

        {/* Featured Projects Section */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-2xl">Featured Projects</h2>
            <Link
              to="/projects"
              className="text-[#41b4bb] hover:text-[#369a9f] font-medium text-sm transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-slate-500/5 dark:bg-white/5 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-white/10 hover:border-[#41b4bb]/50 dark:hover:border-[#41b4bb]/50 transform hover:-translate-y-1 hover:bg-slate-500/8 dark:hover:bg-white/10 min-h-[200px]"
              >
                <div
                  onClick={() => handleProjectClick(project.githubUrl)}
                  className="block h-full cursor-pointer"
                >
                  <div className="p-6 h-full flex flex-col">
                    <h2 className="text-sm font-semibold mb-2 text-slate-900 dark:text-slate-100 hover:text-[#41b4bb] transition-colors font-mono whitespace-pre leading-tight overflow-x-auto">
                      {project.title.trim()}
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center text-[#41b4bb] font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-slate-500/5 dark:bg-white/5 backdrop-blur-md rounded-lg p-8 border border-slate-200/50 dark:border-white/10">
        <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-slate-100">
          Let's Connect!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Interested in collaboration or have questions about my work?
        </p>
        <Link
          to="/about"
          className="inline-flex items-center bg-[#41b4bb] hover:bg-[#369a9f] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get in touch
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
