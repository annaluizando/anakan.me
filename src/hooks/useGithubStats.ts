import { useEffect, useState } from "react";
import { fetchGithubStats, initialGithubStats } from "../utils/githubStats";

export function useGithubStats() {
  const [stats, setStats] = useState(initialGithubStats);
  useEffect(() => {
    let active = true;
    void fetchGithubStats().then(result => { if (active) setStats(result); });
    return () => { active = false; };
  }, []);
  return stats;
}
