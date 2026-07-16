import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("integration");

export default function IntegrationPage() {
  return <ServiceTemplate slug="integration" />;
}