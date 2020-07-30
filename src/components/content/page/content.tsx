import { Component, ComponentInterface, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "page-content",
  styleUrl: "content.css",
})
export class PageContent implements ComponentInterface {
  @Prop() content: any;

  render() {
    const { title, avatar, quote, quotes, content } = this.content;

    return (
      <Host>
        <div class="content container">
          <div class="content-left">
            <h3>{title}</h3>
            {content &&
              content.map((item) => (
                <a href={`#${item.title}`}>{item.title}</a>
              ))}
            <img src={avatar} />
          </div>

          <div class="content-right">
            {quotes &&
              quotes.map((item) => (
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
            {quote && (
              <div>
                <span>&ldquo;</span>
                <h6>{quote}</h6>
              </div>
            )}

            {content &&
              content.map((content) => (
                <section id={content.title}>
                  <div innerHTML={content.description}></div>
                  {content.images.map((image) => (
                    <img src={image} />
                  ))}
                </section>
              ))}
          </div>
        </div>
      </Host>
    );
  }
}
