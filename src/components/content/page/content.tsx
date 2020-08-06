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
            <h3>{this.content[1].title}</h3>
            {this.content[2]?.content?.length > 0 &&
              this.content[2].content.map((item) => (
                <a href={`#${item.title}`}>{item.title}</a>
              ))}
            <img src={this.content[1]?.content[1]?.slug} />
          </div>

          <div class="content-right">
            {this.content[4]?.content?.length > 0 &&
              this.content[4]?.content?.map((item) => (
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
            {this.content[3].content && (
              <div>
                <span>&ldquo;</span>
                <h6>{this.content[3].content}</h6>
              </div>
            )}

            {this.content[2]?.content?.length > 0 &&
              this.content[2].content.map((content) => (
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
