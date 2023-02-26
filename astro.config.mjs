import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: "https://esby-space.github.io",
    base: "/spirographs"
});
