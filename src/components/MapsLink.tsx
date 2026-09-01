"use client";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/data/site";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
  children: ReactNode;
};

// Envuelve el enlace a Google Maps del consultorio y dispara maps_click en GA4.
export default function MapsLink({ location, onClick, children, ...rest }: Props) {
  return (
    <a
      href={site.mapsLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackEvent("maps_click", {
          location,
          link_url: site.mapsLink,
          contact_method: "maps"
        });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
