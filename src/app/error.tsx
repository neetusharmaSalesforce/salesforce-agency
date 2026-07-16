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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl rounded-2xl bg-white p-10 text-center shadow-xl">

        <div className="mb-6 text-6xl">
          ⚠️
        </div>

        <h1 className="text-4xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-4 leading-7 text-gray-600">
          An unexpected error occurred while loading this page.
          Please try again or return to the homepage.
        </p>

        <div className="mt-8 flex justify-center gap-4">

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