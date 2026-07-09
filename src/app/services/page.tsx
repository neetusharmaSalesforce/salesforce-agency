import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";

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