"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import ConsultationModal from "./ConsultationModal";

type ConsultationContextType = {
  openModal: () => void;
};

const ConsultationContext =
  createContext<ConsultationContextType | null>(null);

export function ConsultationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ConsultationContext.Provider
      value={{
        openModal: () => setOpen(true),
      }}
    >
      {children}

      <ConsultationModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);

  if (!context) {
    throw new Error(
      "useConsultation must be used inside ConsultationProvider"
    );
  }

  return context;
}