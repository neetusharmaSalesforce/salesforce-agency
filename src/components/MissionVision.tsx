import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="Mission & Vision"
          title="Driven by Innovation and Customer Success"
          description="Everything we do is focused on delivering measurable business value through Salesforce."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To help businesses simplify operations, strengthen customer
              relationships, and accelerate growth through world-class
              Salesforce solutions.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To become a trusted Salesforce consulting partner recognized for
              innovation, transparency, and delivering exceptional business
              outcomes.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}