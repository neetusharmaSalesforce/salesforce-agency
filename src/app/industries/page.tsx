import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import CTA from "@/components/CTA";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main>
        <Industries />
        <CTA />
      </main>

      <Footer />
    </>
  );
}