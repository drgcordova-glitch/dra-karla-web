export interface Problema {
  title: string;
  related: string;
  /** Enlace específico (p. ej. a un artículo del blog) en vez del genérico a la especialidad. */
  href?: string;
}
export const problemas: Problema[] = [
  { title: "Acné", related: "dermatologia-clinica", href: "/blog/acne-por-que-aparece-y-como-se-trata" },
  { title: "Manchas y melasma", related: "dermatologia-clinica", href: "/blog/manchas-y-melasma-en-la-piel" },
  { title: "Lunares y cáncer de piel", related: "cancer-de-piel-y-dermatoscopia" },
  { title: "Caída del cabello", related: "tricologia-y-salud-capilar" },
  { title: "Rosácea", related: "dermatologia-clinica" },
  { title: "Dermatitis y piel sensible", related: "dermatologia-clinica", href: "/blog/dermatitis-atopica-piel-sensible" }
];
