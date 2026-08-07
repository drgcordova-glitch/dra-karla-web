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

export default function CasosHub() {
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
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="blog-list">
            {casos.map((c) => (
              <Link key={c.slug} className="blog-item" href={`/casos/${c.slug}`}>
                <span className="cat">{c.category}</span>
                <h2>{c.title}</h2>
                <p>{c.excerpt}</p>
                <div className="meta">{fmt(c.datePublished)} · {c.readingMin} min de lectura</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
