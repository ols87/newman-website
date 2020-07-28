import { Component, ComponentInterface, h, Host } from "@stencil/core";

@Component({
  tag: "site-nav",
  styleUrl: "nav.css",
})
export class SiteNav implements ComponentInterface {
  render() {
    return (
      <Host>
        <nav class="site-nav container">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Copywriting</a>
              <a href="#">Communications Consulting</a>
              <a href="#">Content Editing</a>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </nav>
        
        <header class="site-header container">
          <h1>Laurence Newman</h1>
          <p>Writer | Communications Consultant | Editor</p>
        </header>
      </Host>
    );
  }
}
