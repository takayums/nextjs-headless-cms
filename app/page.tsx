import PostCard from "@/components/PostCard";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <div className="container mx-auto">
        <PostCard
          title="Blog 1"
          author="Admin"
          description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          date="12 Juni 2024"
          image="/images/image-1.jpg"
          href="#"
        />
        <PostCard
          title="Blog 2"
          author="Admin"
          description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          date="12 Juni 2024"
          image="/images/image-2.jpg"
          href="#"
        />
        <PostCard
          title="Blog 3"
          author="Admin"
          description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          date="12 Juni 2024"
          image="/images/image-3.jpg"
          href="#"
        />
      </div>
    </section>
  );
}
