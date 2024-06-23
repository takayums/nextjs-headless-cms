export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nextjs Headless CMS</title>
      </head>
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
