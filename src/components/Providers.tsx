"use client";

import { ReactNode } from "react";
import { ConsultationProvider } from "./Consultation/ConsultationContext";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ConsultationProvider>
      {children}
    </ConsultationProvider>
  );
}