import Link from "next/link";
import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";

export default function CtaSection() {
  return (
    <section className="block ctaband">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Agenda tu consulta</span>
          <h2>Tu piel en manos de una dermatóloga.</h2>
          <p>Agenda tu cita y recibe un plan pensado para ti, no una fórmula para todos.</p>
          <div className="hero-actions">
            <WhatsAppLink className="btn btn-solid" location="banda_final">
              Escribir por WhatsApp
            </WhatsAppLink>
            <Link className="btn btn-light" href="/contacto">
              Ver ubicación
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
