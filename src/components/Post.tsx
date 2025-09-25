import { PostProps } from "../types/post";
import { Link } from "react-router-dom";

export default function Post({ title, description, date, slug }: PostProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-slate-500/5 dark:bg-white/5 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-white/10 hover:border-[#41b4bb]/50 dark:hover:border-[#41b4bb]/50 transform hover:-translate-y-1 hover:bg-slate-500/8 dark:hover:bg-white/10 min-h-[200px]">
      <Link to={`/posts/${slug}`} className="block h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-2">
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
          <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100 hover:text-[#41b4bb] transition-colors">
            {title}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 line-clamp-3 mb-4 flex-1">
            {description}
          </p>
          <div className="mt-auto pt-4 border-t border-slate-200/50 dark:border-white/10 flex items-center text-[#41b4bb] font-medium">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
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
      </Link>
    </article>
  );
}
