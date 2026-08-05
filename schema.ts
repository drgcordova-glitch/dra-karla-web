import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrustStrip from "@/components/TrustStrip";
import CtaSection from "@/components/CtaSection";
import { waLink } from "@/data/site";
import { especialidades } from "@/data/especialidades";
import { problemas } from "@/data/problemas";

export default function Home() {
  const nucleo = especialidades.filter((e) => e.tier === "nucleo");
  const amplitud = especialidades.filter((e) => e.tier === "amplitud");

  return (
    <>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="wrap">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <span className="eyebrow">Dermatología · Machala, El Oro</span>
              <h1>
                Medicina de la piel,
                <br />
                <em>con criterio.</em>
              </h1>
              <p className="lead">
                La Dra. Karla Andrade es dermatóloga con formación en la Universidad de
                Buenos Aires y el Hospital Posadas. Atiende desde la enfermedad compleja
                de la piel hasta el procedimiento estético, siempre con base científica y
                trato cercano.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href={waLink} target="_blank" rel="noopener noreferrer">
                  Agendar consulta
                </a>
                <Link className="btn btn-light" href="/especialidades">
                  Ver especialidades
                </Link>
              </div>
            </Reveal>
            <div className="hero-photo">
              <Image
                src="/hero.jpg"
                alt="Dra. Karla Andrade, dermatóloga"
                fill
                priority
                sizes="(max-width:900px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hero-mark" src="/face-lilac.png" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ESPECIALIDADES */}
      <section className="block" id="especialidades">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Especialidades</span>
            <h2>Una sola dermatóloga para toda la salud de tu piel.</h2>
            <p>
              Desde el diagnóstico de una enfermedad hasta el cuidado estético: cada área
              con formación específica y evidencia detrás.
            </p>
          </Reveal>

          <p className="tier-label">Áreas médicas</p>
          <div className="pillars">
            {nucleo.map((e) => (
              <Reveal key={e.slug}>
                <Link className="pillar" href={`/especialidades/${e.slug}`}>
                  <span className="num">{e.num}</span>
                  <h3>{e.title}</h3>
                  <p>{e.cardText}</p>
                  <span className="more">Conocer más →</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="amplitud">
            <p className="tier-label">Como extensión de la base médica</p>
            <div className="pillars-2">
              {amplitud.map((e) => (
                <Reveal key={e.slug}>
                  <Link className="pillar soft" href={`/especialidades/${e.slug}`}>
                    <span className="num">{e.num}</span>
                    <h3>{e.title}</h3>
                    <p>{e.cardText}</p>
                    <span className="more">Conocer más →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE LA DRA */}
      <section className="block about" id="sobre">
        <div className="wrap about-grid">
          <Reveal className="about-photo">
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
          </Reveal>
          <Reveal className="about-body">
            <span className="eyebrow">Sobre la Dra.</span>
            <h2>Formada afuera. Cercana como si te conociera de siempre.</h2>
            <p>
              Karla Andrade se especializó en Dermatología en la Universidad de Buenos
              Aires, con formación hospitalaria en el Hospital Nacional Prof. Alejandro
              Posadas, uno de los centros de referencia de Argentina.
            </p>
            <p>
              Su práctica reúne la dermatología clínica, pediátrica y la detección del
              cáncer de piel con la tricología y la medicina estética. Todo desde la misma
              convicción: decisiones basadas en evidencia y una escucha real de cada
              paciente.
            </p>
            <div className="cred">
              <div className="name">Dra. Karla Sophía Andrade Maldonado</div>
              <div className="lines">
                Médica Especialista en Dermatología — Universidad de Buenos Aires
                <br />
                Reg. SENESCYT 0321234732
                <br />
                Miembro de la Sociedad Argentina de Dermatología (SAD) y del CILAD
              </div>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link className="btn btn-ink" href="/sobre-la-dra">
                Conocer su trayectoria
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROBLEMAS FRECUENTES */}
      <section className="block" id="problemas">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Problemas frecuentes de la piel</span>
            <h2>¿Qué te trae a la consulta?</h2>
            <p>Empieza por lo que te preocupa. Cada tema con la orientación de la Dra. Andrade.</p>
          </Reveal>
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

      {/* RESEÑAS */}
      <section className="block reviews">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Lo que dicen sus pacientes</span>
            <h2>La confianza se construye consulta a consulta.</h2>
            <div className="ph">
              <b>Espacio reservado</b>
              Aquí se integran, en vivo, las reseñas reales verificadas de Google del
              consultorio. Sin testimonios inventados ni promesas de resultado: solo la voz
              auténtica de quienes ya se atendieron.
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
