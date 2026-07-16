import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("sales-cloud");

export default function SalesCloudPage() {
  return <ServiceTemplate slug="sales-cloud" />;
}