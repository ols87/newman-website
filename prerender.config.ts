import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  staticSite: true,
  hydrateOptions() {
    return {
      staticDocument: true,
      inlineExternalStyleSheets: true,
      removeUnusedStyles: true,
    };
  },
};
