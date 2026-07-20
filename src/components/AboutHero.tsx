import Container from "./Container";
import Button from "./Button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}
          <div className="relative z-10">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
              ABOUT SF AGENCY
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Empowering Businesses With
              <span className="block bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Salesforce Excellence
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
              SF Agency helps startups, SMEs and enterprises transform their
              customer relationships with modern Salesforce consulting,
              implementation, automation and managed services that drive
              measurable business growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button>
                Book Free Consultation
              </Button>

              <button className="rounded-xl border border-blue-200 px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-50">
                Our Services
              </button>

            </div>

            <div className="mt-14 flex flex-wrap gap-10">

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  250+
                </h3>

                <p className="mt-2 text-gray-600">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  99%
                </h3>

                <p className="mt-2 text-gray-600">
                  Client Satisfaction
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  24/7
                </h3>

                <p className="mt-2 text-gray-600">
                  Expert Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-300/30 blur-3xl"></div>

            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl"></div>

            <div className="relative rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-2xl backdrop-blur">

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="text-sm font-medium text-gray-500">
                    Salesforce Performance
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-gray-900">
                    SF Agency
                  </h3>

                </div>

                <div className="rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  ● Live
                </div>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-blue-50 p-6">
                  <h4 className="text-4xl font-bold text-blue-600">
                    250+
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-6">
                  <h4 className="text-4xl font-bold text-green-600">
                    99%
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Success Rate
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-50 p-6">
                  <h4 className="text-4xl font-bold text-purple-600">
                    150+
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Clients
                  </p>
                </div>

                <div className="rounded-2xl bg-orange-50 p-6">
                  <h4 className="text-4xl font-bold text-orange-600">
                    24/7
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Support
                  </p>
                </div>

              </div>

              <div className="mt-8">

                <div className="flex items-center justify-between text-sm">

                  <span className="text-gray-500">
                    Company Growth
                  </span>

                  <span className="font-semibold text-blue-600">
                    82%
                  </span>

                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">

                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}