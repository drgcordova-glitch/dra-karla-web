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
  /** Falso para enlaces que solo muestran el número de contacto, sin ser un CTA de "agendar". */
  isAppointment?: boolean;
};

// Envuelve todo enlace a WhatsApp: mismo destino/atributos de seguridad en
// todos lados, y dispara whatsapp_click (y appointment_click cuando el botón
// es para agendar cita) en GA4 con la ubicación y el texto del botón.
export default function WhatsAppLink({
  location,
  onClick,
  children,
  label,
  serviceName,
  isAppointment = true,
  ...rest
}: Props) {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        const buttonText = label ?? (typeof children === "string" ? children : location);
        const params = {
          location,
          link_url: waLink,
          button_text: buttonText,
          contact_method: "whatsapp" as const,
          ...(serviceName ? { service_name: serviceName } : {})
        };
        trackEvent("whatsapp_click", params);
        if (isAppointment) trackEvent("appointment_click", params);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
