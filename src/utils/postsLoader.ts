import { Language } from "../types/translation";
import { PostProps } from "../types/post";

function parseFrontmatter(content: string): {
  data: Record<string, string>;
  content: string;
} {
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

// One folder per post: content/<slug>/en.md, content/<slug>/pt-br.md, etc.
import aiDrivenDevelopmentEn from "../posts/content/ai-driven-development/en.md?raw";
import aiDrivenDevelopmentPtBr from "../posts/content/ai-driven-development/pt-br.md?raw";

/** Slug -> locale -> raw markdown */
const postLocales: Record<string, Partial<Record<Language, string>>> = {
  "ai-driven-development": {
    en: aiDrivenDevelopmentEn,
    "pt-br": aiDrivenDevelopmentPtBr,
  },
};

const DEFAULT_LOCALE: Language = "en";

export function loadPosts(): PostProps[] {
  const posts: PostProps[] = [];

  Object.entries(postLocales).forEach(([slug, localeContents]) => {
    const defaultContent = localeContents[DEFAULT_LOCALE];
    if (!defaultContent) {
      console.warn(`Post ${slug} is missing default locale (en)`);
      return;
    }

    try {
      const { data, content: markdownContent } =
        parseFrontmatter(defaultContent);

      if (!data.title || !data.description || !data.date) {
        console.warn(`Post ${slug} is missing required frontmatter fields`);
        return;
      }

      const postSlug = data.slug || slug;
      const translations: PostProps["translations"] = {};

      (Object.entries(localeContents) as [Language, string][]).forEach(
        ([lang, raw]) => {
          if (lang === DEFAULT_LOCALE) return;
          try {
            const { data: locData, content: locContent } =
              parseFrontmatter(raw);
            if (locData.title && locData.description)
              translations[lang] = {
                title: locData.title,
                description: locData.description,
                content: locContent,
              };
          } catch (e) {
            console.warn(`Failed to parse translation ${slug} ${lang}`, e);
          }
        },
      );

      posts.push({
        id: data.id || postSlug,
        title: data.title,
        description: data.description,
        date: data.date,
        slug: postSlug,
        content: markdownContent,
        ...(Object.keys(translations).length > 0 ? { translations } : {}),
      });
    } catch (error) {
      console.error(`Error parsing post ${slug}:`, error);
    }
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
