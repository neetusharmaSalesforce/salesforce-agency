import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6">

      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 max-w-3xl text-center">

        <p className="text-8xl font-extrabold tracking-tight text-blue-600 md:text-9xl">
          404
        </p>

        <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Oops! We couldn't find that page.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          The page may have been moved, deleted, or the URL you entered is incorrect.
          Don't worry—you can continue exploring our Salesforce solutions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Popular Services
          </p>

          <div className="flex flex-wrap justify-center gap-3">
  {[
    {
      name: "Sales Cloud",
      href: "/services/sales-cloud",
    },
    {
      name: "Service Cloud",
      href: "/services/service-cloud",
    },
    {
      name: "CRM Consulting",
      href: "/services/crm-consulting",
    },
    {
      name: "Apex Development",
      href: "/services/apex-development",
    },
  ].map((service) => (
    <Link
      key={service.name}
      href={service.href}
      className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
    >
      {service.name}
    </Link>
  ))}
</div>
        </div>

      </div>
    </div>
  );
}