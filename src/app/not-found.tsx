import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Página no encontrada
          </div>
          <h1>No encontramos esta página</h1>
          <p>El enlace puede estar roto o la página ya no existe. Te dejamos algunos accesos directos.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className="block">
        <div className="wrap">
          <div className="hero-actions">
            <Link className="btn btn-ink" href="/">
              Ir al inicio
            </Link>
            <Link className="btn btn-ink" href="/especialidades">
              Ver especialidades
            </Link>
            <WhatsAppLink className="btn btn-solid" location="pagina_404">
              Agendar por WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
