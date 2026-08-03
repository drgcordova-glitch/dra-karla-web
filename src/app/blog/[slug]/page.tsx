import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { articles, getArticle } from "@/data/blog";
import { getEspecialidad } from "@/data/especialidades";
import { breadcrumb, articleSchema, faqPage } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      publishedTime: a.datePublished,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }]
    }
  };
}

const fmt = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const rel = getEspecialidad(a.relatedEspecialidad);

  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: a.title, url: `/blog/${a.slug}` }
          ]),
          articleSchema({
            title: a.title,
            description: a.excerpt,
            path: `/blog/${a.slug}`,
            datePublished: a.datePublished,
            dateModified: a.dateModified
          }),
          ...(a.faqs.length ? [faqPage(a.faqs)] : [])
        ]}
      />

      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / <Link href="/blog">Blog</Link> / {a.category}
          </div>
          <h1>{a.title}</h1>
          <div className="art-meta">
            Por la Dra. Karla Andrade · {fmt(a.datePublished)} · {a.readingMin} min de lectura
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      </section>

      <section className="block">
        <div className="wrap">
          <article className="prose-med">
            <p style={{ fontSize: 19 }}>{a.lead}</p>
            {a.sections.map((s, i) => (
              <div key={i}>
                {s.h && <h2>{s.h}</h2>}
                {s.p?.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {a.faqs.length > 0 && (
              <div className="faq" style={{ marginTop: 48 }}>
                <h2 style={{ marginBottom: 8 }}>Preguntas frecuentes</h2>
                {a.faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            )}

            {rel && (
              <div className="related-box">
                <div>
                  <div className="t">¿Te identificas con esto?</div>
                  <div className="s">
                    La Dra. Andrade puede ayudarte en el área de {rel.title.toLowerCase()}.
                  </div>
                </div>
                <Link className="btn btn-ink" href={`/especialidades/${rel.slug}`}>
                  Ver especialidad
                </Link>
              </div>
            )}

            <div className="cred" style={{ marginTop: 40, background: "var(--crema)" }}>
              <div className="name">Escrito y revisado por la Dra. Karla Andrade</div>
              <div className="lines">
                Médica Especialista en Dermatología (UBA) · Reg. SENESCYT 0321234732
                <br />
                Este artículo es informativo y no reemplaza una consulta médica.
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
