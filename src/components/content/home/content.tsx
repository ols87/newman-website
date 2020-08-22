import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

import RichTextResolver from "storyblok-js-client/dist/richTextResolver";

const htmlResolver = new RichTextResolver();

@Component({
  tag: "home-content",
  styleUrl: "content.css",
})
export class SiteContent implements ComponentInterface {
  @Prop() content: any;

  render() {
    return (
      <Host>
        <div class="content home-content container">
          <div class="content-left">
            <img src={this.content.image} />
          </div>

          <div class="content-right">
            <h3>{this.content.title}</h3>
            <div innerHTML={htmlResolver.render(this.content.body)}></div>
            <a href={this.content.url.url} class="btn">
              LEARN MORE
            </a>
          </div>
        </div>
      </Host>
    );
  }
}
