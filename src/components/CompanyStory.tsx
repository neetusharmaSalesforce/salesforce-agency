import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function CompanyStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <SectionHeading
              subtitle="OUR STORY"
              title="Building Long-Term Salesforce Success"
              description=""
            />

            <p className="mt-6 text-lg leading-8 text-gray-600">
              SF Agency was founded with a simple mission: help businesses
              maximize the value of Salesforce. We believe technology should
              simplify operations, strengthen customer relationships and drive
              measurable business growth.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced Salesforce consultants work closely with every
              client to understand their goals and deliver scalable CRM
              solutions tailored to their business needs.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              To become a trusted Salesforce consulting partner for businesses
              worldwide by delivering innovative CRM solutions with measurable
              results.
            </p>

            <div className="mt-10 border-t border-blue-400 pt-8">

              <h3 className="text-3xl font-bold">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-blue-100">
                Empower organizations with modern Salesforce solutions that
                improve productivity, automate processes and create exceptional
                customer experiences.
              </p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}