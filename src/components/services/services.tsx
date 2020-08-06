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
          <h2>Services</h2>
          <div class="service-items">
            {this.services.map((service) => (
              <div class="service-item">
                <h3>{service.name}</h3>
                <p>{service.content}</p>
                <a href={service.link.url} class="btn">
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </section>
      </Host>
    );
  }
}
