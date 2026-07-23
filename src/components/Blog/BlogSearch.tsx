"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function BlogSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="mx-auto mt-12 max-w-2xl">

      <div className="relative">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Salesforce articles..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-16 w-full rounded-2xl border border-gray-200 bg-white pl-14 pr-6 text-lg outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
        />

      </div>

    </div>
  );
}