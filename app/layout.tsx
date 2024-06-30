import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { roboto } from "./fonts";
import "./global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Blog NextJs",
    default: "Belajar NexJs",
  },
  description: "Belajar Nextjs with Blog",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Blog's Nextjs</title>
      </head>
      <body className={`flex flex-col min-h-screen ${roboto.className}`}>
        <Navbar />
        <main className="grow">{children}</main>
        <footer className="border-t text-center text-sm p-3">
          @blogtakayums
        </footer>
      </body>
    </html>
  );
}
