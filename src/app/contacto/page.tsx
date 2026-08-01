import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { site, waLink } from "@/data/site";
import { breadcrumb, medicalWebPage } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto y ubicación",
  description:
    "Consultorio de la Dra. Karla Andrade en Machala, El Oro. Agenda por WhatsApp. Colón entre Olmedo y Sucre.",
  alternates: { canonical: "/contacto" }
};

export default function Contacto() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([
            { name: "Inicio", url: "/" },
            { name: "Contacto", url: "/contacto" }
          ]),
          medicalWebPage({
            name: "Contacto y ubicación",
            description: "Cómo agendar y dónde atiende la Dra. Karla Andrade.",
            path: "/contacto"
          })
        ]}
      />
      <section className="pagehead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Inicio</Link> / Contacto
          </div>
          <h1>Agenda tu consulta</h1>
          <p>La forma más rápida de reservar es por WhatsApp. Te respondemos y coordinamos tu cita.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mark" src="/face-lilac.png" alt="" aria-hidden="true" />
      </section>

      <section className="block">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <h3>Consultorio</h3>
            <div className="row">
              <div className="k">Dirección</div>
              <div className="v">
                {site.address}
                <br />
                {site.city}, {site.province} · {site.country}
              </div>
            </div>
            <div className="row">
              <div className="k">WhatsApp</div>
              <div className="v">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  {site.whatsappDisplay}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="k">Correo</div>
              <div className="v">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            <div className="row">
              <div className="k">Instagram</div>
              <div className="v">
                <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
                  @{site.instagram}
                </a>
              </div>
            </div>
            <div className="row">
              <div className="k">Horarios</div>
              <div className="v">{site.hours}</div>
            </div>
            <div style={{ marginTop: 30 }}>
              <a className="btn btn-solid" href={waLink} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </div>
          </div>
          <div>
            <div className="map-ph">Mapa de Google (pendiente de insertar)</div>
          </div>
        </div>
      </section>
    </>
  );
}
