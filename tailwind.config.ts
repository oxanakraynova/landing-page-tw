/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#61908E",
        secondary: "#024E40",
        info: "#AAE8C3",
        success: "#7FC109",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
