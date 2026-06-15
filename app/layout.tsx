import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korvexa — The AI Operating System for Customer Growth",
  description:
    "Automate conversations, qualify leads, launch campaigns, and scale customer engagement with AI-powered automation. WhatsApp CRM, AI agents, and workflow automation in one platform.",
  keywords: [
    "WhatsApp automation",
    "AI CRM",
    "customer engagement",
    "lead qualification",
    "campaign management",
    "business growth",
  ],
  openGraph: {
    title: "Korvexa — The AI Operating System for Customer Growth",
    description:
      "Automate conversations, qualify leads, launch campaigns, and scale customer engagement with AI-powered automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
