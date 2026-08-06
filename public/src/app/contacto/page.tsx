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
          <p>La atención es únicamente con cita previa. La forma más rápida de reservar es por WhatsApp: te respondemos y coordinamos tu turno.</p>
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
                <a href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                  {site.address}
                  <br />
                  {site.city}, {site.province} · {site.country}
                </a>
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
            <div className="cita-aviso">
              Atención exclusivamente con cita previa. No se atiende por orden de llegada.
            </div>
            <div style={{ marginTop: 20 }}>
              <a className="btn btn-solid" href={waLink} target="_blank" rel="noopener noreferrer">
                Agendar por WhatsApp
              </a>
            </div>
          </div>
          <div>
            <iframe
              title="Ubicación del consultorio de la Dra. Karla Andrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.357707650691!2d-79.95765632415932!3d-3.261043140975112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90330f33fa62a96d%3A0xde3b0ea5580197a2!2sDra.%20Karla%20Andrade!5e0!3m2!1ses!2sec!4v1785954026612!5m2!1ses!2sec"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: 4 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
