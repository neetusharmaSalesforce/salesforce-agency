import Container from "./Container";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Our Clients Say
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Businesses Worldwide
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help organizations maximize their Salesforce investment with
            reliable consulting, implementation and long-term support.
          </p>

        </div>

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