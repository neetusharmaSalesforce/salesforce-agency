"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[999] w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">

      <h3 className="text-lg font-semibold text-gray-900">
        🍪 We use cookies
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        We use cookies to improve your experience, analyze traffic and
        personalize content. Read our{" "}
        <Link
          href="/cookie-policy"
          className="font-medium text-blue-600 hover:underline"
        >
          Cookie Policy
        </Link>.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">

        <button
          onClick={acceptCookies}
          className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Accept All
        </button>

        <button
          onClick={rejectCookies}
          className="rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Reject
        </button>

      </div>

    </div>
  );
}