import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <Container>

        <SectionHeading
          subtitle="MISSION & VISION"
          title="Driven by Innovation and Customer Success"
          description="Everything we build is focused on helping organizations maximize the value of Salesforce through innovation, strategy and long-term partnership."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Mission */}

          <div className="group rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-4xl text-white">
              🎯
            </div>

            <h3 className="mt-8 text-4xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              To help businesses simplify operations, strengthen customer
              relationships and accelerate digital transformation through
              secure, scalable and intelligent Salesforce solutions.
            </p>

            <div className="mt-10 h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            </div>

            <p className="mt-3 text-sm font-semibold text-blue-600">
              Customer Success Focus
            </p>

          </div>

          {/* Vision */}

          <div className="group rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 text-4xl text-white">
              🚀
            </div>

            <h3 className="mt-8 text-4xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              To become the most trusted Salesforce consulting partner by
              delivering innovative CRM solutions, measurable business value
              and long-term success for organizations worldwide.
            </p>

            <div className="mt-10 h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            </div>

            <p className="mt-3 text-sm font-semibold text-indigo-600">
              Future Ready Organization
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}