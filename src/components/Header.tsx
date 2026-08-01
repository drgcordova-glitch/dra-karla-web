"use client";
import Link from "next/link";
import { useState } from "react";
import { nav, waLink } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
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
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="cta-wrap">
          <a className="btn btn-ghost" href={waLink} target="_blank" rel="noopener noreferrer">
            Agendar consulta
          </a>
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
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
