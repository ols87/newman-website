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
import copywriting from "./store/copy.store";
import communications from "./store/comms.store";
import content from "./store/content.store";
import testimonials from "./store/testimonials.store";

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
  tag: "page-template",
  styleUrl: "page.css",
})
export class PageTemplate implements ComponentInterface {
  @Prop() slug: any;
  @State() data: any;
  @State() services: any;
  @State() pageContent: any;
  @State() meta: any;
  @State() clients: any;

  async componentWillLoad() {
    const store = {
      home,
      about,
      copywriting,
      communications,
      content,
      testimonials,
    };

    const contentKey = this.slug.replace(/\//g, "").split("-")[0] || "home";

    this.data = store[contentKey];

    const response = await api.client.query({
      query: query,
      variables: {
        id:
          this.slug === "/"
            ? "3fc5a2b1-ecf8-49f2-98d2-606cd45f5091"
            : this.slug,
      },
    });
    this.meta = response.data.PageItem.content.body[0];
    this.pageContent = response.data.PageItem.content.body[1];
  }

  render() {
    return (
      <Host>
        <site-head meta={this.meta}></site-head>
        <site-nav></site-nav>

        {this.slug === "/" ? (
          <div>
            <home-content content={this.pageContent.data[0]}></home-content>
            <site-services
              services={this.pageContent?.servicess}
            ></site-services>
            <site-clients clients={this.pageContent?.clients}></site-clients>
          </div>
        ) : (
          <page-content content={this.pageContent}></page-content>
        )}

        <site-footer></site-footer>
      </Host>
    );
  }
}
