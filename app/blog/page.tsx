import PostCard from "@/components/PostCard";
import { getAllPost } from "@/lib/post";

export default async function Blog() {
  const posts = await getAllPost();
  console.log(posts);
  return (
    <section>
      <div className="container mx-auto">
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
