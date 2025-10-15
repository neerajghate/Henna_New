// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://https://henna-new.vercel.app/"),
  title: "Rita Sheth | Henna Artist",
  description: "Professional mehndi (henna) artistry in the USA."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4">
            <Navigation />
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4">{children}</main>
      </body>
    </html>
  );
}
