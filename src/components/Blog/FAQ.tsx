"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function FAQ({
  faqs,
}: Props) {
  const [active, setActive] =
    useState<number | null>(0);

  return (
    <section className="mt-24">

      <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Common Questions
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Everything you need to know about this topic.
          </p>

        </div>

        <div className="mt-12 space-y-5">

          {faqs.map(
            (faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-gray-200 transition hover:border-blue-500"
              >

                <button
                  onClick={() =>
                    setActive(
                      active === index
                        ? null
                        : index
                    )
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >

                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${
                      active === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-7 pb-7 leading-8 text-gray-600">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}