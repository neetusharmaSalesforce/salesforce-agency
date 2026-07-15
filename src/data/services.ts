import {
  Briefcase,
  Cloud,
  Database,
  Headphones,
  Layers,
  Settings,
  ShieldCheck,
  Workflow,
  LucideIcon,
} from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;

  heroTitle?: string;
  heroDescription?: string;

  overview?: string;

  features: string[];

  benefits?: string[];

  process?: string[];

  faqs?: FAQ[];
}

export const services: Service[] = [
  {
    slug: "sales-cloud",
    title: "Sales Cloud",
    description:
      "Automate your sales process, manage leads and close deals faster with Salesforce Sales Cloud.",
    icon: Cloud,

    heroTitle: "Sales Cloud Consulting & Implementation",

    heroDescription:
      "Increase sales productivity, automate lead management and close more deals with Salesforce Sales Cloud.",

    overview:
      "We help businesses implement and customize Salesforce Sales Cloud to improve productivity, visibility and revenue growth.",

    features: [
      "Lead Management",
      "Opportunity Management",
      "Sales Forecasting",
      "Workflow Automation",
      "Reports & Dashboards",
      "Email Integration",
    ],

    benefits: [
      "Increase Sales Productivity",
      "Automate Manual Tasks",
      "Improve Forecast Accuracy",
      "Better Customer Insights",
    ],

    process: [
      "Requirement Analysis",
      "Solution Design",
      "Sales Cloud Configuration",
      "Customization",
      "Testing",
      "Go Live & Support",
    ],

    faqs: [
      {
        question: "What is Salesforce Sales Cloud?",
        answer:
          "Sales Cloud is Salesforce's CRM platform for managing leads, opportunities, accounts and the complete sales lifecycle.",
      },
    ],
  },

  {
    slug: "service-cloud",
    title: "Service Cloud",
    description:
      "Deliver exceptional customer support with omnichannel service and case management.",
    icon: Headphones,

    heroTitle: "Salesforce Service Cloud Solutions",

    heroDescription:
      "Deliver world-class customer support using Salesforce Service Cloud.",

    overview:
      "Service Cloud helps businesses manage customer cases, knowledge base, live chat and omnichannel support.",

    features: [
      "Case Management",
      "Knowledge Base",
      "Live Chat",
      "Omni-Channel Routing",
      "Customer Portal",
      "Service Console",
    ],

    benefits: [
      "Faster Resolution",
      "Higher Customer Satisfaction",
      "Reduced Support Cost",
      "Centralized Customer Data",
    ],

    process: [
      "Discovery",
      "Configuration",
      "Automation",
      "Testing",
      "Deployment",
      "Training",
    ],

    faqs: [
      {
        question: "What is Service Cloud?",
        answer:
          "Service Cloud helps businesses provide faster and smarter customer support.",
      },
    ],
  },

  {
    slug: "experience-cloud",
    title: "Experience Cloud",
    description:
      "Build secure customer, partner and employee portals using Salesforce Experience Cloud.",
    icon: Layers,

    heroTitle: "Salesforce Experience Cloud Development",

    heroDescription:
      "Create engaging customer and partner experiences with Experience Cloud.",

    overview:
      "We develop secure self-service portals and digital communities using Salesforce Experience Cloud.",

    features: [
      "Partner Portal",
      "Customer Portal",
      "Employee Portal",
      "Community Branding",
      "Knowledge Integration",
      "User Management",
    ],

    benefits: [
      "Improve Collaboration",
      "Self-Service Support",
      "Secure Portal Access",
      "Better Customer Experience",
    ],

    process: [
      "Planning",
      "Portal Design",
      "Development",
      "Testing",
      "Deployment",
      "Optimization",
    ],

    faqs: [
      {
        question: "What is Experience Cloud?",
        answer:
          "Experience Cloud allows organizations to build customer, partner and employee portals on Salesforce.",
      },
    ],
  },

  {
    slug: "apex-development",
    title: "Apex Development",
    description:
      "Custom Apex classes, triggers and scalable backend development for Salesforce.",

    icon: Settings,

    heroTitle: "Custom Apex Development Services",

    heroDescription:
      "Develop scalable Apex solutions tailored to your business requirements.",

    overview:
      "Our certified Salesforce developers build custom Apex classes, triggers, schedulers and batch jobs.",

    features: [
      "Apex Classes",
      "Apex Triggers",
      "Batch Apex",
      "Queueable Apex",
      "REST APIs",
      "Business Logic",
    ],

    benefits: [
      "Scalable Code",
      "Improved Performance",
      "Reusable Architecture",
      "Enterprise Security",
    ],

    process: [
      "Requirement Gathering",
      "Development",
      "Code Review",
      "Testing",
      "Deployment",
      "Support",
    ],

    faqs: [
      {
        question: "Why use Apex?",
        answer:
          "Apex allows developers to implement custom business logic inside Salesforce.",
      },
    ],
  },

  {
    slug: "lwc-development",
    title: "Lightning Web Components",

    description:
      "Build modern and responsive Salesforce user interfaces using Lightning Web Components.",

    icon: Workflow,

    heroTitle: "Lightning Web Components Development",

    heroDescription:
      "Create fast, reusable and modern Salesforce UI using Lightning Web Components.",

    overview:
      "We develop enterprise-grade Lightning Web Components following Salesforce best practices.",

    features: [
      "Responsive UI",
      "Reusable Components",
      "Apex Integration",
      "Lightning Design System",
      "Charts & Dashboards",
      "Custom Forms",
    ],

    benefits: [
      "Modern UI",
      "Better Performance",
      "Reusable Components",
      "Easy Maintenance",
    ],

    process: [
      "UI Design",
      "Development",
      "Integration",
      "Testing",
      "Deployment",
      "Support",
    ],

    faqs: [
      {
        question: "Why use Lightning Web Components?",
        answer:
          "LWC provides a modern framework for building fast, reusable and secure Salesforce applications.",
      },
    ],
  },

  {
    slug: "crm-consulting",
    title: "CRM Consulting",

    description:
      "Transform your business with expert Salesforce CRM consulting services.",

    icon: Briefcase,

    heroTitle: "Salesforce CRM Consulting",

    heroDescription:
      "Strategic Salesforce consulting to maximize your CRM investment.",

    overview:
      "We analyze business processes and design Salesforce solutions that improve efficiency and growth.",

    features: [
      "CRM Strategy",
      "Business Analysis",
      "Implementation Planning",
      "Salesforce Audit",
      "Optimization",
      "User Adoption",
    ],

    benefits: [
      "Higher ROI",
      "Improved Productivity",
      "Better CRM Adoption",
      "Business Growth",
    ],

    process: [
      "Business Discovery",
      "Gap Analysis",
      "Roadmap",
      "Implementation",
      "Training",
      "Continuous Improvement",
    ],

    faqs: [
      {
        question: "Do I need Salesforce consulting?",
        answer:
          "Yes. A consulting partner helps you implement Salesforce correctly and maximize ROI.",
      },
    ],
  },

  {
    slug: "integration",
    title: "Salesforce Integration",

    description:
      "Integrate Salesforce with ERP, payment gateways and third-party applications.",

    icon: Database,

    heroTitle: "Salesforce Integration Services",

    heroDescription:
      "Connect Salesforce with your existing business systems.",

    overview:
      "We integrate Salesforce with ERP, accounting software, payment gateways and external APIs.",

    features: [
      "REST API",
      "SOAP API",
      "ERP Integration",
      "SAP Integration",
      "Payment Gateway",
      "Third-party Apps",
    ],

    benefits: [
      "Centralized Data",
      "Automation",
      "Real-time Sync",
      "Reduced Manual Work",
    ],

    process: [
      "Integration Planning",
      "API Development",
      "Testing",
      "Deployment",
      "Monitoring",
      "Support",
    ],

    faqs: [
      {
        question: "Can Salesforce integrate with ERP?",
        answer:
          "Yes. Salesforce can integrate with ERP, SAP, Oracle and many third-party applications.",
      },
    ],
  },

  {
    slug: "managed-support",
    title: "Managed Support",

    description:
      "Ongoing Salesforce maintenance, optimization and technical support.",

    icon: ShieldCheck,

    heroTitle: "Managed Salesforce Support",

    heroDescription:
      "Reliable Salesforce administration and long-term support services.",

    overview:
      "We provide continuous Salesforce support, enhancements and administration for growing businesses.",

    features: [
      "24/7 Support",
      "Bug Fixes",
      "Performance Optimization",
      "Admin Support",
      "Release Management",
      "User Training",
    ],

    benefits: [
      "Reduced Downtime",
      "Expert Support",
      "Continuous Improvement",
      "Long-term Partnership",
    ],

    process: [
      "Health Check",
      "Issue Analysis",
      "Resolution",
      "Monitoring",
      "Optimization",
      "Reporting",
    ],

    faqs: [
      {
        question: "Do you provide monthly Salesforce support?",
        answer:
          "Yes. We provide flexible managed support plans based on your business requirements.",
      },
    ],
  },
];