import type { Metadata } from "next";
import { Spectral, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/data/site";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dermatóloga en Machala · Dra. Karla Andrade",
    template: "%s · Dra. Karla Andrade"
  },
  description:
    "Dermatóloga en Machala, El Oro, con formación en la Universidad de Buenos Aires. Caída del cabello y tricología, cáncer de piel, dermatología pediátrica, acné y medicina estética.",
  keywords: [
    "dermatóloga Machala",
    "dermatólogo El Oro",
    "cáncer de piel Machala",
    "dermatología pediátrica",
    "caída del cabello",
    "medicina estética Machala"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: "Dra. Karla Andrade",
    title: "Dra. Karla Andrade · Dermatóloga en Machala",
    description:
      "Medicina de la piel con criterio: clínica, pediátrica, oncológica, capilar y estética. Formación internacional (UBA).",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spectral.variable} ${montserrat.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
