import Container from "./Container";

type Props = {
  process: string[];
};

export default function ServiceProcess({ process }: Props) {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold text-gray-900">
            Our Implementation Process
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
            We follow a proven implementation process to ensure every Salesforce
            project is delivered successfully.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}