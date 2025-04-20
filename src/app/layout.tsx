import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Yonas Kemon | Backend Engineer",
  description:
    "Senior Backend Engineer specializing in scalable systems and cloud architecture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} text-gray-900`}
      >
        <Navbar />
        <div>
          <main className="container mx-auto px-4 py-20 lg:py-0">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
