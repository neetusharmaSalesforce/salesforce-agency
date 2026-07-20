import Link from "next/link";
import { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceHero({ service }: Props) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-8 py-16 text-white shadow-2xl lg:px-14 lg:py-20">

      {/* Background Effects */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
            Salesforce Consulting Service
          </span>

          <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
            <Icon className="h-10 w-10" />
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-blue-100">
            {service.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              Book Consultation
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              Talk to Expert
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-bold">
                250+
              </h3>

              <p className="mt-2 text-blue-100">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                99%
              </h3>

              <p className="mt-2 text-blue-100">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                24/7
              </h3>

              <p className="mt-2 text-blue-100">
                Support
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE STARTS HERE */}
                {/* RIGHT SIDE */}

        <div className="relative">

          {/* Floating Card */}
          <div className="absolute -top-6 -right-6 z-20 rounded-2xl bg-white px-5 py-4 text-gray-900 shadow-2xl">
            <p className="text-xs text-gray-500">
              Monthly Growth
            </p>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-2xl font-bold text-green-600">
                +28%
              </span>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                ↑
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-xl font-bold">
                CRM Dashboard
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-200">
                Live
              </span>

            </div>

            {/* Revenue */}

            <div className="rounded-2xl bg-white/10 p-6">

              <p className="text-sm text-blue-100">
                Revenue
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                $245K
              </h2>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">

                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-green-400 to-cyan-300"></div>

              </div>

            </div>

            {/* Stats */}

            <div className="mt-6 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/10 p-5">

                <p className="text-sm text-blue-100">
                  Customers
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  2,540
                </h3>

              </div>

              <div className="rounded-2xl bg-white/10 p-5">

                <p className="text-sm text-blue-100">
                  Opportunities
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  124
                </h3>

              </div>

            </div>

            {/* Activity */}

            <div className="mt-8 rounded-2xl bg-white/10 p-5">

              <div className="mb-4 flex items-center justify-between">

                <span className="font-semibold">
                  Recent Activity
                </span>

                <span className="text-sm text-green-200">
                  Live
                </span>

              </div>

              <div className="space-y-3">

                <div className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                  <span>New Lead Added</span>
                  <span className="text-green-300">
                    +1
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                  <span>Deal Closed</span>
                  <span className="text-green-300">
                    $12K
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-white/10 p-3">
                  <span>Email Campaign</span>
                  <span className="text-cyan-200">
                    Sent
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}