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

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid"
] as const;

const ATTRIBUTION_STORAGE_KEY = "dka_attribution";

// Lee los parámetros de campaña (UTM, gclid de Google Ads, fbclid de Meta) de
// la URL actual y los combina con los que ya estaban guardados en esta
// pestaña (sessionStorage, no cookies), sin borrar un valor válido anterior
// cuando la página donde se hace clic no trae ese parámetro: así se conserva
// la atribución original aunque el visitante haya navegado a otra página
// interna antes de escribir por WhatsApp. No guarda ningún dato del paciente.
function captureAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  let stored: Record<string, string> = {};
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch {
    // sessionStorage no disponible (navegación privada, etc.): se sigue sin persistencia
  }

  const params = new URLSearchParams(window.location.search);
  let changed = false;
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) {
      stored[key] = value;
      changed = true;
    }
  }

  if (changed) {
    try {
      window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // idem
    }
  }

  return stored;
}

// Envío de eventos centralizado a GA4 y Microsoft Clarity (los dos analíticos
// instalados en el sitio, sin duplicar scripts). Seguro en SSR (no hace nada
// si `window` todavía no existe) y siempre completa page_path/page_title y
// los parámetros de campaña guardados en esta pestaña.
export function trackEvent(
  name: string,
  params: TrackEventParams = {},
  options: { skipClarity?: boolean } = {}
) {
  if (typeof window === "undefined") return;
  const fullParams = {
    page_path: window.location.pathname,
    page_title: document.title,
    ...captureAttribution(),
    ...params
  };
  sendGAEvent("event", name, fullParams);
  if (!options.skipClarity) window.clarity?.("event", name);
}
