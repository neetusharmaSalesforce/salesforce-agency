import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ContactCard from "./ContactCard";
import Button from "./Button";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
      <Container>

        <SectionHeading
          subtitle="CONTACT"
          title="Let's Build Something Great Together"
          description="Talk to our Salesforce experts about your business goals and discover how we can help."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-6">

            <ContactCard
              title="Email"
              value="hello@sfagency.com"
              icon={Mail}
            />

            <ContactCard
              title="Phone"
              value="+91 98765 43210"
              icon={Phone}
            />

            <ContactCard
              title="Office"
              value="Jaipur, Rajasthan, India"
              icon={MapPin}
            />

          </div>

          {/* Right Side */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">

            <div className="space-y-6">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <Button>
                Send Message
              </Button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}