import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "site-clients",
  styleUrl: "clients.css",
})
export class SiteClients implements ComponentInterface {
  @Prop() clients: any;

  render() {
    return (
      <Host>
        <section class="clients">
          <h2 class="container">{this.clients.title}</h2>
          <div class="client-logos">
            <div class="container">
              {this.clients.list.map((logo) => (
                <div class="client-logo">
                  <img src={`/assets/images/clients/${logo}.png`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Host>
    );
  }
}
