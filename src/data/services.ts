import {
  Cloud,
  Settings,
  Workflow,
  Database,
  ShieldCheck,
  Headphones,
  LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "sales-cloud",
    title: "Sales Cloud",
    description:
      "Automate your sales process, manage leads and close deals faster with Salesforce Sales Cloud.",
    icon: Cloud,
    features: [
      "Lead Management",
      "Opportunity Management",
      "Sales Forecasting",
      "Reports & Dashboards",
      "Workflow Automation",
      "Email Integration",
    ],
  },
  {
    slug: "service-cloud",
    title: "Service Cloud",
    description:
      "Deliver exceptional customer support with omnichannel service and case management.",
    icon: Headphones,
    features: [
      "Case Management",
      "Knowledge Base",
      "Live Chat",
      "Omni-Channel Routing",
      "Customer Portal",
      "Service Console",
    ],
  },
  {
    slug: "marketing-cloud",
    title: "Marketing Cloud",
    description:
      "Create personalized marketing campaigns using Salesforce Marketing Cloud.",
    icon: Workflow,
    features: [
      "Email Marketing",
      "Customer Journeys",
      "SMS Campaigns",
      "Audience Segmentation",
      "Marketing Automation",
      "Analytics",
    ],
  },
  {
    slug: "salesforce-development",
    title: "Salesforce Development",
    description:
      "Build custom Apex, LWC and Visualforce solutions tailored to your business.",
    icon: Settings,
    features: [
      "Apex Development",
      "Lightning Web Components",
      "Visualforce",
      "REST API",
      "Custom Objects",
      "Automation",
    ],
  },
  {
    slug: "crm-integration",
    title: "CRM Integration",
    description:
      "Integrate Salesforce with ERP, payment gateways and third-party applications.",
    icon: Database,
    features: [
      "ERP Integration",
      "SAP Integration",
      "Payment Gateway Integration",
      "REST API Integration",
      "SOAP API Integration",
      "Third-party Applications",
    ],
  },
  {
    slug: "managed-support",
    title: "Managed Support",
    description:
      "Ongoing Salesforce maintenance, optimization and technical support for your business.",
    icon: ShieldCheck,
    features: [
      "24/7 Support",
      "Bug Fixes",
      "Performance Optimization",
      "Admin Support",
      "User Training",
      "Release Management",
    ],
  },
];