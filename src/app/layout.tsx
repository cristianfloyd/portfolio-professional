import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileQuickNav from "@/components/MobileQuickNav";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristian Arenas | Backend Developer & Infrastructure Specialist",
  description: "Especialista IT con 15+ años de experiencia en desarrollo backend (Python, Laravel) e infraestructura (Linux, Docker). Optimización de sistemas, algoritmos y arquitectura de software.",
  keywords: ["Backend Developer", "Python", "Laravel", "PHP", "PostgreSQL", "SysAdmin", "DevOps", "Linux", "Docker", "Infrastructure", "Next.js", "AlmaLinux"],
  authors: [{ name: "Cristian Arenas" }],
  creator: "Cristian Arenas",
  publisher: "Cristian Arenas",

  icons: {
    icon: [{ url: "/favicon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/favicon.png", sizes: "512x512", type: "image/png" }],
  },

  openGraph: {
    title: "Cristian Arenas | Backend Developer & Infrastructure Specialist",
    description: "Portfolio profesional: Optimización de sistemas, desarrollo backend y gestión de infraestructura.",
    url: "https://dev.cristianarenas.com",
    siteName: "Cristian Arenas Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cristian Arenas - Backend Developer & Infrastructure Specialist",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cristian Arenas | Backend Developer & Infrastructure Specialist",
    description: "Portfolio profesional: Optimización de sistemas, desarrollo backend y gestión de infraestructura.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable}`}>
        <Navbar />
        {children}
        <MobileQuickNav />
      </body>
    </html>
  );
}
