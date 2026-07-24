import calculateReadingTime from "@/lib/calculateReadingTime";

export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface Blog {
  id: number;
  slug: string;

  title: string;
  excerpt: string;
  content: string;

  featuredImage: string;

  category: string;
  tags: string[];

  author: BlogAuthor;

  publishedAt: string;
  updatedAt: string;

  readingTime: string;
  wordCount: number;

  featured: boolean;

  seoTitle: string;
  seoDescription: string;

  faqs: BlogFAQ[];
}

const salesCloudContent = `
Salesforce Sales Cloud is one of the most powerful CRM platforms for sales teams.

It enables businesses to manage leads, opportunities, accounts and customer relationships from a single platform.

Key Features:

• Lead Management
• Opportunity Tracking
• Sales Forecasting
• Reports & Dashboards
• Workflow Automation

Benefits:

• Increased Productivity
• Better Customer Insights
• Faster Sales Cycle
• Higher Revenue

Sales Cloud is suitable for startups, SMEs and enterprise businesses looking to improve their sales performance.
`;

const serviceCloudContent = `
Salesforce Service Cloud enables companies to provide fast and personalized customer support.

Using Case Management, Knowledge Base and Omni-Channel Routing, businesses can improve customer satisfaction.

Core Features:

• Case Management
• Live Chat
• Omni-Channel
• Knowledge Base
• Service Console

It is widely used by support teams around the world.
`;

const crmBenefitsContent = `
Salesforce CRM helps businesses centralize customer information, automate business processes and improve productivity.

Major Benefits:

• Better Customer Relationships
• Sales Automation
• Marketing Automation
• Better Reporting
• Increased ROI

Salesforce continues to be the world's #1 CRM platform.
`;

export const blogs: Blog[] = [
  {
    id: 1,

    slug: "salesforce-sales-cloud-guide",

    title: "Complete Guide to Salesforce Sales Cloud",

    excerpt:
      "Learn how Salesforce Sales Cloud helps businesses automate sales, manage leads and close deals faster.",

    content: salesCloudContent,

    featuredImage: "/images/blogs/sales-cloud.jpg",

    category: "Salesforce",

    tags: [
      "Salesforce",
      "Sales Cloud",
      "CRM",
      "Lead Management",
      "Automation",
    ],

    author: {
      name: "SF Agency Team",
      role: "Salesforce Consultants",
      image: "/images/team/author.jpg",
    },

    publishedAt: "10 July 2026",

    updatedAt: "15 July 2026",

    readingTime: calculateReadingTime(
      salesCloudContent
    ),

    wordCount:
      salesCloudContent
        .trim()
        .split(/\s+/).length,

    featured: true,

    seoTitle:
      "Complete Guide to Salesforce Sales Cloud | SF Agency",

    seoDescription:
      "Learn everything about Salesforce Sales Cloud, its features, benefits and implementation process.",

    faqs: [
      {
        question:
          "What is Salesforce Sales Cloud?",
        answer:
          "Salesforce Sales Cloud is a CRM platform that helps businesses manage leads, opportunities, accounts and sales processes from a single system.",
      },
      {
        question:
          "Who should use Sales Cloud?",
        answer:
          "Sales Cloud is ideal for startups, SMEs and enterprise organizations looking to improve sales productivity and customer relationship management.",
      },
      {
        question:
          "What are the key features of Sales Cloud?",
        answer:
          "Lead Management, Opportunity Tracking, Sales Forecasting, Workflow Automation and Reports & Dashboards are some of the core features.",
      },
      {
        question:
          "Does Sales Cloud improve productivity?",
        answer:
          "Yes. It automates repetitive tasks, centralizes customer information and helps sales teams close deals faster.",
      },
    ],
  },
    {
    id: 2,

    slug: "what-is-service-cloud",

    title: "What is Salesforce Service Cloud?",

    excerpt:
      "Discover how Service Cloud helps businesses deliver exceptional customer support.",

    content: serviceCloudContent,

    featuredImage: "/images/blogs/service-cloud.jpg",

    category: "Salesforce",

    tags: [
      "Service Cloud",
      "Customer Support",
      "Salesforce",
    ],

    author: {
      name: "SF Agency Team",
      role: "Salesforce Consultants",
      image: "/images/team/author.jpg",
    },

    publishedAt: "18 July 2026",

    updatedAt: "20 July 2026",

    readingTime: calculateReadingTime(
      serviceCloudContent
    ),

    wordCount:
      serviceCloudContent
        .trim()
        .split(/\s+/).length,

    featured: false,

    seoTitle:
      "What is Salesforce Service Cloud? | SF Agency",

    seoDescription:
      "Everything you need to know about Salesforce Service Cloud and customer service automation.",

    faqs: [
      {
        question:
          "What is Salesforce Service Cloud?",
        answer:
          "Service Cloud is Salesforce's customer support platform that helps businesses manage customer cases and deliver exceptional service experiences.",
      },
      {
        question:
          "What is Case Management?",
        answer:
          "Case Management enables support teams to track, prioritize and resolve customer issues efficiently from a single console.",
      },
      {
        question:
          "What is Omni-Channel Routing?",
        answer:
          "Omni-Channel automatically routes customer requests to the most appropriate support agent based on availability and skills.",
      },
      {
        question:
          "Who uses Service Cloud?",
        answer:
          "Customer support teams, call centers and service organizations across multiple industries use Salesforce Service Cloud.",
      },
    ],
  },

  {
    id: 3,

    slug: "benefits-of-salesforce-crm",

    title: "Top Benefits of Salesforce CRM",

    excerpt:
      "Explore why Salesforce CRM is trusted by businesses worldwide for digital transformation.",

    content: crmBenefitsContent,

    featuredImage: "/images/blogs/salesforce-crm.jpg",

    category: "CRM",

    tags: [
      "CRM",
      "Salesforce",
      "Business Growth",
    ],

    author: {
      name: "SF Agency Team",
      role: "Salesforce Consultants",
      image: "/images/team/author.jpg",
    },

    publishedAt: "25 July 2026",

    updatedAt: "28 July 2026",

    readingTime: calculateReadingTime(
      crmBenefitsContent
    ),

    wordCount:
      crmBenefitsContent
        .trim()
        .split(/\s+/).length,

    featured: false,

    seoTitle:
      "Top Benefits of Salesforce CRM | SF Agency",

    seoDescription:
      "Discover the biggest advantages of Salesforce CRM for businesses of all sizes.",

    faqs: [
      {
        question:
          "Why is Salesforce CRM popular?",
        answer:
          "Salesforce is a cloud-based CRM platform that provides automation, reporting, AI-powered insights and scalability for businesses of every size.",
      },
      {
        question:
          "Can Salesforce increase sales?",
        answer:
          "Yes. Salesforce improves lead management, sales forecasting, customer engagement and overall sales productivity.",
      },
      {
        question:
          "Is Salesforce suitable for small businesses?",
        answer:
          "Yes. Salesforce offers flexible solutions that work for startups, small businesses, mid-sized companies and large enterprises.",
      },
      {
        question:
          "What are the biggest benefits of Salesforce CRM?",
        answer:
          "Improved customer relationships, workflow automation, better reporting, increased collaboration and higher ROI are among the biggest benefits.",
      },
    ],
  },
];