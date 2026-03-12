import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Radiant Academy — Valorant Coaching",
    template: "%s | Radiant Academy",
  },
  description:
    "Structured Valorant coaching built for every rank. Master mechanics, decision-making, and game sense with professional-level video lessons.",
  keywords: ["Valorant", "coaching", "course", "rank up", "esports", "guide"],
  openGraph: {
    title: "Radiant Academy — Valorant Coaching",
    description: "Stop guessing. Start climbing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
