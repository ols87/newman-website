import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
import autoprefixer from "autoprefixer";
import { env } from "@alepop/stencil-env";

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./src/index.html"],
  css: ["./src/**/*.css"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  globalStyle: "src/global/app.css",
  globalScript: "src/global/app.ts",
  taskQueue: "async",
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
      baseUrl: "https://laurencedavidnewman.com/",
      prerenderConfig: "./prerender.config.ts",
    },
  ],
  plugins: [
    postcss({
      plugins: [
        require("tailwindcss")("./tailwind.config.js"),
        require("postcss-nested"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purgecss, require("cssnano")]
          : []),
      ],
    }),
    env(),
  ],
};
