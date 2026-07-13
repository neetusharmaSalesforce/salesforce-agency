import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CaseStudies from "@/components/CaseStudies";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      <main>
        <CaseStudies />
        <CTA />
      </main>

      <Footer />
    </>
  );
}