import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre la Dra. Karla Andrade",
  description:
    "Dermatóloga formada en la Universidad de Buenos Aires, con residencia en el Hospital Posadas. Trayectoria, formación y enfoque de atención.",
  alternates: { canonical: "/sobre-la-dra" }
};

const formacion = [
  "Especialista en Dermatología — Universidad de Buenos Aires (Hospital Posadas)",
  "Diplomatura en Dermatología Oncológica — Fundación Barceló",
  "Diplomatura en Dermatología Quirúrgica Infantil — UBA, Hospital Elizalde",
  "Curso Anual Superior de Dermatología Pediátrica — Hospital de Niños Ricardo Gutiérrez",
  "Diplomatura en Tricología — Colegio Iberolatinoamericano de Dermatología",
  "Máster en Trasplante Capilar y Máster en Medicina Estética",
  "Formación en dermatoscopía — Sociedad Argentina de Dermatología"
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
            description: "Trayectoria y formación de la Dra. Karla Andrade.",
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
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      </section>

      <section className="block about">
        <div className="wrap about-grid">
          <div className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="mark" src="/face-plum.png" alt="" aria-hidden="true" />
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
              Sociedad Argentina de Dermatología y del CILAD.
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
          <span className="eyebrow">Formación</span>
          <h2 style={{ marginTop: 12 }}>Formación destacada</h2>
          <ul>
            {formacion.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <div className="cred" style={{ marginTop: 40, background: "var(--crema)" }}>
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
