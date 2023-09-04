import NavBar from "../component/NavBar";
import Head from "./head";
import AuthProvider from "../component/AuthProvider";

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
        <Head />

        {/*<link rel="stylesheet" href="https://use.typekit.net/uap0crb.css" />*/}
        <script src="https://kit.fontawesome.com/8afaee683f.js"></script>
      </head>
      <body>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}