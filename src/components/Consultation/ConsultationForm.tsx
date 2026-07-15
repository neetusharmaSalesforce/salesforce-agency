"use client";

import { useState } from "react";
import Button from "../Button";

type Props = {
  onClose: () => void;
};

export default function ConsultationForm({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
     const nameRegex = /^[A-Za-z ]{3,50}$/;

if (!nameRegex.test(form.name.trim())) {
  setErrorMessage(
    "Please enter a valid full name (letters only)."
  );
  return;
}

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(form.email.trim())) {
  setErrorMessage(
    "Please enter a valid email address."
  );
  return;
}
    setLoading(true);
    setSuccess("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSuccess(
        "✅ Consultation booked successfully! We will contact you shortly."
      );

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        requirement: "",
      });

      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      setErrorMessage(
        "❌ Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900">
        Book Free Consultation
      </h2>

      <p className="mt-2 text-gray-600">
        Tell us about your project and we'll contact you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
        autoComplete="on"
      >
        {success && (
          <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
            {success}
          </div>
        )}

        {errorMessage && (
          <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-red-700">
            {errorMessage}
          </div>
        )}

        <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        autoComplete="name"
        minLength={3}
        maxLength={50}
        pattern="[A-Za-z ]+"
        title="Name should contain only letters and spaces."
        className="w-full rounded-xl border border-gray-300 p-3"
        required
      />

        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3"
           autoComplete="organization"
        />

       <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        autoComplete="email"
        maxLength={100}
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Please enter a valid email address."
        className="w-full rounded-xl border border-gray-300 p-3"
        required
      />

        <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        pattern="[0-9]{10}"
        maxLength={10}
        className="w-full rounded-xl border border-gray-300 p-3"
        required
      />
        <div className="grid gap-4 md:grid-cols-2">
          <input
          type="date"
          name="date"
          min={new Date().toISOString().split("T")[0]}
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3"
          />
        </div>

        <textarea
          rows={5}
          name="requirement"
          placeholder="Project Requirement"
          value={form.requirement}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3"
        />

        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Booking..." : "Book Consultation"}
          </Button>

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}