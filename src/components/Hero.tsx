import Container from "./Container";
import Button from "./Button";
import Dashboard from "./Dashboard";

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

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Build Better Customer Relationships with Salesforce
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help businesses implement, customize, integrate and optimize
              Salesforce CRM to increase sales, improve customer service and
              automate business processes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Button>
                Book Free Consultation
              </Button>

              <Button variant="secondary">
                Explore Services
              </Button>

            </div>

          </div>

          {/* Right Side */}

          <Dashboard />

        </div>
      </Container>
    </section>
  );
}