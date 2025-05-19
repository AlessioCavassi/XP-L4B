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
  title: "XP-L4B",
  description: "XP-L4B - Esperienza & Innovazione",
  openGraph: {
    title: "XP-L4B",
    description: "XP-L4B - Innovazione nel campo dell'esperienza utente",
    url: "https://www.xpl4b.com/",
    siteName: "XP-L4B",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XP-L4B Logo",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XP-L4B",
    description: "XP-L4B - Innovazione nel campo dell'esperienza utente",
    images: ["/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
