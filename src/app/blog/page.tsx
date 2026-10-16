import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articles, categoryLabel, getArticle, type Article } from "@/data/blog";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog de dermatología",
  description:
    "Artículos claros sobre el cuidado de la piel y el cabello, escritos por la Dra. Karla Andrade: acné, caída del cabello, manchas y más.",
  alternates: { canonical: "/blog" }
};

const fmt = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

function groupByCategory() {
  const order: string[] = [];
  const groups: Record<string, typeof articles> = {};
  for (const a of articles) {
    if (!groups[a.category]) {
      groups[a.category] = [];
      order.push(a.category);
    }
    groups[a.category].push(a);
  }
  return order.map((category) => ({ category, items: groups[category] }));
}

// Un color de marca distinto por tema, para diferenciar las tarjetas a simple vista.
const categoryColor: Record<string, string> = {
  "Dermatología clínica": "var(--dorado)",
  "Tricología": "var(--violeta)",
  "Cáncer de piel": "var(--plum)",
  "Aparatología": "var(--lila)"
};

// Id ancla para saltar desde las tarjetas de acceso rápido a cada categoría del acordeón.
const categoryAnchor: Record<string, string> = {
  "Dermatología clínica": "dermatologia-clinica",
  "Tricología": "tricologia",
  "Cáncer de piel": "cancer-de-piel",
  "Aparatología": "aparatologia"
};

const categoryBlurb: Record<string, string> = {
  "Dermatología clínica": "Acné, manchas, piel sensible y las consultas más frecuentes del día a día.",
  "Tricología": "Caída del cabello, alopecia y tratamientos para el cuero cabelludo.",
  "Cáncer de piel": "Cuándo evaluarte los lunares, tipos de cáncer de piel y seguimiento.",
  "Aparatología": "Láser, luz pulsada, toxina botulínica y otros tratamientos con equipos."
};

// Elegidos según las búsquedas reales con más impresiones en Search Console,
// no por preferencia editorial: son los temas que más gente ya está buscando.
const featuredSlugs = [
  "mesoterapia-capilar-que-es-y-que-dice-la-evidencia",
  "verrugas-genitales-que-son-y-cuando-consultar",
  "la-isotretinoina-cura-el-acne-para-siempre",
  "por-que-se-me-cae-el-cabello"
];

// Dentro de "Dermatología clínica" hay demasiados artículos para una sola grilla
// (acné/isotretinoína, láser y el resto): los separamos en sub-bloques con su
// propio título dentro de la categoría, sin tocar los datos de cada artículo.
// `tag` es el texto corto que se agrega a la etiqueta de cada tarjeta (ej. "Dermatología
// clínica · Acné"), para que se entienda el tema aunque el título use un término técnico
// como "isotretinoína" que el lector no reconozca de entrada.
function subGroups(category: string, items: Article[]): { label: string | null; tag: string | null; items: Article[] }[] {
  if (category !== "Dermatología clínica") return [{ label: null, tag: null, items }];
  const acne = items.filter((a) => a.slug.includes("acne") || a.slug.includes("isotretinoina"));
  const laser = items.filter((a) => !acne.includes(a) && a.slug.includes("laser"));
  const rest = items.filter((a) => !acne.includes(a) && !laser.includes(a));
  const out: { label: string | null; tag: string | null; items: Article[] }[] = [];
  if (acne.length) out.push({ label: "Acné e isotretinoína", tag: "Acné", items: acne });
  if (laser.length) out.push({ label: "Láser y procedimientos", tag: "Láser", items: laser });
  if (rest.length) out.push({ label: "Otras consultas frecuentes", tag: null, items: rest });
  return out;
}

export default function BlogHub() {
  const groups = groupByCategory();
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" }
          ]),
          medicalWebPage({
            name: "Blog de dermatología",
            description: "Artículos sobre el cuidado de la piel y el cabello.",
            path: "/blog"
          })
        ]}
      />
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Blog
          </div>
          <h1>Blog de dermatología</h1>
          <p>
            Información clara y confiable sobre tu piel y tu cabello, escrita y revisada por
            la Dra. Karla Andrade.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className="block" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="tier-label">Ir directo a un tema</p>
          <div className="pillars">
            {groups.map(({ category, items }) => (
              <Link
                key={category}
                className="pillar"
                href={`#${categoryAnchor[category] ?? category}`}
                style={{ borderTop: `3px solid ${categoryColor[category] ?? "var(--dorado)"}` }}
              >
                <span className="num">
                  {items.length} artículo{items.length === 1 ? "" : "s"}
                </span>
                <h3 style={{ fontSize: 20 }}>{categoryLabel[category] ?? category}</h3>
                <p>{categoryBlurb[category] ?? ""}</p>
                <span className="more">Ver artículos →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="tier-label">Lo más buscado</p>
          <div className="blog-grid">
            {featuredSlugs
              .map((s) => getArticle(s))
              .filter((a): a is NonNullable<typeof a> => Boolean(a))
              .map((a) => (
                <Link
                  key={a.slug}
                  className="blog-card"
                  href={`/blog/${a.slug}`}
                  style={{ ["--card-accent" as string]: categoryColor[a.category] ?? "var(--dorado)" }}
                >
                  <span className="cat">{categoryLabel[a.category] ?? a.category}</span>
                  <h2>{a.title}</h2>
                  <p>{a.excerpt}</p>
                  <div className="meta">{a.readingMin} min de lectura</div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {groups.map(({ category, items }) => (
            <details key={category} className="blog-cat" id={categoryAnchor[category] ?? category}>
              <summary>
                <span className="label">{categoryLabel[category] ?? category}</span>
                <span className="line" />
                <span className="count">
                  {items.length} artículo{items.length === 1 ? "" : "s"}
                </span>
              </summary>
              <div className="blog-cat-body">
                {subGroups(category, items).map((g, i) => (
                  <div key={g.label ?? i}>
                    {g.label && <p className="blog-sub-label">{g.label}</p>}
                    <div className="blog-grid">
                      {g.items.map((a) => (
                        <Link
                          key={a.slug}
                          className="blog-card"
                          href={`/blog/${a.slug}`}
                          style={{ ["--card-accent" as string]: categoryColor[a.category] ?? "var(--dorado)" }}
                        >
                          <span className="cat">
                            {categoryLabel[a.category] ?? a.category}
                            {g.tag ? ` · ${g.tag}` : ""}
                          </span>
                          <h2>{a.title}</h2>
                          <p>{a.excerpt}</p>
                          <div className="meta">
                            {fmt(a.datePublished)} · {a.readingMin} min de lectura
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
