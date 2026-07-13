import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceFeatures({ service }: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900">
        Key Features
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-600 hover:shadow-lg"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
              ✓
            </div>

            <h3 className="font-semibold text-gray-900">
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}