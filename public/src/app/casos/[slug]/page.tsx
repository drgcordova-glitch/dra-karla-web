import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { casos, getCaso } from "@/data/casos";
import { getEspecialidad } from "@/data/especialidades";
import { breadcrumb, articleSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return casos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaso(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.excerpt,
    alternates: { canonical: `/casos/${c.slug}` },
    openGraph: {
      type: "article",
      title: c.title,
      description: c.excerpt,
      images: [{ url: "/og.jpg", width: 1200, height: 630 }]
    }
  };
}

const fmt = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });

export default async function CasoPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaso(slug);
  if (!c) notFound();
  const rel = getEspecialidad(c.relatedEspecialidad);

  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Casos clínicos", url: "/casos" },
            { name: c.title, url: `/casos/${c.slug}` }
          ]),
          articleSchema({
            title: c.title,
            description: c.excerpt,
            path: `/casos/${c.slug}`,
            datePublished: c.datePublished,
            dateModified: c.dateModified
          })
        ]}
      />

      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / <Link href="/casos">Casos clínicos</Link> / {c.category}
          </div>
          <h1>{c.title}</h1>
          <div className="art-meta">Por la Dra. Karla Andrade · {fmt(c.datePublished)}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      </section>

      <section className="block">
        <div className="wrap">
          <article className="prose-med">
            <p style={{ fontSize: 19 }}>{c.lead}</p>
            <div className="case-diag">Diagnóstico: {c.diagnosis}</div>

            {c.sections.map((s, i) => (
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
                {s.images && (
                  <div className="case-figs">
                    {s.images.map((im, k) => (
                      <Image key={k} src={im.src} alt={im.alt} width={820} height={1027}
                        style={{ width: "100%", height: "auto" }} sizes="(max-width:640px) 100vw, 360px" />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {c.beforeAfter && (
              <div className="ba-wrap">
                <h2>Antes y después</h2>
                <div className="ba-grid">
                  <div className="ba-col antes">
                    <div className="ba-label">{c.beforeAfter.antesLabel}</div>
                    <div className="ba-imgs">
                      {c.beforeAfter.antes.map((im, k) => (
                        <Image key={k} src={im.src} alt={im.alt} width={820} height={1027}
                          style={{ width: "100%", height: "auto" }} sizes="(max-width:640px) 50vw, 200px" />
                      ))}
                    </div>
                    <div className="ba-desc">{c.beforeAfter.antesDesc}</div>
                  </div>
                  <div className="ba-col despues">
                    <div className="ba-label">{c.beforeAfter.despuesLabel}</div>
                    <div className="ba-imgs">
                      {c.beforeAfter.despues.map((im, k) => (
                        <Image key={k} src={im.src} alt={im.alt} width={820} height={615}
                          style={{ width: "100%", height: "auto" }} sizes="(max-width:640px) 50vw, 200px" />
                      ))}
                    </div>
                    <div className="ba-desc">{c.beforeAfter.despuesDesc}</div>
                  </div>
                </div>
              </div>
            )}

            {c.keyMessages.length > 0 && (
              <div className="key-msgs">
                <h3>Mensajes clave</h3>
                <ol>
                  {c.keyMessages.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ol>
              </div>
            )}

            <p className="consent-note">{c.consentNote}</p>

            {rel && (
              <div className="related-box">
                <div>
                  <div className="t">¿Tienes un problema en el cuero cabelludo o de caída?</div>
                  <div className="s">La Dra. Andrade puede ayudarte en {rel.title.toLowerCase()}.</div>
                </div>
                <Link className="btn btn-ink" href={`/especialidades/${rel.slug}`}>Ver especialidad</Link>
              </div>
            )}

            <div className="cred" style={{ marginTop: 40, background: "var(--crema)" }}>
              <div className="name">Caso documentado por la Dra. Karla Andrade</div>
              <div className="lines">
                Médica Especialista en Dermatología (UBA) · Reg. SENESCYT 0321234732
              </div>
            </div>
          </article>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
