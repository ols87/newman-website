import { Component, ComponentInterface, h, Host, State } from "@stencil/core";

import { ApiService } from "../../services/api";

const api = new ApiService();

const query = api.gql(`
  query($id: ID!)
  {
    PageItem(id: $id) {
      name
      content {
         _uid
         component,
         body
      }
    }
  }
`);

@Component({
  tag: "site-nav",
  styleUrl: "nav.css",
})
export class SiteNav implements ComponentInterface {
  @State() hero: any;
  @State() links: any;

  async componentWillLoad() {
    const res = await api.client.query({
      query: query,
      variables: {
        id: "/layout/nav",
      },
    });
    this.links = res.data.PageItem.content.body[0].content;
    this.hero = res.data.PageItem.content.body[1];
  }

  render() {
    const labelFor: any = { for: "toggle-nav" };

    return (
      <Host>
        <nav class="site-nav">
          <div class="container">
            <ul>
              {this.links.map((link) => (
                <li>
                  <a href={link.slug.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav class="site-nav mb-nav">
          <div class="mb-nav-icon">
            <label {...labelFor}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <input
            id="toggle-nav"
            name="toggle-nav"
            type="checkbox"
            class="hidden"
          />

          <ul>
            {this.links.map((link) => (
              <li>
                <a href={link.slug.url}>{link.title}</a>
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
