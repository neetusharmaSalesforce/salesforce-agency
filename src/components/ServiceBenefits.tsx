import Container from "./Container";

type Props = {
  benefits: string[];
};

export default function ServiceBenefits({
  benefits,
}: Props) {
  return (
    <section className="bg-gray-50 py-20">
      <Container>

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold text-gray-900">
            Key Benefits
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            Discover how our Salesforce solutions help your business grow faster,
            improve productivity and deliver better customer experiences.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  ✅
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}