import { blogs } from "@/data/blogs";

const BASE_URL = "https://www.sfagency.com";

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>

<title>SF Agency Blog</title>

<link>${BASE_URL}</link>

<description>
Salesforce consulting, CRM implementation, automation, integrations and Salesforce best practices from SF Agency.
</description>

<language>en-us</language>

<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>

${blogs
  .map(
    (blog) => `
<item>

<title><![CDATA[${blog.title}]]></title>

<link>${BASE_URL}/blog/${blog.slug}</link>

<guid>${BASE_URL}/blog/${blog.slug}</guid>

<pubDate>${new Date(
      blog.publishedAt
    ).toUTCString()}</pubDate>

<description><![CDATA[
${blog.excerpt}
]]></description>

</item>
`
  )
  .join("")}

</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}