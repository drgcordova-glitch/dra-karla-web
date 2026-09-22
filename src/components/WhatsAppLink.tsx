"use client";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { waLink } from "@/data/site";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string;
  children: ReactNode;
  /** Texto del botón para el evento, si los children no son un string plano (p. ej. un ícono). */
  label?: string;
  /** Página/servicio desde el que se agenda, cuando aplica (especialidad, artículo, etc.). */
  serviceName?: string;
  /** Nombre del evento de conversión. "click_agendar_consulta" para los botones que dicen
   * exactamente eso (header, hero); el resto de enlaces de WhatsApp usa el valor por defecto. */
  eventName?: "click_whatsapp" | "click_agendar_consulta";
};

// Envuelve todo enlace a WhatsApp: mismo destino/atributos de seguridad en
// todos lados, y dispara un evento de conversión (GA4 + Clarity) con la
// ubicación y el texto del botón.
export default function WhatsAppLink({
  location,
  onClick,
  children,
  label,
  serviceName,
  eventName = "click_whatsapp",
  ...rest
}: Props) {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        const buttonText = label ?? (typeof children === "string" ? children : location);
        trackEvent(eventName, {
          location,
          link_url: waLink,
          button_text: buttonText,
          contact_method: "whatsapp",
          ...(serviceName ? { service_name: serviceName } : {})
        });
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
