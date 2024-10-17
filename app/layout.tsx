import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { env } from "@/utils/env";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair-display",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "AlexBrot | Home",
  authors: [
    {
      name: "Manuel Puchner",
    },
  ],
  description: "Offizielle Website von AlexBrot",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: env.SITE_URL,
    siteName: "AlexBrot",
    title: "AlexBrot",
    description: "Offizielle Website von AlexBrot",
    images: [
      {
        url: `${env.SITE_URL}/assets/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AlexBrot",
      },
    ],
  },
};

env.init();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
        data-theme="light"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
