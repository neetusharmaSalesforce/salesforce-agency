import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackToTop from "@/components/BackToTop";
import Providers from "@/components/Providers";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";
import WebsiteSchema from "@/components/SEO/WebsiteSchema";
import CookieConsent from "@/components/CookieConsent/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sfagency.com"),

  title: {
    default: "SF Agency | Salesforce Consulting & CRM Solutions",
    template: "%s | SF Agency",
  },

  description:
    "SF Agency helps businesses implement, customize, integrate and optimize Salesforce CRM. We provide consulting, automation, integrations and ongoing Salesforce support.",

  keywords: [
    "Salesforce",
    "Salesforce Consulting",
    "Salesforce CRM",
    "Salesforce Development",
    "Sales Cloud",
    "Service Cloud",
    "CRM Consulting",
    "Salesforce Integration",
  ],

  authors: [
    {
      name: "SF Agency",
    },
  ],

  creator: "SF Agency",

  openGraph: {
  title: "SF Agency | Salesforce Consulting & CRM Solutions",
  description:
    "Expert Salesforce consulting, implementation, customization and CRM automation services.",
  url: "https://www.sfagency.com",
  siteName: "SF Agency",
  locale: "en_US",
  type: "website",

  images: [
    {
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "SF Agency",
    },
  ],
},

  twitter: {
  card: "summary_large_image",
  title: "SF Agency",
  description:
    "Salesforce Consulting & CRM Solutions for growing businesses.",

  images: ["/images/og-image.jpg"],
},

  robots: {
    index: true,
    follow: true,
  },

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
  shortcut: "/favicon.ico",
},

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
       <Providers>
      <OrganizationSchema />

      <WebsiteSchema />

      {children}
      <CookieConsent />
      <BackToTop />
    </Providers>
      </body>
    </html>
  );
}