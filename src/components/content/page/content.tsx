import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "page-content",
  styleUrl: "content.css",
})
export class PageContent implements ComponentInterface {
  @Prop() content: any;

  render() {
    return (
      <Host>
        <div class="content container">
          <div class="content-left">
            <h3>{this.content.title}</h3>
            {this.content?.content?.length > 0 &&
              this.content.content.map((item) => (
                <a href={`#${item.title}`}>{item.title}</a>
              ))}
            <img src={this.content?.avatar?.url} />
          </div>

          <div class="content-right">
            {this.content?.quotes?.length > 0 &&
              this.content?.quotes?.map((item) => (
                <div>
                  <span>&ldquo;</span>
                  <h6>
                    <div innerHTML={item.content}></div>
                  </h6>
                  <h5 class="author-quote">{item.author}</h5>
                  <br />
                  <hr />
                </div>
              ))}
            {this.content.quote && (
              <div>
                <span>&ldquo;</span>
                <h6>{this.content.quote}</h6>
              </div>
            )}

            {this.content?.content?.length > 0 &&
              this.content.content.map((content) => (
                <section id={content.title}>
                  <div innerHTML={content.description}></div>
                  {content.images.map((image) => (
                    <img src={image.slug} />
                  ))}
                </section>
              ))}
          </div>
        </div>
      </Host>
    );
  }
}
