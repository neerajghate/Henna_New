// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

const CONTAINER = "mx-auto max-w-6xl px-4";
const HEADER_H = "h-20";  // 80px header
const MAIN_PT  = "pt-20"; // match header height

export const metadata: Metadata = {
  metadataBase: new URL("https://henna-new.vercel.app/"), // fixed double-https
  title: "Rita Sheth | Henna Artist",
  description: "Professional mehndi (henna) artistry in the USA."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Single source of truth for “sticky on scroll” */}
        <header className={`sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur ${HEADER_H}`}>
          <div className={`${CONTAINER} h-full flex items-center`}>
            <Navigation />
          </div>
        </header>

        {/* Offset equals header height, so content never slides underneath */}
        <main className={`${CONTAINER} ${MAIN_PT}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
