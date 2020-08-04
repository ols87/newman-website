import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
} from "@stencil/core";
import home from "./store/home.store";
import about from "./store/about.store";
import copywriting from "./store/copy.store";
import communications from "./store/comms.store";
import content from "./store/content.store";
import testimonials from "./store/testimonials.store";

import StoryblokService from "../../storyblok-service";

@Component({
  tag: "page-template",
  styleUrl: "page.css",
})
export class PageTemplate implements ComponentInterface {
  @Prop() slug: any;
  @State() data: any;
  @State() hero: any;

  async componentWillLoad() {
    const store = {
      home,
      about,
      copywriting,
      communications,
      content,
      testimonials,
    };

    const contentKey = this.slug.replace(/\//g, "").split("-")[0] || "home";

    this.data = store[contentKey];

    const response = await StoryblokService.get("cdn/stories/");

    this.hero = response.data.stories[0].content.body[0];
  }

  render() {
    return (
      <Host>
        <site-head meta={this.data.meta}></site-head>
        <site-nav hero={this.hero}></site-nav>

        {this.slug === "/" ? (
          <div>
            <home-content content={this.data.content}></home-content>
            <site-services services={this.data.services}></site-services>
            <site-clients clients={this.data.clients}></site-clients>
          </div>
        ) : (
          <page-content content={this.data}></page-content>
        )}

        <site-footer></site-footer>
      </Host>
    );
  }
}
