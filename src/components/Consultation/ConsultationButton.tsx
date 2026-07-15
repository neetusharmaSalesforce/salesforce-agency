"use client";

import Button from "../Button";
import { useConsultation } from "./ConsultationContext";

type Props = {
  children?: React.ReactNode;
};

export default function ConsultationButton({
  children = "Book Free Consultation",
}: Props) {
  const { openModal } = useConsultation();

  return (
    <Button onClick={openModal}>
      {children}
    </Button>
  );
}