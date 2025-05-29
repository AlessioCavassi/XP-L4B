import type { Metadata } from "next";
import { Oxanium, Exo_2 } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

// Font per titoli/headings - Oxanium è un font geometrico perfetto per l'estetica videoludica
const oxanium = Oxanium({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
});

// Font per testo principale - Exo 2 è un font sans-serif leggibile con dettagli tech
const exo2 = Exo_2({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
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
        className={`${oxanium.variable} ${exo2.variable} antialiased relative overflow-x-hidden`}
      >
        {/* Elementi decorativi di background solo per desktop */}
        <div className="hidden md:block">
          <ParticlesBackground />
        </div>
        {children}
      </body>
    </html>
  );
}
