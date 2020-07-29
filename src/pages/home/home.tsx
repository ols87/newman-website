import { Component, ComponentInterface, h, Host } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome implements ComponentInterface {
  render() {
    return (
      <Host>
        <site-content></site-content>
      </Host>
    );
  }
}
