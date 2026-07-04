import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <SectionHeading
        subtitle="Our Clients Say"
        title="Trusted by Businesses Worldwide"
        description="We help organizations maximize their Salesforce investment with reliable consulting, implementation and long-term support."
      />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              company={testimonial.company}
              review={testimonial.review}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}