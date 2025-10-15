// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://https://henna-new-3sca.vercel.app/"),
  title: "Rita Sheth | Henna Artist",
  description: "Professional mehndi (henna) artistry in the USA.",
  openGraph: {
    title: "Rita Sheth | Henna Artist",
    description: "Professional mehndi (henna) artistry in the USA.",
    url: "https://<your-vercel-subdomain>.vercel.app",
    siteName: "Rita Sheth",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rita Sheth | Henna Artist",
    description: "Professional mehndi (henna) artistry in the USA."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
