import { createContext } from "react";
import { PostProps } from "../types/post";

export interface PostsContextType {
  posts: PostProps[];
  loading: boolean;
  error: Error | null;
}

export const PostsContext = createContext<PostsContextType | null>(null);
