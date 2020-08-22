import StoryblokClient from "storyblok-js-client";

class StoryblokService {
  public client: StoryblokClient;
  public devMode: boolean;
  public token: string;
  public query: any;

  constructor() {
    this.devMode = false;

    this.token = "InWwaOQ9Br8jsKZwcCOybwtt";

    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: "auto",
        type: "memory",
      },
    });

    this.query = {};
  }

  get(slug, params) {
    params = params || {};

    if (
      this.getQuery("_storyblok") ||
      this.devMode ||
      (typeof window !== "undefined" && window.storyblok)
    ) {
      params.version = "draft";
    }

    if (
      typeof window !== "undefined" &&
      typeof window.StoryblokCacheVersion !== "undefined"
    ) {
      params.cv = window.StoryblokCacheVersion;
    }

    return this.client.get(slug, params);
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query[param];
  }
}

export const storyBlok = new StoryblokService();
