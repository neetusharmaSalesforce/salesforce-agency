import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TrustedCompanies from "../components/TrustedCompanies";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}