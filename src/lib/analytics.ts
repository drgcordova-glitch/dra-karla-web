import { sendGAEvent } from "@next/third-parties/google";

export type ContactMethod = "whatsapp" | "phone" | "maps";

export interface TrackEventParams {
  page_path?: string;
  page_title?: string;
  link_url?: string;
  button_text?: string;
  service_name?: string;
  contact_method?: ContactMethod;
  [key: string]: string | undefined;
}

// Envío de eventos centralizado a GA4 y Microsoft Clarity (los dos analíticos
// instalados en el sitio, sin duplicar scripts). Seguro en SSR (no hace nada
// si `window` todavía no existe) y siempre completa page_path/page_title.
export function trackEvent(name: string, params: TrackEventParams = {}) {
  if (typeof window === "undefined") return;
  const fullParams = {
    page_path: window.location.pathname,
    page_title: document.title,
    ...params
  };
  sendGAEvent("event", name, fullParams);
  window.clarity?.("event", name);
}
