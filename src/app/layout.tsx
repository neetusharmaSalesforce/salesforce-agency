import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  },

  twitter: {
    card: "summary_large_image",
    title: "SF Agency",
    description:
      "Salesforce Consulting & CRM Solutions for growing businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
