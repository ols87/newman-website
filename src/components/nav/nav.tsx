import { Component, ComponentInterface, h, Host, Prop } from "@stencil/core";
import state from "./nav.store";

@Component({
  tag: "site-nav",
  styleUrl: "nav.css",
})
export class SiteNav implements ComponentInterface {
  @Prop() hero: any;

  render() {
    const { links } = state;
    return (
      <Host>
        <nav class="site-nav">
          <div class="container">
            <ul>
              {links.map((link) => (
                <li>
                  <a href={link.slug}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav class="site-nav mb-nav">
          <div class="mb-nav-icon">
            <label htmlFor="toggle-nav">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <input id="toggle-nav" type="checkbox" class="hidden" />

          <ul>
            {links.map((link) => (
              <li>
                <a href={link.slug}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <header class="site-header container">
          <h1>{this.hero.title}</h1>
          <p>{this.hero.text}</p>
        </header>
      </Host>
    );
  }
}
