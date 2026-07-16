import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/pageMetadata";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";

export const metadata: Metadata =
  generatePageMetadata({
    title: "Salesforce Services",
    description:
      "Explore Salesforce consulting, CRM implementation, Apex, LWC, integrations and managed support services offered by SF Agency.",
    path: "/services",
  });

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <CTA />
      <Footer />
    </>
  );
}