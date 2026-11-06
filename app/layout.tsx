import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalgainsresearch.com"),
  title: "Capital Gains Research | SEBI Registered Research Analyst (INH000030986)",
  description:
    "Indian Stock Market Updates, Explained Simply. SEBI Registered Research Analyst Reg. No. INH000030986. Educational insights, quarterly earnings, IPOs & technical analysis on Telegram.",
  keywords: [
    "Capital Gains Research",
    "SEBI Registered Research Analyst",
    "INH000030986",
    "Indian Stock Market",
    "Technical Analysis",
    "Nifty 50",
    "Telegram Stock Market Channel",
  ],
  authors: [{ name: "Capital Gains Research" }],
  icons: {
    icon: "/Logo.jpeg",
    apple: "/Logo.jpeg",
  },
  openGraph: {
    title: "Capital Gains Research | SEBI Registered Research Analyst",
    description: "Indian Stock Market Updates, Explained Simply. Join our official Telegram channel.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/Logo.jpeg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E441F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Capital Gains Research",
    description:
      "SEBI Registered Research Analyst providing educational research and simplified Indian stock market analysis.",
    identifier: "INH000030986",
    url: "https://capitalgainsresearch.com",
    sameAs: ["https://t.me/capitalgainsresearch"],
    logo: "https://capitalgainsresearch.com/Logo.jpeg",
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAF8] text-[#141A16] antialiased selection:bg-[#0E441F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
