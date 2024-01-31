/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: ["garden", "retro"],

    themes: [
      {
        garden: {
          ...require("daisyui/src/theming/themes")["garden"],
          primary: "#0369a1",
        },
      },
      {
        retro: {
          ...require("daisyui/src/theming/themes")["retro"],
          primary: "#b9a878",
        },
      },
    ],
  },
};
