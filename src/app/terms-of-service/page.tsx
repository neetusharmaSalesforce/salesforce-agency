import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

import { generatePageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "Read the SF Agency Terms of Service governing the use of our Salesforce consulting services and website.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">

            <h1 className="text-5xl font-bold text-gray-900">
              Terms of Service
            </h1>

            <p className="mt-6 text-gray-600">
              Last Updated: January 2026
            </p>

            <div className="mt-10 space-y-8 leading-8 text-gray-700">

              <div>
                <h2 className="text-2xl font-semibold">
                  Acceptance of Terms
                </h2>

                <p className="mt-3">
                  By using this website or engaging our Salesforce consulting
                  services, you agree to these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Services
                </h2>

                <p className="mt-3">
                  SF Agency provides Salesforce consulting, implementation,
                  customization, integration and support services based on
                  mutually agreed project requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Intellectual Property
                </h2>

                <p className="mt-3">
                  All website content, branding and materials are the property
                  of SF Agency unless otherwise stated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Limitation of Liability
                </h2>

                <p className="mt-3">
                  SF Agency shall not be liable for indirect or consequential
                  damages arising from the use of this website or our services,
                  except where required by law.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}