import Container from "./Container";
import Button from "./Button";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              ABOUT SF AGENCY
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
              Helping Businesses Unlock the Full Power of Salesforce
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We partner with businesses to implement, customize and optimize
              Salesforce CRM solutions that improve productivity, customer
              relationships and business growth.
            </p>

            <div className="mt-10">
              <Button>
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600">
                100+
              </h2>
              <p className="mt-2 text-gray-600">
                Successful Projects
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600">
                50+
              </h2>
              <p className="mt-2 text-gray-600">
                Happy Clients
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600">
                5+
              </h2>
              <p className="mt-2 text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600">
                24/7
              </h2>
              <p className="mt-2 text-gray-600">
                Support
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}