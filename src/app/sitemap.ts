import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { especialidades } from "@/data/especialidades";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/sobre-la-dra", "/especialidades", "/enfermedades", "/contacto"];
  const base = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8
  }));
  const esp = especialidades.map((e) => ({
    url: `${site.url}/especialidades/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));
  return [...base, ...esp];
}
