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