import { PostProps } from "../types/post";

function parseFrontmatter(content: string) {
  const lines = content.trim().split("\n");

  if (lines[0] !== "---") {
    return { data: {}, content };
  }

  let frontmatterEndIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === "---") {
      frontmatterEndIndex = i;
      break;
    }
  }

  if (frontmatterEndIndex === -1) {
    return { data: {}, content };
  }

  const frontmatterLines = lines.slice(1, frontmatterEndIndex);
  const markdownContent = lines.slice(frontmatterEndIndex + 1).join("\n");

  const data: Record<string, string> = {};
  frontmatterLines.forEach((line) => {
    const match = line.match(/^(\w+):\s*"?([^"]*)"?$/);
    if (match) {
      data[match[1]] = match[2].replace(/^"(.*)"$/, "$1");
    }
  });

  return { data, content: markdownContent };
}

// Import posts directly
import customHooksPost from "../posts/content/custom-hooks-in-react.md?raw";
import gettingStartedPost from "../posts/content/getting-started-with-react.md?raw";

// Map of all posts
const postFiles = {
  "custom-hooks-in-react.md": customHooksPost,
  "getting-started-with-react.md": gettingStartedPost,
};

export function loadPosts(): PostProps[] {
  const posts: PostProps[] = [];

  // Process each markdown file
  Object.entries(postFiles).forEach(([filename, content]) => {
    try {
      const { data, content: markdownContent } = parseFrontmatter(content);

      const slug = filename.replace(".md", "");

      // Validate required fields
      if (!data.title || !data.description || !data.date) {
        console.warn(`Post ${filename} is missing required frontmatter fields`);
        return;
      }

      // Use slug from frontmatter if provided, otherwise use filename
      const postSlug = data.slug || slug;

      posts.push({
        id: data.id || postSlug, // Use id from frontmatter or fallback to slug
        title: data.title,
        description: data.description,
        date: data.date,
        slug: postSlug,
        content: markdownContent,
      });
    } catch (error) {
      console.error(`Error parsing post ${filename}:`, error);
    }
  });

  // Sort posts by date (newest first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
