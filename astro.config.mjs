// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://loydvincent.github.io",
  base: "/loyd-portfolio",

  vite: {
    plugins: [tailwindcss()],
  },
});