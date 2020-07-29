import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "site-content",
  styleUrl: "content.css",
})
export class SiteContent implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="content home-content container">
          <div class="content-left">
            <img src="{{= nm.content.image}}" />
          </div>

          <div class="content-right">
            <a href="/about" class="btn">
              LEARN MORE
            </a>
          </div>
        </div>
      </Host>
    );
  }
}
