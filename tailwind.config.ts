import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { especialidades } from "@/data/especialidades";
import { articles } from "@/data/blog";
import { casos } from "@/data/casos";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/sobre-la-dra", "/especialidades", "/enfermedades", "/blog", "/casos", "/contacto"];
  const base = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8
  }));
  const esp = especialidades.map((e) => ({
    url: `${site.url}/especialidades/${e.slug}`,
    lastModified: now, changeFrequency: "monthly" as const, priority: 0.7
  }));
  const blog = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.dateModified + "T00:00:00"), changeFrequency: "monthly" as const, priority: 0.6
  }));
  const cas = casos.map((c) => ({
    url: `${site.url}/casos/${c.slug}`,
    lastModified: new Date(c.dateModified + "T00:00:00"), changeFrequency: "monthly" as const, priority: 0.6
  }));
  return [...base, ...esp, ...blog, ...cas];
}
