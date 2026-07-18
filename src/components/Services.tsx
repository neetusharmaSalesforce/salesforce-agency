import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import ConsultationButton from "./Consultation/ConsultationButton";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-gray-50 py-24"
    >
      <Container>

        <SectionHeading
          subtitle="Our Services"
          title="Salesforce Solutions That Grow Your Business"
          description="We provide complete Salesforce consulting, implementation, customization and managed services to help businesses achieve digital transformation."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              slug={service.slug}
              features={service.features}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-center text-white shadow-2xl">

          <h2 className="text-3xl font-bold">
            Need a Custom Salesforce Solution?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Every business is different. Our Salesforce experts can design a
            custom CRM solution tailored to your processes and goals.
          </p>

          <div className="mt-8 flex justify-center">
            <ConsultationButton />
          </div>

        </div>

      </Container>
    </section>
  );
}