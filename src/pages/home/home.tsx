import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "home.css",
})
export class PageHome implements ComponentInterface {
  render() {
    return (
      <Host>
        <h3>From home page</h3>
      </Host>
    );
  }
}
