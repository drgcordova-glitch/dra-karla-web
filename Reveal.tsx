import Link from "next/link";
import { site, waLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="wm" src="/logo-cream.svg" alt="Dra. Karla Andrade" />
            <p>
              Dermatología clínica, pediátrica, oncológica, capilar y estética, con
              formación internacional.
            </p>
          </div>
          <div>
            <h4>Consultorio</h4>
            <p>
              {site.address}
              <br />
              {site.city}, {site.province} · {site.country}
            </p>
            <div className="foot-map">Mapa de Google</div>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.whatsappDisplay}
              </a>
              <br />
              <a
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @{site.instagram}
              </a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              {site.hours}
              <br />
              <strong style={{ color: "var(--lila)", fontWeight: 500 }}>Atención solo con cita previa</strong>
            </p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {site.drName} · SENESCYT {site.senescyt}
          </span>
          <span>
            {site.city} · {site.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
