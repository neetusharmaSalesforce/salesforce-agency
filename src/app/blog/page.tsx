import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

import BlogList from "@/components/Blog/BlogList";

export const metadata: Metadata = {
  title: "Salesforce Blog | SF Agency",

  description:
    "Read Salesforce tutorials, CRM best practices, implementation guides and expert insights from SF Agency.",

  keywords: [
    "Salesforce Blog",
    "Salesforce CRM",
    "Sales Cloud",
    "Service Cloud",
    "Salesforce Consultant",
    "Salesforce Development",
    "Salesforce Implementation",
    "CRM Blog",
    "Salesforce Agency",
  ],

  authors: [
    {
      name: "SF Agency",
    },
  ],

  creator: "SF Agency",

  publisher: "SF Agency",

  applicationName: "SF Agency",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Salesforce Blog | SF Agency",

    description:
      "Read Salesforce tutorials, CRM best practices, implementation guides and expert insights from SF Agency.",

    url: "/blog",

    siteName: "SF Agency",

    locale: "en_US",

    type: "website",

   images: [
  {
    url: "/images/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "SF Agency Blog",
  },
],
  },

  twitter: {
    card: "summary_large_image",

    title: "Salesforce Blog | SF Agency",

    description:
      "Read Salesforce tutorials, CRM best practices, implementation guides and expert insights.",

    images: [
  "/images/og-image.jpg",
],
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main>

        <BlogList />

        <CTA />

      </main>

      <Footer />

    </>
  );
}