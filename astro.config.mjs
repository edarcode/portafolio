// @ts-check
import { customRouting } from "@inox-tools/custom-routing";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    customRouting({
      // Use Astro files outside of src/pages as the entrypoint
      // '/blog/[...slug]': './src/routes/blog.astro',
      "/": "./src/pages/index/index.astro",
      "/utils": "./src/pages/utils/utils.astro",
      "/look": "./src/pages/look/look.astro",

      // Reuse the same entrypoint for more than one route for more precise control
      // here defining that the route should be only on the tag index and with a single segment
      tag: "./src/routes/tags.astro",
      "tag/[tag]": "./src/routes/tags.astro",

      // Publish common Astro files shared across projects as dependencies and use them here
      compliance: "@company/legal-pages/compliance.astro",
    }),
  ],
});
