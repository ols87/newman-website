import StoryblokClient from "storyblok-js-client";

class StoryblokService {
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

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
