import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Los Weyes de la Asada | Best Carne Asada in San Antonio, TX",
  description:
    "Los Weyes de la Asada — authentic Mexican food truck in San Antonio, TX. 100% al carbón, handmade tortillas, featured in Texas Monthly. Open late. Order on DoorDash & Uber Eats.",
  openGraph: {
    title: "Los Weyes de la Asada",
    description: "Los más chingones 🔥 | 100% al carbón | Orgullo Mexicano 🇲🇽",
    siteName: "Los Weyes de la Asada",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital@1&family=DM+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
