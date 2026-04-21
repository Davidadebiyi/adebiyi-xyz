import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://adebiyi.xyz",
  publicDir: "./static",
  outDir: "./public",
  redirects: {
    "/blog": "/essays",
  },
})
