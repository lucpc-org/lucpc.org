import NavBar from "../component/NavBar"
import "./globals.css"

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>

        {/*<link rel="stylesheet" href="https://use.typekit.net/uap0crb.css" />*/}
        <script src="https://kit.fontawesome.com/8afaee683f.js"></script>
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}