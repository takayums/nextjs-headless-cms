import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <nav>
          <ul className="flex gap-3">
            <li className="hover:underline text-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline text-gray-700">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:underline text-gray-700">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline text-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
