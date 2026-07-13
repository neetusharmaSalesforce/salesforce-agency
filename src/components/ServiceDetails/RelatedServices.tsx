import Link from "next/link";
import { Service } from "@/data/services";

type Props = {
  currentSlug: string;
  services: Service[];
};

export default function RelatedServices({
  currentSlug,
  services,
}: Props) {
  const relatedServices = services.filter(
    (service) => service.slug !== currentSlug
  );

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900">
        You May Also Like
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {relatedServices.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-blue-600 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}