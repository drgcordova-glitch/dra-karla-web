"use client";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, TrackEventParams } from "@/lib/analytics";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    eventName: string;
    eventParams?: TrackEventParams;
    children: ReactNode;
  };

// Como WhatsAppLink, pero para navegación interna (next/link) que también
// necesita disparar un evento de conversión (GA4 + Clarity) al hacer clic.
export default function TrackedLink({ eventName, eventParams, onClick, children, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackEvent(eventName, { link_url: rest.href.toString(), ...eventParams });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
