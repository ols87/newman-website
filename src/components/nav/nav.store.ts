import { createStore } from "@stencil/store";

const { state } = createStore({
  links: [
    { title: "Home", slug: "/" },
    { title: "About", slug: "/about" },
    { title: "Copywriting", slug: "/copywriting" },
    { title: "Communications Consulting", slug: "/communications-consulting" },
    { title: "Content Editing", slug: "/content-editing" },
    { title: "Testimonials", slug: "/testimonials" },
  ],
  hero:{
    title:"Laurence Newman",
    text:"Writer | Communications Consultant | Editor"
  }
});

export default state;
