import Navbar from "@/components/Navbar";
import "./global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Nextjs Headless CMS</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <footer className="border-t text-center text-sm p-3">
          @blogtakayums
        </footer>
      </body>
    </html>
  );
}
