# Sitio web · Dra. Karla Andrade

Marca digital y plataforma educativa de dermatología. Next.js 15 (App Router) · TypeScript · Tailwind CSS.

## Puesta en marcha

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

> Nota: el build descarga las tipografías (Spectral y Montserrat) desde Google Fonts mediante `next/font`. Requiere conexión a internet al compilar; en Vercel y en local con internet funciona sin configuración.

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. En Vercel: **New Project → Import** el repo. Framework detectado: Next.js. No requiere configuración extra.
3. Deploy. Luego conecta el dominio final.
4. **Importante:** al tener el dominio, cambia `url` en `src/data/site.ts` por el dominio real. De ahí salen los datos absolutos del sitemap, Open Graph y schema.

## Estructura

```
src/
  app/
    layout.tsx                 Layout raíz: fuentes, metadata global, schema de organización
    page.tsx                   Inicio
    sobre-la-dra/              Trayectoria (autoridad / EEAT)
    especialidades/            Hub + [slug] dinámico (6 páginas por datos)
    enfermedades/              Hub de problemas frecuentes
    contacto/                  Ubicación y agenda
    robots.ts / sitemap.ts     SEO técnico automático
    globals.css                Sistema de diseño (tokens + componentes)
  components/                  Header, Footer, WhatsAppFloat, Reveal, CtaSection, TrustStrip, JsonLd
  data/
    site.ts                    Datos de contacto, NAP, navegación (fuente única)
    especialidades.ts          Contenido de las 6 especialidades
    problemas.ts               Problemas frecuentes
  lib/schema.ts                Constructores de JSON-LD (Physician, MedicalClinic, MedicalWebPage, Breadcrumb, FAQ)
public/                        Logos (SVG), fotos, marca de rostro, OG
```

## Cómo agregar contenido (sin maquetar)

- **Nueva especialidad:** agrega un objeto a `src/data/especialidades.ts`. Se generan solos la página, el sitemap y el schema.
- **Datos de contacto / horarios / dominio:** todo en `src/data/site.ts`.
- **Fase 2 (guías por enfermedad):** se replica el patrón de `especialidades/[slug]` en una ruta `enfermedades/[slug]` con su propio archivo de datos.

## Pendientes marcados en el código

- **Dominio final** en `src/data/site.ts` (`url`).
- **Horarios reales** de atención (`site.hours`).
- **Mapa de Google:** insertar el embed en `contacto` y en el footer (hay marcadores `Mapa de Google`).
- **Reseñas:** el bloque en Inicio está reservado para integrar reseñas reales de Google (no se usan testimonios inventados). Antes/después solo con consentimiento LOPDP.
- **Foto:** el sitio usa la foto de mandil blanco como principal. Al sumar más fotos profesionales (consultorio, procedimiento), reemplazar/añadir en `public/`.

## SEO incluido

Metadata por página, canonical, Open Graph, sitemap.xml, robots.txt, y datos estructurados schema.org (Physician + MedicalClinic globales; MedicalWebPage + BreadcrumbList + FAQPage por página). Bloque de autoría médica visible en cada página informativa (EEAT).
