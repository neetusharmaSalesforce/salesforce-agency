import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";
import IndustryBenefits from "@/components/IndustryBenefits";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main>
        <Industries />
        <IndustryBenefits />
        <CTA />
      </main>

      <Footer />
    </>
  );
}