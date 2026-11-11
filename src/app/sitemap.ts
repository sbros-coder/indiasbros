
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sbrostech.com";

  const pages = [
    "",
    "/about-us",
    "/digital",
    "/website-development",
    "/software-development",
    "/graphic-design",
    "/cctv-security",
    "/project",
    "/training",
    "/career",
    "/blog",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
