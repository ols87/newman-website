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
import copy from "./store/copy.store";
import comms from "./store/comms.store";
import content from "./store/content.store";
import testimonials from "./store/testimonials.store";

@Component({
  tag: "page-template",
  styleUrl: "page.css",
})
export class PageTemplate implements ComponentInterface {
  @Prop() slug: any;
  @State() data: any;

  componentWillLoad() {
    if (this.slug === "/") {
      this.data = home;
    } else if (this.slug === "/about/") {
      this.data = about;
    } else if (this.slug == "/copywriting/") {
      this.data = copy;
    } else if (this.slug === "/communications-consulting/") {
      this.data = comms;
    } else if (this.slug === "/content-editing/") {
      this.data = content;
    } else if (this.slug === "/testimonials/") {
      this.data = testimonials;
    }
  }

  render() {
    return (
      <Host>
        <site-head meta={this.data.meta}></site-head>
        <site-nav></site-nav>
        
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
