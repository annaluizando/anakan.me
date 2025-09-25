import { useContext } from "react";
import { PostsContext } from "../context/postsContextDefinition";

export const usePosts = () => {
  const context = useContext(PostsContext);

  if (context === null) {
    throw new Error("usePosts must be used within a PostsProvider");
  }

  return context;
};
