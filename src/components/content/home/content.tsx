import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  State,
} from "@stencil/core";

import { storyBlok } from "../../../storyblok";

@Component({
  tag: "home-content",
  styleUrl: "content.css",
})
export class SiteContent implements ComponentInterface {
  @Prop() content: any;

  @State() storyBlok: any = storyBlok;

  render() {
    console.log(this.content.body);
    return (
      <Host>
        <div class="content home-content container">
          <div class="content-left">
            <img src={this.content.image} />
          </div>

          <div class="content-right">
            <h3>{this.content.title}</h3>
            <div
              innerHTML={this.storyBlok.client.richTextResolver.render(
                this.content.body
              )}
            ></div>
            <a href={this.content.url.url} class="btn">
              LEARN MORE
            </a>
          </div>
        </div>
      </Host>
    );
  }
}
