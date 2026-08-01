import Link from "next/link";
import { waLink } from "@/data/site";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section className="block ctaband">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Agenda tu consulta</span>
          <h2>Tu piel en manos de una dermatóloga.</h2>
          <p>Agenda tu cita y recibe un plan pensado para ti, no una fórmula para todos.</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href={waLink} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
            <Link className="btn btn-light" href="/contacto">
              Ver ubicación
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
