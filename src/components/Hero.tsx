import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">

          {/* Left Side */}
          <div className="w-full max-w-2xl text-center lg:text-left">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Salesforce Consulting Partner
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Better Customer Relationships with Salesforce
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help businesses implement, customize, integrate and optimize
              Salesforce CRM to increase sales, improve customer service and
              automate business processes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
                Book Free Consultation
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100">
                Explore Services
              </button>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex h-[300px] w-full max-w-lg items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white lg:h-[450px]">

            <p className="text-gray-500">
              Salesforce Dashboard Image
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}