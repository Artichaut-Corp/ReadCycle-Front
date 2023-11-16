import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import solidJs from "@astrojs/solid-js";

import  deno  from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), svelte(), solidJs()],
  adapter: deno(),
  image: {
    service: squooshImageService(),
  },
});
