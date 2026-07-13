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
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
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
  setErrors({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
});

if (form.name.trim().length < 3) {
  setErrors((prev) => ({
    ...prev,
    name: "Name must be at least 3 characters.",
  }));
  return;
}

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^[0-9]{10}$/;

if (!emailRegex.test(form.email)) {
  setErrors((prev) => ({
    ...prev,
    email: "Please enter a valid email.",
  }));
  return;
}

if (!phoneRegex.test(form.phone.replace(/\D/g, "").slice(-10))) {
  setErrors((prev) => ({
    ...prev,
    phone: "Please enter a valid 10-digit phone number.",
  }));
  return;
}

if (!form.service) {
  setErrors((prev) => ({
    ...prev,
    service: "Please select a service.",
  }));
  return;
}

if (form.message.trim().length < 20) {
  setErrors((prev) => ({
    ...prev,
    message: "Message should be at least 20 characters.",
  }));
  return;
}

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
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
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
const [errors, setErrors] = useState({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
});
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
              noValidate
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
                {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name}
                </p>
              )}
              </div>
 
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="ABC Pvt. Ltd."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />

            {errors.company && (
              <p className="mt-2 text-sm text-red-600">
                {errors.company}
              </p>
            )}
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
                {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
              </div>

              <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>

            

            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Service Interested In
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                >
                  <option value="">Select a Service</option>

                  <option value="Sales Cloud">Sales Cloud</option>

                  <option value="Service Cloud">Service Cloud</option>

                  <option value="Marketing Cloud">Marketing Cloud</option>

                  <option value="Salesforce Development">
                    Salesforce Development
                  </option>

                  <option value="CRM Integration">
                    CRM Integration
                  </option>

                  <option value="Managed Support">
                    Managed Support
                  </option>
                </select>

                {errors.service && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Project Budget
              </label>

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
                >
                  <option value="">Select Budget</option>

                  <option value="$1K-$5K">$1K - $5K</option>

                  <option value="$5K-$10K">$5K - $10K</option>

                  <option value="$10K-$25K">$10K - $25K</option>

                  <option value="$25K+">$25K+</option>

                  <option value="Let's Discuss">
                    Let's Discuss
                  </option>
                </select>

                {errors.budget && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.budget}
                  </p>
                )}
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
                {errors.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
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