"use client";
import Link from "next/link";
import { useState } from "react";
import { nav } from "@/data/site";
import WhatsAppLink from "@/components/WhatsAppLink";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);
  const onNavClick = (href: string) => {
    if (href === "/contacto") trackEvent("click_contacto", { link_url: href, button_text: "Contacto" });
  };
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-plum.svg" alt="Dra. Karla Andrade" />
        </Link>
        <nav aria-label="Principal">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => onNavClick(n.href)}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cta-wrap">
          <WhatsAppLink className="btn btn-ghost" location="header_desktop" eventName="click_agendar_consulta">
            Agendar consulta
          </WhatsAppLink>
          <button
            className="burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2a1e3a" strokeWidth="1.6">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => {
              onNavClick(n.href);
              setOpen(false);
            }}
          >
            {n.label}
          </Link>
        ))}
        <WhatsAppLink location="header_mobile" eventName="click_agendar_consulta" onClick={() => setOpen(false)}>
          Agendar consulta
        </WhatsAppLink>
      </div>
    </header>
  );
}
