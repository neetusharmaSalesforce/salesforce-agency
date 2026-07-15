"use client";

import { useState } from "react";
import Container from "./Container";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FAQ[];
};

export default function ServiceFAQ({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20">
      <Container>

        <div className="mx-auto max-w-4xl">

          <h2 className="text-center text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200"
              >
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left font-semibold"
                >
                  {faq.question}

                  <span>
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                {open === index && (
                  <div className="border-t border-gray-200 px-6 py-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}