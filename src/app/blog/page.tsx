import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articles, categoryLabel, type Article } from "@/data/blog";
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

// Dentro de "Dermatología clínica" hay demasiados artículos para una sola grilla
// (acné/isotretinoína, láser y el resto): los separamos en sub-bloques con su
// propio título dentro de la categoría, sin tocar los datos de cada artículo.
function subGroups(category: string, items: Article[]): { label: string | null; items: Article[] }[] {
  if (category !== "Dermatología clínica") return [{ label: null, items }];
  const acne = items.filter((a) => a.slug.includes("acne") || a.slug.includes("isotretinoina"));
  const laser = items.filter((a) => !acne.includes(a) && a.slug.includes("laser"));
  const rest = items.filter((a) => !acne.includes(a) && !laser.includes(a));
  const out: { label: string | null; items: Article[] }[] = [];
  if (acne.length) out.push({ label: "Acné e isotretinoína", items: acne });
  if (laser.length) out.push({ label: "Láser y procedimientos", items: laser });
  if (rest.length) out.push({ label: "Otras consultas frecuentes", items: rest });
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

      <section className="block">
        <div className="wrap">
          {groups.map(({ category, items }) => (
            <details key={category} className="blog-cat">
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
                          <span className="cat">{categoryLabel[a.category] ?? a.category}</span>
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
