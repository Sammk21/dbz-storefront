// app/sitemap.ts
import type { MetadataRoute } from "next"
import { sdk } from "@lib/config"

const SITE = "https://db0.in"

// Setup SDK client


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE}/shop`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]

  // Products
  const productsRes = await sdk.store.product.list({ limit: 1000 })
  const productRoutes: MetadataRoute.Sitemap = productsRes.products.map(
    (p) => ({
      url: `${SITE}/product/${p.handle}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  )

  // Collections
  const collectionsRes = await sdk.store.collection.list()
  const collectionRoutes: MetadataRoute.Sitemap =
    collectionsRes.collections.map((c) => ({
      url: `${SITE}/shop/${c.handle}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    }))

  return [...staticRoutes, ...collectionRoutes, ...productRoutes]
}
