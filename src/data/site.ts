export const site = {
  url: "https://drakarladermatologa.com",
  drName: "Dra. Karla Sophía Andrade Maldonado",
  shortName: "Dra. Karla Andrade",
  role: "Médica Especialista en Dermatología",
  senescyt: "0321234732",
  whatsapp: "593998008070",
  whatsappDisplay: "099 800 8070",
  waText: "Hola%2C%20quisiera%20agendar%20una%20consulta%20dermatol%C3%B3gica",
  instagram: "dra.kandrade",
  email: "dra.andrade.karla@gmail.com",
  address: "Colón entre Olmedo y Sucre",
  city: "Machala",
  province: "El Oro",
  country: "Ecuador",
  hours: "Lunes a viernes · horarios a confirmar",
  mapsLink: "https://maps.app.goo.gl/CX4AhwQSKDkjPu8E9",
  // Coordenadas tomadas del embed de Google Maps ya usado en /contacto
  geoLat: -3.261043140975112,
  geoLng: -79.95765632415932
};
export const waLink = `https://wa.me/${site.whatsapp}?text=${site.waText}`;

export const nav = [
  { href: "/especialidades", label: "Especialidades" },
  { href: "/sobre-la-dra", label: "Sobre la Dra." },
  { href: "/enfermedades", label: "Problemas de la piel" },
  { href: "/blog", label: "Blog" },
  { href: "/casos", label: "Casos" },
  { href: "/contacto", label: "Contacto" }
];
