import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { especialidades, getEspecialidad } from "@/data/especialidades";
import { breadcrumb, medicalWebPage, faqPage } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return especialidades.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = getEspecialidad(slug);
  if (!e) return {};
  return {
    title: e.seoTitle ?? e.title,
    description: e.seoDescription ?? e.cardText,
    alternates: { canonical: `/especialidades/${e.slug}` },
    openGraph: {
      title: `${e.seoTitle ?? e.title} · Dra. Karla Andrade`,
      description: e.seoDescription ?? e.cardText,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }]
    }
  };
}

export default async function EspecialidadPage({ params }: Props) {
  const { slug } = await params;
  const e = getEspecialidad(slug);
  if (!e) notFound();

  const schema = [
    breadcrumb([
      { name: "Inicio", url: "/" },
      { name: "Especialidades", url: "/especialidades" },
      { name: e.title, url: `/especialidades/${e.slug}` }
    ]),
    medicalWebPage({
      name: e.title,
      description: e.cardText,
      path: `/especialidades/${e.slug}`
    }),
    ...(e.faqs.length ? [faqPage(e.faqs)] : [])
  ];

  return (
    <>
      <JsonLd data={schema} />

      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / <Link href="/especialidades">Especialidades</Link> /{" "}
            {e.title}
          </div>
          <h1>{e.title}</h1>
          <p>{e.lead}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className="block">
        <div className="wrap">
          <article className="prose-med">
            {e.sections.map((s, i) => (
              <div key={i}>
                {s.h && <h2>{s.h}</h2>}
                {s.p?.map((para, j) => (
                  <p key={j}>{para}</p>
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

            {e.faqs.length > 0 && (
              <div className="faq" style={{ marginTop: 48 }}>
                <h2 style={{ marginBottom: 8 }}>Preguntas frecuentes</h2>
                {e.faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            )}

            <div
              className="cred"
              style={{ marginTop: 48, background: "var(--crema)" }}
            >
              <div className="name">Contenido revisado por la Dra. Karla Andrade</div>
              <div className="lines">
                Médica Especialista en Dermatología (UBA) · Reg. SENESCYT 0321234732
                <br />
                Esta página es de carácter informativo y no reemplaza una consulta médica.
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
