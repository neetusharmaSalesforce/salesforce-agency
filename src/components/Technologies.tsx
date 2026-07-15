import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          subtitle="Our Salesforce Expertise"
          title="Technologies We Specialize In"
          description="We build secure, scalable and high-performance Salesforce solutions using modern technologies and industry best practices."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition group-hover:bg-blue-600 group-hover:text-white">
                {technology.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {technology.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {technology.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}