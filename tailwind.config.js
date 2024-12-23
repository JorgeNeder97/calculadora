import { gridAreas } from "tailwindcss-grid-areas";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mix: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff;'
      },
      fontFamily: {
        poppins: 'Poppins',
        tech: 'Share Tech Mono',
      },
      gridTemplateAreas: {
        layout: ["siete ocho nueve", "cuatro cinco seis", "uno dos tres", "cero punto igual"],
      }
    },
  },
  plugins: [
    gridAreas()
  ],
}

