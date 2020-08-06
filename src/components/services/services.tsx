import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "site-services",
  styleUrl: "services.css",
})
export class SiteServices implements ComponentInterface {
  @Prop() services: any;

  render() {
    return (
      <Host>
        <section class="services container">
          <h2>{this.services.title.content[0].content[0].text}</h2>
          <div class="service-items">
            {this.services.item.map((service) => (
              <div class="service-item">
                <h3>{service.content[0].title.content[0].content[0].text}</h3>
                <p>{service.content[1].content}</p>
                <a href={service.content[2].slug.url} class="btn">
                  {service.content[2].title}
                </a>
              </div>
            ))}
          </div>
        </section>
      </Host>
    );
  }
}
