export interface Problema { title: string; related: string; }
// Enlazan a la especialidad correspondiente hasta construir las guías dedicadas (fase 2).
export const problemas: Problema[] = [
  { title: "Acné", related: "dermatologia-clinica" },
  { title: "Manchas y melasma", related: "dermatologia-clinica" },
  { title: "Lunares y cáncer de piel", related: "cancer-de-piel-y-dermatoscopia" },
  { title: "Caída del cabello", related: "tricologia-y-salud-capilar" },
  { title: "Rosácea", related: "dermatologia-clinica" },
  { title: "Dermatitis y piel sensible", related: "dermatologia-clinica" }
];
