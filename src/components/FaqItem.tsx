"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({
  question,
  answer,
}: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-500 hover:shadow-xl ${
        open
          ? "border-blue-500 shadow-lg"
          : "border-gray-200 hover:border-blue-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-7 text-left"
      >
        <h3
          className={`pr-6 text-xl font-semibold transition-colors duration-300 ${
            open ? "text-blue-600" : "text-gray-900"
          }`}
        >
          {question}
        </h3>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
            open
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600"
          }`}
        >
          <ChevronDown
            size={22}
            className={`transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-gray-100 px-7 pb-7 pt-5">
            <p className="leading-8 text-gray-600">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}