import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          subtitle="Our Story"
          title="Built Around Customer Success"
          description="Every successful Salesforce implementation starts with understanding the client's business."
        />

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-6 text-lg leading-8 text-gray-600">

            <p>
              SF Agency was founded with a simple mission — help businesses
              unlock the full potential of Salesforce without unnecessary
              complexity.
            </p>

            <p>
              Our consultants have experience delivering Salesforce solutions
              across multiple industries, helping companies automate processes,
              improve customer relationships and accelerate growth.
            </p>

            <p>
              We believe technology should simplify business, not complicate it.
              That's why every implementation is tailored to the unique goals of
              our clients.
            </p>

          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Why Clients Choose Us
            </h3>

            <ul className="mt-8 space-y-5">

              <li>✅ Certified Salesforce Consultants</li>

              <li>✅ End-to-End CRM Implementation</li>

              <li>✅ Custom Development & Integrations</li>

              <li>✅ Long-Term Support & Optimization</li>

              <li>✅ Transparent Communication</li>

            </ul>

          </div>

        </div>

      </Container>
    </section>
  );
}