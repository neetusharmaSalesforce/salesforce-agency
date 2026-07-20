import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("lwc-development");

export default function LWCDevelopmentPage() {
  return <ServiceTemplate slug="lwc-development" />;
}
