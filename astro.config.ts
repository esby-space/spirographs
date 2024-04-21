import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import math from "remark-math";
import katex from "rehype-mathjax";

export default defineConfig({
    site: "https://spirographs.esby.space",
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [math],
        rehypePlugins: [katex],
    },
});
