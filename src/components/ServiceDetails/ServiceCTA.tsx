import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="mt-20 rounded-3xl bg-blue-600 px-10 py-16 text-center text-white">

      <h2 className="text-4xl font-bold">
        Ready to Transform Your Business?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
        Our Salesforce experts are ready to help you implement,
        customize and optimize your CRM for long-term success.
      </p>

      <Link
        href="/contact"
        className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100"
      >
        Book Free Consultation
      </Link>

    </section>
  );
}