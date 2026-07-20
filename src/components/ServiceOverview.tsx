import Container from "./Container";
import FadeUp from "./FadeUp";
import ConsultationButton from "./Consultation/ConsultationButton";

type Props = {
  title: string;
  overview: string;
};

const highlights = [
  "Certified Salesforce Consultants",
  "Scalable CRM Architecture",
  "Secure & Best Practice Implementation",
  "Long-Term Support & Optimization",
];

export default function ServiceOverview({
  title,
  overview,
}: Props) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <FadeUp>
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Why Choose This Service
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
                Why {title}?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {overview}
              </p>

              <div className="mt-10 grid gap-4">

                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </div>

                    <span className="font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <div className="mt-10">
                <ConsultationButton />
              </div>

            </div>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.2}>
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 shadow-xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-blue-600">
                    200+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Projects Delivered
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-green-600">
                    99%
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Client Satisfaction
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-indigo-600">
                    24/7
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Support
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 text-center shadow">
                  <h3 className="text-3xl font-bold text-orange-600">
                    10+
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Years Experience
                  </p>
                </div>

              </div>

            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}