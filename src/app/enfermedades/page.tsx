import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { problemas } from "@/data/problemas";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Problemas frecuentes de la piel",
  description:
    "Acné, manchas y melasma, lunares y cáncer de piel, caída del cabello, rosácea y dermatitis: orientación de la Dra. Karla Andrade.",
  alternates: { canonical: "/enfermedades" }
};

export default function EnfermedadesHub() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Problemas de la piel", url: "/enfermedades" }
          ]),
          medicalWebPage({
            name: "Problemas frecuentes de la piel",
            description: "Guía de motivos de consulta frecuentes.",
            path: "/enfermedades"
          })
        ]}
      />
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Problemas de la piel
          </div>
          <h1>Problemas frecuentes de la piel</h1>
          <p>
            Empieza por lo que te preocupa. Cada tema te lleva al área que lo resuelve.
            Próximamente, una guía dedicada para cada uno.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      </section>
      <section className="block">
        <div className="wrap">
          <div className="probs">
            {problemas.map((p) => (
              <Link key={p.title} className="prob" href={`/especialidades/${p.related}`}>
                <h3>{p.title}</h3>
                <span className="arw">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
