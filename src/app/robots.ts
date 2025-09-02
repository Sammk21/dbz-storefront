import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const SITE = "https://db0.in";
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/cart", "/checkout", "/account", "/admin"] },
    ],
    sitemap: [`${SITE}/sitemap.xml`],
    host: SITE,
  };
}
