import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

import { generatePageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Read the SF Agency Privacy Policy to understand how we collect, use and protect your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">

            <h1 className="text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>

            <p className="mt-6 text-gray-600">
              Last Updated: January 2026
            </p>

            <div className="mt-10 space-y-8 text-gray-700 leading-8">

              <div>
                <h2 className="text-2xl font-semibold">
                  Information We Collect
                </h2>

                <p className="mt-3">
                  We may collect information such as your name,
                  email address, phone number and company details
                  when you contact us or request Salesforce
                  consulting services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  How We Use Your Information
                </h2>

                <p className="mt-3">
                  Your information is used to respond to
                  inquiries, deliver consulting services,
                  improve our website and communicate with
                  you regarding our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Data Security
                </h2>

                <p className="mt-3">
                  We take appropriate technical and organizational
                  measures to protect your information from
                  unauthorized access.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Contact
                </h2>

                <p className="mt-3">
                  If you have any questions regarding this Privacy
                  Policy, please contact SF Agency.
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