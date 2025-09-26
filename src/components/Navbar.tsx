import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import smillingFace from "../assets/smilling face.svg";
import selectionIcon from "../assets/selection-icon.png";
import { usePosts } from "../hooks/usePosts";

// Helper function to create slug from heading text (same as in SinglePostPage)
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#f0f0f0] dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 md:h-screen md:flex md:flex-col md:border-r md:border-b-0 p-6">
      {/* Header for both mobile and desktop */}
      <div className="flex justify-between items-center md:mb-16">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex gap-4 items-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          <img
            src={smillingFace}
            draggable={false}
            alt="anakan logo"
            width={56}
            height={56}
          />
          <h1 className="font-medium text-2xl">
            <span className="text-[#41b4bb] dark:text-slate-100">anakan</span>
            <span className="text-[#41b4bb]">.me</span>
          </h1>
        </Link>
        {/* Hamburger Menu Button for mobile */}
        <button
          className="md:hidden text-slate-800 dark:text-slate-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen mt-6" : "max-h-0"
        }`}
      >
        <MenuContent closeMenu={closeMenu} />
      </div>

      {/* --- Desktop Menu --- */}
      <div className="hidden md:block">
        <MenuContent closeMenu={() => {}} />
      </div>
    </nav>
  );
}

// Separate component for menu content to avoid repetition
const MenuContent = ({ closeMenu }: { closeMenu: () => void }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { posts } = usePosts();

  const isOnSinglePost =
    currentPath.startsWith("/posts/") && currentPath !== "/posts";
  const slug = isOnSinglePost ? currentPath.split("/posts/")[1] : null;

  const currentPost = isOnSinglePost
    ? posts.find((p) => p.slug === slug)
    : null;

  const headings = currentPost?.content
    ? [...currentPost.content.matchAll(/^(#{1,3})\s+(.+)$/gm)].map((match) => ({
        level: match[1].length,
        text: match[2].trim(),
        id: slugify(match[2].trim()),
      }))
    : [];

  return (
    <menu className="grid gap-2 font-normal text-lg">
      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 flex items-center justify-center">
          {currentPath === "/" && (
            <img src={selectionIcon} alt="selected" className="w-4 h-4" />
          )}
        </div>
        <Link
          to="/"
          onClick={closeMenu}
          className={currentPath === "/" ? "font-medium" : ""}
        >
          home
        </Link>
      </div>

      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 flex items-center justify-center">
          {(currentPath === "/posts" || currentPath.startsWith("/posts/")) && (
            <img src={selectionIcon} alt="selected" className="w-4 h-4" />
          )}
        </div>
        <Link
          to="/posts"
          onClick={closeMenu}
          className={
            currentPath === "/posts" || currentPath.startsWith("/posts/")
              ? "font-medium"
              : ""
          }
        >
          posts
        </Link>
      </div>

      {isOnSinglePost && posts.length > 0 && (
        <div className="ml-6 text-sm space-y-1">
          <div className="space-y-1 max-h-80 overflow-y-auto">
            {posts
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .slice(0, 8)
              .map((post, index, sortedPosts) => {
                const isCurrentPost = post.slug === slug;
                const isLast = index === sortedPosts.length - 1;

                return (
                  <div key={post.slug} className="space-y-1">
                    {isCurrentPost ? (
                      <>
                        <div className="flex items-center text-[#41b4bb] font-medium">
                          <span className="mr-2 text-slate-400 dark:text-slate-600">
                            ├
                          </span>
                          <span className="font-mono text-xs">
                            /{post.slug}
                          </span>
                        </div>

                        {headings.length > 0 && (
                          <div className="ml-4 space-y-1">
                            {headings.map((heading, headingIndex) => (
                              <a
                                key={heading.id}
                                href={`#${heading.id}`}
                                onClick={closeMenu}
                                className={`flex items-center text-slate-500 dark:text-slate-400 hover:text-[#41b4bb] transition-colors group ${
                                  heading.level === 1
                                    ? "ml-0"
                                    : heading.level === 2
                                    ? "ml-2"
                                    : "ml-4"
                                }`}
                              >
                                <span className="mr-2 text-slate-400 dark:text-slate-600">
                                  {headingIndex === headings.length - 1 &&
                                  isLast
                                    ? "└"
                                    : "├"}
                                </span>
                                <span className="font-mono text-xs truncate group-hover:text-[#41b4bb]">
                                  {heading.level === 1
                                    ? "#"
                                    : heading.level === 2
                                    ? "##"
                                    : "###"}{" "}
                                  {heading.text}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={`/posts/${post.slug}`}
                        className="flex items-center text-slate-500 dark:text-slate-400 hover:text-[#41b4bb] transition-colors group"
                      >
                        <span className="mr-2 text-slate-400 dark:text-slate-600">
                          {isLast ? "└" : "├"}
                        </span>
                        <span className="font-mono text-xs truncate group-hover:text-[#41b4bb]">
                          /{post.slug}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}

            {posts.length > 8 && (
              <div className="flex items-center text-slate-400 dark:text-slate-600">
                <span className="mr-2">└</span>
                <span className="text-xs">
                  ... {posts.length - 8} more posts
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 flex items-center justify-center">
          {currentPath === "/projects" && (
            <img src={selectionIcon} alt="selected" className="w-4 h-4" />
          )}
        </div>
        <Link
          to="/projects"
          onClick={closeMenu}
          className={currentPath === "/projects" ? "font-medium" : ""}
        >
          projects
        </Link>
      </div>

      <div className="flex items-center">
        <div className="w-4 h-4 mr-2 flex items-center justify-center">
          {currentPath === "/about" && (
            <img src={selectionIcon} alt="selected" className="w-4 h-4" />
          )}
        </div>
        <Link
          to="/about"
          onClick={closeMenu}
          className={currentPath === "/about" ? "font-medium" : ""}
        >
          about
        </Link>
      </div>
    </menu>
  );
};
