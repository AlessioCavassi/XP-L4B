import type { Metadata } from "next";
import { Oxanium, Exo_2 } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";
import { OrganizationJsonLd, WebSiteJsonLd } from "./jsonld";

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
  metadataBase: new URL('https://www.xpl4b.com'),
  title: "XP-L4B | Sviluppo competenze tramite gamification, Serious games & Tecnologie VR/AR",
  description: "XP-L4B è leader in sviluppo competenze tramite gamification e tecnologie VR/AR. Trasformiamo ogni attività in un'esperienza coinvolgente con soluzioni innovative che aumentano il coinvolgimento e la produttività del 50-60%.",
  keywords: ["sviluppo competenze", "gamification", "serious games", "game-based learning", "VR", "AR", "realtà virtuale", "realtà aumentata", "engagement", "teambuilding", "AI prompting", "XP-L4B"],
  applicationName: "XP-L4B",
  authors: [{ name: "XP-L4B Team" }],
  generator: "Next.js",
  creator: "XP-L4B",
  publisher: "XP-L4B",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "XP-L4B | Sviluppo competenze tramite gamification, Serious games & Tecnologie VR/AR",
    description: "Trasformiamo ogni attività in un'esperienza coinvolgente con serious games e game-based learning per l'engagement aziendale. L'83% dei dipendenti che partecipano ai nostri programmi mostrano maggiore motivazione.",
    url: "https://www.xpl4b.com/",
    siteName: "XP-L4B",
    images: [
      {
        url: "/logo_XP_L4B_rgb_trasp_vert_col_payoff.png",
        width: 500,
        height: 350,
        alt: "XP-L4B Logo e Slogan: enhance & engage",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XP-L4B | Sviluppo competenze tramite gamification, Serious games & Tecnologie VR/AR",
    description: "Trasformiamo ogni attività in un'esperienza coinvolgente con tecnologie innovative VR/AR, gamification e serious games",
    creator: "@XPL4B",
    images: ["/logo_XP_L4B_rgb_trasp_vert_col_payoff.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.xpl4b.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#160F30" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
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
