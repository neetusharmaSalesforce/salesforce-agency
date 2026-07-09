import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-20 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              SF Agency
            </h2>

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
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Sales Cloud</li>
              <li>Service Cloud</li>
              <li>CRM Consulting</li>
              <li>Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>hello@sfagency.com</li>
              <li>+91 98765 43210</li>
              <li>Jaipur, Rajasthan</li>
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