import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mona Mekkawi | Production Designer & Art Director",
  description:
    "Emmy Award-winning Production Designer and Art Director based in New York. NYU Tisch MFA. IATSE Local 829. 14+ years across Film, TV, Commercials, and Luxury Brand Campaigns.",
  keywords: [
    "production designer",
    "art director",
    "film production design",
    "Emmy Award",
    "NYU Tisch",
    "IATSE Local 829",
    "set design",
    "Mona Mekkawi",
    "UGC production design",
    "luxury brand",
    "Egyptian filmmaker",
    "New York",
  ],
  authors: [{ name: "Mona Mekkawi" }],
  openGraph: {
    title: "Mona Mekkawi | Production Designer & Art Director",
    description:
      "Emmy Award-winning Production Designer. 14+ years. NYU Tisch. IATSE Local 829. Film, TV & Luxury Brand Campaigns.",
    type: "website",
    url: "https://www.monamekkawi.com",
    siteName: "Mona Mekkawi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mona Mekkawi | Production Designer & Art Director",
    description: "Emmy Award-winning Production Designer based in New York.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="grain antialiased"
        style={{ backgroundColor: "#0a0a0a", color: "#f5f0e8" }}
      >
        {children}
      </body>
    </html>
  );
}
