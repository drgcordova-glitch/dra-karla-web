import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/data/blog";
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

export default function BlogHub() {
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
          <div className="blog-list">
            {articles.map((a) => (
              <Link key={a.slug} className="blog-item" href={`/blog/${a.slug}`}>
                <span className="cat">{a.category}</span>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <div className="meta">
                  {fmt(a.datePublished)} · {a.readingMin} min de lectura
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
