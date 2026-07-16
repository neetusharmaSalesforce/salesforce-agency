import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/pageMetadata";

import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata =
  generatePageMetadata({
    title: "Contact SF Agency",
    description:
      "Contact SF Agency for Salesforce consulting, CRM implementation, Apex development, LWC development, integrations and managed support.",
    path: "/contact",
  });

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}