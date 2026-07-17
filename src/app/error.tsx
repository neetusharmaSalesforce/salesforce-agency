"use client";

import { useEffect } from "react";
import Button from "@/components/Button";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6">

      {/* Background */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative z-10 max-w-2xl rounded-3xl border border-gray-200 bg-white/90 p-12 text-center shadow-2xl backdrop-blur">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-5xl">
          ⚠️
        </div>

        <h1 className="mt-8 text-5xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We encountered an unexpected error while loading this page.
          Please try again. If the problem continues, return to the homepage.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Button onClick={() => reset()}>
            Try Again
          </Button>

          <Button
            variant="secondary"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>

        </div>

      </div>
    </div>
  );
}