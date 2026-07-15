import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-20 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Link href="/">
              <h2 className="cursor-pointer text-3xl font-bold text-blue-400">
                SF Agency
              </h2>
            </Link>

            <p className="mt-6 leading-7 text-gray-400">
              We help businesses implement, customize and optimize
              Salesforce CRM solutions for long-term growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/industries"
                  className="transition hover:text-white"
                >
                  Industries
                </Link>
              </li>

              <li>
                <Link
                  href="/case-studies"
                  className="transition hover:text-white"
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/services/sales-cloud"
                  className="transition hover:text-white"
                >
                  Sales Cloud
                </Link>
              </li>

              <li>
                <Link
                  href="/services/service-cloud"
                  className="transition hover:text-white"
                >
                  Service Cloud
                </Link>
              </li>

              <li>
                <Link
                  href="/services/crm-consulting"
                  className="transition hover:text-white"
                >
                  CRM Consulting
                </Link>
              </li>

              <li>
                <Link
                  href="/services/integration"
                  className="transition hover:text-white"
                >
                  Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📧 hello@sfagency.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Jaipur, Rajasthan, India</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500">
          © 2026 SF Agency. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}