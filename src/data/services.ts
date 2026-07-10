import {
  Cloud,
  Settings,
  Workflow,
  Database,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export const services = [
  {
    slug: "sales-cloud",
    title: "Sales Cloud",
    description:
      "Automate your sales process, manage leads and close deals faster with Salesforce Sales Cloud.",
    icon: Cloud,
  },
  {
    slug: "service-cloud",
    title: "Service Cloud",
    description:
      "Deliver exceptional customer support with omnichannel service and case management.",
    icon: Headphones,
  },
  {
    slug: "marketing-cloud",
    title: "Marketing Cloud",
    description:
      "Create personalized marketing campaigns using Salesforce Marketing Cloud.",
    icon: Workflow,
  },
  {
    slug: "salesforce-development",
    title: "Salesforce Development",
    description:
      "Build custom Apex, LWC and Visualforce solutions tailored to your business.",
    icon: Settings,
  },
  {
    slug: "crm-integration",
    title: "CRM Integration",
    description:
      "Integrate Salesforce with ERP, payment gateways and third-party applications.",
    icon: Database,
  },
  {
    slug: "managed-support",
    title: "Managed Support",
    description:
      "Ongoing Salesforce maintenance, optimization and technical support for your business.",
    icon: ShieldCheck,
  },
];