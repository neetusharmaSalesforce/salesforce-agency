import Container from "./Container";
import SectionHeading from "./SectionHeading";
import IndustryCard from "./IndustryCard";

import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-white py-24"
    >
      <Container>

        <SectionHeading
          subtitle="INDUSTRIES"
          title="Salesforce Solutions for Every Industry"
          description="We deliver tailored Salesforce solutions that help businesses across multiple industries grow faster."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              icon={industry.icon}
              delay={index * 0.15}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}