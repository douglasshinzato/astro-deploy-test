/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "'Roboto', sans-serif",
        Inter: "'Inter', sans-serif",
      },
      colors: {
        dark: {
          100: "#191622",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
