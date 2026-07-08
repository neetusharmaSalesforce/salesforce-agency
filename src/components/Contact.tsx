"use client";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ContactCard from "./ContactCard";
import Button from "./Button";
import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});
const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSuccess("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    setError("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");
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

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              <Button type = "submit">
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {success && (
                <p className="text-sm font-medium text-green-600">
                  {success}
                </p>
              )}

              {error && (
                <p className="text-sm font-medium text-red-600">
                  {error}
                </p>
              )}
            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}