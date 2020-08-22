import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  hydrateOptions() {
    return {
      staticDocument: true,
      inlineExternalStyleSheets: true,
      removeUnusedStyles: true,
    };
  },
};
