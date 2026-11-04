export const githubRepositoriesUrl = "https://github.com/annaluizando?tab=repositories";
const endpoint = "https://api.github.com/users/annaluizando";
const cacheKey = "anakan-github-public-repos-v1";
const cacheDuration = 60 * 60 * 1000;

type CachedCount = { count: number; fetchedAt: number };
export type GithubStats = { count: number | null; status: "loading" | "ready" | "stale" | "unavailable" };
let memoryCache: CachedCount | null = null;
let pending: Promise<GithubStats> | null = null;

function readCache(): CachedCount | null {
  if (memoryCache) return memoryCache;
  try {
    const stored = JSON.parse(localStorage.getItem(cacheKey) ?? "null");
    if (stored && Number.isSafeInteger(stored.count) && stored.count >= 0 &&
      Number.isFinite(stored.fetchedAt) && stored.fetchedAt > 0 && stored.fetchedAt <= Date.now()) {
      memoryCache = { count: stored.count, fetchedAt: stored.fetchedAt };
    }
  } catch { return memoryCache; }
  return memoryCache;
}

function persistCache(cache: CachedCount): void {
  try { localStorage.setItem(cacheKey, JSON.stringify(cache)); } catch { return; }
}

export function initialGithubStats(): GithubStats {
  const cache = readCache();
  return { count: cache?.count ?? null, status: cache ? "stale" : "loading" };
}

export function fetchGithubStats(): Promise<GithubStats> {
  const cached = readCache();
  if (cached && Date.now() - cached.fetchedAt < cacheDuration) {
    return Promise.resolve({ count: cached.count, status: "ready" });
  }
  if (pending) return pending;
  pending = (async (): Promise<GithubStats> => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch(endpoint, {
        headers: { Accept: "application/vnd.github+json" },
        signal: controller.signal,
        credentials: "omit",
      });
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
      const profile: unknown = await response.json();
      if (!profile || typeof profile !== "object" || !("public_repos" in profile) ||
        typeof profile.public_repos !== "number" || !Number.isSafeInteger(profile.public_repos) || profile.public_repos < 0) {
        throw new Error("Invalid GitHub repository count");
      }
      memoryCache = { count: profile.public_repos, fetchedAt: Date.now() };
      persistCache(memoryCache);
      return { count: memoryCache.count, status: "ready" };
    } catch {
      return { count: cached?.count ?? null, status: cached ? "stale" : "unavailable" };
    } finally {
      clearTimeout(timeout);
    }
  })().finally(() => { pending = null; });
  return pending;
}
