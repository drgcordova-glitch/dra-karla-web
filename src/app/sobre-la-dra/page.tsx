import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre la Dra. Karla Andrade · Currículum y trayectoria",
  description:
    "Dermatóloga formada en la Universidad de Buenos Aires (Hospital Posadas). Currículum, formación de posgrado, sociedades científicas y actividad académica.",
  alternates: { canonical: "/sobre-la-dra" }
};

const curriculum: { h: string; items: string[] }[] = [
  {
    h: "Formación académica",
    items: [
      "Médica Especialista en Dermatología — Universidad de Buenos Aires (Hospital Nacional Prof. Alejandro Posadas), 2022",
      "Médica — Universidad Nacional de Loja, 2016"
    ]
  },
  {
    h: "Formación de posgrado",
    items: [
      "Diplomatura en Dermatología Oncológica — Fundación H. A. Barceló",
      "Diplomatura en Dermatología Quirúrgica Infantil — UBA, Hospital Elizalde",
      "Curso Anual Superior de Dermatología Pediátrica — Hospital de Niños Ricardo Gutiérrez",
      "Diplomatura en Tricología — Colegio Iberolatinoamericano de Dermatología (CILAD)",
      "Máster en Trasplante Capilar — TECH",
      "Máster en Medicina Estética — TECH",
      "Posgrado en Medicina Estética y Antiage — UBA (SAEME)",
      "Formación en dermatoscopía — Sociedad Argentina de Dermatología (SAD)",
      "Formación en medicina funcional e integrativa"
    ]
  },
  {
    h: "Formación hospitalaria y experiencia",
    items: [
      "Residencia en Dermatología — Hospital Nacional Prof. Alejandro Posadas, Buenos Aires (2019–2022)",
      "Experiencia clínica en dermatología general y pediátrica, tricología, trasplante capilar y medicina estética"
    ]
  },
  {
    h: "Sociedades científicas",
    items: [
      "Sociedad Argentina de Dermatología (SAD)",
      "Colegio Iberolatinoamericano de Dermatología (CILAD)",
      "Sociedad de dermatología pediátrica (ASADEPE)"
    ]
  },
  {
    h: "Actividad científica",
    items: [
      "Presentación de caso clínico en tricología: «El cuero cabelludo que nunca sanó» — Foliculitis Decalvans (Sesión Clínica de Dermatología, 2026)"
    ]
  }
];

export default function SobreLaDra() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Sobre la Dra.", url: "/sobre-la-dra" }
          ]),
          medicalWebPage({
            name: "Sobre la Dra. Karla Andrade",
            description: "Currículum y trayectoria de la Dra. Karla Andrade.",
            path: "/sobre-la-dra"
          })
        ]}
      />

      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Sobre la Dra.
          </div>
          <h1>Dra. Karla Andrade</h1>
          <p>Dermatóloga con formación internacional. Ciencia y cercanía en cada consulta.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className="block about">
        <div className="wrap about-grid">
          <div className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mark" src="/face-plum.png" alt="" aria-hidden="true" loading="lazy" />
            <div className="frame">
              <Image
                src="/hero.jpg"
                alt="Dra. Karla Andrade"
                fill
                sizes="(max-width:900px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
          <div className="about-body">
            <span className="eyebrow">Trayectoria</span>
            <h2>De Buenos Aires a Machala, con la misma vara de exigencia.</h2>
            <p>
              La Dra. Karla Andrade se formó como Médica Especialista en Dermatología en la
              Universidad de Buenos Aires, con su residencia en el Hospital Nacional Prof.
              Alejandro Posadas, uno de los hospitales de referencia de Argentina. Allí se
              entrenó atendiendo la piel en toda su complejidad: desde la enfermedad
              inflamatoria crónica hasta la detección del cáncer de piel.
            </p>
            <p>
              A esa base sumó formación específica en dermatología oncológica, dermatología
              pediátrica y quirúrgica infantil, tricología y trasplante capilar, medicina
              estética y un enfoque integral de la salud de la piel. Es miembro de la
              Sociedad Argentina de Dermatología y del CILAD, y mantiene una actividad
              académica activa en su especialidad.
            </p>
            <p>
              Su forma de atender parte de una convicción: cada decisión se toma sobre
              evidencia, se explica en palabras claras y se ajusta a la persona que tiene
              enfrente. Sin prometer de más, sin tratar de menos.
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap prose-med">
          <span className="eyebrow">Currículum</span>
          <h2 style={{ marginTop: 12, marginBottom: 8 }}>Formación y trayectoria</h2>
          {curriculum.map((block) => (
            <div key={block.h} style={{ marginTop: 28 }}>
              <h3 style={{ marginBottom: 6 }}>{block.h}</h3>
              <ul>
                {block.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="cred" style={{ marginTop: 44, background: "var(--crema)" }}>
            <div className="name">Dra. Karla Sophía Andrade Maldonado</div>
            <div className="lines">
              Médica Especialista en Dermatología — Universidad de Buenos Aires
              <br />
              Reg. SENESCYT 0321234732
              <br />
              Miembro de la Sociedad Argentina de Dermatología (SAD) y del CILAD
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
