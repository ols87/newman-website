import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
})
export class AppRoot {
  @State() routes: any = [
    {
      slug: "/",
    },
    {
      slug: "/about/",
    },
    {
      slug: "/copywriting/",
    },
    {
      slug: "/communications-consulting/",
    },
    {
      slug: "/content-editing/",
    },
    {
      slug: "/testimonials/",
    },
  ];

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              {this.routes.map((route) => (
                <stencil-route
                  url={route.slug}
                  component={`page-template`}
                  componentProps={{ slug: route.slug }}
                  exact={route.slug === "/" ? true : false}
                />
              ))}
            </stencil-route-switch>
          </stencil-router>
        </main>
        <script
          src="//app.storyblok.com/f/storyblok-latest.js?t=InWwaOQ9Br8jsKZwcCOybwtt"
          type="text/javascript"
        ></script>
      </div>
    );
  }
}
