import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BackToTop from "@/components/BackToTop";
import Providers from "@/components/Providers";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";
import WebsiteSchema from "@/components/SEO/WebsiteSchema";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.sfagency.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  applicationName: "SF Agency",

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

  publisher: "SF Agency",

  category: "Technology",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title:
      "SF Agency | Salesforce Consulting & CRM Solutions",

    description:
      "Expert Salesforce consulting, implementation, customization and CRM automation services.",

    url: BASE_URL,

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

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    title: "SF Agency",
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  referrer: "origin-when-cross-origin",

  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
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
      <body className="flex min-h-full flex-col">
        <Providers>
          <OrganizationSchema />

          <WebsiteSchema />

          {children}

          <CookieConsent />

          <BackToTop />
        </Providers>

        <GoogleAnalytics />
      </body>
    </html>
  );
}