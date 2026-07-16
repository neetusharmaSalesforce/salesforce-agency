import ServiceTemplate from "@/components/ServiceTemplate";
import { generateServiceMetadata } from "@/lib/metadata";

export const metadata =
  generateServiceMetadata("experience-cloud");

export default function ExperienceCloudPage() {
  return <ServiceTemplate slug="experience-cloud" />;
}