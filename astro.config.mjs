import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://manavsols.com",
  trailingSlash: "always",
  output: "server",
  adapter: vercel(),
});
