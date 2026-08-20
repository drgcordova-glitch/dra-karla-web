"use client";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { waLink } from "@/data/site";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
  children: ReactNode;
};

// Envuelve todo enlace a WhatsApp: mismo destino/atributos de seguridad en
// todos lados, y un evento whatsapp_click en GA4 con la ubicación del botón.
export default function WhatsAppLink({ location, onClick, children, ...rest }: Props) {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        sendGAEvent("event", "whatsapp_click", { location });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
