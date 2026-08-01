// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "ClanGen",
      cssVariable: "--font-clangen",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/clangen.woff2"],
            weight: 500,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: "Roboto",
      cssVariable: "--font-roboto",
    },
  ],

  vite: {
    plugins: [tailwindcss()],

    server: {
      proxy: {
        "/api": {
          target: "https://clangen.io/api",
          changeOrigin: true,
          rewrite: (path) => path.replace("/api", ""),
        },
      },
    },
  },
  integrations: [
    icon({
      include: {
        "fa7-solid": ["bars"],
        "fa7-brands": ["apple", "linux", "windows", "github"],
      },
    }),
  ],
});
