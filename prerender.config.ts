import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  hydrateOptions() {
    return {
      staticDocument: true,
      inlineExternalStyleSheets: true,
      removeUnusedStyles: true,
    };
  },
  async afterHydrate(document, url) {
    document.title = url.pathname;
  },
};
