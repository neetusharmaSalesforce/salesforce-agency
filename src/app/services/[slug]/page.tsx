import { services } from "@/data/services";
import ServiceHero from "@/components/ServiceDetails/ServiceHero";
import ServiceFeatures from "@/components/ServiceDetails/ServiceFeatures";
import ServiceBenefits from "@/components/ServiceDetails/ServiceBenefits";
import Breadcrumb from "@/components/ServiceDetails/Breadcrumb";
import RelatedServices from "@/components/ServiceDetails/RelatedServices";
import type { Metadata } from "next";
import ServiceCTA from "@/components/ServiceDetails/ServiceCTA";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {
      title: "Service Not Found | SF Agency",
    };
  }

  return {
    title: `${service.title} | SF Agency`,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <Breadcrumb title={service.title} />

        {/* Hero */}
        <ServiceHero service={service} />

        {/* Features */}
        <ServiceFeatures service={service} />

        {/* Benefits */}
        <ServiceBenefits service={service} />
        

        <RelatedServices
          currentSlug={service.slug}
          services={services}
        />
        <ServiceCTA />

      </div>
    </section>
  );
}