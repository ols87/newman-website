import { createStore } from "@stencil/store";

const { state } = createStore({
  meta:{
    title:"Laurence Newman",
    description:"Freelance Writer, Editor, & Communications Consultant",
    keywords:"Writer | Communications Consultant | Editor"
  },
  content: {
    image: "/assets/images/laurence.png",
    title: "Freelance Writer, Editor, & Communications Consultant",
    body:
      "<p>I am a freelance copywriter, editor, and communications consultant. Now based in Vietnam, I relocated from London in 2016 after almost a decade in media relations and public affairs roles.</p>",
  },
  services: {
    title: "Services",
    list: [
      {
        name: "Copywriting",
        content:
          "I help clients to communicate in engaging, effective, and persuasive language that speaks to their target audience.",
        link: "/copywriting/",
      },
      {
        name: "Consulting",
        content:
          "I provide strategic communications advice and practical media training to help clients define and deliver messages with impact.",
        link: "/communications-consulting/",
      },
      {
        name: "Editing",
        content:
          "I help clients to produce pitch-perfect print and digital content in an original, professional, and consistent tone of voice.",
        link: "/content-editing/",
      },
    ],
  },
  clients: {
    title: "Clients",
    list: [
      "eurocham",
      "oxfam",
      "austrade",
      "lin",
      "wse",
      "ap",
      "cci",
      "lion",
      "starseed",
      "shs",
    ],
  },
});

export default state;