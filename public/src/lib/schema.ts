import { site } from "@/data/site";

const physician = {
  "@type": "Physician",
  "@id": `${site.url}/#physician`,
  name: site.drName,
  alternateName: site.shortName,
  description:
    "Médica especialista en dermatología clínica, pediátrica y oncológica, tricología (caída del cabello y trasplante capilar) y medicina estética, con formación en la Universidad de Buenos Aires y el Hospital Posadas.",
  medicalSpecialty: "Dermatology",
  knowsAbout: [
    "Dermatología clínica",
    "Tricología",
    "Caída del cabello",
    "Alopecia",
    "Trasplante capilar",
    "Cáncer de piel",
    "Dermatoscopía",
    "Dermatología pediátrica",
    "Acné",
    "Melasma",
    "Medicina estética"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad de Buenos Aires"
  },
  memberOf: [
    { "@type": "MedicalOrganization", name: "Sociedad Argentina de Dermatología (SAD)" },
    { "@type": "MedicalOrganization", name: "Colegio Iberolatinoamericano de Dermatología (CILAD)" }
  ],
  sameAs: [`https://instagram.com/${site.instagram}`],
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
  areaServed: [
    { "@type": "City", name: "Machala" },
    { "@type": "AdministrativeArea", name: "El Oro" }
  ],
  knowsAbout: physician.knowsAbout,
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

export function medicalWebPage(opts: { name: string; description: string; path: string }) {
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

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    mainEntityOfPage: `${site.url}${opts.path}`,
    image: `${site.url}/og.jpg`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "es",
    author: physician,
    reviewedBy: physician,
    publisher: {
      "@type": "MedicalClinic",
      name: `${site.shortName} · Dermatología`,
      url: site.url
    }
  };
}
