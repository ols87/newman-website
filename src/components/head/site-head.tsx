import { Component, h, ComponentInterface, Prop } from "@stencil/core";
import Helmet from "@stencil/helmet";

@Component({
  tag: "site-head",
})
export class SiteHead implements ComponentInterface {
  @Prop() meta: any;

  render() {
    const { title, description, keywords } = this.meta;
    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    );
  }
}