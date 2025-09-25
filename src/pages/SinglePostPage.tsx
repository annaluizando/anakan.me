import { useParams, Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Helper function to create slug from heading text
const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
};

export function SinglePostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading, error } = usePosts();

  const post = posts.find((p) => p.slug === slug);

  if (loading) return <div className="text-center p-8">Loading post...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">
        Sorry, error loading post :(
      </div>
    );

  if (!post) {
    return (
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <p className="text-slate-600 mb-4">
          The post you're looking for doesn't exist.
        </p>
        <Link
          to="/posts"
          className="inline-block bg-[#41b4bb] text-white px-6 py-2 rounded-lg hover:bg-[#369a9f] transition-colors"
        >
          Back to Posts
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full px-6">
      <div className="mb-6">
        <Link
          to="/posts"
          className="inline-flex items-center text-[#41b4bb] hover:text-[#369a9f] transition-colors mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Posts
        </Link>

        <div className="flex items-center text-sm text-slate-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {formattedDate}
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert font-['Inter'] font-normal">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({
              className,
              children,
              ...props
            }: React.HTMLProps<HTMLElement> & { inline?: boolean }) {
              const match = /language-(\w+)/.exec(className || "");
              return !props.inline && match ? (
                <div className="my-4">
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-sm mb-1">
                    ```{match[1]}
                  </div>
                  <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto border-l-2 border-slate-300 dark:border-slate-600">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                  <div className="text-slate-500 dark:text-slate-400 font-mono text-sm mt-1">
                    ```
                  </div>
                </div>
              ) : (
                <code
                  className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  `{children}`
                </code>
              );
            },
            h1: ({ children }) => {
              const text = children?.toString() || "";
              const id = slugify(text);
              return (
                <h1
                  id={id}
                  className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-slate-100 font-mono group scroll-mt-20"
                >
                  <a
                    href={`#${id}`}
                    className="flex items-center hover:no-underline"
                  >
                    <span className="text-slate-500 dark:text-slate-400 mr-2">
                      #
                    </span>
                    <span className="flex-1">{children}</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 dark:text-slate-500 text-lg">
                      #
                    </span>
                  </a>
                </h1>
              );
            },
            h2: ({ children }) => {
              const text = children?.toString() || "";
              const id = slugify(text);
              return (
                <h2
                  id={id}
                  className="text-2xl font-semibold mt-6 mb-3 text-slate-900 dark:text-slate-100 font-mono group scroll-mt-20"
                >
                  <a
                    href={`#${id}`}
                    className="flex items-center hover:no-underline"
                  >
                    <span className="text-slate-500 dark:text-slate-400 mr-2">
                      ##
                    </span>
                    <span className="flex-1">{children}</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 dark:text-slate-500 text-lg">
                      #
                    </span>
                  </a>
                </h2>
              );
            },
            h3: ({ children }) => {
              const text = children?.toString() || "";
              const id = slugify(text);
              return (
                <h3
                  id={id}
                  className="text-xl font-semibold mt-4 mb-2 text-slate-900 dark:text-slate-100 font-mono group scroll-mt-20"
                >
                  <a
                    href={`#${id}`}
                    className="flex items-center hover:no-underline"
                  >
                    <span className="text-slate-500 dark:text-slate-400 mr-2">
                      ###
                    </span>
                    <span className="flex-1">{children}</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 dark:text-slate-500 text-lg">
                      #
                    </span>
                  </a>
                </h3>
              );
            },
            p: ({ children }) => (
              <p className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mb-4 ml-0 list-none text-slate-700 dark:text-slate-300 font-normal">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-4 ml-0 list-none text-slate-700 dark:text-slate-300 font-normal">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="mb-1 font-normal flex items-start">
                <span className="text-slate-500 dark:text-slate-400 mr-2 font-mono">
                  -
                </span>
                <span className="flex-1">{children}</span>
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[#41b4bb] pl-4 italic text-slate-600 dark:text-slate-400 my-4 font-normal">
                <div className="flex">
                  <span className="text-slate-500 dark:text-slate-400 mr-2 font-mono">
                    {">"}
                  </span>
                  <div className="flex-1">{children}</div>
                </div>
              </blockquote>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                className="text-[#41b4bb] hover:text-[#369a9f] underline transition-colors font-normal font-mono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-slate-500 dark:text-slate-400">[</span>
                {children}
                <span className="text-slate-500 dark:text-slate-400">]</span>
              </a>
            ),
          }}
        >
          {post.content || "No content available for this post."}
        </ReactMarkdown>
      </div>
    </div>
  );
}
