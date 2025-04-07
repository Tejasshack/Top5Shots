import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Top5Shots - Compare & Advertise",
  description: "Find the best websites for comparison and ad campaigns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-white min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full px-4 sm:px-8 mx-auto max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
