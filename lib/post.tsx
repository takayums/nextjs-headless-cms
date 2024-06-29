import { readdirSync } from "fs";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export async function getPost(slug: string) {
  const text = await readFile(`./content/blog/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, description, author, image },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, author, image, description, body };
}

export async function getAllPost() {
  const files = await readdirSync("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const posts = [];

  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push(post);
  }

  return posts;
}
