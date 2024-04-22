/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./src/assets/images/background.jpg')",
        backgroundMobile: "url('./src/assets/images/background-mobile.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
