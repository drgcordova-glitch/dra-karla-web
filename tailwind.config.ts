import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: "#2a1e3a",
        "plum-2": "#372a4a",
        "plum-line": "#4a3a5e",
        lila: "#cab4e2",
        violeta: "#9b7fc0",
        dorado: "#c9a96e",
        crema: "#ece6f4",
        paper: "#faf8fc",
        ink: "#2a1e3a",
        "ink-soft": "#5c5168"
      },
      fontFamily: {
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"]
      },
      maxWidth: { wrap: "1180px" }
    }
  },
  plugins: []
};
export default config;
