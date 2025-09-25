import React, { useState, useEffect, ReactNode } from "react";
import { PostProps } from "../types/post";
import { loadPosts } from "../utils/postsLoader";
import { PostsContext } from "./postsContextDefinition";

export const PostsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        const loadedPosts = loadPosts();
        setPosts(loadedPosts);
        setLoading(false);
      }, 300);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load posts"));
      setLoading(false);
    }
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostsContext.Provider>
  );
};
