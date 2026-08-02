import type { MetadataRoute } from "next";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ranno.hirishi.in",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
