import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("managed-support");

export default function ManagedSupportPage() {
  return <ServiceTemplate slug="managed-support" />;
}