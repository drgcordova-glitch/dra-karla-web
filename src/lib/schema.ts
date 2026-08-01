import { site } from "@/data/site";

const physician = {
  "@type": "Physician",
  "@id": `${site.url}/#physician`,
  name: site.drName,
  alternateName: site.shortName,
  medicalSpecialty: "Dermatology",
  telephone: `+${site.whatsapp}`,
  email: site.email,
  url: site.url,
  image: `${site.url}/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.province,
    addressCountry: "EC"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness"],
  "@id": `${site.url}/#clinic`,
  name: `${site.shortName} · Dermatología`,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  email: site.email,
  image: `${site.url}/og.jpg`,
  priceRange: "$$",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.province,
    addressCountry: "EC"
  },
  employee: physician
};

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.url}`
    }))
  };
}

export function medicalWebPage(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    lastReviewed: new Date().toISOString().slice(0, 10),
    reviewedBy: physician,
    about: physician
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}
