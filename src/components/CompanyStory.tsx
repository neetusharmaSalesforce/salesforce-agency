import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function CompanyStory() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <SectionHeading
              subtitle="OUR STORY"
              title="Building Long-Term Salesforce Success"
              description=""
            />

            <p className="mt-8 text-lg leading-9 text-gray-600">
              SF Agency was founded with one clear goal—to help businesses
              unlock the full potential of Salesforce through modern CRM
              consulting, implementation and automation.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              From startups to enterprise organizations, we design scalable
              Salesforce solutions that improve productivity, automate
              workflows and deliver exceptional customer experiences.
            </p>

            {/* Statistics */}

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  250+
                </h3>

                <p className="mt-2 text-gray-600">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  150+
                </h3>

                <p className="mt-2 text-gray-600">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  99%
                </h3>

                <p className="mt-2 text-gray-600">
                  Success
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl"></div>

            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl"></div>

            <div className="relative rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl">

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold">
                  Our Vision
                </h3>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                  Future Ready
                </span>

              </div>

              <p className="mt-6 leading-8 text-blue-100">
                Become the most trusted Salesforce consulting partner by
                delivering innovative CRM solutions that create measurable
                business value.
              </p>

              <div className="my-10 h-px bg-white/20"></div>

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold">
                  Our Mission
                </h3>

                <span className="rounded-full bg-green-400/20 px-4 py-2 text-sm text-green-100">
                  Client First
                </span>

              </div>

              <p className="mt-6 leading-8 text-blue-100">
                Empower organizations with secure, scalable and intelligent
                Salesforce solutions that improve customer engagement,
                productivity and long-term growth.
              </p>

              <div className="mt-10">

                <div className="flex justify-between text-sm">

                  <span>Customer Success</span>

                  <span>98%</span>

                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/20">

                  <div className="h-full w-[98%] rounded-full bg-white"></div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}