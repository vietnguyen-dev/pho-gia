import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pho Gia Milwaukie | Authentic Vietnamese Cuisine",
  description:
    "Vietnamese restaurant serving pho soups, noodles & rice dishes in simple, traditional digs. Experience authentic Vietnamese pho and cuisine at Pho Gia Milwaukie. Fresh ingredients, traditional recipes, and a warm atmosphere.",
  icons: {
    icon: "/pho-gia-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-stone-900`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
