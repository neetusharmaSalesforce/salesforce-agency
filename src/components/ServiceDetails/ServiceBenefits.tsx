import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceBenefits({ service }: Props) {
  return (
    <section className="mt-24 rounded-[36px] bg-gradient-to-br from-slate-50 to-blue-50 p-10 lg:p-16">

      <div className="text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Why Businesses Choose Us
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Benefits of {service.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Our Salesforce experts deliver solutions that increase productivity,
          improve customer relationships and help your business grow faster.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {service.benefits.map((benefit, index) => (

          <div
            key={benefit}
            className="group rounded-3xl border border-white bg-white p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl font-bold text-white">

                {index + 1}

              </div>

              <h3 className="text-2xl font-bold text-gray-900">

                {benefit}

              </h3>

            </div>

            <p className="mt-6 leading-8 text-gray-600">

              We implement this using Salesforce best practices,
              ensuring a scalable, secure and future-ready CRM
              solution for your business.

            </p>

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-gray-200">

              <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}