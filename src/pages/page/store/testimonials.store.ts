import { createStore } from "@stencil/store";

const { state } = createStore({
  title: "Testimonials",
  meta: {
    title: "Testimonials",
    description: "Freelance Writer, Editor, & Communications Consultant",
    keywords: "Writer | Communications Consultant | Editor",
  },
  quotes: [
    {
      content:
        "Laurence is a true professional, possessing impressive real-world experience as well as the ability to engage and inspire learners with his sessions.<br/> <br/>Laurence brings the learning environment to life and has an effortless ability to get audiences excited and willing to step out of their comfort zones to learn.",
      author:
        "Joshua James, Head of Corporate Delivery, British University Vietnam",
    },
    {
      content:
        "Laurence has an intuitive grasp of the media. He is able to craft impactful messages and communicate complicated issues in clear, simple, and effective language. <br/> <br/> Laurence thinks like a journalist, is able to build trusted and meaningful relationships across the media, and writes stories that hit the headlines.",
      author:
        "Denis Brunetti, President of Ericsson Vietnam, Cambodia, and Laos",
    },
    {
      content:
        "Laurence's track record over more than a decade in communications and his love of language enables him to connect with people. He gets under the skin of an issue and uses the power of words to reach a target audience and influence them to take action.<br/><br/> He is also a consummate professional, providing a quick and responsive service while also presenting creative solutions to improve his clients' campaigns and communications.",
      author: "Phuong Nguyen, Head of Knowledge Management at Oxfam Vietnam",
    },
  ],
});

export default state;
