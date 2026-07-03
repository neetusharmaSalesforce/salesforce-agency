import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          subtitle="Our Services"
          title="Salesforce Solutions That Grow Your Business"
          description="We provide complete Salesforce consulting, implementation, customization and managed services to help businesses achieve digital transformation."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}