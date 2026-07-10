import { services } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">
          Service Not Found
        </h1>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100">
          <Icon className="h-10 w-10 text-blue-600" />
        </div>

        <h1 className="text-5xl font-bold text-gray-900">
          {service.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-600">
          {service.description}
        </p>

        <div className="mt-12 rounded-2xl bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Why Choose Our {service.title} Service?
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li>✅ Certified Salesforce Experts</li>
            <li>✅ End-to-End Implementation</li>
            <li>✅ Custom Development</li>
            <li>✅ Best Practices & Security</li>
            <li>✅ Long-Term Support</li>
          </ul>
        </div>

      </div>
    </section>
  );
}