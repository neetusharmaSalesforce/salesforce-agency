import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-20 text-white">
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
              SF Agency is a trusted Salesforce consulting company helping
              businesses implement, customize, integrate and optimize
              Salesforce CRM for faster growth and better customer experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/industries" className="transition hover:text-white">
                  Industries
                </Link>
              </li>

              <li>
                <Link href="/case-studies" className="transition hover:text-white">
                  Case Studies
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
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

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-8">

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">

            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookie-policy"
              className="transition hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-5">

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-blue-600"
            >
              <FaGithub size={18} />
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} SF Agency. All Rights Reserved.
          </div>

        </div>
      </Container>
    </footer>
  );
}