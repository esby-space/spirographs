import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMathJax from "rehype-mathjax";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://esby-space.github.io",
    base: "/spirographs",
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeMathJax],
    },
});
