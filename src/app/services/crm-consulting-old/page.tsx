import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("crm-integration");

export default function CRMIntegrationPage() {
  return <ServiceTemplate slug="crm-integration" />;
}