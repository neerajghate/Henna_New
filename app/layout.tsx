// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer"; // optional if you use a footer

// Single source of truth for container + header height
const CONTAINER = "container-max"; // your project’s class
const HEADER_H = "h-20";          // 80px header
const MAIN_PT = "pt-20";          // match header height to avoid overlap

export const metadata: Metadata = {
  metadataBase: new URL("https://henna-new.vercel.app/"), // fixed double-https
  title: "Rita Sheth | Henna Artist",
  description: "Professional mehndi (henna) artistry in the USA."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Sticky header controls positioning; Navigation is NOT fixed */}
        <header className={`sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur ${HEADER_H}`}>
          <div className={`${CONTAINER} h-full flex items-center`}>
            <Navigation />
          </div>
        </header>

        {/* Offset content by header height to prevent overlap */}
        <main className={`${CONTAINER} ${MAIN_PT}`}>
          {children}
        </main>

        {/* Optional footer on the same rails */}
        {/* <footer className="mt-16 border-t border-neutral-200">
          <div className={CONTAINER}>
            <Footer />
          </div>
        </footer> */}
      </body>
    </html>
  );
}
