import PostCard from "@/components/PostCard";
import { getAllPost, getPost } from "@/lib/post";
import { Metadata } from "next";

export default async function Blog() {
  const posts = await getAllPost();
  return (
    <section>
      <div className="container mx-auto px-4">
        {posts?.map((post) => (
          <PostCard
            title={post.title}
            author={post.author}
            description={post.description}
            date={post.date}
            image={post.image}
            href={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
