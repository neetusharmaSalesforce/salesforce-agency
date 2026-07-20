import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("service-cloud");

export default function ServiceCloudPage() {
  return <ServiceTemplate slug="service-cloud" />;
}