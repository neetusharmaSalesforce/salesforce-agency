import { Service } from "@/data/services";

type Props = {
  service: Service;
};

const benefits = [
  "Certified Salesforce Experts",
  "End-to-End Implementation",
  "Custom Development",
  "Best Practices & Security",
  "Long-Term Support",
];

export default function ServiceBenefits({ service }: Props) {
  return (
    <section className="mt-16 rounded-2xl bg-blue-50 p-10">
      <h2 className="text-3xl font-bold text-gray-900">
        Why Choose Our {service.title} Service?
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="flex items-center rounded-xl bg-white p-5 shadow-sm"
          >
            <span className="mr-3 text-green-600 text-xl">✓</span>

            <span className="font-medium text-gray-700">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}