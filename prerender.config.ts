import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  staticSite: true,
  hydrateOptions() {
    return {
      removeUnusedStyles: true,
    };
  },
};
