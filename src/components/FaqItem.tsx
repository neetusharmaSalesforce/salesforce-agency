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
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">
          {question}
        </h3>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 px-6 pb-6" : "max-h-0"
        }`}
      >
        <p className="leading-7 text-gray-600">
          {answer}
        </p>
      </div>
    </div>
  );
}