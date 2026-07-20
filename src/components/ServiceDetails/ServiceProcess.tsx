import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceProcess({ service }: Props) {
  if (!service.process || service.process.length === 0) {
    return null;
  }

  return (
    <section className="mt-24">
      <div className="text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          OUR PROCESS
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          How We Deliver {service.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Our proven implementation process ensures smooth delivery,
          faster deployment and long-term Salesforce success.
        </p>
      </div>

      <div className="relative mx-auto mt-20 max-w-4xl">
        <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-blue-200"></div>

        <div className="space-y-10">
          {service.process.map((step, index) => (
            <div
              key={step}
              className="relative flex gap-8"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-xl font-bold text-white shadow-lg">
                {index + 1}
              </div>

              <div className="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  {step}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Our Salesforce experts execute this phase using industry
                  best practices to ensure quality, scalability and long-term
                  business success.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}