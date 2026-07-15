import Container from "./Container";

type Props = {
  features: string[];
};

export default function ServiceFeatures({
  features,
}: Props) {
  return (
    <section className="py-20">
      <Container>

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold text-gray-900">
            Features Included
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Our Salesforce implementation includes everything you need to build
            a scalable, secure and high-performing CRM solution.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="mb-4 text-3xl">
                  🚀
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {feature}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}