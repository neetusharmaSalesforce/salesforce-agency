import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function OurStory() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="OUR STORY"
          title="Built Around Customer Success"
          description="Every successful Salesforce implementation starts with understanding your business, your challenges and your long-term vision."
        />

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <p className="text-lg leading-9 text-gray-600">
              SF Agency was established with one vision — to help businesses
              maximize the true power of Salesforce through strategic
              consulting, implementation and continuous innovation.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              We don't simply deploy CRM systems. We create scalable digital
              ecosystems that improve customer engagement, automate business
              processes and enable data-driven decision making.
            </p>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Every client receives a tailored Salesforce solution backed by
              industry best practices, transparent communication and long-term
              partnership.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                <h3 className="text-4xl font-bold text-blue-600">
                  250+
                </h3>

                <p className="mt-2 text-gray-600">
                  Successful Projects
                </p>

              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                <h3 className="text-4xl font-bold text-blue-600">
                  150+
                </h3>

                <p className="mt-2 text-gray-600">
                  Happy Clients
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl"></div>

            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-200/30 blur-3xl"></div>

            <div className="relative rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-10 text-white shadow-2xl">

              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                WHY CLIENTS CHOOSE US
              </span>

              <div className="mt-10 space-y-6">

                {[
                  "Certified Salesforce Consultants",
                  "End-to-End CRM Implementation",
                  "Custom Development & Integrations",
                  "Enterprise Security & Best Practices",
                  "Long-Term Support & Optimization",
                  "Transparent Communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-700">
                      ✓
                    </div>

                    <span className="text-lg font-medium">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}