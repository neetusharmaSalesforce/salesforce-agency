import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}