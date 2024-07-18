const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{html,js,ts,jsx,tsx}", flowbite.content()
  ],
  theme: {
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      manrope: ["manrope"]
    },
    extend: {
      screens: {
        xs: "450px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        'footerGradient': 'linear-gradient(180deg, #121212 0%, #1A1A1A 100%)',
      },
      colors: {
        Green: '#4B8458',
        Pink: '#CC5396', 
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
