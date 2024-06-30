import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost } from "@/lib/post";

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <section className="container mx-auto">
      <div className="container mx-auto px-4">
        <h1 className="font-bold text-4xl mb-2">{post.title}</h1>
        <div className="flex items-baseline gap-3 mb-3">
          <p className="font-normal text-sm">Published {post.date}</p>
          <ShareLinkButton />
        </div>
        <img src={post.image} className="w-2/3 rounded-lg mb-3" />
        <div
          dangerouslySetInnerHTML={{ __html: post.body }}
          className="prose"
        />
      </div>
    </section>
  );
}
