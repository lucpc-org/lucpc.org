import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Head from "./head";
import AuthProvider from "../component/AuthProvider";
import { Inter, Newsreader } from "next/font/google"
import "./globals.css"

export const inter = Inter({ subsets: ["latin"] });
// Apparently we have to do this here and then import it as well in globals.css
// I have no idea why but do not remove this
export const newsreader = Newsreader({ subsets: ["latin"] });


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
        {/* This is the Livory Font */ }
		    <link rel="stylesheet" href="https://use.typekit.net/uap0crb.css" />
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