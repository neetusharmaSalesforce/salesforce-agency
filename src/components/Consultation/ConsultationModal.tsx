"use client";

import { useEffect } from "react";
import ConsultationForm from "./ConsultationForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ConsultationModal({
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/60"
      onClick={onClose}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <ConsultationForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}