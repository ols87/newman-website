import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "site-footer",
  styleUrl: "footer.css",
})
export class SiteFooter implements ComponentInterface {
  render() {
    return (
      <Host>
        <footer class="footer container">
          <div class="footer-logo">
            <img src="/assets/images/logo.svg" />
          </div>

          <div class="footer-content">
            <h4>Contact</h4>
            <p>Phone | 091 108 2321</p>
            <p>Email | laurencednewman@gmail.com</p>
          </div>
        </footer>
      </Host>
    );
  }
}
