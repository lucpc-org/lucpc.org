import NavBar from "../components/NavBar"
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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'LUCPC',
  description: 'A club to teach core programming concepts concepts along with preparing students to compete at the International Collegiate Programming Contest. We welcome all skill levels.',
};
