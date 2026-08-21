import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articles, categoryLabel } from "@/data/blog";
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
        <div className="wrap" style={{ maxWidth: 840 }}>
          {groups.map(({ category, items }) => (
            <div key={category} style={{ marginBottom: 44 }}>
              <p className="tier-label">{categoryLabel[category] ?? category}</p>
              <div className="blog-list">
                {items.map((a) => (
                  <Link key={a.slug} className="blog-item" href={`/blog/${a.slug}`}>
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
      </section>
    </>
  );
}
