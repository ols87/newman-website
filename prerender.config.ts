import { PrerenderConfig } from "@stencil/core";

export const config: PrerenderConfig = {
  staticSite: true,
  hydrateOptions() {
    return {
      timeout:60000
    };
  },
};