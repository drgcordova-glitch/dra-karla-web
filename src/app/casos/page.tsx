import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { casos } from "@/data/casos";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Casos clínicos",
  description:
    "Casos clínicos reales documentados por la Dra. Karla Andrade, con consentimiento y sin datos que identifiquen a los pacientes.",
  alternates: { canonical: "/casos" }
};

const fmt = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });

// Mismos colores de marca que usa el blog, para que categorías iguales se vean igual en todo el sitio.
const categoryColor: Record<string, string> = {
  "Dermatología clínica": "var(--dorado)",
  "Tricología": "var(--violeta)",
  "Cáncer de piel": "var(--plum)",
  "Aparatología": "var(--lila)",
  "Medicina estética": "var(--lila)"
};

function groupByCategory() {
  const order: string[] = [];
  const groups: Record<string, typeof casos> = {};
  for (const c of casos) {
    if (!groups[c.category]) {
      groups[c.category] = [];
      order.push(c.category);
    }
    groups[c.category].push(c);
  }
  return order.map((category) => ({ category, items: groups[category] }));
}

export default function CasosHub() {
  const groups = groupByCategory();
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Casos clínicos", url: "/casos" }
          ]),
          medicalWebPage({
            name: "Casos clínicos",
            description: "Casos clínicos reales documentados por la Dra. Karla Andrade.",
            path: "/casos"
          })
        ]}
      />
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Casos clínicos
          </div>
          <h1>Casos clínicos</h1>
          <p>Experiencia real, documentada con rigor y con respeto por la privacidad de cada paciente.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className="block">
        <div className="wrap">
          {groups.map(({ category, items }) => (
            <details key={category} className="blog-cat">
              <summary>
                <span className="label">{category}</span>
                <span className="line" />
                <span className="count">
                  {items.length} caso{items.length === 1 ? "" : "s"}
                </span>
              </summary>
              <div className="blog-cat-body">
                <div className="blog-grid">
                  {items.map((c) => (
                    <Link
                      key={c.slug}
                      className="blog-card"
                      href={`/casos/${c.slug}`}
                      style={{ ["--card-accent" as string]: categoryColor[c.category] ?? "var(--dorado)" }}
                    >
                      <span className="cat">{c.category}</span>
                      <h2>{c.cardTitle ?? c.title}</h2>
                      <p>{c.cardExcerpt ?? c.excerpt}</p>
                      <div className="meta">{fmt(c.datePublished)} · {c.readingMin} min de lectura</div>
                    </Link>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
