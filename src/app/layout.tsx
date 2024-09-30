import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Head from "./head";
import AuthProvider from "../component/AuthProvider";
import "./globals.css";

// Apparently we have to do this here and then import it as well in globals.css
// I have no idea why but do not remove this

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Head />
        {/* This is the Inter font (InterVariable)*/}
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="flex flex-col min-h-screen max-w-[90rem] mx-auto px-4 md:px-2">
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
