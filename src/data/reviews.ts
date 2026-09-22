export interface Review {
  name: string;
  rating: number;
  text: string;
}

// Reseñas reales de Google, copiadas tal cual las escribió cada paciente
// (sin resumir ni corregir). Solo se incluyen las que tienen texto completo
// visible en la ficha de Google Business — nunca inventadas.
export const reviews: Review[] = [
  {
    name: "Carolina Rosales",
    rating: 5,
    text: "Excelente Dra. Buen servicio y me ayudó con más información importante que le consulte"
  },
  {
    name: "Rosa Boconzaca",
    rating: 5,
    text: "Realmente me gustó la atención muy profesional y objetiva gracias a la dra. Por atención y su carisma"
  },
  {
    name: "Andrea Armijos",
    rating: 5,
    text: "La doctora es una excelente profesional y un ser humano maravilloso. Su atención es de primer nivel, destacando por su dedicación y su empatía"
  },
  {
    name: "Walter Soto",
    rating: 5,
    text: "Si quieres un diagnóstico eficaz, visita su consultorio, lo recomiendo 100%"
  },
  {
    name: "Andres Campoverde",
    rating: 5,
    text: "Excelente atencion, recomendado 100%"
  }
];
