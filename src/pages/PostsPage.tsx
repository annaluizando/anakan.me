import Post from "../components/Post";
import { usePosts } from "../hooks/usePosts";

export default function PostsPage() {
  const { posts, loading, error } = usePosts();

  if (loading) return <div className="text-center p-8">Loading posts...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">
        Sorry, error loading post :(
      </div>
    );

  return (
    <div className="grid gap-4 w-full px-4">
      <h2 className="font-bold text-3xl">Posts</h2>
      <br />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
          />
        ))
      ) : (
        <p className="text-center">No posts found.</p>
      )}
    </div>
  );
}
