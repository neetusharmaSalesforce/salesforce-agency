import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/pageMetadata";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TrustedCompanies from "../components/TrustedCompanies";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Technologies from "@/components/Technologies";


export const metadata: Metadata =
  generatePageMetadata({
    title: "Salesforce Consulting & CRM Solutions",
    description:
      "SF Agency helps businesses implement, customize and optimize Salesforce CRM with consulting, development, integrations and managed support.",
    path: "/",
  });

export default function Home() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.sfagency.com",
          },
        ]}
      />
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <Technologies />
      <Industries />

      {/* <CaseStudies /> */}

      <WhyChooseUs />

      {/* <Testimonials /> */}

      <FAQ />
      <CTA />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}