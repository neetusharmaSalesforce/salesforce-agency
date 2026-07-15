import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./CTA";

import ServiceDetailHero from "./ServiceDetailHero";
import ServiceOverview from "./ServiceOverview";
import ServiceBenefits from "./ServiceBenefits";
import ServiceFeatures from "./ServiceFeatures";
import ServiceProcess from "./ServiceProcess";
import ServiceFAQ from "./ServiceFAQ";

import { services } from "@/data/services";

type Props = {
  slug: string;
};

export default function ServiceTemplate({ slug }: Props) {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  return (
    <>
      <Navbar />

      <ServiceDetailHero
        title={service.heroTitle ?? service.title}
        description={service.heroDescription ?? service.description}
      />

      {service.overview && (
        <ServiceOverview
          title={service.title}
          overview={service.overview}
        />
      )}

      {service.benefits && (
        <ServiceBenefits
          benefits={service.benefits}
        />
      )}

      <ServiceFeatures
        features={service.features}
      />

      {service.process && (
        <ServiceProcess
          process={service.process}
        />
      )}

      {service.faqs && (
        <ServiceFAQ
          faqs={service.faqs}
        />
      )}

      <CTA />

      <Footer />
    </>
  );
}