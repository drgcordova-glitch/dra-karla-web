import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Casos clínicos",
  description: "Casos clínicos documentados por la Dra. Karla Andrade. Sección en construcción.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/casos" }
};

export default function Casos() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Casos clínicos
          </div>
          <h1>Casos clínicos</h1>
          <p>Experiencia real, documentada con rigor y respeto por la privacidad de cada paciente.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      </section>

      <section className="block">
        <div className="wrap" style={{ maxWidth: 720, textAlign: "center" }}>
          <p style={{ fontFamily: "var(--sans)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--dorado)", fontWeight: 600, marginBottom: 14 }}>
            Sección en construcción
          </p>
          <h2 style={{ fontSize: 30, color: "var(--plum)", marginBottom: 18 }}>Muy pronto, casos reales.</h2>
          <p style={{ fontSize: 18, color: "var(--ink-soft)", fontWeight: 300, lineHeight: 1.6 }}>
            Estamos preparando una selección de casos clínicos —en tricología, cáncer de piel,
            acné y más— documentados con el consentimiento de cada paciente y sin mostrar datos
            que permitan identificarlos. Mientras tanto, puedes escribir a la Dra. Andrade para
            resolver tu caso.
          </p>
          <div style={{ marginTop: 30 }}>
            <a className="btn btn-solid" href={waLink} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
