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

      alert("✅ Consultation booked successfully!");

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        requirement: "",
      });

      onClose();
    } catch (error) {
      alert("❌ Something went wrong.");
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

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3"
          required
        />

        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 p-3"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="rounded-xl border border-gray-300 p-3"
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
          <Button type="submit">
            Book Consultation
          </Button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}