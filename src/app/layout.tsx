import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What's in the fridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <div className="flex h-full">
          <nav className="flex flex-col w-60 bg-gray-800 text-white p-4">
            <Link className="block hover:text-gray-300" href="/ingredients">
              Ingredients
            </Link>
            <Link className="block hover:text-gray-300" href="/recipes">
              Recipes
            </Link>
          </nav>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
