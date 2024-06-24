import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  title,
  author,
  description,
  date,
  image,
  href,
}) {
  return (
    <div className="flex flex-wrap mb-5">
      <div className="w-full shrink-0 mr-3 grow-0 basis-auto md:w-2/12">
        <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
          <Image
            src={image}
            alt="Blog 1"
            className="w-full"
            width={630}
            height={360}
          />
          <Link href={href}>
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
          </Link>
        </div>
      </div>

      <div className="shrink-0 grow-0 basis-auto md:w-9/12 xl:w-7/12 w-full mr-auto">
        <h5 className="text-lg font-bold">{title}</h5>
        <p className="mb-3 text-gray-800">
          <small>
            Published {date} by {author}
          </small>
        </p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
}
