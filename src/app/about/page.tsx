import type { Metadata } from "next";

import { generatePageMetadata } from "@/lib/pageMetadata";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import CompanyStory from "@/components/CompanyStory";
import CoreValues from "@/components/CoreValues";
import Timeline from "@/components/Timeline";
import WhyChooseAgency from "@/components/WhyChooseAgency";

export const metadata: Metadata =
  generatePageMetadata({
    title: "About SF Agency",
    description:
      "Learn about SF Agency, our Salesforce experts, mission, values and commitment to delivering world-class CRM solutions.",
    path: "/about",
  });

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <AboutHero />

      <CompanyStory />

      <OurStory />

      <MissionVision />

      <CoreValues />

      <Timeline />

      <Team />

      <WhyChooseAgency />

      <CTA />

      <Footer />
    </>
  );
}