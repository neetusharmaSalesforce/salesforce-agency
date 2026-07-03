import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TrustedCompanies from "../components/TrustedCompanies";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}