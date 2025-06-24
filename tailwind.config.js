/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "bounce-glow": "bounceGlow 0.6s ease-in-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceGlow: {
          "0%": { transform: "scale(1)", filter: "brightness(1)" },
          "50%": { transform: "scale(1.05)", filter: "brightness(1.2)" },
          "100%": { transform: "scale(1)", filter: "brightness(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      colors: {
        "pokemon-brown": "#8B4513",
        "pokemon-beige": "#F5DEB3",
        "pokemon-cream": "#FFF8DC",
        "pokemon-warm": "#DEB887",
        "pokemon-dark": "#654321",
      },
    },
  },
  plugins: [],
};
