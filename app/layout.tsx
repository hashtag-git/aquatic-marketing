import type { Metadata } from "next";
import { Playfair_Display, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQUATIC — Commercial Aquatic Intelligence",
  description:
    "25 years of commercial pool design expertise, codified into a calculation engine. Hydraulic analysis, equipment selection, code compliance, and jurisdiction intelligence — instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="font-body antialiased grain">
        {children}
      </body>
    </html>
  );
}
