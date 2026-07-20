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
        <div className="mb-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10">

  <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

    <div>

      <h2 className="text-4xl font-bold">
        Ready to Transform Your Business?
      </h2>

      <p className="mt-3 max-w-2xl text-blue-100">
        Let's build a powerful Salesforce solution tailored to your business goals.
      </p>

    </div>

    <Link
      href="/contact"
      className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105"
    >
      Book Free Consultation
    </Link>

  </div>

</div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div>
            <Link href="/">
              <h2 className="cursor-pointer bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                SF Agency
              </h2>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
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
                <Link href="/services" className="transition-all duration-300 hover:translate-x-1 hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/industries" className="transition-all duration-300 hover:translate-x-1 hover:text-white">
                  Industries
                </Link>
              </li>

              <li>
                <Link href="/case-studies" className="transition-all duration-300 hover:translate-x-1 hover:text-white">
                  Case Studies
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition-all duration-300 hover:translate-x-1 hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition-all duration-300 hover:translate-x-1 hover:text-white">
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
                  className="transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Sales Cloud
                </Link>
              </li>

              <li>
                <Link
                  href="/services/service-cloud"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Service Cloud
                </Link>
              </li>

              <li>
                <Link
                  href="/services/crm-consulting"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  CRM Consulting
                </Link>
              </li>

              <li>
                <Link
                  href="/services/integration"
                  className="transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}

<div>
  <h3 className="mb-6 text-lg font-semibold">
    Resources
  </h3>

  <ul className="space-y-3 text-gray-400">

    <li>
      <Link
        href="/blog"
        className="transition-all duration-300 hover:translate-x-1 hover:text-white"
      >
        Blog
      </Link>
    </li>

    <li>
      <Link
        href="/faq"
        className="transition-all duration-300 hover:translate-x-1 hover:text-white"
      >
        FAQ
      </Link>
    </li>

    <li>
      <Link
        href="/privacy-policy"
        className="transition-all duration-300 hover:translate-x-1 hover:text-white"
      >
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link
        href="/terms-of-service"
        className="transition-all duration-300 hover:translate-x-1 hover:text-white"
      >
        Terms of Service
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
        <div className="mt-20 border-t border-gray-800 pt-10">

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">

            <Link
              href="/privacy-policy"
              className="transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookie-policy"
              className="transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center gap-5">

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaGithub size={18} />
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-sm tracking-wide text-gray-500">
            © {new Date().getFullYear()} SF Agency. All Rights Reserved.
          </div>

        </div>
      </Container>
      
    </footer>
  );
}