// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// single source of truth for width + padding
const CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

export const metadata: Metadata = {
  title: "Rita Sheth - Professional Henna Artist | Mehendi Artisan",
  description:
    "Professional henna artist Rita Sheth serving Denver, CO. Specializing in bridal mehendi, Arabic designs, makeup, and hair styling. 18+ years of experience.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://henna-new.vercel.app/"
  ),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900`}>
        {/* Sticky header: fixed height avoids jump during scroll/animations */}
        <header className="sticky top-0 z-50 inset-x-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
          <div className={`${CONTAINER} h-16 flex items-center`}>
            <Navigation />
          </div>
        </header>

        {/* Reserve space and unify content width */}
        <main className={`${CONTAINER} pt-6`}>{children}</main>

        <footer className="mt-16 border-t border-neutral-200">
          <div className={CONTAINER}>
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
