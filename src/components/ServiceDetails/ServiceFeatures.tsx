import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceFeatures({ service }: Props) {
  return (
    <section className="mt-24">

      <div className="text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          What You'll Get
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Key Features
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Every implementation includes powerful Salesforce capabilities
          designed to improve productivity, automate processes and accelerate
          business growth.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {service.features.map((feature, index) => (

          <div
            key={feature}
            className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl font-bold text-white transition-transform duration-500 group-hover:rotate-6">

              {index + 1}

            </div>

            <h3 className="mt-8 text-2xl font-bold text-gray-900">

              {feature}

            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              We configure and optimize this capability using Salesforce best
              practices, ensuring performance, scalability and long-term
              maintainability.
            </p>

            <div className="mt-8 flex items-center font-semibold text-blue-600">

              Learn More

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}