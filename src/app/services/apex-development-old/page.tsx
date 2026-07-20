import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("apex-development");

export default function ApexDevelopmentPage() {
  return <ServiceTemplate slug="apex-development" />;
}