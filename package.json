import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { especialidades } from "@/data/especialidades";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Especialidades",
  description:
    "Áreas de la Dra. Karla Andrade: dermatología clínica, pediátrica, cáncer de piel y dermatoscopía, tricología, medicina estética y funcional.",
  alternates: { canonical: "/especialidades" }
};

export default function EspecialidadesHub() {
  const nucleo = especialidades.filter((e) => e.tier === "nucleo");
  const amplitud = especialidades.filter((e) => e.tier === "amplitud");
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Especialidades", url: "/especialidades" }
          ]),
          medicalWebPage({
            name: "Especialidades",
            description: "Áreas de atención de la Dra. Karla Andrade.",
            path: "/especialidades"
          })
        ]}
      />
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Especialidades
          </div>
          <h1>Especialidades</h1>
          <p>
            Una base médica sólida en el centro; la estética y la medicina funcional como
            extensión natural de esa formación.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      </section>

      <section className="block">
        <div className="wrap">
          <p className="tier-label">Áreas médicas</p>
          <div className="esp-grid">
            {nucleo.map((e) => (
              <Link key={e.slug} className="pillar" href={`/especialidades/${e.slug}`}>
                <span className="num">{e.num}</span>
                <h3>{e.title}</h3>
                <p>{e.cardText}</p>
                <span className="more">Conocer más →</span>
              </Link>
            ))}
          </div>
          <div className="amplitud">
            <p className="tier-label">Como extensión de la base médica</p>
            <div className="esp-grid">
              {amplitud.map((e) => (
                <Link key={e.slug} className="pillar soft" href={`/especialidades/${e.slug}`}>
                  <span className="num">{e.num}</span>
                  <h3>{e.title}</h3>
                  <p>{e.cardText}</p>
                  <span className="more">Conocer más →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
