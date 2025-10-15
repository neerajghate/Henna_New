// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://henna-new.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Rita Sheth - Professional Henna Artist | Mehendi Artisan",
  description:
    "Professional henna artist Rita Sheth serving Denver, CO. Specializing in bridal mehendi, Arabic designs, makeup, and hair styling. 18+ years of experience.",
  keywords:
    "henna artist, mehendi, bridal henna, Arabic henna, makeup artist, hair styling, Denver, Colorado",
  authors: [{ name: "Rita Sheth" }],
  openGraph: {
    title: "Rita Sheth - Professional Henna Artist",
    description:
      "Professional henna artist with 18+ years of experience. Serving Denver, CO with bridal mehendi, Arabic designs, and more.",
    url: siteUrl,
    siteName: "Rita Sheth",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rita Sheth - Professional Henna Artist",
    description:
      "Professional henna artist with 18+ years of experience. Serving Denver, CO with bridal mehendi, Arabic designs, and more.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900`}>
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4">
            <Navigation />
          </div>
        </header>

        <main className="mx-auto min-h-screen max-w-6xl px-4">{children}</main>

        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
