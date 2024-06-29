import { getPost } from "@/lib/post";

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <section className="container mx-auto">
      <h1 className="font-bold text-4xl mb-3">{post.title}</h1>
      <img src={post.image} className="w-2/3 rounded-lg mb-3" />
      <div dangerouslySetInnerHTML={{ __html: post.body }} className="prose" />
    </section>
  );
}
