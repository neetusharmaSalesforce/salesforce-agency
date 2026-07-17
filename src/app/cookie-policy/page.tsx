import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

import { generatePageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Cookie Policy",
  description:
    "Learn how SF Agency uses cookies to improve website performance and user experience.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">

            <h1 className="text-5xl font-bold text-gray-900">
              Cookie Policy
            </h1>

            <p className="mt-6 text-gray-600">
              Last Updated: January 2026
            </p>

            <div className="mt-10 space-y-8 leading-8 text-gray-700">

              <div>
                <h2 className="text-2xl font-semibold">
                  What Are Cookies?
                </h2>

                <p className="mt-3">
                  Cookies are small text files stored on your device to improve
                  website functionality and user experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  How We Use Cookies
                </h2>

                <p className="mt-3">
                  We use cookies to analyze website traffic, remember user
                  preferences and improve our Salesforce consulting website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  Managing Cookies
                </h2>

                <p className="mt-3">
                  You can control or disable cookies through your browser
                  settings. Some website features may not function correctly if
                  cookies are disabled.
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