export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
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
  readingTime: string;

  featured: boolean;

  seoTitle: string;
  seoDescription: string;
}

export const blogs: Blog[] = [
  {
    id: 1,

    slug: "salesforce-sales-cloud-guide",

    title: "Complete Guide to Salesforce Sales Cloud",

    excerpt:
      "Learn how Salesforce Sales Cloud helps businesses automate sales, manage leads and close deals faster.",

    content: `
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
`,

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

    readingTime: "6 min read",

    featured: true,

    seoTitle: "Complete Guide to Salesforce Sales Cloud | SF Agency",

    seoDescription:
      "Learn everything about Salesforce Sales Cloud, its features, benefits and implementation process.",
  },

  {
    id: 2,

    slug: "what-is-service-cloud",

    title: "What is Salesforce Service Cloud?",

    excerpt:
      "Discover how Service Cloud helps businesses deliver exceptional customer support.",

    content: `
Salesforce Service Cloud enables companies to provide fast and personalized customer support.

Using Case Management, Knowledge Base and Omni-Channel Routing, businesses can improve customer satisfaction.

Core Features:

• Case Management
• Live Chat
• Omni-Channel
• Knowledge Base
• Service Console

It is widely used by support teams around the world.
`,

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

    readingTime: "5 min read",

    featured: false,

    seoTitle: "What is Salesforce Service Cloud? | SF Agency",

    seoDescription:
      "Everything you need to know about Salesforce Service Cloud and customer service automation.",
  },

  {
    id: 3,

    slug: "benefits-of-salesforce-crm",

    title: "Top Benefits of Salesforce CRM",

    excerpt:
      "Explore why Salesforce CRM is trusted by businesses worldwide for digital transformation.",

    content: `
Salesforce CRM helps businesses centralize customer information, automate business processes and improve productivity.

Major Benefits:

• Better Customer Relationships
• Sales Automation
• Marketing Automation
• Better Reporting
• Increased ROI

Salesforce continues to be the world's #1 CRM platform.
`,

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

    readingTime: "7 min read",

    featured: false,

    seoTitle: "Top Benefits of Salesforce CRM | SF Agency",

    seoDescription:
      "Discover the biggest advantages of Salesforce CRM for businesses of all sizes.",
  },
];