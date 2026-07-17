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
      <div className="mb-14 flex flex-col items-center justify-center text-center">

          <div className="text-4xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>

          <h3 className="mt-3 text-4xl font-bold text-gray-900">
            4.9/5 Customer Satisfaction
          </h3>

          <p className="mt-3 max-w-2xl text-gray-600">
            More than <span className="font-semibold text-blue-600">200+ businesses</span>
            trust SF Agency for Salesforce consulting, implementation,
            integrations and managed support.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            company={testimonial.company}
            position={testimonial.position}
            rating={testimonial.rating}
            review={testimonial.review}
          />
          ))}

        </div>

      </Container>
    </section>
  );
}